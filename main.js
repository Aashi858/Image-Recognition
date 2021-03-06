Webcam.set({
    width : 400,
    height : 300,
    image_format : "png",
    png_quality : 90
});
camera = document.getElementById("webcam");
Webcam.attach(camera);
function captureImage(){
    Webcam.snap(function (data_url){
       document.getElementById("result").innerHTML = "<img id = 'image_captured' src="+data_url+">";
    })
}
console.log("version = "+ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/5OsJ4SkcO/model.json",model_loaded);
function model_loaded(){
    console.log("Model Loaded");
}
function identifyImage(){
    image = document.getElementById("image_captured");
    classifier.classify(image,get_result);
}
function get_result(error,results){
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result_object").innerHTML = results[0].confidence.toFixed(3);
        document.getElementById("result_accuracy").innerHTML = results[0].label;
    }
}