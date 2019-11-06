let titulo = document.getElementById('titulo');
let cambiartexto = document.getElementById('ChangeJS') 
let textChange = document.getElementById('textChange')
let button =document.getElementById('button')

//console.log(cambiartexto)
let nombre = document.getElementById('nombre')
let email = document.getElementById('email')
let contrasenia = document.getElementById('contrasenia')
let enviar = document.getElementById('enviar')
let valor1 = document.getElementById('valor1')
let valor2 = document.getElementById('valor2')
let valor3 = document.getElementById('valor3')

//parrafo de validacion
let validar = document.getElementById('validar')

//console.log(cambiartexto);

titulo.innerHTML ="salu2, desde JS"
cambiartexto.innerHTML = "texto cambiado!!"

const nuevoTexto = () => {

    
    textChange.innerHTML = "texto cambiado :D !"
    
}

button.addEventListener('click', nuevoTexto );

const formulario = () => {
    let valorNombre = nombre.value;
    let valorEmail = email.value;
    let valorContrasenia = contrasenia.value;

    valor1.innerHTML = valorNombre;
    valor2.innerHTML = valorEmail;
    valor3.innerHTML = valorContrasenia;

    let nombreCorrecto = "Juan";
    let correoCorrecto = "a@a.com";
    let contraseñaCorrecta = "XD";

    if(valorNombre === nombreCorrecto && valorEmail === correoCorrecto && valorContrasenia === contraseñaCorrecta){
        
        validar.innerHTML = "Bienvenido !";

    }else{
        validar.innerHTML = "Datos Incorrectos :(";
    }



}

enviar.addEventListener('click', formulario)
