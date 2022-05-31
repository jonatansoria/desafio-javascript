
let nombre = prompt ("Hola, Por favor ingrese su nombre para continuar");
    alert ("Nombre imgresado "+nombre);

let apellido = prompt ("Ahora ingrese su apellido");
   alert  ("Hola "+nombre+" "+apellido);

let edad = prompt ("ingrese tambien su edad"); //debe ser mayor de 18 para ingresar.

while (edad <=18) {
    edad = prompt ("ingresa nuevamente tu edad");
   
} alert ("Bienvenido "+nombre+" "+apellido+"\nEdad "+edad+"años")
