import React, { memo } from 'react';
import { Edit3 } from 'lucide-react';
import { MenuItem } from '../types';

interface MainContentProps {
  activeSection: MenuItem;
  currentContent: string;
  darkMode: boolean;
  notes: { [key: string]: string };
  updateNote: (title: string, content: string) => void;
  clearNote: (title: string) => void;
  homePage: MenuItem;
}

const MainContent = memo(({
  activeSection,
  currentContent,
  darkMode,
  notes,
  updateNote,
  clearNote,
  homePage
}: MainContentProps) => {
  return (
    <main className="flex-1 p-8 overflow-y-auto">
      <h1 className="text-3xl font-extrabold mb-4 text-orange-600 flex items-center gap-2">
        {activeSection.icon} {activeSection.title}
      </h1>
      <pre className={`text-lg leading-relaxed whitespace-pre-wrap font-mono ${
        darkMode ? 'bg-gray-800 text-white' : 'bg-white'
      } p-4 rounded-xl shadow-inner`}>
        {currentContent}
      </pre>
      {!activeSection.isFavorites && activeSection.title !== homePage.title && (
        <div className="mt-6">
          <label className="flex items-center gap-2 text-lg font-semibold mb-2 text-orange-700">
            <Edit3 size={20} /> Mes notes :
          </label>
          <textarea
            className={`w-full h-40 p-3 rounded-lg shadow-inner text-base ${
              darkMode ? 'bg-gray-800 text-white' : 'bg-orange-50 text-black'
            }`}
            value={notes[activeSection.title] || ''}
            onChange={(e) => updateNote(activeSection.title, e.target.value)}
            placeholder="Écris ici tes idées, rappels ou réflexions personnelles..."
          />
          <div className="flex gap-2 mt-2">
            <button
              onClick={() => updateNote(activeSection.title, notes[activeSection.title] || '')}
              className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
            >
              Sauvegarder
            </button>
            <button
              onClick={() => clearNote(activeSection.title)}
              className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
            >
              Effacer
            </button>
          </div>
        </div>
      )}
    </main>
  );
});

MainContent.displayName = 'MainContent';

export default MainContent;