/**
*
*		Load all dependencies async
*/

$script(['https://ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.min.js','/javascripts/underscore.js'], 'base');

$script.ready('base', function(){
  $script(['/javascripts/backbone.js?v='+now, '/javascripts/app.js?v='+now], 'mvc');
});

$script.ready('mvc', function(){
  $script(['/javascripts/models/user.js?v='+now, 
    '/javascripts/controllers/users_controller.js?v='+now,
    '/javascripts/views/users/new.js?v='+now,
    '/javascripts/views/users/show.js?v='+now,
    '/javascripts/views/app_view.js?v='+now
    ], function(){
    $script.domReady(App.init);
  });
});
