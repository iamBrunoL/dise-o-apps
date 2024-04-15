let nombre = "";
let materia= "";

function agregar(){
        nombre = document.getElementById('nomMaestro');
        materia= document.getElementById('nomMateria');

    if ((materia.value != '') && (nombre.value != '')){     //Verificar datos requeridos
        tipoGenero = document.querySelector('input[name="genero"]:checked').value;  //Obtener genero

        if (tipoGenero === "generoMasculino"){  //Verificar tipo de genero
            nombre=nombre.value;
            materia=materia.value;
            document.querySelector('#calaveritaF').style.display="none"; //Card
            document.querySelector('#calaveritaM').style.display="block";

            document.querySelector('#colocarNombreM').innerHTML=nombre; //Dedicada a
            document.querySelector("#registroDatos").style="display: none;"; //Variables

            document.querySelector("#botonGen").style="display: none;"; //Opcion de genero
            document.querySelector("#msjGusto").style="display: block;";  //Msj Gusto
            
        
            document.querySelector('#colocarCalaveritaM').innerHTML= "A sus alumnos "+nombre+ " regañaba"+"<br>"+
                                                                    "mientras al salón iba entrando"+"<br>"+
                                                                    "porque la tarea se estaban pasando"+"<br>"+
                                                                    "aunque eso ya lo esperaba."+"<br>"+
                                                                    "De repente entró la muerte"+"<br>"+
                                                                    "que en una mision se encontraba"+"<br>"+
                                                                    "tal vez ahora si tendría suerte"+"<br>"+
                                                                    "y su búsqueda terminaba."+"<br>"+
                                                                    "¿Es "+materia+"? preguntó"+"<br>"+
                                                                    "pero nadie contestó"+"<br>"+
                                                                    "y es que varios se llegaron a desmayar"+"<br>"+
                                                                    "mientras otros no podían ni hablar."+"<br>"+
                                                                    "Como no le gustaba esperar"+"<br>"+
                                                                    "una idea por la mente le cruzó"+"<br>"+
                                                                    "en seguirla no lo dudó"+"<br>"+
                                                                    "en con ella a varios llevar."+"<br>"+
                                                                    "Solamente dejando"+"<br>"+
                                                                    "a los que había logrado observar"+"<br>"+
                                                                    "que se encontraban estudiando"+"<br>"+
                                                                    "para el mundo mejorar."+"<br>"+
                                                                    nombre+" pensando se encontraba"+"<br>"+
                                                                    "diciendo ¡que buena suerte!"+"<br>"+
                                                                    "pues su vida se perdonaba"+"<br>"+
                                                                    "por cortesía de la muerte.";

            document.querySelector('#botonAgregar').style="display: none;";
            document.querySelector('#botonNueva').style="display: block;";
            

        }
        if (tipoGenero === "generoFemenino"){
            nombre=nombre.value;
            materia=materia.value;
            document.querySelector('#calaveritaM').style.display="none";
            document.querySelector('#calaveritaF').style.display="block";

            document.querySelector('#colocarNombreF').innerHTML=nombre; //Dedicada a
            document.querySelector("#registroDatos").style="display: none;"; //Variables
            

            document.querySelector("#botonGen").style="display: none;"; //Opcion de genero
            document.querySelector("#msjGusto").style="display: block;";  //Msj Gusto
        
            document.querySelector('#colocarCalaveritaF').innerHTML= "Preocupada "+nombre+" estaba"+"<br>"+
                                                                        "porque a la muerte le tenía que cantar"+"<br>"+
                                                                        "y sí no le gustaba"+"<br>"+
                                                                        "en una tumba iba a terminar."+"<br>"+
                                                                        "Alternativa no tenía"+"<br>"+
                                                                        "para a la muerte convencer"+"<br>"+
                                                                        "de "+materia+" era lo único que sabía"+"<br>"+
                                                                        "pero el intento lo tenía que hacer."+"<br>"+
                                                                        "La cancion "+nombre+" había seleccionado"+"<br>"+
                                                                        "no se tenía que equivocar"+"<br>"+
                                                                        "aunque la muerte estaba a su lado"+"<br>"+
                                                                        "tampoco debía de desafinar."+"<br>"+                                                                        
                                                                        "No era mala la canción"+"<br>"+
                                                                        "pero para su suerte"+"<br>"+
                                                                        "no le gustaba a la muerte"+"<br>"+
                                                                        "así que terminó en el panteón.";

            document.querySelector('#botonAgregar').style="display: none;";
            document.querySelector('#botonNueva').style="display: block;";

        }
    }
}

function agregarNueva(){
    document.querySelector("#nomMaestro").value="";
    document.querySelector("#nomMateria").value="";
    document.querySelector("#colocarNombreF").value="";
    document.querySelector("#colocarNombreM").value="";
    document.querySelector("#colocarCalaveritaF").value="";
    document.querySelector("#colocarCalaveritaM").value="";

    document.querySelector('#calaveritaM').style.display="none";
    document.querySelector('#calaveritaF').style.display="none";

    document.querySelector('#botonNueva').style="display: none;";
    document.querySelector('#botonAgregar').style="display: block;";

    document.querySelector('#calaveritaM').style.display="none";
    document.querySelector('#calaveritaF').style.display="none";

    document.querySelector("#registroDatos").style="display: block;"; //Variables
    document.querySelector("#botonGen").style="display: block;"; //Opcion de genero
    document.querySelector("#msjGusto").style="display: none;";  //Msj Gusto
    
}