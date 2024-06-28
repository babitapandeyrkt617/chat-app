function sendMessage(){
   const message= document.getElementById('message-input').value.trim();
   if(!message){
    alert('Please enter a message')
   }
   appendMessage('You',message,'you')
   document.getElementById('message-input').value='';
   setTimeout(()=>appendMessage('Friend','hlo,how are you'),1000)
}


function appendMessage(sender,message,senderClass){
const chatBox = document.getElementById('chat-box');
const messageElement= document.createElement("div")
messageElement.classList.add('message',senderClass)
messageElement.innerHTML= `<span class= 'sender'> ${sender}:</span><span class= 'text'>${message}</span>`
chatBox.appendChild(messageElement)
chatBox.scrollTop= chatBox.scrollHeight;
}