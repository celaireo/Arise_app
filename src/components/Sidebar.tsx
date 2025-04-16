import React, { memo } from 'react';
import { Sun, Moon, ChevronDown, ChevronRight, Star as StarIcon } from 'lucide-react';
import { MenuItem, MenuSection } from '../types';

interface SidebarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  search: string;
  setSearch: (value: string) => void;
  activeSection: MenuItem;
  setActiveSection: (section: MenuItem) => void;
  favorites: string[];
  toggleFavorite: (title: string) => void;
  expandedSections: boolean[];
  toggleExpand: (index: number) => void;
  filteredStructure: (MenuSection & { expanded: boolean })[];
  homePage: MenuItem;
  favoritesPage: MenuItem;
}

const Sidebar = memo(({
  darkMode,
  toggleDarkMode,
  search,
  setSearch,
  activeSection,
  setActiveSection,
  favorites,
  toggleFavorite,
  expandedSections,
  toggleExpand,
  filteredStructure,
  homePage,
  favoritesPage
}: SidebarProps) => {
  return (
    <aside className={`${darkMode ? 'bg-blue-950' : 'bg-blue-100'} w-80 p-4 space-y-4 overflow-y-auto shadow-lg`}>
      <div className="flex justify-between items-center mb-2">
        <input
          type="text"
          placeholder="🔍 Rechercher..."
          className="w-full p-2 rounded-lg text-sm text-black"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Rechercher dans les sections"
        />
        <button
          onClick={toggleDarkMode}
          className="ml-2 p-2 rounded hover:bg-orange-300"
          aria-label={darkMode ? "Activer le mode clair" : "Activer le mode sombre"}
        >
          {darkMode ? <Sun /> : <Moon />}
        </button>
      </div>

      {[homePage, favoritesPage].map((page, index) => (
        <button
          key={index}
          onClick={() => setActiveSection(page)}
          className={`flex items-center gap-2 w-full text-left px-3 py-2 rounded-lg transition duration-200 ${
            activeSection.title === page.title ? 'bg-orange-400 text-white font-bold' : 'bg-orange-100 hover:bg-orange-300'
          }`}
          aria-current={activeSection.title === page.title ? 'page' : undefined}
        >
          {page.icon} {page.title}
        </button>
      ))}

      {filteredStructure.map((group, groupIndex) => (
        <div key={groupIndex}>
          <button
            onClick={() => toggleExpand(groupIndex)}
            className="flex items-center justify-between w-full text-left px-2 py-2 rounded bg-orange-200 hover:bg-orange-300 text-orange-800 font-semibold"
            aria-expanded={group.expanded}
          >
            {group.section}
            {group.expanded ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
          </button>
          {group.expanded && group.items.map((item, index) => (
            <div key={index} className="flex justify-between items-center ml-3 mt-1">
              <button
                onClick={() => setActiveSection(item)}
                className={`flex items-center gap-2 w-full text-left p-2 rounded-lg transition duration-200 hover:bg-orange-300 ${
                  activeSection.title === item.title ? 'bg-orange-400 text-white font-bold' : 'bg-orange-100'
                }`}
                aria-current={activeSection.title === item.title ? 'page' : undefined}
              >
                {item.icon} {item.title}
              </button>
              <button 
                onClick={() => toggleFavorite(item.title)}
                className="ml-1"
                aria-label={favorites.includes(item.title) ? "Retirer des favoris" : "Ajouter aux favoris"}
              >
                <StarIcon
                  size={16}
                  fill={favorites.includes(item.title) ? 'gold' : 'none'}
                  stroke="orange"
                />
              </button>
            </div>
          ))}
        </div>
      ))}
    </aside>
  );
});

Sidebar.displayName = 'Sidebar';

export default Sidebar;