const loader = document.querySelector('#cargando_materias');
const content = document.querySelector('#datos_materias');

imprimirDatos();
async function imprimirDatos(){

   const response = await fetch("materias.json");
   const datos = await response.json();

   // convertir los datos del JSON en variables para poder usarlas
   materias = "";
   for (let i = 0; i < datos.length; i++) {
      codigo = "http://wiki.foros-fiuba.com.ar/materias:" + datos[i].asignaturas.slice(0,2) + ":" + datos[i].asignaturas.slice(3,5);
      materias += "<h5>"+datos[i].asignaturas+"</h5><a href=\""+datos[i].planificaciones+"\">Link al PDF</a> | <a href=\""+codigo+"\">Wiki</a><br><pre>"+datos[i].contenido+"</pre><br><hr>";
   }
 
   //get first and second character of a string
   document.getElementById("datos_materias").innerHTML = materias;


   
}


