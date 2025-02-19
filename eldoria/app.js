async function fetchScrolls() {
  const apiUrl =
    "https://raw.githubusercontent.com/sombaner/copilot-hackathon-challenges/main/Data/Scrolls.txt";
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.text(); // Use text() instead of json()
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Rethrow the error to handle it in the caller
  }
}

function decipherScroll(data) {
  const matches = data.match(/\{\*(.*?)\*\}/g);
  return matches ? matches.map((match) => match.slice(2, -2).trim()) : [];
}

async function retrieveScrollsOfEldoria() {
  try {
    const data = await fetchScrolls();
    return decipherScroll(data);
  } catch (error) {
    console.error("Error retrieving scrolls of Eldoria:", error);
    return []; // Return an empty array in case of error
  }
}

retrieveScrollsOfEldoria().then((decipheredScroll) => {
  console.log(decipheredScroll);
});
