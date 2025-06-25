const baseURL = "https://mithu-vulcan.github.io/tamil-quotes-api/";

async function getRandomQuote() {
  // Fetch the total count
  const indexRes = await fetch(`${baseURL}/index.json`);
  const { count } = await indexRes.json();

  // Pick a random number between 1 and count
  const randomId = Math.floor(Math.random() * count) + 1;

  // Fetch the quote file using the number
  const quoteRes = await fetch(`${baseURL}/quotes/${randomId}.json`);
  const quoteData = await quoteRes.json();

  document.getElementById("quote").textContent = quoteData.quote;
  document.getElementById("author").textContent = quoteData.author;
}

window.onload = function () {
  getRandomQuote();
};
