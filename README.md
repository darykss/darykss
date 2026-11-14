# Darykss

Tableau de bord personnel pour iPhone : programme du jour, échéances, to-do, travail (série 🔥 et Pomodoro), habitudes, séances de sport, réseau LinkedIn, actualités et finances.

C'est une web app installable : elle s'ajoute à l'écran d'accueil depuis Safari et s'ouvre en plein écran comme une app normale. Tout est gratuit, sans compte ni serveur : **tes données restent sur ton téléphone**.

## Installer sur iPhone

1. Ouvre l'adresse de l'app dans **Safari**.
2. Bouton **Partager** › **Sur l'écran d'accueil** › **Ajouter**.
3. Lance l'app depuis son icône : au premier lancement, tu choisis ton prénom et les modules que tu veux.

## Ce que fait l'app

- **Écran de lancement** : la citation du jour à chaque ouverture, puis tes échéances épinglées 📌, une par une. Un toucher passe à la suivante.
- **Navigation** : glisse le doigt à gauche ou à droite pour changer d'onglet, ou utilise la barre du bas (elle défile).
- **Modules** : dans ⚙︎ Réglages, chaque onglet et chaque bloc de l'accueil s'active ou se masque avec un interrupteur. Rien n'est effacé quand on masque.
- **Habitudes** : liste entièrement modifiable (ajouter, modifier, retirer), historique par semaine et courbe de progression.
- **Travail** : série de jours travaillés d'affilée et minuteur Pomodoro 25 min / 5 min.
- **Séances** : création de programmes et suivi de séances de musculation.
- **Réseau** : choisis ton secteur ; chaque semaine, un métier à contacter sur LinkedIn avec un message prêt à copier.
- **Actus** : les titres du jour du Monde et de franceinfo, mis à jour chaque matin.
- **Finances** : dépenses, revenus et abonnements, par semaine et par mois.
- **Récap** : chaque dimanche, le bilan de la semaine.

## Relier son Google Agenda (facultatif)

Le guide pas à pas est dans l'app : ⚙︎ **Réglages › Comment relier mon Google Agenda ?** Il faut un ordinateur et environ 3 minutes. Sans agenda, tout le reste fonctionne.

## Sauvegarde

⚙︎ **Réglages › Exporter** crée un fichier de sauvegarde, **Importer** le restaure. Supprimer l'app de l'écran d'accueil efface ses données.

## Crédits

- L'onglet **Séances** reprend l'app [Suivi muscu](https://github.com/raph4L-hypen/suivi-muscu) de raph4L-hypen, avec son accord. Les données y sont stockées sur le téléphone au lieu d'un Google Sheet.
- Les actualités proviennent des flux RSS publics du Monde et de franceinfo ; chaque titre renvoie vers l'article d'origine.

## Pour la personne qui héberge l'app

- `config.js` contient le nom de l'app, les onglets disponibles et les habitudes proposées au départ.
- `fetch-news.py` fabrique `news.json`. Il est lancé chaque matin par la tâche planifiée `.github/workflows/news.yml`.
- `targets.js` contient les métiers proposés par secteur, `quotes.js` les citations, `quote-bg.jpg` l'image de fond de la citation.
