/**
*		@file @user_view.js
*
*		View code for a user
*/
App.Views.Users.Show = Backbone.View.extend({
	// Our user is wrapped in an LI tag
	tagName: 'li',
	// compile and cache the template function for rendering
	template: _.template( $("#user-template").html() ),
	
	/**
	*
	*		Description
	*/
	events: {
		'click .user-destroy': 'clear'
	},
	
	/**
	*
	*		Delete the user from backend and view
	*/
	clear: function(){
		console.log("user-destroy clicked!");
		this.model.clear();
	},
	
	/**
	*		Generate the layout html
	*		Set the content
	*
	*/
	render: function(){
		$(this.el).html( this.template(this.model.toJSON()) );
		return this;
	},
	
	/**
	*		View should be initialized with a model attribute
	*
	*/
	initialize: function(){
		_.bindAll(this, 'render');
		// When the model changes, update the view
		this.model.bind('change', this.render);
		// Set the model's view attribute to this
		this.model.view = this;
	}
	
});