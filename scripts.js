

imprimirDatos();
async function imprimirDatos(){
   const response = await fetch("materias.json");
   const datos = await response.json();

   // convertir los datos del JSON en variables para poder usarlas
   materias = "";
   for (let i = 0; i < datos.length; i++) {
      materias += "<h5>"+datos[i].asignaturas+"</h5><a href=\""+datos[i].planificaciones+"\">link al pdf</a><br><pre>"+datos[i].contenido+"</pre><br><hr>";
   }
      document.getElementById("datos").innerHTML = materias;
}


