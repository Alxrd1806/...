const preciosBase = {
    "Dulces": 1.50, "Rosa Natural": 2.50, "Rosa Artificial": 1.00, "Follaje": 0.75, "Flor Seca": 1.25,
    "Globo Látex": 0.30, "Globo Metálico": 1.50, "Globo Burbuja": 2.50, "Globo Transparente": 2.00,
    "Globo Personalizado": 4.00, "Globo Número": 2.00, "Globo Letra": 2.00, "Globo Corazón": 1.50,
    "Globo Estrella": 1.50, "Globo Cromado": 0.60, "Caja Pequeña": 1.50, "Caja Mediana": 2.50,
    "Caja Grande": 4.00, "Caja Corazón": 3.50, "Caja Acrílica": 5.00, "Caja Transparente": 4.50,
    "Caja Sorpresa": 6.00, "Bolsa Kraft": 0.50, "Bolsa Regalo": 1.25, "Bolsa Organza": 0.40,
    "Bolsa Celofán": 0.20, "Bolsa Papel": 0.80, "Canasta": 5.50, "Ancheta": 7.00, "Cofre Decorativo": 8.00,
    "Papel Vinil": 2.00, "Papel Vinipel": 1.50, "Papel Crepé": 0.60, "Papel Seda": 0.25, "Papel Kraft": 0.40,
    "Papel Celofán": 0.35, "Papel Coreano": 1.20, "Papel Decorativo": 0.80, "Papel Metalizado": 1.00,
    "Papel Espejo": 1.50, "Papel Perlado": 1.30, "Papel Adhesivo": 0.90, "Papel Scrapbook": 1.10,
    "Moños": 0.40, "Cintas": 0.60, "Lazos": 0.50, "Yute": 1.25, "Encaje": 1.50, "Perlas": 2.00,
    "Diamantes Acrílicos": 1.80, "Escarcha": 0.50, "Glitter": 1.20, "Confeti": 0.40, "Plumas Decorativas": 1.50,
    "Pompones": 0.80, "Stickers": 0.25, "Etiquetas": 0.15, "Tarjetas": 0.50, "Tarjetas Personalizadas": 1.50,
    "Foami": 0.40, "Foami Escarchado": 0.75, "Cartulina": 0.30, "Cartón Paja": 0.60, "Cartón Pluma": 2.50,
    "Cartón Gris": 1.20, "Acetato": 0.90, "MDF": 3.00, "Madera Balsa": 1.80, "Icopor": 1.00,
    "Espuma Floral": 1.50, "Corcho": 2.20, "Silicona Barra": 0.15, "Silicona Líquida": 2.50,
    "Pegamento Blanco": 1.20, "Pegamento Instantáneo": 0.85, "Cinta Doble Faz": 1.50, "Cinta Transparente": 0.60,
    "Cinta Enmascarar": 1.10, "Cinta Decorativa": 0.95, "Impresión Color": 0.50, "Impresión Blanco y Negro": 0.20,
    "Papel Fotográfico": 0.80, "Fotografía": 0.50, "Laminado": 1.00, "Taza Blanca": 2.50, "Taza Mágica": 5.00,
    "Taza de Color": 3.00, "Vaso Plástico": 0.15, "Vaso de Vidrio": 1.50, "Vaso Térmico": 4.50, "Copa": 2.00,
    "Botella Decorativa": 2.50, "Termo": 6.00, "Agua": 0.50, "Jugo": 0.80, "Gaseosa": 0.75, "Café": 1.20,
    "Té": 1.00, "Energizante": 1.75, "Vino": 12.00, "Cerveza": 1.50, "Whisky": 35.00, "Licor": 15.00,
    "Peluche Pequeño": 4.00, "Peluche Mediano": 8.00, "Peluche Grande": 18.00, "Llavero": 1.50,
    "Portarretrato": 3.50, "Vela Aromática": 2.50, "Perfume": 20.00, "Loción": 10.00, "Maquillaje": 15.00,
    "Accesorios": 5.00, "Frutas": 3.00, "Fresas": 2.50, "Uvas": 2.00, "Manzanas": 1.50, "Bananos": 0.80,
    "Quesos": 4.00, "Jamón": 3.00, "Galletas": 1.20, "Snacks": 1.50, "Marcador": 0.80, "Esfero": 0.40,
    "Lápiz": 0.25, "Colores": 3.50, "Pintura Acrílica": 1.50, "Vinilo": 1.00, "Pinceles": 2.00, "Regla": 0.50,
    "Tijeras": 1.20, "Bisturí": 1.00, "Luces LED": 2.50, "Tira LED": 5.00, "Baterías": 1.50, "Cargador": 4.00,
    "Parlante": 12.00, "Palitos de Balso": 0.80, "Palitos de Paleta": 0.50, "Palitos de Pincho": 0.40,
    "Arena Decorativa": 1.50, "Césped Artificial": 3.50, "Gasolina": 5.00, "Parqueadero": 2.00, "Peajes": 1.00,
    "Domicilio": 3.00, "Envío": 5.00
};

const plantillas = {
    "caja-premium": [
        { nombre: "Dulces", cantidad: 12 },
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
    "btn-inicio": "inicio", "btn-crear": "crear", "btn-historial": "historial", "btn-config": "config",
    "quick-crear": "crear", "quick-historial": "historial"
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

// FUNCIÓN PARA ELIMINAR TILDES Y NORMALIZAR TEXTO
function limpiarTexto(texto) {
    return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();
}

// LÓGICA DE BÚSQUEDA ROBUSTA: SINCRONIZACIÓN PERFECTA DE COINCIDENCIAS
document.getElementById("buscar-material")?.addEventListener("input", (e) => {
    const termino = limpiarTexto(e.target.value);
    const selector = document.getElementById("material");
    const opciones = document.querySelectorAll("#material option");
    let coincidencias = [];

    opciones.forEach((opt, idx) => {
        if (idx === 0) return; // Saltamos el placeholder inicial
        const textoOpcion = limpiarTexto(opt.text);
        
        if (textoOpcion.includes(termino)) {
            opt.style.display = "block";
            coincidencias.push(opt);
        } else {
            opt.style.display = "none";
        }
    });

    // SELECCIÓN AUTOMÁTICA: Vincula el valor real del catálogo de inmediato
    if (coincidencias.length === 1) {
        selector.value = coincidencias[0].value;
        selector.options[0].text = "Material encontrado ✔";
        selector.options[0].value = coincidencias[0].value; // Sincroniza el valor para el botón
    } 
    // Si es un material NUEVO real
    else if (termino.length > 0 && coincidencias.length === 0) {
        selector.options[0].text = `➕ Agregar nuevo: "${e.target.value}"`;
        selector.options[0].value = e.target.value;
        selector.value = e.target.value;
    } 
    // Si se limpia el buscador o hay múltiples opciones flotantes
    else {
        selector.options[0].text = "Seleccione material para agregar";
        selector.options[0].value = "";
        selector.value = "";
    }
});

// ACCIÓN CON ENTER EN EL BUSCADOR
document.getElementById("buscar-material")?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        document.getElementById("btn-agregar-material").click();
    }
});

// LÓGICA ÚNICA PARA INYECTAR EL MATERIAL (COMPATIBLE CON CLIC DIRECTO Y BUSCADOR)
document.getElementById("btn-agregar-material").addEventListener("click", () => {
    const buscador = document.getElementById("buscar-material");
    const selector = document.getElementById("material");
    
    let nombre = "";

    // 1. Si el usuario seleccionó un material directamente de la lista (abriendo el desplegable)
    if (selector && selector.value && selector.value !== "" && selector.options[0].text !== "Material encontrado ✔") {
        nombre = selector.value.trim();
    }
    // 2. Si el buscador automático ya aisló y seleccionó el material correcto
    else if (selector && selector.options[0].text === "Material encontrado ✔" && selector.value) {
        nombre = selector.value.trim();
    } 
    // 3. Si no hay coincidencias y es un material manual totalmente nuevo
    else if (buscador && buscador.value.trim()) {
        nombre = buscador.value.trim();
    }
    
    if (!nombre || nombre === "Material encontrado ✔") return;

    // Buscamos si el nombre existe en las llaves del catálogo original para heredar su precio correcto
    const claveEncontrada = Object.keys(preciosBase).find(key => limpiarTexto(key) === limpiarTexto(nombre));
    const nombreFinal = claveEncontrada !== undefined ? claveEncontrada : nombre;
    const costoInicial = claveEncontrada !== undefined ? preciosBase[claveEncontrada] : 1.00;

    // CONTROL DE DUPLICADOS INMEDIATOS
    const filasParaRevisar = document.querySelectorAll("#listaMateriales .mat-nombre");
    let yaExiste = false;
    filasParaRevisar.forEach(fila => {
        if (fila.innerText.trim().toLowerCase() === nombreFinal.toLowerCase()) {
            yaExiste = true;
        }
    });

    if (yaExiste) {
        if (buscador) buscador.value = "";
        selector.value = "";
        return;
    }

    renderizarFilaMaterial(nombreFinal, 1, costoInicial, 0);
    calcular();

    // Reset completo de la barra y el menú para la próxima búsqueda
    if (buscador) buscador.value = "";
    selector.options[0].text = "Seleccione material para agregar";
    selector.options[0].value = "";
    selector.value = "";
    document.querySelectorAll("#material option").forEach(opt => opt.style.display = "block");
});

document.getElementById("plantilla").addEventListener("change", (e) => {
    const key = e.target.value;
    if (!key || !plantillas[key]) return;
    
    document.getElementById("listaMateriales").innerHTML = "";
    plantillas[key].forEach(m => {
        renderizarFilaMaterial(m.nombre, m.cantidad, preciosBase[m.nombre] || 1.00, 0);
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

    const costoRealTotal = costoMateriales + manoObra + transp + servicios + indirectos + otrosGastos;
    
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

    datos.push({ codigo, cliente, producto, fecha, costo: costoText, ganancia: gananciaText, precio: precioText });
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
    document.getElementById("servicios").value = "";
    document.getElementById("indirectos").value = "";
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
            <\/script>
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
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("service-worker.js")
            .then(reg => {
                console.log("Service Worker registrado con éxito", reg);
                reg.onupdatefound = () => {
                    const installingWorker = reg.installing;
                    installingWorker.onstatechange = () => {
                        if (installingWorker.state === "installed" && navigator.serviceWorker.controller) {
                            window.location.reload();
                        }
                    };
                };
            })
            .catch(err => console.error("Error al registrar el Service Worker", err));
    });
}
