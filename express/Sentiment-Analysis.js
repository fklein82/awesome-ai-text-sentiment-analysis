let model;

model = ml5.sentiment('movieReviews', Ready);
    
function on_key_up() {
    getSentiment();

  }

function getSentiment() {
  
  var text = document.getElementById("text").value;

  const prediction = model.predict(text);
  if (prediction.score >= 0.9){
    document.getElementById("show").innerHTML = "&#129321";
  }
  else if (prediction.score < 0.9 && prediction.score >= 0.8){
    document.getElementById("show").innerHTML = "&#128525";
  }
  else if (prediction.score < 0.8 && prediction.score >= 0.7){
    document.getElementById("show").innerHTML = "&#128519";
  }
  else if (prediction.score < 0.7 && prediction.score >= 0.6){
    document.getElementById("show").innerHTML = "&#128515";
  }
  else if (prediction.score < 0.6 && prediction.score >= 0.5){
    document.getElementById("show").innerHTML = "&#128578";
  }
  else if (prediction.score < 0.4 && prediction.score >= 0.3){
    document.getElementById("show").innerHTML = "&#128577";
  }
  else if (prediction.score < 0.3 && prediction.score >= 0.2){
    document.getElementById("show").innerHTML = "&#128532";
  }
  else if (prediction.score < 0.2 && prediction.score >= 0.1){
    document.getElementById("show").innerHTML = "&#129324";
  }
  else if (prediction.score < 0.1){
    document.getElementById("show").innerHTML = "&#128169";
  }

  document.getElementById("score").innerHTML = (`${(prediction.score*10).toFixed(1)}/10`);

}

function Ready() {
  var elem = document.getElementById('wait');
  elem.parentNode.removeChild(elem);
  var newElement = document.createElement("p");
  var newNode = document.createTextNode("Model is ready");
  newElement.appendChild(newNode);
  var getElement = document.getElementById("show_div");
  getElement.appendChild(newElement);
}
