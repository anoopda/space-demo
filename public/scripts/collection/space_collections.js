var Backbone = require('backbone');
var $ = require('jquery');
var model = require('../model/model_work_status.js');


module.exports = Backbone.Collection.extend({
   model: model
})