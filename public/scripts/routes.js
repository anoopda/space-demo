var Backbone = require('backbone');
var $ = require('jquery');

var Login = require('./view/Login.js');
var User = require('./model/User.js');
var Main_view = require('./view/space_status_view1.js');
var Model = require('./model/model_work_status.js');
var Collections = require('./collection/space_collections.js')

var Train_list = require('./view/Training_list.js');
var Login = require('./view/Login.js');
var User = require('./model/User.js');

var trainingCollection = require('./collection/training_collection.js');

var Sidenav = require('./view/sidenav-view.js');


module.exports = Backbone.Router.extend({


    initialize: function(options) {

    },

    routes: {
        "": "login",
        "login": "login",
        "home": "home",

        "status": "status",

            "Training": "Training"

    },

    login: function() {
        console.log('in jlogin');

        app.login = new Login({ model: app.user });

        app.node.html(app.login.render().$el);
    },

    home: function(query, page) { 
         console.log('indsfsf home');
        app.sidenav = new Sidenav();
        $(".employees, .sidenav-hover-employees").mouseover(function() {
            $(".sidenav-hover-employees").show();
        });
        $(".employees, .sidenav-hover-employees").mouseout(function() {
            $(".sidenav-hover-employees").hide();
        });
        $(".vacation, .sidenav-hover-vacation").mouseover(function() {
            $(".sidenav-hover-vacation").show();
        });
        $(".vacation, .sidenav-hover-vacation").mouseout(function() {
            $(".sidenav-hover-vacation").hide();
        });
        $(".projects, .sidenav-hover-projects").mouseover(function() {
            $(".sidenav-hover-projects").show();
        });
        $(".projects, .sidenav-hover-projects").mouseout(function() {
            $(".sidenav-hover-projects").hide();
        });
        $(".address, .sidenav-hover-address").mouseover(function() {
            $(".sidenav-hover-address").show();
        });
        $(".address, .sidenav-hover-address").mouseout(function() {
            $(".sidenav-hover-address").hide();
        });
        $(".training, .sidenav-hover-training").mouseover(function() {
            $(".sidenav-hover-training").show();
        });
        $(".training, .sidenav-hover-training").mouseout(function() {
            $(".sidenav-hover-training").hide();
        });
        $(".daily-status, .sidenav-hover-daily-status").mouseover(function() {
            $(".sidenav-hover-daily-status").show();
        });
        $(".daily-status, .sidenav-hover-daily-status").mouseout(function() {
            $(".sidenav-hover-daily-status").hide();
        });
        // ...
    },

   



       
        // ...
 status: function() {

        app.sidenav = new Sidenav();
        app.collection = new Collections();
        app.view = new Main_view({ collection: app.collection });
    },
    Training: function() {
        app.sidenav = new Sidenav();
        var trainInfo = new trainingCollection();
        app.trainingList = new Train_list({ collection: trainInfo });







    }
});
