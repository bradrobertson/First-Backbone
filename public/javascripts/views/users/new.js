/**
*		@file views/users/new.js
*
*		Capture events for creating a new user
*/
App.Views.Users.New = Backbone.View.extend({
	// Root element for new user
	el: document.getElementById('new-user-form'),

	events: {
		'click #user-submit': 'add'
	},
	
	/**
	*
	*		Add user to db, update collection and reset view
	*/
	add: function(){
		App.users.collection.create(this.serialize());
		this.clear();
	},
	
	/**
	*
	*		Clear the form after submit
	*/
	clear: function(){
		this.el.reset();
	},
	
	/**
	*
	*		Serialize our new user form to create a user
	*/
	serialize: function(){
		return {
			name: this.$("#user-name").val(),
			sex: this.$("#user-sex").val(),
			birth: new Date(this.$("#user-birth").val())
		};
	},
	
	/**
	*
	*		Initialize the new view
	*/
	initialize: function(){
		_.bindAll(this, 'clear', 'serialze');
	}
});