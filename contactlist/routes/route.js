var express = require('express');
var router = express.Router();
const Menu = require('../models/Menu');

// Retrieving Menu
router.get('/Menu', (req, res, next)=>{
	//res.send('Retrieving menu');
	Menu.find(function(err, menus){
		res.json(menus);
	});
});

// Add Item to Menu
router.post('/AddItem', (req, res, next)=>{
	// logic to add Menu
	var newItem = new Menu({
		name: req.body.name,
		description: req.body.description,
		price: req.body.price
	});

	newItem.save((err, item)=>{
		if (err)
		{
			res.json({msg: 'Failed to add item'});
		}
		else
		{
			res.json({msg: 'New Item added successfully'});
		}
	});
});

// Delete Item
router.delete('/delete/:id', (req, res, next)=>{
	Menu.remove({ _id: req.params.id }, function(err, result){
		if(err)
		{
			res.json(err);
		}
		else
		{
			res.json(result);
		}
	});
});

module.exports = router;