define([
	// Application.
	"app"
],

// Map dependencies from above array.
function(app) {

	// Create a new module.
	var Project = app.module();

	// Default model.
	Project.Model = Backbone.Model.extend({
		defaults: {
			customer: '',
			name: 'New Customer'
		},
		initialize: function(customer){
			this.set('customer', customer);
		}
	});

	// Default collection.
	Project.Collection = Backbone.Collection.extend({
		model: Project.Model
	});

	// Return the module for AMD compliance.
	return Project;

});
