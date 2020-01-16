const sendBtn = document.querySelector("#sendBtn")
const msgIn = document.querySelector("#messageIn")
const msgOut = document.querySelector("#messageOut")

sendBtn.addEventListener('click', snedMessage);

function snedMessage () {
  let content = msgIn.value;
  // console.log(content)
  if(content === '') {
    alert("Please enter a message")
  }
  msgOut.innerHTML = content
  msgIn.value = ""
}