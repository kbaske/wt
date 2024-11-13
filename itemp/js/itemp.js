const prompts = [
  "Add Words | ᱟᱹᱲᱟᱹ ᱥᱮᱞᱮᱫ ᱢᱮ",
  "Add Meaning | ᱢᱮᱱᱮᱛ ᱥᱮᱞᱮᱫ ᱢᱮ",
  "Audio filename | ᱥᱟᱰᱮ ᱨᱮᱫ ᱧᱩᱛᱩᱢ e.g., ᱥ - Santali script.ogg",
  "English Translation | ᱤᱝᱜᱽᱨᱟᱡᱤ ᱛᱚᱨᱡᱚᱢᱟ",
  "Odia Translation | ᱳᱰᱤᱭᱟ ᱛᱚᱨᱡᱚᱢᱟ",
  "Hindi Translation | ᱦᱤᱱᱫᱤ ᱛᱚᱨᱡᱚᱢᱟ",
  "Bangla Translation | ᱵᱟᱝᱞᱟ ᱛᱚᱨᱡᱚᱢᱟ",
  "Assamese Translation | ᱟᱥᱟᱢᱤ ᱛᱚᱨᱡᱚᱢᱟ",
];

const answers = [];
let currentPrompt = 0;

const nextPrompt = () => {
  const input = document.querySelector("input");

  if (input) {
    if (input.value.trim() === "" && answers.length < 2) {
      alert("This field is mandatory. Please fill it out before proceeding.");
      return;
    }
    answers.push(input.value);
  }

  if (currentPrompt < prompts.length) {
    $("#copyTarget").html(`${prompts[currentPrompt]}<br><input type="text">`);
    currentPrompt++;
  } else {
    showFinal();
  }
};

const showFinal = () => {
  const resultHTML = `
    == ᱥᱟᱱᱛᱟᱲᱤ ==<br>=== ᱢᱮᱱᱮᱛ ===<br>${answers[1]}<br>=== ᱥᱟᱰᱮ ===<br>[[File:${answers[2]}]]<br>== English ==<br>* ${answers[3]}<br>== ଓଡ଼ିଆ ==<br>* ${answers[4]}<br>== हिंदी ==<br>* ${answers[5]}<br>== বাংলা ==<br>* ${answers[6]}<br>== অসমীয়া ==<br>* ${answers[7]}<br>== ᱥᱟᱹᱠᱷᱭᱟᱹᱛ ==<br>* Campbell, A.; Macphail, R.M. (1984). Campbell's English-Santali Dictionary. Eastern Books. ISBN 978-0-8364-1137-9.<br>
    * Campbell, A. (1899). A Santali-English dictionary. Santal Mission Press.<br>
    * Mrs. Maina Tudu (Hansdah). (2016) SANTALI DICTIONARY, Olchiki-Olchiki-English script. ISBN 978-93-5267-534-0 <br>
    * P.O. BODDING. SANTALI DICTIONARY (1929)<br> 
    * Majhi, Lasa (1995). Majhi, Chaitanya Prasad (ed.). Santali Odia Abhidhan [Santali Odia Dictionary] (2nd ed.). Odisha: Special Development Council, Mayurbhanj, Planning & Convergence Department, Govt. of Odisha (published November, 2018).<br>
    * Majhi, K; Tudu, Krushna Chandra; Hembram, Birbal (2015). Verma, Keshari Lal (ed.). Fundamental Administrative Terminology. (Series under Administrative Terminology in Indian Languages) (1st ed.). India: Commission for Scientific and Technical Terminology, Ministry of Human Resource Development, (Department of Higher Education).<br>
    * Murmu, Kirtu; Tudu, Biriya Charan (2013). ᱥᱟᱱᱛᱟᱲᱤ ᱟᱸᱴ ᱟᱹᱲᱟᱹ ᱠᱚ ᱨᱮᱭᱟᱜ ᱢᱮᱱᱮᱛ [THE MEANING OF DIFFICULT WORD IN SANTALI] (1st ed.). Karu Murmu, H.A.L. Township, Sunabeda-2, Koraput. & Purna Chandra Kisku, At:-Anantasahi, P.O.:- Badgaon, Via:- Tato.<br>
    * पसाद, स्वर्णलता (1988). संताली हिन्दी सब्दकोष [Santali Hindi Dictionary]. बिहार जन जातीय कल्याण शोध संस्थान रांची. <br>
    * पसाद, स्वर्णलता (1988). हिन्दी संताली सब्दकोष [Hindi Santali Dictionary]. बिहार जन जातीय कल्याण शोध संस्थान रांची. <br>
    === ᱵᱟᱹᱲᱛᱤ ᱡᱚᱱᱚᱲ ===<br>
    {{Wt/sat/ᱣᱤᱠᱤᱯᱤᱰᱤᱭᱟ}}<br>
    [[Category:Wt/sat/${answers[0][0]}]]<br>
    [[Category:Wt/sat]]<br>
    [[Category:Wt/sat/ᱟᱹᱰᱤ ᱠᱷᱟᱴᱚ ᱚᱞ ᱥᱟᱦᱴᱟ]]<br>
    [[Category:Wt/sat/ᱢᱮᱱᱮᱛ ᱵᱟᱝ ᱥᱟᱹᱛ ᱟᱠᱟᱱᱟ]]<br>
    [[Category:Wt/sat/ᱥᱟᱰᱮ ᱵᱟᱝ ᱥᱟᱹᱛ ᱟᱠᱟᱱᱟ]]<br>
    [[Category:Wt/sat/ᱛᱚᱨᱡᱚᱢᱟ ᱵᱟᱝ ᱥᱟᱹᱛ ᱟᱠᱟᱱᱟ]]<br>
    [[Category:Wt/sat/ᱪᱤᱛᱟᱹᱨ ᱵᱟᱝ ᱥᱟᱹᱛ ᱟᱠᱟᱱᱟ]]<br>
    [[Category:Wt/sat/ᱯᱷᱚᱨᱢᱟᱴ ᱵᱟᱝ ᱥᱟᱹᱛ ᱟᱠᱟᱱᱟ]]<br>
    [[Category:Wt/sat/ᱜᱮᱯ ᱵᱟᱝ ᱥᱟᱹᱛ ᱟᱠᱟᱱᱟ]]<br>
    [[Category:Wt/sat/ᱛᱷᱚᱠ ᱵᱟᱝ ᱥᱟᱹᱛ ᱟᱠᱟᱱᱟ]]<br>
    [[Category:Wt/sat/ᱥᱚᱢᱟᱱ ᱟᱹᱲᱟᱹ ᱵᱟᱝ ᱥᱟᱹᱛ ᱟᱠᱟᱱᱟ]]<br>
    [[Category:ᱩᱞᱴᱟᱹ ᱟᱹᱲᱟᱹ ᱵᱟᱝ ᱥᱟᱹᱛ ᱟᱠᱟᱱᱟ]]<br>
    [[Category:Wt/sat/ᱪᱚᱨᱚᱠ ᱥᱟᱦᱴᱟ🏆 ᱓]]<br>
    [[Category:Wt/sat/SWT ᱛᱮ ᱥᱟᱦᱴᱟ ᱛᱮᱭᱟᱨ ᱦᱩᱭ ᱠᱟᱱᱟ]]<br>
  `;
  $("#copyTarget").html(resultHTML);
  $("#nextB").hide();
  $("#copyButton").show();
  $("#copyGoButton").show();
};

const copyToClipboard = () => {
  const content = document.getElementById("copyTarget").innerText;
  const textArea = document.createElement("textarea");
  textArea.value = content;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
};

const copyAndGo = () => {
  copyToClipboard();
  const redirectUrl =
    "https://incubator.wikimedia.org/w/index.php?title=Wt/sat/" +
    encodeURIComponent(answers[0]) +
    "&action=edit"; // Replace with desired URL
  window.open(redirectUrl, "_blank");
};

$("#nextB").click(nextPrompt);
$("#copyGoButton").click(copyAndGo);

$("#copyButton").click(() => {
  navigator.clipboard.writeText($("#copyTarget").text()).then(() => {
    alert("Copied to clipboard!");
  });
});

nextPrompt();
