export const config = { runtime: 'edge' };

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const limits = { name: 100, email: 200, company: 150, projectType: 60, message: 5000 };

type Payload = Partial<Record<keyof typeof limits | 'website', unknown>>;

function clean(value: unknown, max: number) {
  return typeof value === 'string' ? value.trim().slice(0, max) : '';
}

export default async function handler(request: Request) {
  if (request.method !== 'POST') {
    return Response.json({ error: 'Méthode non autorisée' }, { status: 405 });
  }

  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return Response.json({ error: 'Requête invalide' }, { status: 400 });
  }

  // Champ piège : rempli uniquement par les robots.
  if (body.website) return Response.json({ ok: true });

  const name = clean(body.name, limits.name).replace(/[\r\n]+/g, ' ');
  const email = clean(body.email, limits.email);
  const company = clean(body.company, limits.company);
  const projectType = clean(body.projectType, limits.projectType);
  const message = clean(body.message, limits.message);

  if (!name || !emailPattern.test(email) || message.length < 10) {
    return Response.json({ error: 'Merci de vérifier votre nom, votre e-mail et votre message' }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL;
  const from = process.env.CONTACT_FROM ?? 'DevStream Solutions <onboarding@resend.dev>';
  if (!apiKey || !to) {
    return Response.json({ error: 'Le formulaire est momentanément indisponible' }, { status: 503 });
  }

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `Nouveau projet (${projectType || 'non précisé'}) : ${name}`,
      text: [`Nom : ${name}`, `E-mail : ${email}`, `Entreprise : ${company || '-'}`, `Type de projet : ${projectType || '-'}`, '', message].join('\n'),
    }),
  });

  if (!response.ok) {
    console.error('Resend a refusé l’envoi', response.status, await response.text());
    return Response.json({ error: 'L’envoi a échoué, merci de réessayer dans quelques minutes' }, { status: 502 });
  }

  return Response.json({ ok: true });
}
