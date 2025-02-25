// Automatically fill the First Character
function updateFirstCharacter() {
  const word = document.getElementById("Sword").value;
  document.getElementById("firstC").value = word ? word[0] : "";
}

function writeCode() {
  const Sword = document.getElementById("Sword").value,
    proipa = document.getElementById("proipa").value,
    Saudio = document.getElementById("Saudio").value,
    pots = document.getElementById("pots").value,
    Smeaning = document.getElementById("Smeaning").value,
    images = document.getElementById("images").value,
    synonyms = document.getElementById("synonyms").value,
    antonyms = document.getElementById("antonyms").value,
    examples = document.getElementById("examples").value,
    english = document.getElementById("english").value,
    odia = document.getElementById("odia").value,
    hindi = document.getElementById("hindi").value,
    bangla = document.getElementById("bangla").value,
    assamese = document.getElementById("assamese").value,
    nepali = document.getElementById("nepali").value,
    firstC = document.getElementById("firstC").value;

  // New: Conditionally include audio section if Saudio is not blank
  let audioSection = "";
  if (Saudio.trim() !== "") {
    audioSection = "[[File:" + Saudio + "]]\n";
  }

  // Adding here the helper function:
  function bulletList(text) {
    if (text.indexOf(",") !== -1) {
      return text
        .split(",")
        .map((item) => "* " + item.trim())
        .join("\n");
    } else {
      return "* " + text;
    }
  }

  // Bullet Examples function:
  function bulletx(text) {
    if (text.indexOf("᱾") !== -1) {
      return text
        .split("᱾")
        .map((item) => "* " + item.trim() + " ᱾")
        .join("\n");
    } else {
      return "* " + text;
    }
  }

  // Updated Image Helper Function: Converts valid entries to a gallery view.
  // If no valid image is provided or if any comma-separated value is blank, that entry is skipped.
  function imageList(text) {
    if (!text.trim()) return "";
    const imagesArr = text
      .split(",")
      .map((item) => item.trim())
      .filter((item) => item !== "");
    if (imagesArr.length === 0) return "";
    return (
      "<gallery>\n" +
      imagesArr.map((item) => "File:" + item + "|frameless").join("\n") +
      "\n</gallery>"
    );
  }

  // language helper function that accepts a dynamic language code:
  function bulleten(text, langCode) {
    if (text.indexOf(",") !== -1) {
      return text
        .split(",")
        .map(
          (item) =>
            "# [[:" + langCode + ":" + item.trim() + "|" + item.trim() + "]]"
        )
        .join("\n");
    } else {
      return "# [[:" + langCode + ":" + text + "|" + text + "]]";
    }
  }

  // Mapping of language fields to language codes
  const langMapping = {
    english: "en",
    odia: "or",
    hindi: "hi",
    bangla: "bn",
    assamese: "as",
    nepali: "ne",
  };

  // Mapping of language fields to their header text
  const langHeaders = {
    english: "ᱤᱝᱞᱤᱥ",
    odia: "ᱳᱰᱤᱭᱟ",
    hindi: "ᱦᱤᱱᱫᱤ",
    bangla: "ᱵᱟᱝᱞᱟ",
    assamese: "ᱚᱥᱚᱢᱤᱭᱟ",
    nepali: "ᱱᱮᱯᱟᱞᱤ",
  };

  // Helper function to build each language bullet line.
  // If the language input is blank, it returns a default bullet line using the dynamic header variable.
  function buildLanguageLine(value, fieldName) {
    const header = langHeaders[fieldName] || "";
    if (value.trim() === "") {
      return "* [[" + header + "]]:\n# \n";
    } else {
      return (
        "* [[" +
        header +
        "]]: \n" +
        bulleten(value, langMapping[fieldName]) +
        "\n"
      );
    }
  }

  // Build language sections conditionally.
  // First group (before trans-mid)
  let languageOutput =
    "{{trans-top|<center><b>ᱮᱴᱟᱜ ᱯᱟᱹᱨᱥᱤ ᱨᱮᱭᱟᱜ ᱟᱹᱲᱟᱹᱠᱚ</b></center>}}\n";
  languageOutput += buildLanguageLine(english, "english");
  languageOutput += buildLanguageLine(odia, "odia");
  languageOutput += buildLanguageLine(hindi, "hindi");

  languageOutput += "{{trans-mid}}\n";
  // Second group (after trans-mid)
  languageOutput += buildLanguageLine(bangla, "bangla");
  languageOutput += buildLanguageLine(assamese, "assamese");
  languageOutput += buildLanguageLine(nepali, "nepali");
  languageOutput += "{{trans-bottom}}\n";

  // Output format
  const outputValue =
    "{{SUBPAGENAME}}<br>" +
    "<b> ᱩᱪᱨᱟᱹᱲ </b>\n{{ᱩᱪᱨᱟᱹᱲ|" +
    proipa +
    "}}\n" +
    "<b> ᱥᱟᱰᱮ </b>\n" +
    audioSection +
    "\n" +
    "== ᱥᱟᱱᱛᱟᱲᱤ ==\n" +
    "<big><b>" +
    pots +
    " ᱯᱟᱹᱨᱤᱥ</b></big>\n" +
    "=== ᱢᱮᱱᱮᱛ ===\n" +
    bulletList(Smeaning) +
    "\n" +
    "=== ᱫᱟᱹᱭᱠᱟᱹ ===\n" +
    bulletx(examples) +
    "\n" +
    "=== ᱪᱤᱛᱟᱹᱨ ===\n" +
    imageList(images) +
    "\n" +
    "=== ᱥᱚᱢᱟᱱ ᱟᱨ ᱩᱞᱴᱟᱹ ᱟᱹᱲᱟᱹ ===\n" +
    "{{trans-top|<center>ᱥᱚᱢᱟᱱ ᱟᱨ ᱩᱞᱴᱟᱹ ᱟᱹᱲᱟᱹᱠᱚ</center>}}\n" +
    "<b>ᱥᱚᱢᱟᱱ ᱟᱹᱲᱟᱹ</b>\n" +
    bulletList(synonyms) +
    "\n" +
    "{{trans-mid}}\n" +
    "<b>ᱩᱞᱴᱟᱹ ᱟᱹᱲᱟᱹ</b>\n" +
    bulletList(antonyms) +
    "\n" +
    "{{trans-bottom}}\n" +
    "== ᱛᱚᱨᱡᱚᱢᱟ ==\n" +
    languageOutput +
    "== ᱥᱟᱹᱠᱷᱭᱟᱹᱛ ==\n" +
    "* Campbell, A.; Macphail, R.M. (1984). Campbell's English-Santali Dictionary. Eastern Books. ISBN 978-0-8364-1137-9.\n" +
    "* Campbell, A. (1899). A Santali-English dictionary. Santal Mission Press.\n" +
    "* Tudu (Hansdah), Maina (2016), SANTALI DICTIONARY, Olchiki-Olchiki-English script. ISBN 978-93-5267-534-0 \n" +
    "* Bodding, P.O. (1929-36), A SANTAL DICTIONARY, Vol. I-V  \n" +
    "* Skrefsrud, Lars Olsen (1873) [https://archive.org/details/aau0434.0001.001.umich.edu A Grammar of the Santhal Language], Calcutta, West Bengal: Medical Hall Press \n" +
    "* Majhi, Lasa (1995). Majhi, Chaitanya Prasad (ed.). Santali Odia Abhidhan [Santali Odia Dictionary] (2nd ed.). Odisha: Special Development Council, Mayurbhanj, Planning & Convergence Department, Govt. of Odisha (published November, 2018). \n" +
    "* Majhi, K; Tudu, Krushna Chandra; Hembram, Birbal (2015). Verma, Keshari Lal (ed.). Fundamental Administrative Terminology. (Series under Administrative Terminology in Indian Languages) (1st ed.). India: Commission for Scientific and Technical Terminology, Ministry of Human Resource Development, (Department of Higher Education). \n" +
    "* Murmu, Kirtu; Tudu, Biriya Charan (2013). ᱥᱟᱱᱛᱟᱲᱤ ᱟᱸᱴ ᱟᱹᱲᱟᱹ ᱠᱚ ᱨᱮᱭᱟᱜ ᱢᱮᱱᱮᱛ [THE MEANING OF DIFFICULT WORD IN SANTALI] (1st ed.). Karu Murmu, H.A.L. Township, Sunabeda-2, Koraput. & Purna Chandra Kisku, At:-Anantasahi, P.O.:- Badgaon, Via:- Tato. \n" +
    "* पसाद, स्वर्णलता (1988). संताली हिन्दी सब्दकोष [Santali Hindi Dictionary]. बिहार जन जातीय कल्याण शोध संस्थान रांची. \n" +
    "* पसाद, स्वर्णलता (1988). हिन्दी संताली सब्दकोष [Hindi Santali Dictionary]. बिहार जन जातीय कल्याण शोध संस्थान रांची. \n" +
    "=== ᱵᱟᱹᱲᱛᱤ ᱡᱚᱱᱚᱲ ===\n" +
    "{{ᱣᱤᱠᱤᱯᱤᱰᱤᱭᱟ}}\n" +
    "[[Category:" +
    firstC +
    "]]\n" +
    "[[Category:ᱟᱹᱰᱤ ᱠᱷᱟᱴᱚ ᱚᱞ ᱥᱟᱦᱴᱟ]]\n" +
    "[[Category:ᱢᱮᱱᱮᱛ ᱵᱟᱝ ᱥᱟᱹᱛ ᱟᱠᱟᱱᱟ]]\n" +
    "[[Category:ᱥᱟᱰᱮ ᱵᱟᱝ ᱥᱟᱹᱛ ᱟᱠᱟᱱᱟ]]\n" +
    "[[Category:ᱛᱚᱨᱡᱚᱢᱟ ᱵᱟᱝ ᱥᱟᱹᱛ ᱟᱠᱟᱱᱟ]]\n" +
    "[[Category:ᱪᱤᱛᱟᱹᱨ ᱵᱟᱝ ᱥᱟᱹᱛ ᱟᱠᱟᱱᱟ]]\n" +
    "[[Category:ᱯᱷᱚᱨᱢᱟᱴ ᱵᱟᱝ ᱥᱟᱹᱛ ᱟᱠᱟᱱᱟ]]\n" +
    "[[Category:ᱜᱮᱯ ᱵᱟᱝ ᱥᱟᱹᱛ ᱟᱠᱟᱱᱟ]]\n" +
    "[[Category:ᱛᱷᱚᱠ ᱵᱟᱝ ᱥᱟᱹᱛ ᱟᱠᱟᱱᱟ]]\n" +
    "[[Category:ᱥᱚᱢᱟᱱ ᱟᱹᱲᱟᱹ ᱵᱟᱝ ᱥᱟᱹᱛ ᱟᱠᱟᱱᱟ]]\n" +
    "[[Category:ᱩᱞᱴᱟᱹ ᱟᱹᱲᱟᱹ ᱵᱟᱝ ᱥᱟᱹᱛ ᱟᱠᱟᱱᱟ]]\n" +
    "[[Category:ᱪᱚᱨᱚᱠ ᱥᱟᱦᱴᱟ🏆 ᱓]]\n" +
    "[[Category:SWT ᱛᱮ ᱥᱟᱦᱴᱟ ᱛᱮᱭᱟᱨ ᱦᱩᱭ ᱠᱟᱱᱟ]]\n" +
    "[[Category:ᱥᱟᱱᱛᱟᱲᱤ ᱟᱹᱲᱟᱹ]]\n";
  document.getElementById("outputForm").value = outputValue;
}

function copy() {
  const textarea = document.getElementById("outputForm");
  textarea.select();
  document.execCommand("copy");
}

// Function to create a toast message
function showToast(message) {
  const toastContainer = document.getElementById("toast-container");
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;

  // Append toast to the container
  toastContainer.appendChild(toast);

  // Remove toast after animation
  setTimeout(() => {
    toast.remove();
  }, 3500); // Duration matches fade-out timing
}

// Event listeners for button actions
document.getElementById("createButton").addEventListener("click", function () {
  showToast("Form created successfully!");
});

document.getElementById("copyButton").addEventListener("click", function () {
  showToast("Content copied to clipboard!");
});

document.getElementById("copyRedirect").addEventListener("click", function () {
  showToast(
    "Content copied to clipboard! & redirected to Santali Wiktionary..."
  );
});

document.getElementById("resetButton").addEventListener("click", function () {
  showToast("Form has been reset.");
});

// Redirect Url function
function redirectToWebsite() {
  // Redirect Url
  const baseUrl = "https://sat.wiktionary.org/w/index.php?title=";
  const Sword = document.getElementById("Sword").value;
  const editUrl = "&action=edit";
  const redirectUrl = baseUrl + encodeURIComponent(Sword) + editUrl;
  window.open(redirectUrl, "_blank");
}

// Event listener button added using Copy & Redirect functions
document.getElementById("copyRedirect").onclick = function () {
  copy();
  redirectToWebsite();
};
