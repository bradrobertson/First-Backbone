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
		console.log("app init!");
	},
	Models: {},
	Views: {},
	Collections: {},
	Controllers: {}
};