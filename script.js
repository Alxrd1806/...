const preciosBase = {
    "Chocolate Ferrero": 2,
    "Chocolate Nacional": 1,
    "Bombones": 0.5,
    "Rosa Natural": 3,
    "Rosa Artificial": 1,
    "Globo Metálico": 2,
    "Globo Látex": 0.5,
    "Caja Pequeña": 1,
    "Caja Mediana": 2,
    "Caja Grande": 3,
    "Papel Kraft": 0.5,
    "Cinta Decorativa": 0.5,
    "Cartulina": 0.3,
    "Foami": 0.4,
    "Cartón Pluma": 2,
    "Acetato": 1,
    "Impresión Color": 0.5,
    "Impresión B/N": 0.2,
    "Silicona Barra": 0.1
};

const plantillas = {
    "caja-premium": [
        { nombre: "Chocolate Ferrero", cantidad: 12 },
        { nombre: "Rosa Natural", cantidad: 6 },
        { nombre: "Caja Mediana", cantidad: 1 },
        { nombre: "Globo Metálico", cantidad: 1 }
    ],
    "maqueta-escolar": [
        { nombre: "Cartón Pluma", cantidad: 2 },
        { nombre: "Foami", cantidad: 3 },
        { nombre: "Silicona Barra", cantidad: 5 }
    ]
};

let datos = JSON.parse(localStorage.getItem("coste")) || [];

const navBotones = {
    "btn-inicio": "inicio",
    "btn-crear": "crear",
    "btn-historial": "historial",
    "btn-config": "config",
    "quick-crear": "crear",
    "quick-historial": "historial"
};

Object.keys(navBotones).forEach(btnId => {
    document.getElementById(btnId)?.addEventListener("click", () => {
        abrirModulo(navBotones[btnId]);
    });
});

function abrirModulo(id) {
    document.querySelectorAll("main section").forEach(sec => sec.classList.add("hidden"));
    document.getElementById(id).classList.remove("hidden");
    
    document.querySelectorAll("nav button").forEach(btn => btn.classList.remove("active"));
    
    if (id === "inicio") document.getElementById("btn-inicio")?.classList.add("active");
    if (id === "crear") document.getElementById("btn-crear")?.classList.add("active");
    if (id === "historial") document.getElementById("btn-historial")?.classList.add("active");
    if (id === "config") document.getElementById("btn-config")?.classList.add("active");
}

document.getElementById("btn-agregar-material").addEventListener("click", () => {
    const nombre = document.getElementById("material").value;
    if (!nombre || preciosBase[nombre] === undefined) return;
    renderizarFilaMaterial(nombre, 1, preciosBase[nombre], 0);
    calcular();
    document.getElementById("material").value = "";
});

document.getElementById("plantilla").addEventListener("change", (e) => {
    const key = e.target.value;
    if (!key || !plantillas[key]) return;
    
    document.getElementById("listaMateriales").innerHTML = "";
    plantillas[key].forEach(m => {
        renderizarFilaMaterial(m.nombre, m.cantidad, preciosBase[m.nombre], 0);
    });
    calcular();
});

function renderizarFilaMaterial(nombre, cantidad, costoUnitario, gananciaUnitaria) {
    const contenedor = document.getElementById("listaMateriales");
    const div = document.createElement("div");
    div.className = "material";
    
    div.innerHTML = `
        <div class="material-grid">
            <strong class="mat-nombre">${nombre}</strong>
            <label>Cant: <input type="number" class="cantidad" value="${cantidad}" min="1"></label>
            <label>Costo U: <input type="number" class="costo-u" value="${costoUnitario}" step="0.01" min="0"></label>
            <label>Gan. U: <input type="number" class="gan-u" value="${gananciaUnitaria}" step="0.01" min="0"></label>
            <button type="button" class="btn-eliminar-mat">✕</button>
        </div>
    `;
    
    div.querySelector(".btn-eliminar-mat").addEventListener("click", () => {
        div.remove();
        calcular();
    });
    
    div.querySelectorAll("input").forEach(inp => {
        inp.addEventListener("input", calcular);
    });
    
    contenedor.appendChild(div);
}

function calcular() {
    let costoMateriales = 0;
    let gananciaMaterialesDirecta = 0;

    document.querySelectorAll(".material").forEach(m => {
        const c = Number(m.querySelector(".cantidad").value || 0);
        const p = Number(m.querySelector(".costo-u").value || 0);
        const g = Number(m.querySelector(".gan-u").value || 0);
        
        costoMateriales += c * p;
        gananciaMaterialesDirecta += c * g;
    });

    const h = Number(document.getElementById("horas").value || 0);
    const vh = Number(document.getElementById("valorHora").value || 0);
    const manoObra = h * vh;

    const transp = Number(document.getElementById("transporte").value || 0);
    const otrosGastos = Number(document.getElementById("otros").value || 0);

    const costoRealTotal = costoMateriales + manoObra + transp + otrosGastos;

    const pctUtilidad = Number(document.getElementById("utilidad").value || 0);
    const gananciaProyectoBase = costoRealTotal * (pctUtilidad / 100);

    const gananciaFinalAcumulada = gananciaProyectoBase + gananciaMaterialesDirecta;
    const precioVentaFinal = costoRealTotal + gananciaFinalAcumulada;

    document.getElementById("costo").innerText = "$" + costoRealTotal.toFixed(2);
    document.getElementById("ganancia").innerText = "$" + gananciaFinalAcumulada.toFixed(2);
    document.getElementById("precio").innerText = "$" + precioVentaFinal.toFixed(2);
}

document.querySelectorAll("#crear input").forEach(input => {
    input.addEventListener("input", calcular);
});

document.getElementById("btn-guardar").addEventListener("click", () => {
    const cliente = document.getElementById("cliente").value.trim();
    const producto = document.getElementById("producto").value.trim();
    const fecha = document.getElementById("fecha").value;

    if (!cliente || !producto || !fecha) {
        alert("Por favor complete Cliente, Producto y Fecha.");
        return;
    }

    const codigo = "JH-" + String(datos.length + 1).padStart(4, "0");
    const costoText = document.getElementById("costo").innerText;
    const gananciaText = document.getElementById("ganancia").innerText;
    const precioText = document.getElementById("precio").innerText;

    datos.push({
        codigo,
        cliente,
        producto,
        fecha,
        costo: costoText,
        ganancia: gananciaText,
        precio: precioText
    });

    localStorage.setItem("coste", JSON.stringify(datos));
    
    limpiarFormulario();
    actualizarDashboardYHistorial();
    alert("Guardado con éxito: " + codigo);
    abrirModulo("inicio");
});

function limpiarFormulario() {
    document.getElementById("cliente").value = "";
    document.getElementById("producto").value = "";
    document.getElementById("fecha").value = "";
    document.getElementById("plantilla").value = "";
    document.getElementById("material").value = "";
    document.getElementById("listaMateriales").innerHTML = "";
    document.getElementById("horas").value = "";
    document.getElementById("valorHora").value = "";
    document.getElementById("transporte").value = "";
    document.getElementById("otros").value = "";
    document.getElementById("utilidad").value = "40";
    document.getElementById("costo").innerText = "$0.00";
    document.getElementById("ganancia").innerText = "$0.00";
    document.getElementById("precio").innerText = "$0.00";
}

function actualizarDashboardYHistorial() {
    let totalVentasNum = 0;
    let totalGananciasNum = 0;
    let htmlHistorial = "";

    datos.forEach(d => {
        const v = Number(d.precio.replace("$", "")) || 0;
        const g = Number(d.ganancia.replace("$", "")) || 0;
        totalVentasNum += v;
        totalGananciasNum += g;

        htmlHistorial += `
            <div class="material">
                <h3>${d.codigo}</h3>
                <p><strong>Cliente:</strong> ${d.cliente}</p>
                <p><strong>Producto:</strong> ${d.producto}</p>
                <p><strong>Fecha:</strong> ${d.fecha}</p>
                <p><strong>Costo:</strong> ${d.costo} | <strong>Ganancia:</strong> ${d.ganancia} | <strong>Venta:</strong> ${d.precio}</p>
            </div>
        `;
    });

    document.getElementById("totalPedidos").innerText = datos.length;
    document.getElementById("ventas").innerText = "$" + totalVentasNum.toFixed(2);
    document.getElementById("ganancias").innerText = "$" + totalGananciasNum.toFixed(2);
    document.getElementById("historialDatos").innerHTML = htmlHistorial;
}

document.getElementById("btn-pdf").addEventListener("click", () => {
    const cliente = document.getElementById("cliente").value.trim() || "Consumidor Final";
    const producto = document.getElementById("producto").value.trim() || "Personalizado";
    const fecha = document.getElementById("fecha").value || new Date().toISOString().split('T')[0];
    const codigo = "JH-" + String(datos.length + 1).padStart(4, "0");
    
    const costoText = document.getElementById("costo").innerText;
    const gananciaText = document.getElementById("ganancia").innerText;
    const precioText = document.getElementById("precio").innerText;

    let listado = "";
    document.querySelectorAll(".material").forEach(m => {
        const n = m.querySelector(".mat-nombre").innerText;
        const c = m.querySelector(".cantidad").value;
        const p = m.querySelector(".costo-u").value;
        listado += `${n} (x${c}) - Costo U: $${p}\n`;
    });

    const contenidoVentana = `
        <html>
        <head>
            <title>COSTE JANANDRED - ${codigo}</title>
            <style>
                body { font-family: 'Poppins', sans-serif; color: #121212; padding: 40px; }
                .header { border-bottom: 2px solid #D4AF37; padding-bottom: 20px; margin-bottom: 20px; }
                .titulo { font-size: 24px; font-weight: bold; color: #D4AF37; }
                .info { margin-bottom: 20px; line-height: 1.6; }
                .totales { background: #f9f9f9; padding: 20px; border-radius: 10px; margin-top: 30px; }
                .totales p { font-size: 16px; margin: 5px 0; }
                .total-final { font-size: 20px; font-weight: bold; color: #D4AF37; }
                pre { background: #f4f4f4; padding: 15px; border-radius: 8px; font-family: inherit; }
            </style>
        </head>
        <body>
            <div class="header">
                <div class="titulo">COSTE JANANDRED</div>
                <div>Reporte de Cotización Técnica</div>
            </div>
            <div class="info">
                <p><strong>Código:</strong> ${codigo}</p>
                <p><strong>Cliente:</strong> ${cliente}</p>
                <p><strong>Producto:</strong> ${producto}</p>
                <p><strong>Fecha:</strong> ${fecha}</p>
            </div>
            <h3>Detalle de Materiales</h3>
            <pre>${listado || 'Sin materiales cargados.'}</pre>
            <div class="totales">
                <p><strong>Costo Real Operativo:</strong> ${costoText}</p>
                <p><strong>Ganancia Neta Calculada:</strong> ${gananciaText}</p>
                <p class="total-final"><strong>Precio de Venta Sugerido:</strong> ${precioText}</p>
            </div>
            <script>
                window.onload = function() { window.print(); window.close(); }
            </script>
        </body>
        </html>
    `;

    const ventanaPdf = window.open("", "_blank");
    ventanaPdf.document.write(contenidoVentana);
    ventanaPdf.document.close();
});

document.addEventListener("DOMContentLoaded", () => {
    actualizarDashboardYHistorial();
    abrirModulo("inicio");
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}

if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("service-worker.js")
            .then(reg => console.log("Service Worker registrado con éxito", reg))
            .catch(err => console.error("Error al registrar el Service Worker", err));
    });
}