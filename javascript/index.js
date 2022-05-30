
let nombre = prompt ("ingrese su nombre");
let apellido = prompt ("ingrese su apellido");
let edad = prompt ("ingerese su edad"); //debe ser mayor de 18 para ingresar.

if ((nombre != "") && (apellido != "") && ( edad >= 18)){

    alert ("Nombre: "+nombre+"\nApellido: "+apellido+"\nEdad: "+edad)
}

else {
    alert("debes ser mayor de edad para ingresar");
}
