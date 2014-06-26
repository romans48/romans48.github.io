/**
 * Created by rdvlip on 25.06.2014.
 */
requirejs.config({
    baseUrl: "js",
    paths: {
        jquery: 'lib/jquery.min',
        backbone: 'lib/backbone.min',
        underscore: 'lib/underscore.min',
        json: 'lib/json2',
        text: 'lib/text'
    },
    shim: {
        'underscore': {
            exports: '_'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'json': {
            exports: 'JSON'
        }
    }
});

require(['app']);