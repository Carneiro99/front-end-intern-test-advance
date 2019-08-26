
(function() {
  
  const contactForm = document.getElementById('contact');

  
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  
  
  
  
  contactForm.addEventListener('submit',function () {
  
   
    const nameValue = nameInput.value;

    
    const nameLength = nameValue.length;
    const emailValue = emailInput.value;
    const messageValue = message.value;


    
    
      if(nameValue == ""){
          event.preventDefault();
          window.alert('Preencha os campos obrigatórios!')
          document.getElementById('name').className = 'highlightsForm'
          return false;
          
      } 
      
      else if(emailValue == ""){
          event.preventDefault();
          window.alert('Preencha os campos obrigatórios!')
          document.getElementById('email').className = 'highlightsForm'
          return false
          
      } 
      
      else if(messageValue == ""){
          event.preventDefault();
          window.alert('Preencha os campos obrigatórios!')
          document.getElementById('message').className = 'highlightsTextForm'
          return false;


      }  else  {   window.alert(`Obrigado pelo contato, ${nameValue}!`);  
       }
    
  });

})();
