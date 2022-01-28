const myTitle = document.getElementById("myTitle");
const myImage = document.getElementById("myImage");
const myInput = document.getElementById("myInput");


let lokaties = [
    {
        "titel": "plaats 0",
        "image": "img/0.jpg"
    },
    {
        "titel": "plaats 1",
        "image": "img/route 2.jpg"
    },
    {
        "titel": "plaats 2",
        "image": "img/route 3.jpg"
    },
    {
        "titel": "plaats 3",
        "image": "img/route 4.jpg"
    },
    {
        "titel": "plaats 4",
        "image": "img/route 5.jpg"
    },
    {
        "titel": "plaats 5",
        "image": "img/route 6.jpg"
    },
    {
        "titel": "plaats 6",
        "image": "img/route 7.jpg"
    },
]
//myTitle.innerHTML = "dit is door het script toegevoegd"; 
//myImage.src = "img/1.jpg"; 
function show(index) {
    myTitle.innerHTML = lokaties[index].titel;
    myImage.src = lokaties[index].image;
}
function getInput() {
    show(myInput.value);
    //console.log(myInput.value) 
    myInput.value = "";
    myInput.focus();
} 