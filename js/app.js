// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

// Debe funcionar solo con letras minúsculas
// No deben ser utilizados letras con acentos ni caracteres especiales
// Debe ser posible convertir una palabra para la versión encriptada también
// devolver una palabra encriptada para su versión original.
// "gato" => "gaitober"
// gaitober" => "gato"

function comparador(bandera) {
  let msj = document.getElementById("msj").value;
  if (msj!="" && !/[A-Z]/g.test(msj) && !/[á-ú]/g.test(msj) && msj.trim().length) {
      let nuevoMsj = bandera == 1 ? encriptar(msj) : desencriptar(msj);
      document.getElementById("resultado").innerText = nuevoMsj;
  }else{
    alert("Ingresaste una letra mayuscula o con un caracter especial.")
  }
}

function encriptar(msj) {
  let msjEncriptado = msj
    .replace("e", "enter")
    .replace("i", "imes")
    .replace("a", "ai")
    .replace("o", "ober")
    .replace("u", "ufat");
  console.log(msjEncriptado);
  return msjEncriptado;
}

function desencriptar(msj) {
  let msjDesncriptado = msj
    .replace("enter", "e")
    .replace("imes", "i")
    .replace("ai", "a")
    .replace("ober", "o")
    .replace("ufat", "u");
  console.log(msjDesncriptado);
  return msjDesncriptado;
}

function copiar() {
    let msjFinal = document.getElementById("resultado").textContent;
    console.log(msjFinal);
    
    navigator.clipboard.writeText(msjFinal);
    document.getElementById("resultado").innerHTML="";
}