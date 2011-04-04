/**
*		@file user.js
*		@author brad robertson
*
*		User model
*/
App.Models.User = Backbone.Model.extend({
	initialize: function(){
		console.log("new user: ", this.get('name'));
	},
	clear: function(){
		this.destroy();
		this.view.remove();
	},
	hello: function(){
		return ["Hi", this.get('name'), "!!"].join(' ');
	}
});

/**
*
*		Users collection
*/
App.Collections.Users = Backbone.Collection.extend({
	url: '/users',
	model: App.Models.User
});