let carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2020,

    ligar: function(){
        console.log("O carro ligou 🚗💨");
    },
    mostrarInfo:function(){
        console.log(`Marca: ${this.marca},\nModelo:${this.modelo}`)
    }
};
carro.ligar();
carro.mostrarInfo();

