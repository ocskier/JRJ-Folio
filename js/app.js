$(document).ready(function() {
    var projectsArray = [{Url: "https://ocskier.github.io/Train-Scheduler/", Pic: "assets/images/railway-station-619082_1280.jpg", Name: "Train Scheduler"},
    {Url: "https://ocskier.github.io/Trivia-Game/", Pic: "assets/images/question-mark-1872665_1280.jpg", Name: "Trivia Game"},
    {Url: "https://ocskier.github.io/unit-4-game/", Pic: "assets/images/main-thumb-t-1785517-200-boztfctkwxbzmfjwurneimbimaluhaxk.jpeg", Name: "Star Wars Battle"},
    {Url: "https://ocskier.github.io/Word-Guess-Game/", Pic: "assets/images/Screenshot (5).png", Name: "Word Game"},
    {Url: "https://jenguin777.github.io/project1/index.html", Pic: "assets/images/tithe-favicon.1.png", Name: "Tithe App"},
    {Url: "https://ocskier.github.io/Api-Ajax-Hw/", Pic: "assets/images/window-615427_1920.jpg", Name: "Api Demo"}];

    for (var i=0;i<projectsArray.length;i++) {
        var newProjDiv = $('<div class="col s12 m4 l3"></div>');
        var newCardDiv = $('<div class="card mycard"></div>');
        var newCardA = $('<a href="'+projectsArray[i].Url+'" target="blank" class ="mycard-a" class="waves-effect waves-light"></a>');
        var newCardImg = $(' <div class="card-image">');
        newCardImg.append('<img src="'+projectsArray[i].Pic+'" alt="Train Pic" style="border-radius: 25px 25px 0 0;">');
        var newCardContent = $('<div class="card-content mycardbody">');
        newCardContent.append('<p class="ctr-txt">'+projectsArray[i].Name+'</p>');
        newCardDiv.append(newCardA).append(newCardImg).append(newCardContent);
        newProjDiv.append(newCardDiv);
        $("#proj-row").append(newProjDiv);
    }
});