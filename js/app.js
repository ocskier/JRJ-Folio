$(document).ready(function() {

    function Project (url,pic,name) {
        this.Url = url;
        this.Pic=pic;
        this.Name=name;
    }

    var Proj1=new Project("https://ocskier.github.io/Train-Scheduler/","assets/images/railway-station-619082_1280.jpg","Train Scheduler");
    var Proj2=new Project("https://ocskier.github.io/Trivia-Game/","assets/images/question-mark-1872665_1280.jpg","Trivia Game");
    var Proj3=new Project("https://ocskier.github.io/unit-4-game/","assets/images/main-thumb-t-1785517-200-boztfctkwxbzmfjwurneimbimaluhaxk.jpeg","Star Wars Battle");
    var Proj4=new Project("https://ocskier.github.io/Word-Guess-Game/","assets/images/Screenshot (5).png","Word Game");
    var Proj5=new Project("https://jenguin777.github.io/project1/index.html","assets/images/tithe-favicon.1.png","Tithe App");
    var Proj6=new Project("https://ocskier.github.io/Api-Ajax-Hw/","assets/images/window-615427_1920.jpg","Api Demo");
    var Proj7=new Project("https://github.com/ocskier/LIRI-Node-App","assets/images/bot.jpg","LIRI Bot");

    var projectsArray = [];
    projectsArray.push(Proj1,Proj2,Proj3,Proj4,Proj5,Proj6,Proj7);

    for (var i=0;i<projectsArray.length;i++) {
        var newProjDiv = $('<div class="col s12 m4 l3"></div>');
        var newCardDiv = $('<div class="card mycard"></div>');
        var newCardA = $('<a href="'+projectsArray[i].Url+'" target="blank" class ="mycard-a" class="waves-effect waves-light"></a>');
        var newCardImg = $(' <div class="card-image">');
        newCardImg.append('<img src="'+projectsArray[i].Pic+'" alt="Portfolio Pic" style="border-radius: 25px 25px 0 0;">');
        var newCardContent = $('<div class="card-content mycardbody">');
        newCardContent.append('<p class="ctr-txt">'+projectsArray[i].Name+'</p>');
        newCardDiv.append(newCardA).append(newCardImg).append(newCardContent);
        newProjDiv.append(newCardDiv);
        $("#proj-row").append(newProjDiv);
    }
});