// Automatically fill the First Character
function updateFirstCharacter() {
  const word = document.getElementById("Sword").value;
  document.getElementById("firstC").value = word ? word[0] : "";
}

function writeCode() {
  const Sword = document.getElementById("Sword").value,
    Smeaning = document.getElementById("Smeaning").value,
    Saudio = document.getElementById("Saudio").value,
    images = document.getElementById("images").value,
    proipa = document.getElementById("proipa").value,
    sn = document.getElementById("sn").value,
    cn = document.getElementById("cn").value,
    english = document.getElementById("english").value,
    odia = document.getElementById("odia").value,
    hindi = document.getElementById("hindi").value,
    bangla = document.getElementById("bangla").value,
    assamese = document.getElementById("assamese").value,
    firstC = document.getElementById("firstC").value,
    categorySwitch = document.getElementById("categorySwitch").checked;

  // Determine the category based on the toggle
  const category = categorySwitch ? "[[Category:ᱡᱟᱱᱣᱟᱨ]]" : "[[Category:ᱫᱟᱨᱮ]]";

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

  // Output format
  const outputValue =
    "{{SUBPAGENAME}}\n" +
    "== ᱥᱟᱱᱛᱟᱲᱤ ==\n" +
    "=== ᱩᱪᱨᱟᱹᱲ ===\n{{ᱩᱪᱨᱟᱹᱲ|" +
    proipa +
    "}}\n" +
    "=== ᱥᱟᱰᱮ ===\n" +
    audioSection +
    "\n" +
    bulletList(images) +
    "\n" +
    "=== ᱢᱮᱱᱮᱛ ===\n" +
    bulletList(Smeaning) +
    "\n" +
    "== ᱥᱟᱮᱬᱥᱤᱭᱟᱹ ᱧᱩᱛᱩᱢ ==\n* " +
    "[[species:" +
    sn +
    "|''" +
    sn +
    "'']]\n" +
    "== ᱫᱤᱥᱣᱟᱹ ᱧᱩᱛᱩᱢ ==\n" +
    bulletList(cn) +
    "\n" +
    "<big><b>ᱧᱩᱱᱩᱢ ᱯᱟᱹᱨᱤᱥ</b></big>\n" +
    "== English ==\n" +
    bulletList(english) +
    "\n" +
    "== ଓଡ଼ିଆ ==\n" +
    bulletList(odia) +
    "\n" +
    "== हिंदी ==\n" +
    bulletList(hindi) +
    "\n" +
    "== বাংলা ==\n" +
    bulletList(bangla) +
    "\n" +
    "== অসমীয়া ==\n" +
    bulletList(assamese) +
    "\n" +
    "== ᱥᱟᱹᱠᱷᱭᱟᱹᱛ ==\n" +
    "* Campbell, A.; Macphail, R.M. (1984). Campbell's English-Santali Dictionary. Eastern Books. ISBN 978-0-8364-1137-9.\n" +
    "* Campbell, A. (1899). A Santali-English dictionary. Santal Mission Press.\n" +
    "* Mrs. Maina Tudu (Hansdah). (2016) SANTALI DICTIONARY, Olchiki-Olchiki-English script. ISBN 978-93-5267-534-0 \n" +
    "* P.O. BODDING. SANTALI DICTIONARY (1929) \n" +
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
    "[[Category:ᱥᱟᱱᱛᱟᱲᱤ ᱟᱹᱲᱟᱹ]]\n" +
    category;
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

// Update the label text based on the toggle state
document
  .getElementById("categorySwitch")
  .addEventListener("change", function () {
    const label = document.getElementById("categoryLabel");
    label.textContent = this.checked ? "Animal Kingdom" : "Plant Kingdom";
  });
