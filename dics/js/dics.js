// MyMemory: Translate and Clear
document.getElementById("mymemory-translate").addEventListener("click", () => {
  const text = document.getElementById("mymemory-input").value.trim();
  const apiUrl = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
    text
  )}&langpair=en|sat`;

  if (!text) {
    alert("Please enter text to translate!");
    return;
  }

  document.getElementById("mymemory-output").placeholder = "Translating...";

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("mymemory-output").value =
        data.responseData.translatedText || "No translation found.";
      document.getElementById("mymemory-output").placeholder = "Translation";
    })
    .catch((error) => {
      console.error("Error:", error);
      document.getElementById("mymemory-output").placeholder =
        "Error translating text.";
    });
});

document.getElementById("mymemory-clear").addEventListener("click", () => {
  document.getElementById("mymemory-input").value = "";
  document.getElementById("mymemory-output").value = "";
});

// Glosbe: Redirect to Translation URL
document.getElementById("glosbe-form").addEventListener("submit", (e) => {
  const sourceLang = document.getElementById("glosbe-source-lang").value.trim();
  const targetLang = document.getElementById("glosbe-target-lang").value.trim();
  const text = document.getElementById("glosbe-text").value.trim();

  if (!sourceLang || !targetLang || !text) {
    alert("Please fill in all fields for Glosbe translation.");
    e.preventDefault();
    return;
  }

  const url = `https://glosbe.com/${sourceLang}/${targetLang}/${encodeURIComponent(
    text
  )}`;
  document.getElementById("glosbe-form").action = url;
});

// OmegaWiki: Redirect to Search URL
document.getElementById("omegawiki-form").addEventListener("submit", (e) => {
  const text = document.getElementById("omegawiki-input").value.trim();

  if (!text) {
    alert("Please enter text for OmegaWiki search.");
    e.preventDefault();
    return;
  }

  const url = `https://www.omegawiki.org/Expression:${encodeURIComponent(
    text
  )}`;
  document.getElementById("omegawiki-form").action = url;
});

// Google Translate: Redirect to Search URL
document.getElementById("google-form").addEventListener("submit", (e) => {
  const text = document.getElementById("google-input").value.trim();

  if (!text) {
    alert("Please enter text for Google Translate.");
    e.preventDefault();
    return;
  }

  const url = `https://translate.google.com/?sl=auto&tl=sat&text=${encodeURIComponent(
    text
  )}&op=translate`;
  document.getElementById("google-form").action = url;
});
