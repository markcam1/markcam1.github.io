var portfolio = {
    Hangman: {
        title : "Hangman Word game", 
        sub: "JavaScript & jQuery",
        description: "This is the first game I created using HTML/CSS and JavaScript and jQuery." +
        "The code is far from perfect but I’m proud of the design theme and use of an object to hold the game parameters.",
        imageUrl: "assets/images/hang.jpg",
        deployUrl: "https://markcam1.github.io/Hangman-Game/",
        codeUrl: "https://github.com/markcam1/Hangman-Game"
    },
    StarWars : {
        title : "Fan appreciation game", 
        sub: "JavaScript", 
        description: "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.",
        imageUrl: "assets/images/sw.jpg",
        deployUrl: "",
        codeUrl: "",
    },
    Trivia : {
        title : "Interstellar Trivia",
        sub: "JavaScript",
        description: "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.",
        imageUrl: "assets/images/triv.jpg",
        deployUrl: "",
        codeUrl: "",
    },

    gifShow : {
        title: "Dancing Gig Machine", 
        sub: "created with API Calls (ajax)",
        description: "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.",
        imageUrl: "assets/images/gif.jpg",
        deployUrl: "",
        codeUrl: ""
    },
    RPS : {
        title: "Multiplayer Rock-Paper-Sciccors", 
        sub: "created with Firebase (realtime database)",
        description: "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.",
        imageUrl: "assets/images/rps.jpg",
        deployUrl: "",
        codeUrl: "",
    },
    TeamWork : {
        title: "Calendar", 
        sub: "??",
        description: "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.",
        imageUrl: "#",
        deployUrl: "#",
        codeUrl: "https://calendarapp1bootcamp.github.io/calendar_final/",
    },

}

var aClass = "list-group-item list-group-item-action flex-column align-items-start";
var flexClass = "d-flex w-100 justify-content-between";
var bootMarg = "mb-1";
//<img src="..." class="rounded float-right" alt="...">


$(document).ready(function(){
    function buttonPusher (){
        console.log(portfolio)
        
        for (var key in portfolio){
            buttonData = portfolio[key];
            screenRender(buttonData);
        }
    } 
    
    buttonPusher();
    
    function screenRender(inButtons){
    
       newBtn = inButtons;
       console.log("newBtn")
       var bannerTitle = newBtn.title;
       var bannerSubTitle = newBtn.sub;
       var bannerDesc = newBtn.description;
       var bannerImage = newBtn.imageUrl;
       
       var grandParentDiv = $("<a/>");
    
       grandParentDiv.attr({
           href: bannerImage,
           class: aClass,
       })
       
       var headDiv = $("<div/>");
       var headDivHeading = $("<h4>");
       var paragraphText = $("<p>");
       var smallText = $("<small class='text-muted'>").text(bannerSubTitle);
       
       headDiv.attr({
           class: flexClass,
       })
       headDivHeading.attr({
           class: bootMarg,
       })
       paragraphText.attr({
           class: bootMarg,
       })

       $(headDivHeading).text(bannerTitle);
       $(paragraphText).text(bannerDesc);


       $(grandParentDiv).append(headDiv);
       $(headDiv).append(headDivHeading);
       $(grandParentDiv).append(paragraphText);
       $(grandParentDiv).append(smallText);

    
       $("#buttondrop").append(grandParentDiv)
    
    }






})



