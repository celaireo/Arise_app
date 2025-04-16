import React, { useState, useCallback } from 'react';
import { MenuItem } from './types';
import { homePage, favoritesPage, menuStructure } from './constants/menu';
import { useNotes } from './hooks/useNotes';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

export default function AriseApp() {
  const allItems = [homePage, favoritesPage, ...menuStructure.flatMap(group => group.items)];
  const [activeSection, setActiveSection] = useState<MenuItem>(homePage);
  const [darkMode, setDarkMode] = useState(false);
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState<string[]>([]);
  const [expandedSections, setExpandedSections] = useState(menuStructure.map(() => true));
  const { notes, updateNote, clearNote } = useNotes();

  const toggleDarkMode = useCallback(() => setDarkMode(prev => !prev), []);

  const toggleFavorite = useCallback((title: string) => {
    setFavorites(prev => prev.includes(title)
      ? prev.filter(fav => fav !== title)
      : [...prev, title]);
  }, []);

  const toggleExpand = useCallback((index: number) => {
    setExpandedSections(prev => {
      const copy = [...prev];
      copy[index] = !copy[index];
      return copy;
    });
  }, []);

  const filteredStructure = menuStructure.map((group, groupIndex) => ({
    ...group,
    expanded: expandedSections[groupIndex],
    items: group.items.filter(i => i.title.toLowerCase().includes(search.toLowerCase()))
  })).filter(group => group.items.length > 0);

  const favoritesItems = allItems.filter(i => favorites.includes(i.title));
  const currentContent = activeSection.isFavorites
    ? favoritesItems.length > 0
      ? favoritesItems.map(f => `⭐ ${f.title}\n${f.content}\n`).join('\n')
      : 'No favorites yet. Click ⭐ next to a section to add it here.'
    : activeSection.content;

  return (
    <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'} flex h-screen transition duration-500`}>
      <Sidebar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        search={search}
        setSearch={setSearch}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
        expandedSections={expandedSections}
        toggleExpand={toggleExpand}
        filteredStructure={filteredStructure}
        homePage={homePage}
        favoritesPage={favoritesPage}
      />
      <MainContent
        activeSection={activeSection}
        currentContent={currentContent}
        darkMode={darkMode}
        notes={notes}
        updateNote={updateNote}
        clearNote={clearNote}
        homePage={homePage}
      />
    </div>
  );
}