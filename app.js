const Express = require("express")
const app = new Express()

var Calculo = require("./modulos/calculo")
var calculo = new Calculo();


app.get("/", function(req, res) {
    res.sendFile(__dirname + "/views/index.html")
})

app.post("/save", function (req, res) {
    var kmInicial = parseInt(res.body.kmInicial)
    var kmFinal = parseInt(res.body.kmFinal)
    var consumo = calculo()
})

listen(5000, "fuelcontroller", function() {
    console.log("servidor conectado")
})