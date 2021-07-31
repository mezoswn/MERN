const mongoose = require("mongoose");
//conection to data base
mongoose.connect("mongodb://localhost/jokes", {
	useNewUrlParser: true, //for a dublicate a msg
	useUnifiedTopology: true, //for a dublicate a msg
})
	.then(() => console.log("Established a connection to the database"))
	.catch(err => console.log("Something went wrong when connecting to the database", err));