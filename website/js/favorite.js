const breadButton = document.querySelector('#breadButton');
const pastryButton = document.querySelector('#pastryButton');
const cakeButton = document.querySelector('#cakeButton');
const loafButton = document.querySelector('#loafButton');
let favorites = [];


favorites.push({ name: "Cake" });
saveFavorite();

cakeButton.addEventListener('click', function (event) {
    favorites.push({ name: "Cake" });
    console.log('Form submitted');
    saveFavorite();
});
pastryButton.addEventListener('click', function (event) {
    favorites.push({ name: "Pastry" });
    saveFavorite();
});
loafButton.addEventListener('click', function (event) {
    favorites.push({ name: "Loaf" });
    saveFavorite();
});


breadButton.addEventListener('click', function (event) {
    favorites.push({ name: "Bread" });
    saveFavorite();
});


// code inspired by https://www.youtube.com/watch?v=k8yJCeuP6I8&
const favoriteElement = document.getElementById("favoriteList");



function saveFavorite() {
    localStorage.setItem("favorite", JSON.stringify(favorites));
}

