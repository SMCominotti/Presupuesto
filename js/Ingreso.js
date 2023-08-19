class Ingreso extends Dato {
    static contadorIngresos= 0;

    constructor (descripcion, valor){
        super(descripcion, valor);
        this._id = ++Ingreso.contadorIngresos;
    }

    get id (){
        return this._id;
    } //como no es modificable, no agrego set
}