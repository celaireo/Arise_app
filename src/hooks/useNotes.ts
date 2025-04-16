import { useState, useCallback } from 'react';
import { Notes } from '../types';

export const useNotes = () => {
  const [notes, setNotes] = useState<Notes>(() => {
    const saved = localStorage.getItem('arise_notes');
    return saved ? JSON.parse(saved) : {};
  });

  const updateNote = useCallback((title: string, content: string) => {
    const updated = { ...notes, [title]: content };
    setNotes(updated);
    localStorage.setItem('arise_notes', JSON.stringify(updated));
  }, [notes]);

  const clearNote = useCallback((title: string) => {
    const updated = { ...notes, [title]: '' };
    setNotes(updated);
    localStorage.setItem('arise_notes', JSON.stringify(updated));
  }, [notes]);

  return { notes, updateNote, clearNote };
};