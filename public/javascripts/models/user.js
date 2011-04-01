/**
*		@file user.js
*		@author brad robertson
*
*		User model
*/
App.Models.User = Backbone.Model.extend({	
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