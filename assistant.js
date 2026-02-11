// Knowledge Base (Basic Version)
const knowledgeBase = {
  "diwali": "Diwali is the festival of lights celebrating the victory of good over evil. It marks Lord Rama’s return to Ayodhya and includes Lakshmi Puja.",
  "holi": "Holi is the festival of colors celebrating spring, love of Radha Krishna, and the victory of good over evil.",
  "ganesh": "Ganesh Chaturthi celebrates the birth of Lord Ganesha, symbolizing wisdom, new beginnings, and community devotion.",
  "navratri": "Navratri is a nine-night festival dedicated to Goddess Durga and her nine forms, celebrating divine feminine energy.",
  "shivratri": "Maha Shivratri marks the divine marriage of Shiva and Parvati and represents spiritual awakening.",
  "chhath": "Chhath Puja is dedicated to Sun God Surya and symbolizes gratitude, discipline, and harmony with nature.",
  "janmashtami": "Janmashtami celebrates the birth of Lord Krishna and his teachings in the Bhagavad Gita.",
  "raksha": "Raksha Bandhan celebrates the sacred bond of protection between brothers and sisters.",
  "pongal": "Pongal is a Tamil harvest festival thanking the Sun God and nature for agricultural prosperity.",
  "lohri": "Lohri is a Punjabi harvest festival celebrated with bonfires and gratitude for winter crops."
};

// Start Listening
function startListening() {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = "en-IN";

  recognition.start();

  recognition.onresult = function(event) {
    const transcript = event.results[0][0].transcript.toLowerCase();
    document.getElementById("userQuestion").innerText = "You asked: " + transcript;

    processQuestion(transcript);
  };
}

// Process Question
function processQuestion(question) {
  let response = "Sorry, I could not find that festival yet.";

  for (let key in knowledgeBase) {
    if (question.includes(key)) {
      response = knowledgeBase[key];
      break;
    }
  }

  document.getElementById("assistantResponse").innerText = response;
  speak(response);
}

// Speak Answer
function speak(text) {
  const speech = new SpeechSynthesisUtterance(text);
  speech.lang = "en-IN";
  window.speechSynthesis.speak(speech);
}
