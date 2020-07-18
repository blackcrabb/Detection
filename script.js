let mobilenet;
let classifier;
let video;
let label = 'Loading model';
let maskonButton,maskoffButton;
let saveButton; 
let trainButton;

//weather
var xmlhttp = new XMLHttpRequest();
let url = "https://api.openweathermap.org/data/2.5/weather?q=New%20Delhi&units=metric&appid=e46f94d3b8e95b838477bf9cba05fa36";

xmlhttp.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200){
        var data = JSON.parse(this.responseText)
        document.getElementById('temp').innerHTML = data['main']['temp']
        document.getElementById('feels').innerHTML = data['main']['feels_like']
    }
}

xmlhttp.open("GET", url, true);
xmlhttp.send();

//model
function modelReady() {
  console.log('Model is ready!!!');
  classifier.load('model.json', customModelReady);
}

function customModelReady() {
  console.log('Custom Model is ready!!!');
  label = 'model ready';
  classifier.classify(gotResults);
}

function videoReady() {
  console.log('Video is ready!!!');
}

function setup() {
  var canvas = createCanvas(600, 450);
  canvas.parent('video_holder');

  video = createCapture(VIDEO);
  video.hide();

  background(0);
  mobilenet = ml5.featureExtractor('MobileNet', modelReady);
  classifier = mobilenet.classification(video, videoReady);

  }

function draw() {
  background(0);
  push();
  translate(width,0);
  scale(-1, 1);
  image(video, 0, 0, 600, 450);
  pop();  
 

select('#display_text').html(label)
if(label == 'Mask On'){
  select('#body').style('background-color','#1F000A');
  select('#showAdvice').style('color','yellow');
	select('#showAdvice').html("Good Mask worn")
}
else if(label == 'Mask Off'){
  select('#body').style('background-color','#e3e2df')
  select('#showAdvice').style('color','green');
	select('#showAdvice').html("Wear mask to stay safe")

}
}


function gotResults(error, result) {
  if (error) {
    console.error(error);
  } else {
    label = result[0].label;
    classifier.classify(gotResults);
  }
}