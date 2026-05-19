async function sendMessage(){

  const input = document.getElementById("userInput");
  const chatBox = document.getElementById("chat-box");

  const message = input.value;

  chatBox.innerHTML += `
    <div class="user">${message}</div>
  `;

  input.value = "";

  const response = await fetch("http://localhost:3000/chat",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      message:message
    })
  });

  const data = await response.json();

  chatBox.innerHTML += `
    <div class="bot">${data.reply}</div>
  `;

}