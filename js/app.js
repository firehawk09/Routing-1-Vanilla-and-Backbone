window.onload = app;

// runs when the DOM is loaded
function app() {
    "use strict";

    // load some scripts (uses promises :D)
    loader.load(
        //css
        {
            url: "./dist/style.css"
        },
        //js
        {
            url: "./bower_components/jquery/dist/jquery.min.js"
        }, {
            url: "./bower_components/lodash/dist/lodash.min.js"
        }, {
            url: "./bower_components/backbone/backbone.js"
        }
    ).then(function() {
        document.querySelector("html").style.opacity = 1;
        // start app?



        function loadView() {
            alert("a view")
        }

        // function handleRouteChange(event){

        //     var route = event.newURL;
        //     route = route.substring(route.indexOf("#"));
        //     route = route.substring(1);
        //     console.log(route);

        //     var segments = route.split("/");
        //     debugger;

        //     return;
        //     // var callback = routes[1]

        //     if(!callback){
        //         home();
        //         return;
        //     }

        //     callback();



        //     // var template_url = "./templates/"+route.substring(1)+".html";
        //     // console.log(template_url);


        //     // $.get(template_url).then(function(data){
        //     //     page.innerHTML = data;
        //     // }).fail(function(){
        //     //     // handle errors
        //     //     page.innerHTML = '';
        //     // })
        // }

        // define the Router
        var GithubRouter = Backbone.Router.extend({

            routes: {
                "home": "home",
                ":name": "loadView" // views/one, views/two, views/123123kkbjhb
            },

            home: function() {
                var page = document.querySelector(".page");
                page.innerHTML = '';
                alert("home")
            },

            loadView: function(name) {
                var page = document.querySelector(".page");
                $.get("./templates/"+name+".html").then(function(html){
                    page.innerHTML = html;;
                })
            },

            initialize: function(){
                Backbone.history.start();
            }

        });

        // initialize an instance of the Router
        var myGHRouter = new GithubRouter();

    })

}
