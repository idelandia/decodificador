const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");
const btnCopiar = document.querySelector(".btn-cop");

btnCopiar.addEventListener("click", copiarTexto);

function btnCriptar() {
    const textoEncriptado = criptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
}

function criptar(stringCriptada) {

    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"], ["a" ,"ai"] , ["o" , "ober"], ["u" , "ufat"]];
    stringCriptada = stringCriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringCriptada.includes(matrizCodigo[i][0])) {
            stringCriptada = stringCriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringCriptada;
}

function btnDescriptar() {
    const textoDesencriptado = descriptar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = "";
}

function descriptar(stringDescriptada) {

    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"], ["a" ,"ai"] , ["o" , "ober"], ["u" , "ufat"]];
    stringDescriptada = stringDescriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDescriptada.includes(matrizCodigo[i][1])) {
            stringDescriptada = stringDescriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDescriptada;
}

function copiarTexto() {
    mensagem.select();
    document.execCommand("copy");
}