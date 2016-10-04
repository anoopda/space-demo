var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var Main_template = require('../templates/main_template.js');
var second_view  = require('./space_status_view2.js');
// var Model = require('../model/model_work_status.js');



module.exports = Backbone.View.extend({

	el : $('#container'),

    initialize: function() {
        this.render();
    },

    render: function() {
    	console.log("View1");
    	var template= _.template(Main_template);
        this.$el.html(template);
        return this;
    },

    events: {
        "click #btn" : "save"
    },

    save : function(){
   
    var time_hrs1 =	 $('#time_hours>option:selected').text(),
 	   	time_min1 = $('#time_min>option:selected').text(),
 	   	project1  =  $('#project').val();
 	   	activity_type1 = $('#activity_type>option:selected').text(),
 	   	date1 = $('#date').val(),
 	   	details1 = $('#activity_description').val()

 	   	console.log(date1);
    this.collection.push({time_hours:time_hrs1,time_min:time_min1,activity_type:activity_type1,details:details1,date:date1});
    app.last = this.collection.last();

       if ( !! app.last ) {
           row = new second_view({ 'model': app.last});
           
       }

       return this;
   




    }
});


