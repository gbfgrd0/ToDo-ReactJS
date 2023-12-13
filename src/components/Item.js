
class Item{

    static IdAtual = 0;

    constructor(texto){
        this.id = Item.IdAtual++;
        this.texto = texto;
        this.done = false;
    }
}

export default Item