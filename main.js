//https://teachablemachine.withgoogle.com/models/hf82f1xiG/
function startClassification(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    });

    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/hf82f1xiG/model.json",modelReady);

}

function modelReady(){
   classifier.classify(gotResults); 
}

function gotResults(error,results){
console.log("Got Results");
}
function gotResults(error,results){
    if(error){
        console.log(error);
    }else{
      console.log(results);  
      random_number_r = Math.floor(Math.random() * 255);
      random_number_b = Math.floor(Math.random() * 255);
      random_number_g = Math.floor(Math.random() * 255);
      
      document.getElementById("result_label").innerHTML="I can hear - " + results[0].label;
      document.getElementById("result_confidence").innerHTML = "Accuracy - " + (results[0].confidence*100).toFixed(2)+" % ";
      document.getElementById("result_label").style.color="rgb("+random_number_r+','+random_number_g+','+random_number_b+')';
      document.getElementById("result_confidence").style.color="rgb("+random_number_r+','+random_number_g+','+random_number_b+')';

      img = document.getElementById('ear');
      


      if(results[0].label == "meow"){
        img.src = 'meow.gif';    
       
    
      }
      else if(results[0].label == "Dog barking"){
        
        img.src = 'barking.gif';
     
    }else{
        img.src = 'ear.jpg';
    }
    }
}