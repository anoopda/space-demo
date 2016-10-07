var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');




module.exports = Backbone.View.extend({
            // el: $('#status_history'),
        

            initialize: function() {

                this.render();
            },

            render: function() {
            	console.log(this.model);
            	 app.a = this.model.toJSON();
            	console.log(this.el);
            	 
      	   // var ee = $('#status_history');

      
      			project_temp = '<span>'+app.a.project+'</span>'+'<br>';
       			activity_temp = '<span>'+app.a.activity_type+'</span>'+'<br>';
       			timehr_temp = '<span>'+app.a.time_hours+'</span>'+'<br>';
       			timemn_temp = '<span>'+app.a.time_min+'</span>'+'<br>';
       			detail_temp = '<span>'+app.a.details+'</span>'+'<br>';
       			date_temp = '<span>'+app.a.date+'</span>'+'<br>';

             $("#status_history").append(date_temp+activity_temp+project_temp+timehr_temp+timemn_temp+detail_temp);          
			}

  });
