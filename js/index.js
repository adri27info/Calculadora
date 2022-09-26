import { Calculadora } from "./class/Calculadora.js";

const botonesNumeros =  document.getElementsByClassName("numero");
const botonesOperaciones =  document.getElementsByClassName("operacion");
const displayAnterior = document.getElementById("anterior");
const displayActual = document.getElementById("actual");

function asignarEventos() {
    limpiarDisplays(displayAnterior, displayActual);
    let calculadora = new Calculadora(displayAnterior, displayActual);
    for (let index = 0; index < botonesNumeros.length; index++) {
        botonesNumeros[index].addEventListener("click", (boton) => {
            calculadora.agregarNumero(boton.target.textContent);
        })
    }
    for (let index = 0; index < botonesOperaciones.length; index++) {
        botonesOperaciones[index].addEventListener("click", (boton) => {
            calculadora.realizarOperacion(boton.target.value);
        })
    }
}

function limpiarDisplays(displayAnterior, displayActual) {
    displayAnterior.value = "";
    displayActual.value = "";
}

asignarEventos();