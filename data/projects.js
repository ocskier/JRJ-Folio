class Project {
    constructor(url, pic, name) {
        this.Url = url;
        this.Pic = pic;
        this.Name = name;
    }
}

<<<<<<< HEAD
const Proj1=new Project("https://ocskier.github.io/Train-Scheduler/","assets/images/railway-station-619082_1280.jpg","Train Scheduler");
const Proj2=new Project("https://ocskier.github.io/Trivia-Game/","assets/images/question-mark-1872665_1280.jpg","Trivia Game");
const Proj3=new Project("https://ocskier.github.io/unit-4-game/","assets/images/main-thumb-t-1785517-200-boztfctkwxbzmfjwurneimbimaluhaxk.jpeg","Star Wars Battle");
const Proj4=new Project("https://ocskier.github.io/Word-Guess-Game/","assets/images/Screenshot5.png","Word Game");
const Proj5=new Project("https://jenguin777.github.io/project1/index.html","assets/images/tithe-favicon.1.png","Tithe App");
const Proj6=new Project("https://ocskier.github.io/Api-Ajax/","assets/images/window-615427_1920.jpg","Api Demo");
const Proj7=new Project("https://github.com/ocskier/LIRI-Node-App","assets/images/bot.jpg","LIRI Bot");
const Proj8=new Project("https://repl.it/@ocskier/Bamazon","assets/images/fancycrave.jpg","Bamazon");
=======
const Proj1=new Project("http://pouracle-basic.herokuapp.com/","https://groceries.morrisons.com/productImages/217/217703011_0_640x640.jpg?identifier=e7cf36512b30ca18065e5a740e6b2e81","Pouracle");
const Proj2=new Project("https://ocskier.github.io/Train-Scheduler/","assets/images/railway-station-619082_1280.jpg","Train Scheduler");
// const Proj3=new Project("https://ocskier.github.io/BLS-Website/","assets/images/christine-mendoza-527612-unsplash.jpg","Brightleaf");
const Proj4=new Project("https://ocskier.github.io/Trivia-Game/","assets/images/question-mark-1872665_1280.jpg","Trivia Game");
const Proj5=new Project("https://ocskier.github.io/unit-4-game/","assets/images/main-thumb-t-1785517-200-boztfctkwxbzmfjwurneimbimaluhaxk.jpeg","Star Wars Battle");
const Proj6=new Project("https://jenguin777.github.io/project1/index.html","assets/images/tithe-favicon.1.png","Tithe App");
const Proj7=new Project("https://ocskier.github.io/Api-Ajax-Hw/","assets/images/window-615427_1920.jpg","Api Demo");
const Proj8=new Project("https://github.com/ocskier/LIRI-Node-App","assets/images/bot.jpg","LIRI Bot");
>>>>>>> 640b08dcda6994276e80f4564c1d058e99ce289e
const Proj9=new Project("https://nameless-plateau-29518.herokuapp.com/","assets/images/love-logo-hi.png","Match Maker");
// const Proj10=new Project("https://intense-wildwood-45271.herokuapp.com/","assets/images/fabio-alves-773406-unsplash.jpg","Burger App");
const Proj11=new Project("https://fierce-basin-24175.herokuapp.com/","assets/images/fabio-alves-773406-unsplash.jpg","Serialize Burger");
const Proj12=new Project("https://secret-gorge-60402.herokuapp.com/","assets/images/jeshoots-com-436787-unsplash.jpg","Aristotle");
// const Proj13=new Project("http://mongoscraps.herokuapp.com/","assets/images/hannah_gibbs_1067876.jpg","Mongo Scraper");
const Proj14=new Project("https://search-react-app.herokuapp.com/","assets/images/hannah_gibbs_1067876.jpg","NPR-Music-React");
const Proj15=new Project("https://wishlist-p3t6-app.herokuapp.com/","assets/images/Screenshot_Proj.jpg","WishList");
const Proj16=new Project("https://ocskier.github.io/Word-Guess-Game/","assets/images/Screenshot5.png","Word Game");
const Proj17=new Project("https://repl.it/@ocskier/Bamazon","assets/images/fancycrave.jpg","Bamazon");
const Proj18=new Project("https://ocskier.github.io/Clicky-Game/","assets/images/BN-XN.jpg","Memory");

const projectsArray = [];
projectsArray.push(Proj1,Proj2,Proj4,Proj5,Proj6,Proj7,Proj8,Proj9,Proj11,Proj12,Proj14,Proj15,Proj16,Proj17,Proj18);

const hdbrsObj = {
    projects: projectsArray
}