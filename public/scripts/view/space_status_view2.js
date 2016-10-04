var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');




module.exports = Backbone.View.extend({
            el: $('#container2'),
        

            initialize: function() {

                this.render();
            },

            render: function() {
            	// console.log(this.model);
            	 app.a = this.model.toJSON();
            	console.log(app.a);
            	 
      			timemn_temp = '<span>'+app.a.time_min+'</span>'+'<br>';
       			activity_temp = '<span>'+app.a.activity_type+'</span>'+'<br>';
       			timehr_temp = '<span>'+app.a.time_hours+'</span>'+'<br>';
       			detail_temp = '<span>'+app.a.details+'</span>'+'<br>';
       			date_temp = '<span>'+app.a.date+'</span>'+'<br>';
            	this.$el.append(date_temp+activity_temp+timehr_temp+timemn_temp+detail_temp);
            	return this;
			}

  });
