// var nome = prompt("Qual seu nome")

// var sobreNome = prompt("Qual seu sobre nome ")

// console.log("Ola " + nome + sobreNome)

// document.write("<h1>Bem vindo " + nome + " </h1>")
// document.write("<img src='https://th.bing.com/th/id/R.199a514bb4378d42a29c4e31d5368132?rik=1TAdpyrP%2fPPdiA&pid=ImgRaw&r=0' alt='foto homem'>")



//Bloco de codigo que será reutilizado novamente 
// var area = document.getElementById('area')

// function entradaDeUsuario(){
//   var nome =  prompt("Digite seu nome");


//   if(nome === ' ' || nome === null){
//     alert("Ops algo deu errado")
//     area.innerHTML = "Clique no botão para acessar"
//   }else{
//       area.innerHTML = "Bem vindo " + nome
//   }

//   console.log("A função deu certo")
// }

// function entrar(){
//   alert("CLICOU!!")
//   console.log("parabens voce aprendeu o que é uma função")
// }

// function sair() {
//   alert("Voce saiu do programa")
//   console.log("voce aprender que ao apertar este botão voce vai sair do programa, entendendo o que é uma função em Java Script")
// }

var area = document.getElementById("area")

function entrar(){
   var dado1 = prompt("Qual sua idade")
   let tipoDeDado = console.log(typeof(dado1))
    alert("Parabens voce pode entrar")

    if (dado1 === ' ' || dado1 === null) {
      alert("Vou precisar criar mais um botão")
      area.innerHTML = "sua logica esta correta"
    }
  
    if (dado1 >= 18) {
      alert("Voce pode entrar")
    }else if(tipoDeDado === typeof(Number)){
      console.log("Parabens deu certo sua logica pra decobri o tipo de dado")
       if (dado1 < 18) {
         console.log("Voce não pode entrar")
       }
    }

}

