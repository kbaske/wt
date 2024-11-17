function transferText() {
  var textarea1 = document.getElementById("textarea1");
  var textarea2 = document.getElementById("textarea2");
  var textarea3 = document.getElementById("ttsInput");

  var text = textarea1.value;

  text = text.replace(/ᱚ/g, "oo");
  text = text.replace(/ᱛ/g, "t");
  text = text.replace(/ᱜ/g, "g");
  text = text.replace(/ᱝ/g, "ng");
  text = text.replace(/ᱞ/g, "l");
  text = text.replace(/ᱟ/g, "a");
  text = text.replace(/ᱠ/g, "k");
  text = text.replace(/ᱡ/g, "j");
  text = text.replace(/ᱢ/g, "m");
  text = text.replace(/ᱣ/g, "w");
  text = text.replace(/ᱤ/g, "i");
  text = text.replace(/ᱥ/g, "s");
  text = text.replace(/ᱦ/g, "h");
  text = text.replace(/ᱧ/g, "n");
  text = text.replace(/ᱨ/g, "r");
  text = text.replace(/ᱩ/g, "u");
  text = text.replace(/ᱪ/g, "c");
  text = text.replace(/ᱫ/g, "d");
  text = text.replace(/ᱬ/g, "n");
  text = text.replace(/ᱭ/g, "y");
  text = text.replace(/ᱮ/g, "e");
  text = text.replace(/ᱯ/g, "p");
  text = text.replace(/ᱰ/g, "d");
  text = text.replace(/ᱱ/g, "n");
  text = text.replace(/ᱲ/g, "d");
  text = text.replace(/ᱳ/g, "o");
  text = text.replace(/ᱴ/g, "t");
  text = text.replace(/ᱵ/g, "b");
  text = text.replace(/ᱶ/g, "w");
  text = text.replace(/ᱷ/g, "h");
  text = text.replace(/ᱸ/g, "");
  text = text.replace(/ᱹ/g, "");
  text = text.replace(/ᱻ/g, "");
  text = text.replace(/ᱼ/g, "");
  text = text.replace(/ᱽ/g, "");
  text = text.replace(/᱑/g, " mid ");
  text = text.replace(/᱒/g, " bar ");
  text = text.replace(/᱓/g, " pe");
  text = text.replace(/᱔/g, " pun ");
  text = text.replace(/᱕/g, " mone ");
  text = text.replace(/᱖/g, " turuy ");
  text = text.replace(/᱗/g, " eyey ");
  text = text.replace(/᱘/g, " ira ");
  text = text.replace(/᱙/g, " are ");
  text = text.replace(/᱐/g, " sun ");
  text = text.replace(/᱾/g, ".");
  text = text.replace(/᱿/g, ".");

  textarea2.value = text;
  textarea3.value = text;
}
