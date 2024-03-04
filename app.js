// Variables para encriptar el texto
let letra_e = "enter";
let letra_i = "imes";
let letra_a = "ai";
let letra_o = "ober";
let letra_u = "ufat";
let txt_cifrado="";
let txt_usuario="";

//Función para asignar texto a un elemento de la página HTML
function asignarTextoElemento(elemento, texto) {
    console.log(4 + elemento);
    console.log(5 + texto);
    document.getElementById(elemento).innerHTML=texto;
    return;
}

function btn_Encriptar_clic(){
    txt_usuario= obtener_Dato('idTxtUsuario');
    if (txt_usuario==''){
        mi_Alerta("No hay texto para encriptar", "Debe escribir un mensaje en minúscula");
        txt_cifrado="";
    }
    else{
        txt_cifrado=encriptar(txt_usuario);
        asignarTextoElemento('texto_encriptado', txt_cifrado);
    }
}

function btn_DesEncriptar_clic(){
    txt_usuario= obtener_Dato('idTxtUsuario');
    if (txt_usuario==''){
        mi_Alerta("No hay texto para desencriptar", "Vuelva a encriptar un texto");
        txt_cifrado="";
    }
    else{
        txt_cifrado=desEncriptar(txt_usuario);
        console.log(3 + txt_cifrado);
        asignarTextoElemento('texto_encriptado', txt_cifrado);
    }
}

function obtener_Dato(elemento){
    let dato=document.getElementById(elemento).value;
    return dato;
}

function encriptar(texto){
    texto= texto.replace(/e/img, letra_e);
    texto= texto.replace(/i/img, letra_i);
    texto= texto.replace(/a/img, letra_a);
    texto= texto.replace(/o/img, letra_o);
    texto= texto.replace(/u/img, letra_u);
    return texto;
}
function desEncriptar(texto){
    texto= texto.replace(/enter/img, 'e');
    texto= texto.replace(/imes/img, 'i');
    texto= texto.replace(/ai/img, 'a');
    texto= texto.replace(/ober/img, 'o');
    texto= texto.replace(/ufat/img, 'u');
    return texto;
}

function copiar(){
    txt_cifrado=obtener_Dato('texto_encriptado');
    if (txt_cifrado==""){
        mi_Alerta("No hay texto en <Texto encriptado> para copiar", "Vuelva a encriptar un texto")
        borrarTexto();
        vaciarVariables();
        return;
    }
    navigator.clipboard.writeText(txt_cifrado)
    .then(() => {
        console.log('Texto copiado al portapapeles');
        borrarTexto();
        vaciarVariables();
        alert("Texto copiado al portapapeles \nAhora puede pegar el texto para decodificarlo");
    })
    .catch(err => {
        console.error('Error al copiar al portapapeles:', err);
    })
    return;
}

function borrarTexto() {
    document.getElementById("idTxtUsuario").value = "";
    document.getElementById("texto_encriptado").innerHTML = "";
    return;
}

function vaciarVariables(){
    txt_cifrado="";
    txt_usuario="";
}

function mi_Alerta(mensaje1, mensaje2){
    if (mensaje1==''){return;}
    alert(mensaje1 + '\n' + mensaje2);
    return;
}
