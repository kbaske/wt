// Perform word search
function basicSearch() {
  const searchInput = document.forms.basicForm.searchterms.value.trim();
  if (searchInput) {
    window.open(
      `https://incubator.wikimedia.org/wiki/Wt/sat/${encodeURIComponent(
        searchInput
      )}`,
      "_blank"
    );
  } else {
    alert("ᱫᱟᱭᱟ ᱠᱟᱛᱮ ᱢᱤᱫᱴᱟᱹᱝ ᱟᱹᱲᱟᱹ ᱚᱞ ᱢᱮ ᱥᱮᱸᱫᱽᱨᱟ ᱞᱟᱹᱜᱤᱫ ᱾");
  }
  return false;
}
