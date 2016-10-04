var Backbone = require('backbone');
var $ = require('jquery');
var Login = require('./view/Login.js');
var User = require('./model/User.js');
var Main_view = require('./view/space_status_view1.js');
var Model = require('./model/model_work_status.js');
var Collections =  require('./collection/space_collections.js')

module.exports = Backbone.Router.extend({
    initialize: function (options) {
    },

    routes: {
        ""      :"status",
        "login": "login",
        "home": "home",
        "status":"status"
    },

    login: function() {
        console.log('in jlogin');

        app.login = new Login({ model: app.user });

        app.node.html( app.login.render().$el );
    },

    home: function(query, page) {
        console.log('in jhome');
        // ...
    },

    status: function(){

        console.log("i am awesome");
        app.collection = new Collections();
        app.view  =new Main_view({collection : app.collection});
        
    }
});