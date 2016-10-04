var Backbone = require('backbone');
var $ = require('jquery');

module.exports = Backbone.Model.extend({
	url: '/login',

	defaults: {
		date: '',
		project: '',
		activity_type:'',
		time_hours:'',
		time_min:'',
		details:''
	}
});