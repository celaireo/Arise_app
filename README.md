# ARISE - Assistant d'Apprentissage

Une application mobile développée avec React Native et Expo pour améliorer vos techniques d'apprentissage et réussir vos objectifs académiques.

## 📱 Fonctionnalités

### 🎯 Sections principales

- **Apprentissage** : Techniques pour mieux comprendre, mémoriser et réviser
- **Restitution** : Méthodes pour se concentrer, s'adapter et gérer le stress
- **Stratégie** : Organisation, mentalité et principes d'apprentissage efficaces

### ✨ Fonctionnalités avancées

- **Mode sombre/clair** : Interface adaptable selon vos préférences
- **Favoris** : Sauvegardez vos techniques préférées
- **Notes personnelles** : Ajoutez vos propres notes à chaque section
- **Recherche** : Trouvez rapidement les informations dont vous avez besoin
- **Navigation intuitive** : Interface simple et ergonomique

## 🚀 Installation et démarrage

### Prérequis

- Node.js (version 18 ou supérieure)
- npm ou yarn
- Expo CLI
- Application Expo Go sur votre téléphone (optionnel)

### Installation

1. Clonez le projet :
```bash
git clone [url-du-projet]
cd arise-app
```

2. Installez les dépendances :
```bash
npm install
```

3. Démarrez le serveur de développement :
```bash
npm run dev
```

### Utilisation

- **Sur le web** : L'application s'ouvrira automatiquement dans votre navigateur
- **Sur mobile** : Scannez le QR code avec l'application Expo Go

## 🛠️ Technologies utilisées

- **React Native** : Framework de développement mobile
- **Expo SDK 53** : Plateforme de développement
- **Expo Router** : Navigation basée sur les fichiers
- **TypeScript** : Typage statique
- **Lucide React Native** : Icônes
- **AsyncStorage** : Stockage local des données

## 📁 Structure du projet

```
├── app/                    # Pages et navigation
│   ├── (tabs)/            # Navigation par onglets
│   │   ├── home.tsx       # Page d'accueil
│   │   ├── apprentissage.tsx
│   │   ├── restitution.tsx
│   │   └── strategie.tsx
│   └── _layout.tsx        # Layout principal
├── components/            # Composants réutilisables
├── context/              # Contextes React (thème, favoris, notes)
├── constants/            # Constantes et couleurs
└── hooks/               # Hooks personnalisés
```

## 🎨 Personnalisation

### Thèmes

L'application supporte automatiquement les modes sombre et clair. Les couleurs sont définies dans `constants/Colors.ts`.

### Contenu

Le contenu éducatif est défini dans chaque fichier de page (`apprentissage.tsx`, `restitution.tsx`, `strategie.tsx`). Vous pouvez facilement modifier ou ajouter du contenu.

## 📱 Fonctionnalités détaillées

### Système de favoris
- Marquez vos techniques préférées avec l'icône étoile
- Les favoris sont sauvegardés localement
- Accès rapide à vos contenus favoris

### Prise de notes
- Ajoutez des notes personnelles à chaque section
- Sauvegarde automatique
- Interface d'édition simple et intuitive

### Recherche
- Recherche en temps réel dans tout le contenu
- Recherche par titre et contenu
- Résultats filtrés instantanément

## 🔧 Scripts disponibles

- `npm run dev` : Démarre le serveur de développement
- `npm run build:web` : Compile l'application pour le web
- `npm run lint` : Vérifie la qualité du code

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

1. Fork le projet
2. Créer une branche pour votre fonctionnalité
3. Commiter vos changements
4. Pousser vers la branche
5. Ouvrir une Pull Request

## 📞 Support

Pour toute question ou problème, n'hésitez pas à ouvrir une issue sur le repository.

---

**ARISE** - Améliorez vos techniques d'apprentissage 🎓
