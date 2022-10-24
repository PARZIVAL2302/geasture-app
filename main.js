Webcam.set({
        width: 350,
        height: 250,
        image_format:'png',
        png_quality:100
    });
camera  = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data-uri+'"/>';
    });
}

console.log('ml version', ml5.version);

classifier=ml5.imageclassifier('https://teachablemachine.withgoogle.com/models/UBa3Xo-J_/model.json');

function modelLoaded(){
    console.log("~~Model Loaded~~");
}

function speak(){
var Synth = Window.speechSynthesis;
speak_data = "The first predicition is " + prediction_1;    

var utterThis = new SpeechSynthesisutterance(speak_data);
Synth.speak(utterThis);
}

function check(){
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results){
  if(error){
    console.error(error);
  }

  else{
    console.log(results);
    document.getElementById("geasture_name").innerHTML = results[0].label;
    speak();
  }
}