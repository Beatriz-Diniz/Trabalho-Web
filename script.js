//para mudar as imagens do banner
var counter = 1;
    setInterval(function(){
      document.getElementById('radio' + counter).checked = true;
      counter++;
      if(counter > 3)
        counter = 1;
    }, 6000);

//avisar que o contato foi envido
function Enviar() {

  var nome = document.getElementById("nomeid");
  var email = document.getElementById("emailid");

  if (nome.value != "" && email.value != "") {
      alert('Obrigado sr(a) ' + nome.value + ' sua mensagem foi encaminhada com sucesso');
  }

}

//avisar que usuario foi cadastrado
function Cadastrar() {

  var nome = document.getElementById("nomeid");
  var sobrenome = document.getElementById("sobrenomeid");

  if (nome.value != "" && sobrenome.value != "") {
      alert('Usuário ' + nome.value + ' ' + sobrenome.value + ' cadastrado com sucesso');
  }

}

//veririficar se o é o adm fazendo login
function VerificarAdm(){
  var email = document.getElementById("emailid");
  var password = document.getElementById("password");
 
  if(email.value == 'flavioalberto@4patas.com.br'){
    if(password.value == '1234'){
      window.open("loginAdm.html", "_self");
    }
    else
      alert('Senha Incorreta');
  }
}

//botao mostrar senha
let container = document.querySelector(".col-login"); 
let input = document.querySelector(".inputsenha"); 
let icon = document.querySelector(".mostrarSenha");

icon.addEventListener('click', function() { container.classList.toggle('visible'); 
  if (container.classList.contains ('visible')) { 
    icon.src = 'img/eye-off.svg'; 
    input.type = 'text';

  }else {

    icon.src = 'img/eye.svg'; 
    input.type = 'password';
  }
});

//preencher endereço automaticamente
$("#cep").focusout(function(){
  
  $.ajax({
    //link para buscar o cep
    url: 'https://viacep.com.br/ws/'+$(this).val()+'/json',
    dataType: 'json',
    success: function(resposta){
      $("#logradouro").val(resposta.logradouro);
      $("#complemento").val(resposta.complemento);
      $("#bairro").val(resposta.bairro);
      $("#cidade").val(resposta.localidade);
      $("#uf").val(resposta.uf);
      $("#numero").focus();
    },
    error: function(resposta){
      $("#cep").val("");
      alert("Formato de CEP inválido.");
    }
  });
});

function editar() {
  document.getElementById('botaoSalvarEd').style.display = "inline";
  document.getElementById('nomeidEd').disabled = false;
  document.getElementById('sobrenomeidEd').disabled = false;
  document.getElementById('emailidEd').disabled = false;
  document.getElementById('cpfidEd').disabled = false;
  document.getElementById('telidEd').disabled = false;
  document.getElementById('logradouroEd').disabled = false;
}

function salvar(){
  document.getElementById('botaoSalvarEd').style.display = "none";
  document.getElementById('nomeidEd').disabled = true;
  document.getElementById('sobrenomeidEd').disabled = true;
  document.getElementById('emailidEd').disabled = true;
  document.getElementById('cpfidEd').disabled = true;
  document.getElementById('telidEd').disabled = true;
  document.getElementById('logradouroEd').disabled = true;
}