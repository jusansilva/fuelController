class Calculo{

    consumo = (carro, km_inicial, km_final) => {
        km_percorrido = km_final - km_inicial
        media_km = km_percorrido / carro.tanque

        return media_km

    }

}
module.exports = Calculo