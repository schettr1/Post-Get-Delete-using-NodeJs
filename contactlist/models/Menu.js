var mongoose = require('mongoose');


// Menu Schema
var MenuSchema = mongoose.Schema({
	name:{
		type: String,
		required: true
	},

	description:{
		type: String,
		required: true
	},

	price:{
		type: String,
		required: true
	}
});


var Model = module.exports = mongoose.model('Menu', MenuSchema);   // 'Menu' is the collection name in DB
