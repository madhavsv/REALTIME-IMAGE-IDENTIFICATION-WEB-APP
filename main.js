function setup() {
  canvas = createCanvas(230, 230);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier=ml5.imageClassifier('MobileNet',modelLoaded)
}
function draw() {
  image(video, 0, 0, 230, 230);
  classifier.classify(video,gotResult);
}
function modelLoaded() {
  console.log('model Loaded!');
}
function gotResult(error,result) {
  if (error) {
    console.error(error);
  } else {
    console.log(result)
    document.getElementById('result_object_name').innerHTML=result[0].label;
    document.getElementById('result_object_accuracy').innerHTML=result[0].confidence.toFixed(3);
  }
}




