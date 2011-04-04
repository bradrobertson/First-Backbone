/**
*		@public
*		@author brad robertson
*
*		Application wide view
*/
App.Views.Application = Backbone.View.extend({
	el: $("#page"),
	
	/**
	*
	*		Add a user to the view
	*/
	add: function(user){
		// Instantiate new view
		var view = new App.Views.Users.Show({model:user});
		// Render the html, append the element to our ul list
		this.$("#users").append(view.render().el);
	},
	
	/**
	*
	*		Add all users
	*/
	addAll: function(){
		App.users.collection.each(this.add);
	},
	
	/**
	*
	*		Bind events and fetch users
	*/
	initialize: function(options){
		// Ensure functions are bound to this
		_.bindAll(this, 'add', 'addAll');
		
		App.users.collection.bind('add', this.add);
		App.users.collection.bind('refresh', this.addAll);
		
		// Fetch users
		App.users.collection.fetch();
	}
	
});
