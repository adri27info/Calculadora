export class Calculadora {

    // Constructor al cual le pasamos tanto el valor del display actual y de el anterior
    constructor(displayAnterior = "", displayActual = "") {
        this.displayAnterior = displayAnterior;
        this.displayActual = displayActual;
        this.condicion = false;
        this.almacenarNum = "";
        this.operacion = "";
    }

    /**
     * Funcion la cual se encarga de agregar numeros al display actual y establecer 
     * una condicion a true, la cual hace referencia a que ya se ha guardado un numero
     * antes de realizar alguna operacion previa matematica
     * 
     * @param {string} texto. Este parametro hace referencia al texto del boton pulsado
     */
    agregarNumero(texto) {
        if (this.displayActual.value === "") {
            this.displayActual.value = texto;
        } else {
            this.displayActual.value += texto;
        }
        this.condicion = true;
    }

    /**
     * Funcion la cual se encarga de realizar la operacion matematica asignada por el boton.
     * Segun la condicion se realizara o no la operacion matematica. Si la condicion es falsa
     * eso significa que  aun no se han introducido numeros en los inputs correspondientes.
     * 
     * @param {string} operacion. Este parametro hace referencia a la operacion del boton pulsado
     */
    realizarOperacion(operacion) {
        switch (operacion) {
            case "sumar":
                if (this.condicion) {
                    this.modificarInputs("+", "sumar")
                }else{
                    this.borrarInputs(false);
                }
            break;
            case "restar":
                if (this.condicion) {
                    this.modificarInputs("-", "restar")
                }else{
                    this.borrarInputs(false);
                }
            break;
            case "dividir":
                if (this.condicion) {
                    this.modificarInputs("/", "dividir")
                }else{
                    this.borrarInputs(false);
                }
            break;
            case "multiplicar":
                if (this.condicion) {
                    this.modificarInputs("x", "multiplicar")
                }else{
                    this.borrarInputs(false);
                }
            break;
            case "borrar":
                this.borrarInputs(false);
            break;
            case "igual":
                this.imprimirResultado(this.operacion);
                break;
            default:
            break;
        }
    }

    /**
     * Funcion la cual se encarga de imprimir el resultado en el display resultante teniendo
     * en cuenta la operacion previa.
     * 
     * @param {string} signo. Este parametro hace referencia a la operacion matematica a realizar
     */
    imprimirResultado(signo) {
        if (signo === "") this.borrarInputs(false);
        let resultado;
        switch (signo) {
            case "sumar":
                resultado = parseFloat(this.almacenarNum) + parseFloat(this.displayActual.value);
                this.borrarInputs(true);
                this.displayActual.value = resultado.toFixed(2);
                this.operacion = "";
            break;
            case "restar":
                resultado = parseFloat(this.almacenarNum) - parseFloat(this.displayActual.value);
                this.borrarInputs(true);
                this.displayActual.value = resultado.toFixed(2);
                this.operacion = "";
            break;
            case "dividir":
                resultado = parseFloat(this.almacenarNum) / parseFloat(this.displayActual.value);
                this.borrarInputs(true);
                this.displayActual.value = resultado.toFixed(2);
                this.operacion = "";
            break;
            case "multiplicar":
                resultado = parseFloat(this.almacenarNum) * parseFloat(this.displayActual.value);
                this.borrarInputs(true);
                this.displayActual.value = resultado.toFixed(2);
                this.operacion = "";
            break;
            case "borrar":
                this.borrarInputs(false);
            break;
            default:
            break;
        }
    }

    /**
     * Funcion la cual se encarga de modificar los inputs para mostrar las operaciones
     * que se van concateando. Ademas guarda la ultima operacion realizada y establece
     * la condicion a falsa.
     * 
     * @param {*} signo. Este parametro hace referencia al valor que se pondra en el display superior
     * @param {*} nombreOperacion Este paramtro hace referencia a la ultima operacion que ha realizado el usuario para almacenarse en
     * su variable correspondiente.
     */
    modificarInputs(signo, nombreOperacion) {
        this.almacenarNum = this.displayActual.value;
        this.displayAnterior.value = this.displayActual.value + signo;
        this.displayActual.value = "";
        this.operacion = nombreOperacion;
        this.condicion = false;
    }

    /**
     * Funcion la cual se encarga de limpiar los inputs.
     * 
     * @param {*} flag. Este parametro hace referencia a un booleano el cual ayudara a establecer
     * la condicion dell ultimo numero introducido a false o true
     */
    borrarInputs(flag) {
        if (flag) {
            this.displayAnterior.value = "";
            this.displayActual.value = "";
        }else{
            this.condicion = false;
            this.displayAnterior.value = "";
            this.displayActual.value = "";
        }
    }
}
