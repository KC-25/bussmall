
'use strict'

console.log("Hello world");

const imageContainer = document.getElementsByTagName('ads');
const img1 = document.getElementById("i1");
const img2 = document.getElementById("i2");
const img3 = document.getElementById("i3");
const T1 = document.getElementById("t1");
const T2 = document.getElementById("t2");
const T3 = document.getElementById("t3");

function image (name, imgsrc){
    this.name = name;
    this.imgsrc = imgsrc;
    this.clicks = 0;
    this.views = 0;
};

image.nameofarray = [];

image.nameofarray.push ('bag', './images/bag.jpg');
image.nameofarray.push ('banana', './images/banana.jpg');
image.nameofarray.push ('bathroom', './images/bathroom.jpg');
image.nameofarray.push ('boots', './images/boots.jpg');
image.nameofarray.push ('bubblegum', './images/bubblegum.jpg');
image.nameofarray.push ('chair', './images/chair.jpg');
image.nameofarray.push ('cthulu', './images/cthulhu.jpg');
image.nameofarray.push ('dragon', './images/dragon.jpg');
image.nameofarray.push ('pen', './images/pen.jpg');
image.nameofarray.push ('pet-sweep', './images/pet-sweep.jpg');
image.nameofarray.push ('scissors', './images/scissors.jpg');
image.nameofarray.push ('sweep', './images/sweep.jpg');
image.nameofarray.push ('tauntaun', './images/tauntaun.jpg');
image.nameofarray.push ('water-can', './images/water-can.jpg');
image.nameofarray.push ('wine-glass', './images/wine-glass.jpg');

console.log(image.nameofarray);
