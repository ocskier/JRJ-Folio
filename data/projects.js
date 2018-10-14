function Project (url,pic,name) {
    this.Url = url;
    this.Pic=pic;
    this.Name=name;
}

const Proj1=new Project("https://ocskier.github.io/Train-Scheduler/","assets/images/railway-station-619082_1280.jpg","Train Scheduler");
const Proj2=new Project("https://ocskier.github.io/Trivia-Game/","assets/images/question-mark-1872665_1280.jpg","Trivia Game");
const Proj3=new Project("https://ocskier.github.io/unit-4-game/","assets/images/main-thumb-t-1785517-200-boztfctkwxbzmfjwurneimbimaluhaxk.jpeg","Star Wars Battle");
const Proj4=new Project("https://ocskier.github.io/Word-Guess-Game/","assets/images/Screenshot5.png","Word Game");
const Proj5=new Project("https://jenguin777.github.io/project1/index.html","assets/images/tithe-favicon.1.png","Tithe App");
const Proj6=new Project("https://ocskier.github.io/Api-Ajax-Hw/","assets/images/window-615427_1920.jpg","Api Demo");
const Proj7=new Project("https://github.com/ocskier/LIRI-Node-App","assets/images/bot.jpg","LIRI Bot");
const Proj8=new Project("https://github.com/ocskier/Bamazon","assets/images/fancycrave.jpg","Bamazon");
const Proj9=new Project("https://nameless-plateau-29518.herokuapp.com/","assets/images/love-logo-hi.png","Match Maker");
const Proj10=new Project("https://intense-wildwood-45271.herokuapp.com/","assets/images/fabio-alves-773406-unsplash.jpg","Burger App");
const Proj11=new Project("https://fierce-basin-24175.herokuapp.com/","assets/images/fabio-alves-773406-unsplash.jpg","Serialize Burger");
const Proj12=new Project("https://secret-gorge-60402.herokuapp.com/","assets/images/jeshoots-com-436787-unsplash.jpg","Aristotle");

const projectsArray = [];
projectsArray.push(Proj1,Proj2,Proj3,Proj4,Proj5,Proj6,Proj7,Proj8,Proj9,Proj10,Proj11,Proj12);

exports = projectsArray;