let ordenes = JSON.parse(localStorage.getItem("ordenes")) || [];

function login() {
  let codigo = document.getElementById("codigo").value;

  let orden = ordenes.find(o => o.numero == codigo);

  if (!orden) {
    alert("No existe ese pedido");
    return;
  }

  document.getElementById("loginBox").style.display = "none";
  document.getElementById("pedidoBox").style.display = "block";

  document.getElementById("infoPedido").innerHTML = `
    <h3>#${orden.numero} - ${orden.nombre}</h3>
    <p>${orden.desc}</p>
    <p>💲 ${orden.precio}</p>
    <h2>Estado: ${orden.estado}</h2>
  `;
}