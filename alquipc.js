const valor = 35000;
let idCliente = Math.floor(Math.random() * 1000);

// Dentro de la Ciudad ------------------------------------

function DentroCiudad() {
    let name = document.getElementById("nombreDentroC").value;
    let days = parseInt(document.getElementById("diasDentroC").value);
    let can = parseInt(document.getElementById("cantidadDentroC").value);

    if (/^([0-9])*$/.test(name)) {
        alert("El campo nombre no puede contener números");
    }else {
        if (name == "" || isNaN(days) || days < 1 || isNaN(can)) {
        alert("Debes llenar todos los Datos Correctamente");
        } else {
            if (can >= 2) {
                let total = days * valor * can;
                localStorage.setItem("subTotal", total);

                let recibo =
                "Recibo de " +
                name +
                "   ID: " +
                idCliente +
                "\n" +
                "Servicio: Dentro de la Ciudad" +
                "\n" +
                "Días alquilados: " +
                days +
                "\n" +
                "Computadores alquilados: " +
                can +
                "\n" +
                "Total: $ " +
                total;

                localStorage.setItem("total", recibo);

                window.location.href = "factura.html";
            } else {
                alert("Debes de Alquilar minimo 2 computadores");
            }
        }
    }
}

// Fuera de la Ciudad ------------------------------------

function FueraCiudad() {
    let name = document.getElementById("nombreFueraC").value;
    let days = parseInt(document.getElementById("diasFueraC").value);
    let can = parseInt(document.getElementById("cantidadFueraC").value);

    if (/^([0-9])*$/.test(name)) {
        alert("El campo nombre no puede contener números");
    } else {
        if (name == "" || isNaN(days) || days < 1 || isNaN(can)) {
            alert("Debes llenar todos los Datos correctamente");
        } else {
            if (can >= 2) {
            let subtotal = days * valor * can;
            let incremento = subtotal * 0.05;
            let total = subtotal + incremento;
            localStorage.setItem("subTotal", total);

            let recibo =
                "Recibo de " +
                name +
                "   ID: " +
                idCliente +
                "\n" +
                "Servicio: Fuera de la ciudad (+5%)\n" +
                "Días alquilados: " +
                days +
                "\n" +
                "Computadores alquilados: " +
                can +
                "\n" +
                "Subtotal: $" +
                subtotal +
                "\n" +
                "Incremento (5%): $" +
                incremento +
                "\n" +
                "Total: $" +
                total;

            localStorage.setItem("total", recibo);

            window.location.href = "factura.html";
            } else {
                alert("Debes alquilar mínimo 2 computadores");
            }
        }
    }
}

// Dentro del Establecimiento ----------------------------

function DentroEstablecimiento() {
    let name = document.getElementById("nombreDentroE").value;
    let can = parseInt(document.getElementById("cantidadDentroE").value);
    let fecha = document.getElementById("diaAlquiler").value;
    let hora = document.getElementById("horaAlquier").value;

    if (/^([0-9])*$/.test(name)) {
        alert("El campo nombre no puede contener números");
    } else {
        if (name == "" || fecha == "" || hora == "" || isNaN(can)) {
        alert("Debes llenar todos los Datos");
        } else {
            if (can >= 2) {
                let subtotal = valor * can;
                let descuento = subtotal * 0.05;
                let total = subtotal - descuento;
                localStorage.setItem("subTotal", total);

                let recibo =
                "Recibo de " +
                name +
                "   ID: " +
                idCliente +
                "\n" +
                "Servicio: Dentro del establecimiento (-5%)\n" +
                "Fecha: " +
                fecha +
                "\n" +
                "Hora: " +
                hora +
                "\n" +
                "Computadores alquilados: " +
                can +
                "\n" +
                "Subtotal: $" +
                subtotal +
                "\n" +
                "Descuento (5%): $" +
                descuento +
                "\n" +
                "Total: $" +
                total;

                localStorage.setItem("total", recibo);

                window.location.href = "factura.html";
            } else {
                alert("Debes alquilar mínimo 2 computadores");
            }
        }
    }
}



window.addEventListener("DOMContentLoaded", function () {
    let recibo = document.getElementById("recibo2");

    if (recibo) {
        let total = localStorage.getItem("total");
        recibo.value = total;
    }
});

// Dias Adicionales

function DiasAdicionales() {
    let recibo = document.getElementById("recibo2");

    let diasExtra = prompt(
        "¿Desea agregar días adicionales? \n(Ingrese número de dias o 0 para cancelar)",
    );

    if (diasExtra !== null) {
        diasExtra = parseInt(diasExtra);

        if (!isNaN(diasExtra) && diasExtra > 0) {
        let subtotal = parseInt(localStorage.getItem("subTotal"));

        let costoExtra = diasExtra * valor;

        let nuevoTotal = subtotal + costoExtra;

        recibo.value +=
            "\n\nDías adicionales: " +
            diasExtra +
            "\nCosto adicional: $" +
            costoExtra +
            "\nNuevo Total: $" +
            nuevoTotal;
        }
    }
}

function volver() {
    window.location.href = "index.html";
}
