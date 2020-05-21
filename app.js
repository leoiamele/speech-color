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
    document.getElementById('my-input').value =  command;
};

  recognition.onspeechend = function() {
    recognition.stop();
};
}
