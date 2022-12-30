const API_ENDPOINT = "http://example.com/api/messages";

window.onload = () => {
  const form = document.getElementById("chat-form");
  form.onsubmit = (event) => {
    event.preventDefault();
    const input = document.querySelector("input[name='message']");
    const message = input.value;
    input.value = "";
    sendMessage(message);
  };
};

function sendMessage(message) {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", API_ENDPOINT);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onload = () => {
    if (xhr.status === 200) {
      console.log("Message sent successfully");
    } else {
      console.error("Error sending message");
    }
  };
  xhr.send(JSON.stringify({ message: message }));
}
