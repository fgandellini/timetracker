define([
	// Application.
	"app"
],

// Map dependencies from above array.
function(app) {

	// Create a new module.
	var Customer = app.module();

	// Default model.
	Customer.Model = Backbone.Model.extend({
		defaults: {
			name: 'New Customer'
		},
		initialize: function(){}
	});

	// Default collection.
	Customer.Collection = Backbone.Collection.extend({
		model: Customer.Model
	});

	// Return the module for AMD compliance.
	return Customer;

});
