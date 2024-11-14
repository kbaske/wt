// Automatically translate text while typing with a delay
let timer;
function autoTranslate() {
  const text = document.getElementById("text-to-translate").value;
  clearTimeout(timer);
  if (text.trim()) {
    timer = setTimeout(translateText, 2000);
  }
}

function translateText() {
  const text = document.getElementById("text-to-translate").value;

  if (!text.trim()) {
    displayError("Please enter text to translate.");
    return;
  }
  clearError();

  const url = "https://api.mymemory.translated.net/get";
  const params = new URLSearchParams({
    q: text,
    langpair: "en|sat",
    de: "prasantahembram720@gmail.com",
  });

  fetch(`${url}?${params}`)
    .then((response) => response.json())
    .then((data) => {
      const translatedText = data.responseData.translatedText;
      document.getElementById("translated-text").textContent = translatedText;
      document.getElementById("text").value = text; // Copy English text to correction field
      document.getElementById("translation").value = translatedText; // Copy translated text to translation field
    })
    .catch(() => {
      displayError("Error fetching translation. Please try again.");
    });
}

function copyTranslation() {
  const translatedText = document.getElementById("translated-text").textContent;
  navigator.clipboard.writeText(translatedText).then(
    () => {
      alert("Text copied to clipboard");
    },
    () => {
      alert("Failed to copy text");
    }
  );
}

function sendTranslation() {
  const text = document.getElementById("text").value;
  const translation = document.getElementById("translation").value;

  const url = "https://api.mymemory.translated.net/set";
  const params = new URLSearchParams({
    seg: text,
    de: "prasantahembram720@gmail.com",
    tra: translation,
    langpair: "en|sat",
  });

  fetch(`${url}?${params}`, { method: "GET" })
    .then((response) => response.json())
    .then((data) => {
      console.log("Translation sent:", data);
    })
    .catch(() => {
      alert("Failed to send translation.");
    });
}

// Error handling
function displayError(message) {
  document.getElementById("error-message").textContent = message;
}

function clearError() {
  document.getElementById("error-message").textContent = "";
}
