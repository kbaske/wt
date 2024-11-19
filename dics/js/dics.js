// Google Translate
const switchLangBtn = document.getElementById("switchLangBtn");
const sourceLang = document.getElementById("sourceLang");
const targetLang = document.getElementById("targetLang");

switchLangBtn.addEventListener("click", () => {
  if (sourceLang.value === "auto") {
    // If source is "Auto-Detect", set target to "Santali" or default, and replace source with target language
    sourceLang.value = targetLang.value;
    targetLang.value = "sat"; // Default target language (Santali)
  } else {
    // Normal switching of source and target languages
    const temp = sourceLang.value;
    sourceLang.value = targetLang.value;
    targetLang.value = temp;
  }
});

// Glosbe
const searchTextAreaG = document.getElementById("search-text");
const sourceLangSelectG = document.getElementById("source-lang");
const targetLangSelectG = document.getElementById("target-lang");
const errorMessageG = document.getElementById("error-message");
const switchLangButtonG = document.getElementById("switch-lang");

// Validate input script
searchTextAreaG.addEventListener("input", () => {
  const selectedOptionG =
    sourceLangSelectG.options[sourceLangSelectG.selectedIndex];
  const regex = new RegExp(selectedOptionG.getAttribute("data-script"));
  if (!regex.test(searchTextAreaG.value)) {
    errorMessageG.textContent = `Input must be in ${selectedOptionG.textContent} script.`;
  } else {
    errorMessageG.textContent = "";
  }
});

// Switch languages
switchLangButtonG.addEventListener("click", () => {
  const tempG = sourceLangSelectG.value;
  sourceLangSelectG.value = targetLangSelectG.value;
  targetLangSelectG.value = tempG;
});

// Perform search
document.getElementById("search-button").addEventListener("click", function () {
  const selectedOptionG =
    sourceLangSelectG.options[sourceLangSelectG.selectedIndex];
  const regex = new RegExp(selectedOptionG.getAttribute("data-script"));
  if (!regex.test(searchTextAreaG.value)) {
    alert(`Input must be in ${selectedOptionG.textContent} script.`);
    return;
  }

  const sourceLangG = sourceLangSelectG.value;
  const targetLangG = targetLangSelectG.value;
  const searchTextG = searchTextAreaG.value.trim();

  if (!searchTextG) {
    alert("Please enter text to search!");
    return;
  }

  const glosbeUrlG = `https://glosbe.com/${sourceLangG}/${targetLangG}/${encodeURIComponent(
    searchTextG
  )}`;
  window.open(glosbeUrlG, "_blank");
});

// Glosbe Translation
const searchTextAreaT = document.getElementById("search-textT");
const sourceLangSelectT = document.getElementById("source-langT");
const targetLangSelectT = document.getElementById("target-langT");
const errorMessageT = document.getElementById("error-messageT");
const switchLangButtonT = document.getElementById("switch-langT");

// Validate input script
searchTextAreaT.addEventListener("input", () => {
  const selectedOptionT =
    sourceLangSelectT.options[sourceLangSelectT.selectedIndex];
  const regexT = new RegExp(selectedOptionT.getAttribute("data-script"));
  if (!regexT.test(searchTextAreaT.value)) {
    errorMessageT.textContent = `Input must be in ${selectedOptionT.textContent} script.`;
  } else {
    errorMessageT.textContent = "";
  }
});

// Switch languages
switchLangButtonT.addEventListener("click", () => {
  const tempT = sourceLangSelectT.value;
  sourceLangSelectT.value = targetLangSelectT.value;
  targetLangSelectT.value = tempT;
});

// Perform search
document
  .getElementById("search-buttonT")
  .addEventListener("click", function () {
    const selectedOptionT =
      sourceLangSelectT.options[sourceLangSelectT.selectedIndex];
    const regexT = new RegExp(selectedOptionT.getAttribute("data-script"));
    if (!regexT.test(searchTextAreaT.value)) {
      alert(`Input must match the script for ${selectedOptionT.textContent}.`);
      return;
    }

    const sourceLangT = sourceLangSelectT.value;
    const targetLangT = targetLangSelectT.value;
    const searchTextT = searchTextAreaT.value.trim();

    if (!searchTextT) {
      alert("Please enter text to search!");
      return;
    }

    const glosbeUrlT = `https://translate.glosbe.com/${sourceLangT}-${targetLangT}/${encodeURIComponent(
      searchTextT
    )}`;
    window.open(glosbeUrlT, "_blank");
  });

// Apertium search
const searchTextAreaA = document.getElementById("search-textA");
const sourceLangSelectA = document.getElementById("source-langA");
const targetLangSelectA = document.getElementById("target-langA");
const errorMessageA = document.getElementById("error-messageA");
const switchLangButtonA = document.getElementById("switch-langA");

// Validate input script
searchTextAreaA.addEventListener("input", () => {
  const selectedOptionA =
    sourceLangSelectA.options[sourceLangSelectA.selectedIndex];
  const regexA = new RegExp(selectedOptionA.getAttribute("data-script"));
  if (!regexA.test(searchTextAreaA.value)) {
    errorMessageA.textContent = `Input must be in ${selectedOptionA.textContent} script.`;
  } else {
    errorMessageA.textContent = "";
  }
});

// Switch languages
switchLangButtonA.addEventListener("click", () => {
  const tempA = sourceLangSelectA.value;
  sourceLangSelectA.value = targetLangSelectA.value;
  targetLangSelectA.value = tempA;
});

// Perform search
document
  .getElementById("search-buttonA")
  .addEventListener("click", function () {
    const selectedOptionA =
      sourceLangSelectA.options[sourceLangSelectA.selectedIndex];
    const regexA = new RegExp(selectedOptionA.getAttribute("data-script"));
    if (!regexA.test(searchTextAreaA.value)) {
      alert(`Input must match the script for ${selectedOptionA.textContent}.`);
      return;
    }

    const sourceLangA = sourceLangSelectA.value;
    const targetLangA = targetLangSelectA.value;
    const searchTextA = searchTextAreaA.value.trim();

    if (!searchTextA) {
      alert("Please enter text to search!");
      return;
    }

    const glosbeUrlA = `https://beta.apertium.org/?dir=${sourceLangA}-${targetLangA}&q=${encodeURIComponent(
      searchTextA
    )}`;
    window.open(glosbeUrlA, "_blank");
  });

// Bing Translate
const switchLangBtnB = document.getElementById("switchLangBtnB");
const sourceLangB = document.getElementById("sourceLangB");
const targetLangB = document.getElementById("targetLangB");

switchLangBtnB.addEventListener("click", () => {
  if (sourceLangB.value === "auto") {
    // If source is "Auto-Detect", set target to "Santali" or default, and replace source with target language
    sourceLangB.value = targetLangB.value;
    targetLangB.value = "sat"; // Default target language (Santali)
  } else {
    // Normal switching of source and target languages
    const tempB = sourceLangB.value;
    sourceLangB.value = targetLangB.value;
    targetLangB.value = tempB;
  }
});

// Yendex Translate
const switchLangBtnY = document.getElementById("switchLangBtnY");
const sourceLangY = document.getElementById("sourceLangY");
const targetLangY = document.getElementById("targetLangY");

switchLangBtnY.addEventListener("click", () => {
  if (sourceLangY.value === "auto") {
    // If source is "Auto-Detect", set target to "Santali" or default, and replace source with target language
    sourceLangY.value = targetLangY.value;
    targetLangY.value = "sat"; // Default target language (Santali)
  } else {
    // Normal switching of source and target languages
    const tempY = sourceLangY.value;
    sourceLangY.value = targetLangY.value;
    targetLangY.value = tempY;
  }
});

// English Wiktionary
// Perform word search
function basicSearch() {
  const searchInput = document.forms.basicForm.searchterms.value.trim();
  if (searchInput) {
    window.open(
      `https://en.wiktionary.org/wiki/${encodeURIComponent(searchInput)}`,
      "_blank"
    );
  } else {
    alert("ᱫᱟᱭᱟ ᱠᱟᱛᱮ ᱢᱤᱫᱴᱟᱹᱝ ᱟᱹᱲᱟᱹ ᱚᱞ ᱢᱮ ᱥᱮᱸᱫᱽᱨᱟ ᱞᱟᱹᱜᱤᱫ ᱾");
  }
  return false;
}

// Talking Dictionary
// Function to handle search and redirect to the Talking Dictionary
function searchWordTD() {
  const wordTD = document
    .getElementById("searchInputTD")
    .value.trim()
    .toLowerCase();

  if (!wordTD) {
    alert("Please enter a word to search.");
    return;
  }

  // Constructing the URL for Talking Dictionary
  let urlTD = `https://talkingdictionary.swarthmore.edu/santali/?q=${wordTD}`;

  // Redirecting to the constructed URL
  window.open(urlTD, "_blank");
}
