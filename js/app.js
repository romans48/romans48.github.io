/**
 * Created by rdvlip on 25.06.2014.
 */

define(['jquery', 'underscore', 'backbone', 'views/menu'], function($, _, Backbone, MenuView){
    var app = {};
    app.menuView = new MenuView({el: $('.menu-render-place')});
    return app;
});