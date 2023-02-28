

imprimirDatos();
async function imprimirDatos() {
   // convertir los datos del JSON en variables para poder usarlas
   const response = await fetch("materias.json");
   const datos = await response.json();

   var datos_materias_html = "";

   for (let i = 0; i < datos.length; i++) {
      var materias = "";
      var asignatura = datos[i].asignaturas;
      var codigo = "http://wiki.foros-fiuba.com.ar/materias:" + asignatura.slice(0, 2) + ":" + asignatura.slice(3, 5);

      materias += `
      <div id="${asignatura}">
         <h5>${asignatura}</h5>
         <a href="${datos[i].planificaciones}" target="_blank">Link al PDF</a> | <a href="${codigo}" target="_blank">Wiki</a>
         <br>
         <pre>${datos[i].contenido}</pre>
         <br>
         <hr>
      </div>
      `;

      datos_materias_html += materias;
   }

   // mostrar los datos (TODO: Cambiarlo para que no se muestre todo de una)
   document.getElementById("datos_materias").innerHTML = datos_materias_html;

   // ocultar el loader
   document.getElementById("loader").style.display = "none";
}
