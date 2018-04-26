var portfolio = {
    Hangman: {
        title : "Hangman Word Game", 
        sub: "JavaScript & jQuery",
        description: "This is my first interactive creation using HTML/CSS and JavaScript and jQuery." +
        "The code is far from perfect but I’m proud of the design theme and use of an object to hold the game parameters.",
        imageUrl: "assets/images/hang.jpg",
        deployUrl: "https://markcam1.github.io/Hangman-Game/",
        codeUrl: "https://github.com/markcam1/Hangman-Game"
    },
    StarWars : {
        title : "Star Wars Fan Appreciation Game", 
        sub: "JavaScript, jQuery, Bootstrap CSS", 
        description: "For this production I wanted to design an experience that will pull players into the game world without taking itself too seriously." + 
        " To accomplish this there’s a starship-full of jQuery to move the game players around the DOM. ",
        imageUrl: "assets/images/sw.jpg",
        deployUrl: "https://markcam1.github.io/StarWarsGame/",
        codeUrl: "https://github.com/markcam1/StarWarsGame",
    },
    Trivia : {
        title : "Interstellar Trivia",
        sub: "JavaScript, jQuery, ajax (jQuery), Bootstrap CSS",
        description: "The theme to this application came directly from my kid’s current fascination the solar system; like a children’s book its simple and topical." +
        "The code employs a jQuery-ajax call to show users a GIF representing the correctness of their choice. ",
        imageUrl: "assets/images/triv.jpg",
        deployUrl: "https://markcam1.github.io/TriviaGame/",
        codeUrl: "https://github.com/markcam1/TriviaGame",
    },

    gifShow : {
        title: "The Dancing GIF Engine", 
        sub: "JavaScript, jQuery, ajax (jQuery), Bootstrap CSS",
        description: "Here I created a GIF-getting website that displays dancing GIFS from a preset list," +
        "but the site also allows the user to stop and start the animation and create custom buttons that grab GIFs of their choosing." +
        "The code behind this relies on jQuery.ajax calls and the HTML5’s data-attributes to get the DOM moving and grooving.",
        imageUrl: "assets/images/gif.jpg",
        deployUrl: "https://markcam1.github.io/giftastic/",
        codeUrl: "https://github.com/markcam1/giftastic"
    },
    RPS : {
        title: "Multiplayer Rock-Paper-Sciccors", 
        sub: "JavaScript, jQuery, Firebase (realtime database)",
        description: "With this multiplayer rock/paper/scissors game, I kept the design bright and playful like the interaction space for the players." + 
        "This was a challenging coding assignment given only a week and the heavy Firebase dependency but I completed it using a modular design and the usual suspects including" +
        "js, jQuery and Bootstrap.",
        imageUrl: "assets/images/rps.jpg",
        deployUrl: "https://markcam1.github.io/RPS-Multiplayer/",
        codeUrl: "https://github.com/markcam1/RPS-Multiplayer",
    },
    TeamWork : {
        title: "Calendar", 
        sub: "TBA",
        description: "TBA",
        imageUrl: "assets/images/calendar.jpg",
        deployUrl: "https://calendarapp1bootcamp.github.io/calendar_final/",
        codeUrl: "https://calendarapp1bootcamp.github.io/calendar_final/",
    },

}

var aClass = "list-group-item list-group-item-action flex-column align-items-start";
var flexClass = "d-flex w-100 justify-content-between";
var bootMarg = "mb-1";
var classImgThumb = "img-thumbnail rounded float-right w-25";
var classCarouselItem = "carousel-item";
var classCarousel_Image = "d-block w-100 carouselimage";

$(document).ready(function(){




    function buttonPusher (){

        
        for (var key in portfolio){
            buttonData = portfolio[key];
            screenListRender(buttonData);
            screenCarouselRender(buttonData);
        }


    } 
    

    
    function screenListRender(inButtons){
    
       var newBtn = inButtons;
       var bannerTitle = newBtn.title;
       var bannerSubTitle = newBtn.sub;
       var bannerDesc = newBtn.description;
       var bannerImage = newBtn.imageUrl;
       var bannerDeploy = newBtn.deployUrl;
       
       var grandParentDiv = $("<a/>");
    
       grandParentDiv.attr({
           href: bannerDeploy,
           class: aClass,
       })
       
       var headDiv = $("<div/>");
       var headDivHeading = $("<h4>");
       var paragraphText = $("<p>");
       var smallText = $("<small class='text-muted'>").text(bannerSubTitle);
       var imgThumb = $("<img>");

       headDiv.attr({
           class: flexClass,
       })
       headDivHeading.attr({
           class: bootMarg,
       })
       paragraphText.attr({
           class: bootMarg,
       })
       imgThumb.attr({
           src: bannerImage,
           class: classImgThumb,
           alt: bannerTitle,
       })

       $(headDivHeading).text(bannerTitle);
       $(paragraphText).text(bannerDesc);

       $(grandParentDiv).append(headDiv);
       $(headDiv).append(headDivHeading);

       $(grandParentDiv).append(imgThumb);
       $(grandParentDiv).append(paragraphText);
       $(grandParentDiv).append(smallText);

       $("#buttondrop").append(grandParentDiv)
    }


    function screenCarouselRender(inCarouselBtns){
        
        var newBtn = inCarouselBtns;
        var bannerTitle = newBtn.title;
        var bannerImage = newBtn.imageUrl;
       
       var carouselParentDiv = $("<div/>");
       var carouselImage = $("<img/>");
    
       carouselParentDiv.attr({
           class: classCarouselItem,
       })

       carouselImage.attr({
        src: bannerImage,
        class: classCarousel_Image,
        alt: bannerTitle,
    })
       
        $(carouselParentDiv).append(carouselImage);

       $("#carouseldrop").append(carouselParentDiv)
    
    }

    carouselDataMaker();
    buttonPusher();

})

function carouselDataMaker (){

    carouselCounter = Object.keys(portfolio);
    portfoliioKeysArray = carouselCounter.length;

    for (i = 1; i < portfoliioKeysArray+1; i++){

        var slideNum = [i];
        var carouselTarget = $("<li>");

        carouselTarget.attr({
            "data-target": "#carouselPortfolio",
            "data-slide-to" : slideNum
        })

        $("#carouseldatadrop").append(carouselTarget);
    }


}





