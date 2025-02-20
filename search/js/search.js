async function handleSubmit(event) {
  event.preventDefault();
  const inputValue = document.querySelector(".js-search-input").value.trim();

  const searchResults = document.querySelector(".js-search-results");
  const spinner = document.querySelector(".js-spinner");
  searchResults.innerHTML = "";

  if (!inputValue) {
    searchResults.innerHTML = `<p class="no-results-message">Please enter a search keyword.</p>`;
    searchResults.scrollIntoView({ behavior: "smooth" });
    return;
  }

  spinner.classList.remove("hidden");

  try {
    const results = await searchWikipedia(inputValue);
    if (results.query.searchinfo.totalhits === 0) {
      searchResults.innerHTML = `<p class="no-results-message">No results found for "${inputValue}". Try another keyword.</p>`;
      searchResults.scrollIntoView({ behavior: "smooth" });
      return;
    }
    displayResults(results);
    searchResults.scrollIntoView({ behavior: "smooth" });
  } catch (err) {
    console.error(err);
    searchResults.innerHTML = `<p class="no-results-message">An error occurred while fetching results. Please try again later.</p>`;
  } finally {
    spinner.classList.add("hidden");
  }
}

async function searchWikipedia(searchQuery) {
  const endpoint = `https://sat.wiktionary.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=10&srsearch=${searchQuery}`;
  const response = await fetch(endpoint);
  if (!response.ok) throw Error(response.statusText);
  return await response.json();
}

function displayResults(results) {
  const searchResults = document.querySelector(".js-search-results");
  results.query.search.forEach((result) => {
    const url = `https://sat.wiktionary.org/?curid=${result.pageid}`;
    searchResults.insertAdjacentHTML(
      "beforeend",
      `<div class="result-item">
          <h3 class="result-title"><a href="${url}" target="_blank">${result.title}</a></h3>
          <p class="result-snippet">${result.snippet}</p>
          <a href="${url}" class="result-link" target="_blank">${url}</a>
        </div>`
    );
  });
}

document
  .querySelector(".js-search-form")
  .addEventListener("submit", handleSubmit);
