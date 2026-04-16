let ordenes = JSON.parse(localStorage.getItem("ordenes")) || [];

function guardar() {
  localStorage.setItem("ordenes", JSON.stringify(ordenes));
}

function agregar() {
  let numero = document.getElementById("numero").value;
  let nombre = document.getElementById("nombre").value;
  let desc = document.getElementById("desc").value;
  let precio = document.getElementById("precio").value;

  ordenes.push({
    numero,
    nombre,
    desc,
    precio,
    estado: "Empacando"
  });

  guardar();
  mostrar();
}

function cambiarEstado(i) {
  let estados = ["Reciviendo pedido", "imprimiendo", "Empacando", "Listo", "Entregando"];

  let actual = estados.indexOf(ordenes[i].estado);
  ordenes[i].estado = estados[(actual + 1) % estados.length];

  guardar();
  mostrar();
}

function eliminar(i) {
  ordenes.splice(i, 1);
  guardar();
  mostrar();
}

function mostrar() {
  let lista = document.getElementById("lista");
  lista.innerHTML = "";

  ordenes.forEach((o, i) => {
    let li = document.createElement("li");

    li.innerHTML = `
      <strong>#${o.numero}</strong> - ${o.nombre}<br>
      ${o.desc}<br>
      💲${o.precio}<br>
      🔄 Estado: ${o.estado}<br>
      <button onclick="cambiarEstado(${i})">Cambiar estado</button>
      <button onclick="eliminar(${i})">Borrar</button>
    `;

    lista.appendChild(li);
  });
}

mostrar();