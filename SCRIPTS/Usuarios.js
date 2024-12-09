// REGISTRO DE USUARIOS
document.getElementById("btn-registrar").addEventListener("click", () => {
    const id = document.getElementById("id").value;
    const cedula = document.getElementById("cedula").value;
    const nombres = document.getElementById("nombres").value;
    const fecha = document.getElementById("fecha-nacimiento").value;
    const ciudad = document.getElementById("ciudad").value;
  
    const tabla = `<table border="1">
      <tr><th>ID</th><th>Cédula</th><th>Nombres</th><th>Fecha</th><th>Ciudad</th></tr>
      <tr><td>${id}</td><td>${cedula}</td><td>${nombres}</td><td>${fecha}</td><td>${ciudad}</td></tr>
    </table>`;
    document.body.innerHTML = tabla;
  });
  