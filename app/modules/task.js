define([
	// Application.
	"app"
],

// Map dependencies from above array.
function(app) {

	// Create a new module.
	var Task = app.module();

	// Default model.
	Task.Model = Backbone.Model.extend({
	
	});

	// Default collection.
	Task.Collection = Backbone.Collection.extend({
		model: Task.Model
	});

	// Return the module for AMD compliance.
	return Task;

});
