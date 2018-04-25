var portfolio = {
    Hangman: {
        title : "Hangman Word Game", 
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
        imageUrl: "assets/images/calendar.jpg",
        deployUrl: "#",
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
       
       var grandParentDiv = $("<a/>");
    
       grandParentDiv.attr({
           href: bannerImage,
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

    for (i = 1; i < portfoliioKeysArray; i++){

        var slideNum = [i];
        var carouselTarget = $("<li>");

        carouselTarget.attr({
            "data-target": "#carouselPortfolio",
            "data-slide-to" : slideNum
        })

        $("#carouseldatadrop").append(carouselTarget);
    }


}





