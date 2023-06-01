let edadUsuario = prompt ("Ingrese su edad");
function edad (edad){
    let edadUsuario;
    if (edad >= 18){
        alert ("Bienvenido");
    } else {            
        alert ("Usted esta ingresando bajo su responsabilidad");
    }
}
edad (edadUsuario);



function ubicacion (){    
    let sanNicolas = confirm("Usted reside en San Nicolás?");    
    if (sanNicolas == true){
        alert ("El asesoramiento es gratis");
    } else {
        alert ("El asesoramiento tiene un costo de $800");
    }
}
