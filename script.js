const preciosBase = {
    "Dulces": 1.00,
    "Rosa Natural": 1.00,
    "Rosa Artificial": 1.00,
    "Follaje": 1.00,
    "Flor Seca": 1.00,
    "Globo Látex": 1.00,
    "Globo Metálico": 1.00,
    "Globo Burbuja": 1.00,
    "Globo Transparente": 1.00,
    "Globo Personalizado": 1.00,
    "Globo Número": 1.00,
    "Globo Letra": 1.00,
    "Globo Corazón": 1.00,
    "Globo Estrella": 1.00,
    "Globo Cromado": 1.00,
    "Caja Pequeña": 1.00,
    "Caja Mediana": 1.00,
    "Caja Grande": 1.00,
    "Caja Corazón": 1.00,
    "Caja Acrílica": 1.00,
    "Caja Transparente": 1.00,
    "Caja Sorpresa": 1.00,
    "Bolsa Kraft": 1.00,
    "Bolsa Regalo": 1.00,
    "Bolsa Organza": 1.00,
    "Bolsa Celofán": 1.00,
    "Bolsa Papel": 1.00,
    "Canasta": 1.00,
    "Ancheta": 1.00,
    "Cofre Decorativo": 1.00,
    "Papel Vinil": 1.00,
    "Papel Vinipel": 1.00,
    "Papel Crepé": 1.00,
    "Papel Seda": 1.00,
    "Papel Kraft": 1.00,
    "Papel Celofán": 1.00,
    "Papel Coreano": 1.00,
    "Papel Decorativo": 1.00,
    "Papel Metalizado": 1.00,
    "Papel Espejo": 1.00,
    "Papel Perlado": 1.00,
    "Papel Adhesivo": 1.00,
    "Papel Scrapbook": 1.00,
    "Moños": 1.00,
    "Cintas": 1.00,
    "Lazos": 1.00,
    "Yute": 1.00,
    "Encaje": 1.00,
    "Perlas": 1.00,
    "Diamantes Acrílicos": 1.00,
    "Escarcha": 1.00,
    "Glitter": 1.00,
    "Confeti": 1.00,
    "Plumas Decorativas": 1.00,
    "Pompones": 1.00,
    "Stickers": 1.00,
    "Etiquetas": 1.00,
    "Tarjetas": 1.00,
    "Tarjetas Personalizadas": 1.00,
    "Foami": 1.00,
    "Foami Escarchado": 1.00,
    "Cartulina": 1.00,
    "Cartón Paja": 1.00,
    "Cartón Pluma": 1.00,
    "Cartón Gris": 1.00,
    "Acetato": 1.00,
    "MDF": 1.00,
    "Madera Balsa": 1.00,
    "Icopor": 1.00,
    "Espuma Floral": 1.00,
    "Corcho": 1.00,
    "Silicona Barra": 1.00,
    "Silicona Líquida": 1.00,
    "Pegamento Blanco": 1.00,
    "Pegamento Instantáneo": 1.00,
    "Cinta Doble Faz": 1.00,
    "Cinta Transparente": 1.00,
    "Cinta Enmascarar": 1.00,
    "Cinta Decorativa": 1.00,
    "Impresión Color": 1.00,
    "Impresión Blanco y Negro": 1.00,
    "Papel Fotográfico": 1.00,
    "Fotografía": 1.00,
    "Laminado": 1.00,
    "Taza Blanca": 1.00,
    "Taza Mágica": 1.00,
    "Taza de Color": 1.00,
    "Vaso Plástico": 1.00,
    "Vaso de Vidrio": 1.00,
    "Vaso Térmico": 1.00,
    "Copa": 1.00,
    "Botella Decorativa": 1.00,
    "Termo": 1.00,
    "Agua": 1.00,
    "Jugo": 1.00,
    "Gaseosa": 1.00,
    "Café": 1.00,
    "Té": 1.00,
    "Energizante": 1.00,
    "Vino": 1.00,
    "Cerveza": 1.00,
    "Whisky": 1.00,
    "Licor": 1.00,
    "Peluche Pequeño": 1.00,
    "Peluche Mediano": 1.00,
    "Peluche Grande": 1.00,
    "Llavero": 1.00,
    "Portarretrato": 1.00,
    "Vela Aromática": 1.00,
    "Perfume": 1.00,
    "Loción": 1.00,
    "Maquillaje": 1.00,
    "Accesorios": 1.00,
    "Frutas": 1.00,
    "Fresas": 1.00,
    "Uvas": 1.00,
    "Manzanas": 1.00,
    "Bananos": 1.00,
    "Quesos": 1.00,
    "Jamón": 1.00,
    "Galletas": 1.00,
    "Snacks": 1.00,
    "Marcador": 1.00,
    "Esfero": 1.00,
    "Lápiz": 1.00,
    "Colores": 1.00,
    "Pintura Acrílica": 1.00,
    "Vinilo": 1.00,
    "Pinceles": 1.00,
    "Regla": 1.00,
    "Tijeras": 1.00,
    "Bisturí": 1.00,
    "Luces LED": 1.00,
    "Tira LED": 1.00,
    "Baterías": 1.00,
    "Cargador": 1.00,
    "Parlante": 1.00,
    "Palitos de Balso": 1.00,
    "Palitos de Paleta": 1.00,
    "Palitos de Pincho": 1.00,
    "Arena Decorativa": 1.00,
    "Césped Artificial": 1.00,
    "Gasolina": 1.00,
    "Parqueadero": 1.00,
    "Peajes": 1.00,
    "Domicilio": 1.00,
    "Envío": 1.00
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

    const servicios = Number(document.getElementById("servicios").value || 0);

    const indirectos = Number(document.getElementById("indirectos").value || 0);

    const otrosGastos = Number(document.getElementById("otros").value || 0);


const costoRealTotal = 
costoMateriales + 
manoObra + 
transp + 
servicios + 
indirectos + 
otrosGastos;
    
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
