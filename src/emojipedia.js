// emojipedia.js
let emojipedia = [];  // Initialize an empty array

// Fetching emoji data from an API
const fetchEmojipedia = async () => {
  try {
    const response = await fetch('https://emoji-api.com/emojis?access_key=******');  // Replace with your API URL
    if (!response.ok) {
      throw new Error('Failed to fetch emoji data');
    }
    const data = await response.json();
    emojipedia = data;  // Assign the fetched data to the emojipedia array
    console.log(emojipedia);
    
  } catch (error) {
    console.error("Error fetching emojipedia:", error);
    emojipedia = [];  // Fallback to an empty array if fetching fails
  }
};


fetchEmojipedia();
console.log(emojipedia);
export default emojipedia;
