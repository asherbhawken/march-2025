"use client";

import React, { useState, useEffect } from "react";
import { Loader2, Bookmark, BookmarkCheck, Moon, Sun } from "lucide-react";

const preCodedFacts: string[] = [
  "The Earth revolves around the Sun.",
  "Honey never spoils.",
  "Bananas are berries.",
  "Octopuses have three hearts.",
  "Wrestling is one of the oldest sports in the world.",
  "A group of flamingos is called a 'flamboyance'.",
  "Water is composed of two hydrogen atoms and one oxygen atom.",
  "Humans share about 50% of their DNA with bananas.",
];

export default function FunFactsGenerator(): JSX.Element {
  const [fact, setFact] = useState("Click the button for a fun fact!");
  const [loading, setLoading] = useState(false);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const generateFact = async () => {
    setLoading(true);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * preCodedFacts.length);

      setFact(preCodedFacts[randomIndex]);
      setLoading(false);
    }, 300);
  };

  const toggleFavorite = () => {
    if (favorites.includes(fact)) {
      setFavorites(favorites.filter((f) => f !== fact));
    } else {
      setFavorites([...favorites, fact]);
    }
  };

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  useEffect(() => {
    generateFact();
  }, []);

  return (
    <div
      className={`min-h-screen p-6 flex flex-col items-center justify-center transition-colors ${isDarkMode ? "bg-black text-white" : "bg-white text-black"}`}
    >
      <div className="absolute top-4 right-4">
        <button className="p-2" onClick={toggleDarkMode}>
          {isDarkMode ? <Sun /> : <Moon />}
        </button>
      </div>

      <h1 className="text-4xl font-bold mb-4">Fandom Fact Generator</h1>

      <div className="max-w-xl w-full text-center border rounded-xl p-6 shadow-md">
        {loading ? (
          <div className="flex justify-center items-center">
            <Loader2 className="animate-spin mr-2" />
            Patience, young padawan...
          </div>
        ) : (
          <p className="text-lg">{fact}</p>
        )}
      </div>

      <div className="flex gap-4 mt-6">
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={generateFact}
        >
          New Fact
        </button>

        <button
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
          onClick={toggleFavorite}
        >
          {favorites.includes(fact) ? <BookmarkCheck /> : <Bookmark />} Favorite
        </button>
      </div>

      {favorites.length > 0 && (
        <div className="mt-8 w-full max-w-xl">
          <h2 className="text-2xl font-semibold mb-2">Your Favorite Facts</h2>
          <ul className="list-disc list-inside">
            {favorites.map((fav, idx) => (
              <li key={idx}>{fav}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
