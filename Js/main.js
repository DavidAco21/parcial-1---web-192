
var inputId = document.getElementById('input-id');
var texts = [];
var counter = 0;


inputId.addEventListener('keyup', function addText(e) {
    if (e.keyCode === 13 && counter < 4) {
       var text = inputId.value;
       inputId.value = '';
       counter++;
       texts.push(text);

       var message = document.createElement("p");
       message.innerHTML = text;

       var container = document.querySelector('.messages');
       container.appendChild(message);
       
        
    }
});


