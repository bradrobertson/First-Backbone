/**
*		@file app.js
*
*		App namespace and initializer
*/

if (typeof App == "undefined" || !App) {
    var App = {};
}

App = {
	init: function(){
		App.users = {
			collection: new App.Collections.Users,						// init user collection
			form: new App.Views.Users.New
		};
		App.application = new App.Views.Application;			// start the application
	},
	Models: {},
	Views: {
		Users: {}
	},
	Collections: {},
	Controllers: {}
};