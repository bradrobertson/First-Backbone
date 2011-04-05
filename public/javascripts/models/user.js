/**
*		@file user.js
*		@author brad robertson
*
*		User model
*/
App.Models.User = Backbone.Model.extend({
	// see Backbone.RailsJSON, specify a name to be wrapped so that rails gets param[:user]
	name: 'user',
	/**
	*
	*		Remove user from db and view
	*/
	clear: function(){
		this.destroy();
		this.view.remove();
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