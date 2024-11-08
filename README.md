# Getting Started with Create React App

Ce projet a été initialisé avec [Create React App](https://github.com/facebook/create-react-app).

## Commandes principales

### Réinstaller les modules Node.js

Si vous travaillez sur plusieurs dossiers et que vous avez besoin d'installer les modules dans chaque projet, procédez comme suit :

1. **Naviguez dans le dossier `page_maximus`** et installez les modules :
    ```bash
    cd page_maximus
    npm install
    ```

2. **Retournez au dossier principal** :
    ```bash
    cd ..
    ```

3. **Changez de dossier** vers `page_merlin` :
    ```bash
    cd page_merlin
    npm install
    ```

4. **Changez de dossier** vers `page_supermid` :
    ```bash
    cd page_supermid
    npm install
    ```

## Ajouter Tailwind CSS

Pour installer et configurer Tailwind CSS dans votre projet :

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

Suivez les instructions de configuration sur la [documentation officielle de Tailwind CSS](https://tailwindcss.com/docs/installation).

### Démarrer le serveur de développement

Après avoir installé les dépendances dans le dossier correspondant, démarrez le serveur avec :

```bash
npm start
```

### Fichier `index.html`

Le fichier `index.html` contient le snippet pour intégrer le bot.

### Fichier `App.js`

Le fichier `App.js` correspond à l'interface front-end créée pour accueillir le bot.

## En savoir plus

- [Documentation Create React App](https://facebook.github.io/create-react-app/docs/getting-started)
- [Documentation React](https://reactjs.org/)
- [Documentation Tailwind CSS](https://tailwindcss.com/docs)
