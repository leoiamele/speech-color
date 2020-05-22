var btn = document.getElementById("my-btn");
btn.addEventListener('click', runSpeech);

function runSpeech(){
  var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
  var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;

  var recognition = new SpeechRecognition();

  var speechRecognitionList = new SpeechGrammarList();
 
  recognition.lang = 'es-AR';
  recognition.interimResults = false;

  console.log(recognition)
  recognition.start();
  
  recognition.onresult = function(event) {
    var last = event.results.length - 1;
    var command = event.results[last][0].transcript;
    console.log(command.toLowerCase())
    
    switch (command.toLowerCase()) {
      case 'rojo':
        document.body.style.backgroundColor = "red";
        break;
      case 'colorado':
        document.body.style.backgroundColor = "red";
        break;
      case 'violetta':
        document.body.style.backgroundColor = "mediumorchid";
        break;
      case 'rosa':
        document.body.style.backgroundColor = "pink";
        break;
      case 'naranja':
        document.body.style.backgroundColor = "orange";
        break;
      case 'azul':
        document.body.style.backgroundColor = "blue";
        break;
      case 'verde':
        document.body.style.backgroundColor = "green";
        break;
      case 'amarillo':
        document.body.style.backgroundColor = "yellow";
        break;
      case 'celeste':
        document.body.style.backgroundColor = "lightblue";;
        break;
      default:
        document.body.style.backgroundColor = "grey";
        showError(`Ups... Lo siento pero no se que color es ${command}`)
    }
};

  recognition.onspeechend = function() {
    recognition.stop();
};

}

function showError(error) {
  const errorDiv = document.createElement('div');
  const alertDiv = document.getElementById('error');

  errorDiv.className = 'alert alert-dark mt-5'
  errorDiv.innerText = error;
  alertDiv.appendChild(errorDiv)

  setTimeout(clearError, 2500)

  function clearError() {
    alertDiv.removeChild(alertDiv.firstChild);
  }
}
