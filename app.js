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

    switch (command) {
      case 'rojo':
        document.body.style.backgroundColor = "red";
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
      case 'Celeste' || 'celeste':
        document.body.style.backgroundColor = "lightblue";;
        break;
      default:
        document.body.style.backgroundColor = "black";
        console.log(`Lo siento pero no se que color es ${command}`);
    }
};

  recognition.onspeechend = function() {
    recognition.stop();
};

}

