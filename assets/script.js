//Script to handle image change for index.html

const kitchenImage = 'url("../images/background-image-3.jpg")';
const bathroomImage = 'url("../images/background-image-4.jpg")';
const root = document.querySelector(':root');
const kitchenBtn = document.getElementById('kitchen-btn');
const bathroomBtn = document.getElementById('bathroom-btn');

kitchenBtn.addEventListener('mouseover', function() {
    root.style.setProperty('--bg-image', kitchenImage);
    console.log("Kitchen")
});

bathroomBtn.addEventListener('mouseover', function() {
    root.style.setProperty('--bg-image', bathroomImage);
    console.log("Bathroom");
})