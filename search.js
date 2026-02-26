function searchSite() {
let input = document.getElementById("siteSearch").value.toLowerCase();
let cards = document.querySelectorAll(".card");

cards.forEach(function(card) {
let text = card.innerText.toLowerCase();
card.style.display = text.includes(input) ? "" : "none";
});
}