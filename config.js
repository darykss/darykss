// Configuration de cette version de l'app. C'est le seul fichier qui diffère
// entre la version personnelle et la version partagée avec les amis.
var APP = {
  variant: 'public',
  name: 'Darykss',
  key: 'darykss.v1',             // clé de stockage sur l'appareil
  repo: 'darykss/darykss',       // dépôt GitHub qui publie news.json chaque matin
  tabs: ['home', 'work', 'habits', 'seances', 'li', 'news', 'fin'],
  onboarding: true,              // écran de bienvenue au premier lancement
  sector: 'all',                 // secteur LinkedIn par défaut
  pitch: '',
  habits: [
    { id: 'sleep', icon: '😴', title: 'Sommeil', desc: '7h à 8h de sommeil' },
    { id: 'sport', icon: '💪', title: 'Activité physique', desc: 'Séance de sport ou 30 min de marche' },
    { id: 'read', icon: '📖', title: 'Lecture', desc: '10 pages lues' },
    { id: 'screen', icon: '📱', title: "Temps d'écran", desc: 'Moins de 3h dans la journée' },
    { id: 'water', icon: '💧', title: 'Hydratation', desc: '1,5 L d’eau bus' },
    { id: 'tidy', icon: '🧹', title: 'Rangement', desc: '5 minutes de rangement' },
  ],
};
