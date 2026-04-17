async function askAI(question) {
    const response = await fetch(`http://127.0.0.1:8000/ask?question=${question}`);
    const data = await response.json();
    return data.answer;
}

function startListening() {
    const recognition = new webkitSpeechRecognition();
    recognition.start();

    recognition.onresult = async function(event) {
        const question = event.results[0][0].transcript;

        document.getElementById("userQuestion").innerText = question;

        const answer = await askAI(question);

        document.getElementById("assistantResponse").innerText = answer;

        // Optional voice reply
        const speech = new SpeechSynthesisUtterance(answer);
        speechSynthesis.speak(speech);
    }
}
