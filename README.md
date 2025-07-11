# 🎓 ARISE – Assistant d’Apprentissage (Web)

**ARISE** est une application web développée avec **React.js**, **Vite** et **TypeScript**, conçue pour améliorer vos techniques d’apprentissage, structurer votre progression académique et favoriser la réussite personnelle.

---

## 📚 Objectif

Aider les étudiants à :
- Comprendre efficacement
- Mémoriser durablement
- Réviser intelligemment
- Se concentrer et gérer le stress
- Organiser leur parcours d’apprentissage

---

## 🚀 Fonctionnalités

### 🧠 Contenus pédagogiques

- **Apprentissage** : Techniques de mémorisation, de compréhension, etc.
- **Restitution** : Gestion du stress, concentration, adaptation
- **Stratégie** : Organisation, discipline, planification

### 💡 Outils intégrés

- 🌙 Thème sombre / clair
- ⭐ Système de favoris
- 📝 Prise de notes personnelles par technique
- 🔍 Recherche rapide dans tout le contenu
- 🧭 Navigation fluide par onglets

---

## 🛠️ Technologies utilisées

| Outil / Lib         | Rôle                                 |
|---------------------|--------------------------------------|
| React 18            | Framework principal (UI)             |
| TypeScript          | Typage statique                      |
| Vite                | Bundler de développement rapide      |
| Tailwind CSS        | Styling moderne et réactif           |
| Lucide React        | Icônes élégantes et vectorielles     |
| ESLint + TS         | Analyse et standardisation du code   |

---

## 📦 Structure du projet
├── public/ # Fichiers statiques
├── src/
│ ├── assets/ # Images, icônes
│ ├── components/ # Composants réutilisables (UI, layout…)
│ ├── pages/ # Pages : Apprentissage, Restitution, Stratégie
│ ├── context/ # Contexte React (thème, favoris, notes)
│ ├── constants/ # Données statiques (couleurs, sections)
│ ├── hooks/ # Hooks personnalisés
│ ├── App.tsx # Application principale
│ └── main.tsx # Point d’entrée
├── tailwind.config.ts # Configuration Tailwind
├── vite.config.ts # Configuration Vite
└── tsconfig.json # Configuration TypeScript

---

## ⚙️ Installation et lancement

### 🔧 Prérequis

- Node.js ≥ 18
- npm ≥ 9

### 🧪 Installation

```bash
git clone https://github.com/celaireo/arise-app.git
cd arise-app
npm install
npm run dev
L'application sera disponible à l'adresse : http://localhost:5173


🌟 Fonctionnalités techniques
🎨 Thème automatique
Basé sur les préférences système (clair/sombre), avec possibilité de personnalisation.

📌 Favoris
Chaque technique peut être marquée comme favorite

Sauvegarde en local (localStorage)

🗒️ Notes personnalisées
Ajout de notes libres à chaque technique ou concept

Interface simple et fluide

🔍 Recherche intelligente
Recherche instantanée dans toutes les sections

Résultats affichés dynamiquement

📄 Licence
Ce projet est sous licence MIT. Consultez le fichier LICENSE pour plus d’informations.
