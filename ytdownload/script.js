var convertBtn = document.querySelector(".convert-button");
var URLinput = document.querySelector(".URL-input");

convertBtn.addEventListener("click", function btn() {
  console.log(`URL: ${URLinput.value}`);
  sendURL(URLinput.value);
});

// function sendURL(URL) {
//   window.location.href = `http://localhost:4000/download?URL=${URL}`;
// }

function sendURL(URL) {
  fetch(`http://localhost:4000/download?URL=${URL}`, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((json) => console.log(json));
}
