// Adicionamos nosso código dentro de uma função anônima para evitar
// variáveis globais.
(function() {
  // Elemento principal do formulário
  const contactForm = document.getElementById('contact');

  // Campos do formulário
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  
  
  
  // "addEventListener" instrui o navegador a executar uma função sempre
  // que um evento específico acontece. Nesse caso, a função abaixo será
  // executada toda vez que o botão de envio for pressionado.
  contactForm.addEventListener('submit',function () {
  
   
    // A propriedade "value" cont.normal { border: 1px solid #000000; }
    const nameValue = nameInput.value;

    // A propriedade "length" contém o tamanho (em caracteres) de uma
    // uma string. Toda string contém essa propriedade.
    const nameLength = nameValue.length;
    const emailValue = emailInput.value;
    const messageValue = message.value;


    // "window" é um objeto global que representa a janela (ou aba) do
    // navegador que está executando o código do seu site. O método
    // "alert" simplesmente mostra um aviso para o usuário contendo a
    // mensagem provida.
    
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


      } else if(emailValue.indexOf('@') == -1 || emailValue.indexOf('@') == -1){
        event.preventDefault();
        window.alert('Preencha um email válido')
        document.getElementById('email').className = 'highlightsForm'
        return false 
      } else  {   window.alert(`Obrigado pelo contato, ${nameValue}!`);  
       }
    // Altere e complete essa função para validar os campos do formulário
    // de acordo com as especificações do teste. Boa sorte!
  });

})();
