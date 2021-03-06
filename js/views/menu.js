/**
 * Created by rdvlip on 25.06.2014.
 */
define([
    'jquery',
    'underscore',
    'backbone',
    'text!../../tmpl/menu.html'
], function($, _, Backbone, template){
    return Backbone.View.extend({
        initialize: function(){
            this.render();
            $(document).on('scroll', $.proxy(this.onScroll, this))
        },
        events: {
            'click [navdest]': 'onNavigate'
        },
        render: function(){
            this.$el.html(template);
            this.onScroll()
        },
        isTouchPageTop: function(scrollOffset){
            if(!scrollOffset){
                scrollOffset = $(document).scrollTop();
            }
            var elOffset = this.$el.offset().top;
            return (scrollOffset > elOffset)
        },
        onScroll: function(){
            if(this.isTouchPageTop()){
                this.$el.find('.menu').addClass('menu-fixed')
            }
            else{
                this.$el.find('.menu').removeClass('menu-fixed')
            }
        },
        scrollTo: function(selector){
            var $el = $(selector).first();
            var offset = $el.offset().top;
            if(this.isTouchPageTop(offset)){
                offset -= this.$el.find('.menu').height();
            }
            $('html, body').animate({scrollTop:offset}, 1000)
        },
        onNavigate: function(event){
            destSelector = $(event.target).attr('navdest');
            if(!destSelector){
                destSelector = $(event.target).parents().find('[navdest]').attr('navdest')
            }
            this.scrollTo(destSelector)
        }
    });
});