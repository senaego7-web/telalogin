const usuario = document.getElementById("usuario");
const senha = document.getElementById("senha");
const botaoEntrar = document.getElementById("entrar");

botaoEntrar.addEventListener("click", function() {
const nomeUsuario = usuario.value;
const senhaDigitada = senha.value;

if (nomeUsuario === "" || senhaDigitada === "" ) { 
alert("preencha todos os campos!");

}
else if (nomeUsuario === "aluno" && senhaDigitada === "123") {
  alert("Login realizado com sucesso!"); 
}
else {
     alert("Acesso Negado!");
}

});
