import { Home, Star, Eye, Brain, Repeat, PenTool, ShieldCheck, Target, BookOpen } from 'lucide-react';
import { MenuItem, MenuSection } from '../types';

export const homePage: MenuItem = {
  title: 'Bienvenue dans l\'App ARISE 🎓',
  icon: <Home size={24} />,
  content: `Bienvenue ! Cette application est conçue pour vous aider à améliorer vos méthodes d'apprentissage, à mieux vous organiser et à réussir vos examens avec sérénité.

📘 Explorez les sections :
- Apprentissage : Pour bien comprendre, mémoriser et réviser.
- Restitution : Pour mieux restituer vos connaissances en situation d'examen.
- Stratégie : Pour développer une organisation solide et une mentalité gagnante.

Utilisez le mode sombre 🌙, les favoris ⭐ et la recherche 🔍 pour personnaliser votre expérience.`
};

export const favoritesPage: MenuItem = {
  title: 'Mes Favoris ⭐',
  icon: <Star size={24} />,
  isFavorites: true,
  content: ''
};

export const menuStructure: MenuSection[] = [
  {
    section: 'Apprentissage',
    items: [
      { title: 'Comprendre', icon: <Eye size={18} />, content: 'Comprendre : Lire activement, reformuler avec ses propres mots, faire des schémas pour visualiser l\'information.' },
      { title: 'Mémoriser', icon: <Brain size={18} />, content: 'Mémoriser : Utiliser des moyens mnémotechniques, la répétition espacée, et la pratique active (flashcards, quiz).' },
      { title: 'Réviser', icon: <Repeat size={18} />, content: 'Réviser : Planifier des sessions régulières, intercaler les matières, faire des synthèses ou fiches de révision.' }
    ]
  },
  {
    section: 'Restitution',
    items: [
      { title: 'Se concentrer', icon: <Target size={18} />, content: 'Se concentrer : Créer un environnement calme, fixer un objectif clair pour chaque session, utiliser la méthode Pomodoro.' },
      { title: 'Adapter', icon: <PenTool size={18} />, content: 'Adapter : Modifier sa stratégie selon la matière, le type de devoir ou le format de l\'examen (QCM, dissertation, oral...).' },
      { title: 'Gérer son stress', icon: <ShieldCheck size={18} />, content: 'Gérer son stress : Respirations profondes, pensée positive, bon sommeil, gestion du temps pour éviter l\'angoisse de dernière minute.' }
    ]
  },
  {
    section: 'Stratégie',
    items: [
      { title: 'Organisation', icon: <BookOpen size={18} />, content: 'Organisation : Créer un emploi du temps, établir des priorités, éviter la procrastination avec des objectifs clairs.' },
      { title: 'Mentalité', icon: <Brain size={18} />, content: 'Mentalité : Adopter une mentalité de croissance, voir l\'erreur comme une opportunité, cultiver la persévérance et l\'autonomie.' },
      { title: 'Lois et principes', icon: <Target size={18} />, content: 'Lois et principes : Loi de Pareto (20/80), effet cumulé, répétition pour ancrer les connaissances, principe de cohérence.' }
    ]
  }
];