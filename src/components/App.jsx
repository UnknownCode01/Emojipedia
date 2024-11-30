import React, { useState, useEffect } from "react";
import Entry from "./Entry";

function createEntry(emojiTerm) {
  return (
    <Entry
      key={emojiTerm.codePoint}
      emoji={emojiTerm.character}
      name={emojiTerm.unicodeName}
      description={emojiTerm.subGroup}
    />
  );
}

function App() {
  const [emojipedia, setEmojipedia] = useState([]); 
  const [isLoading, setIsLoading] = useState(true); 
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchEmojis() {
      try {
        const response = await fetch(
          'https://emoji-api.com/emojis?access_key=**********'
        );
        //https://emoji-api.com/ -> Api used
        if (!response.ok) {
          throw new Error('Failed to fetch emojis');
        }
        const data = await response.json();
        setEmojipedia(data); 
        setIsLoading(false); 
      } catch (error) {
        console.error('Error: Rate limit exceeded', error);
        setError('Rate limit exceeded, '+error.message); 
        setIsLoading(false);
      }
    }

    fetchEmojis(); 
  }, []); 

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;
