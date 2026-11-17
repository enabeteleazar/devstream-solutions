// Tout le texte du site est ici : modifiez ce fichier pour mettre à jour le contenu.

export const company = {
  name: 'DevStream Solutions',
  tagline: 'Studio de développement web',
  email: 'nabet.eleazar@gmail.com',
  url: 'https://portfolio-nabet-eleazar.vercel.app',
  founder: 'Eléazar Nabet',
  area: 'France · à distance',
};

export const navItems = [
  { href: '/#services', label: 'Savoir-faire' },
  { href: '/#projets', label: 'Projets' },
  { href: '/#methode', label: 'Méthode' },
  { href: '/#faq', label: 'Questions' },
];

export type Service = {
  id: string;
  kicker: string;
  title: string;
  text: string;
  deliverables: string[];
};

export const services: Service[] = [
  {
    id: 'sites',
    kicker: 'Être trouvé',
    title: 'Sites web',
    text: 'Une présence en ligne claire et élégante, qui inspire confiance dès la première visite et que vous mettez à jour vous-même.',
    deliverables: ['Site vitrine ou landing page', 'Référencement naturel (SEO)', 'Contenus modifiables sans développeur', 'Formulaire de contact et suivi des visites'],
  },
  {
    id: 'saas',
    kicker: 'Lancer un produit',
    title: 'Plateformes SaaS',
    text: 'Nous transformons votre idée en service par abonnement, prêt à accueillir vos premiers clients puis à grandir avec eux.',
    deliverables: ['Comptes utilisateurs et espace client', 'Paiement et abonnements', 'Tableau de bord d’administration', 'Hébergement et sauvegardes'],
  },
  {
    id: 'apps',
    kicker: 'Gagner du temps',
    title: 'Applications web',
    text: 'Des outils sur mesure pour vos équipes, qui remplacent les tableurs et se connectent à ceux que vous utilisez déjà.',
    deliverables: ['Outils internes et back-offices', 'Réservation, agenda, gestion de clients', 'Connexion à vos logiciels existants', 'Accès sécurisé par rôle'],
  },
];

export type Project = {
  name: string;
  client: string;
  kind: string;
  summary: string;
  highlights: string[];
  url?: string;
};

export const projects: Project[] = [
  {
    name: 'Orane Coaching',
    client: 'Coaching thérapeutique',
    kind: 'Application web',
    summary:
      'Site public et espace d’administration pour une coach : prise de rendez-vous en ligne, créneaux synchronisés avec Google Agenda et e-mails de confirmation.',
    highlights: ['Réservation en ligne', 'Google Agenda', 'Base PostgreSQL'],
    url: 'https://github.com/enabeteleazar/orane_coatch_therapeutique',
  },
  {
    name: 'Pâtisserie Orane',
    client: 'Pâtisserie',
    kind: 'Site web',
    summary: 'Site vitrine d’une pâtisserie artisanale, pensé pour mettre en valeur les créations de la marque.',
    highlights: ['Site vitrine', 'React', 'Mise en ligne Vercel'],
    url: 'https://patisserie-orane.vercel.app',
  },
  {
    name: 'neronHUB',
    client: 'Projet interne',
    kind: 'Tableau de bord',
    summary:
      'Tableau de bord de supervision avec serveur d’API, base de données et assistant IA intégré, déployable sur n’importe quel serveur.',
    highlights: ['Full stack', 'IA intégrée', 'Docker'],
    url: 'https://github.com/enabeteleazar/neronHUB',
  },
  {
    name: 'Lowly.eu',
    client: 'Site d’actualités',
    kind: 'Refonte',
    summary:
      'Modernisation d’un ancien site PHP vers un site statique rapide, sans base de données à maintenir, avec redirections des anciennes adresses.',
    highlights: ['Refonte', 'Sans base de données', 'Anciennes URL conservées'],
    url: 'https://lowly-eu.vercel.app',
  },
];

export const steps = [
  { title: 'Échange', text: 'Un premier appel pour comprendre votre activité, vos objectifs et vos contraintes. Gratuit et sans engagement.' },
  { title: 'Proposition', text: 'Un devis détaillé, un périmètre clair et un calendrier. Vous savez exactement ce qui sera livré, et quand.' },
  { title: 'Conception', text: 'Maquettes de vos pages, puis développement par étapes avec une démonstration régulière de l’avancement.' },
  { title: 'Mise en ligne', text: 'Tests, mise en production, prise en main de votre outil, puis suivi et évolutions si vous le souhaitez.' },
];

export const commitments = [
  { title: 'Un interlocuteur unique', text: 'Vous parlez directement à la personne qui conçoit et développe votre projet.' },
  { title: 'Le code vous appartient', text: 'Sources, accès et comptes d’hébergement sont à votre nom. Vous restez libre.' },
  { title: 'Rapide et bien référencé', text: 'Chaque site est optimisé pour le mobile, la vitesse de chargement et Google.' },
  { title: 'Un suivi après la mise en ligne', text: 'Maintenance, sauvegardes et évolutions : votre outil continue de vivre.' },
];

export const faq = [
  {
    q: 'Combien coûte un projet ?',
    a: 'Chaque projet fait l’objet d’un devis détaillé après notre premier échange. Le prix dépend du nombre de pages ou de fonctionnalités, des contenus à produire et des outils à connecter.',
  },
  {
    q: 'Quels sont les délais ?',
    a: 'Comptez en général quelques semaines pour un site vitrine et quelques mois pour une plateforme SaaS ou une application métier. Le calendrier précis figure dans la proposition.',
  },
  {
    q: 'Pourrai-je modifier mon site moi-même ?',
    a: 'Oui. Les textes, images et actualités peuvent être modifiés depuis une interface simple, sans connaissances techniques. Une prise en main est prévue à la livraison.',
  },
  {
    q: 'Vous occupez-vous de l’hébergement et du nom de domaine ?',
    a: 'Oui, nous pouvons tout mettre en place pour vous : nom de domaine, hébergement, adresse e-mail et certificat de sécurité. Les comptes restent à votre nom.',
  },
  {
    q: 'Que se passe-t-il après la mise en ligne ?',
    a: 'Nous proposons un suivi optionnel : mises à jour de sécurité, sauvegardes, petites modifications et nouvelles fonctionnalités selon vos besoins.',
  },
];

export const projectTypes = ['Site web', 'Plateforme SaaS', 'Application web', 'Refonte d’un site existant', 'Autre'];
