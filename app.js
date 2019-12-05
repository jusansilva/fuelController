const Express = require("express")
const app = new Express()

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/views/index.html")
})

listen(5000, "fuelcontroller", function() {
    console.log("servidor conectado")
})