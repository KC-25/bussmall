
'use strict'

console.log("Hello world");

const imageContainer = document.getElementsByTagName('ads');
const i1 = document.getElementById("i1");
const i2 = document.getElementById("i2");
const i3 = document.getElementById("i3");
const T1 = document.getElementById("t1");
const T2 = document.getElementById("t2");
const T3 = document.getElementById("t3");
let count = 0;

function Image(name, image){
    this.name = name;
    this.image = image;
    this.clicks = 0;
    this.views = 0;
};

Image.nameofarray = [];

Image.nameofarray.push (new Image ('bag', './images/bag.jpg'));
Image.nameofarray.push (new Image ('banana', './images/banana.jpg'));
Image.nameofarray.push (new Image('bathroom', './images/bathroom.jpg'));
Image.nameofarray.push (new Image('boots', './images/boots.jpg'));
Image.nameofarray.push (new Image('bubblegum', './images/bubblegum.jpg'));
Image.nameofarray.push (new Image('chair', './images/chair.jpg'));
Image.nameofarray.push (new Image('cthulu', './images/cthulhu.jpg'));
Image.nameofarray.push (new Image('dragon', './images/dragon.jpg'));
Image.nameofarray.push (new Image('pen', './images/pen.jpg'));
Image.nameofarray.push (new Image('pet-sweep', './images/pet-sweep.jpg'));
Image.nameofarray.push (new Image('scissors', './images/scissors.jpg'));
Image.nameofarray.push (new Image('sweep', './images/sweep.png'));
Image.nameofarray.push (new Image('tauntaun', './images/tauntaun.jpg'));
Image.nameofarray.push (new Image('water-can', './images/water-can.jpg'));
Image.nameofarray.push (new Image('wine-glass', './images/wine-glass.jpg'));
Image.nameofarray.push (new Image('breakfast', './images/breakfast.jpg'));
Image.nameofarray.push (new Image('dog-duck', './images/dog-duck.jpg'));
Image.nameofarray.push (new Image('shark', './images/shark.jpg'));

// console.log(Image.nameofarray);

Image.prototype.renderImages = function(name, image){
    image.src = this.image;
    name.textContent = this.name;
    this.views ++;
};

function randomizeArray(){
let myArray = Image.nameofarray;
let randomArray = myArray.sort(function(){return (Math.random()-0.5)});
console.log(randomArray);
};

function getThreeImages(){
    randomizeArray();
  let img1 = Image.nameofarray[0];
  let img2 = Image.nameofarray[1];
  let img3 = Image.nameofarray[2];
    img1.renderImages(T1, i1);
    img2.renderImages(T2, i2);
    img3.renderImages(T3, i3);
};

getThreeImages();
Image.prototype.renderImages = function(name, image){
    image.src = this.image;
    name.textContent = this.name;
    this.views ++;
};

function randomizeArray(){
let myArray = Image.nameofarray;
let randomArray = myArray.sort(function(){return (Math.random()-0.5)});
console.log(randomArray);
};

function getThreeImages(){
    randomizeArray();
  let img1 = Image.nameofarray[0];
  let img2 = Image.nameofarray[1];
  let img3 = Image.nameofarray[2];
    img1.renderImages(T1, i1);
    img2.renderImages(T2, i2);
    img3.renderImages(T3, i3);
};


function handleClick(e){
    var imageClicked = e.target.id;
    if(imageClicked === 'i1' || imageClicked === 'i2' || imageClicked === 'i3'){
        imageContainer.views++;
        count++;
    }
    if(imageClicked === 'i1'){
        i1.clicks++;
    }
    if(imageClicked === 'i2'){
        i2.clicks++;
    }
    if(imageClicked === 'i3'){
        i3.clicks++;
    }
    getThreeImages();

}
imageContainer.addEventListener ('click', handleClick);



