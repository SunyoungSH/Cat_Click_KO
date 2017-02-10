var initialCats = [
  {
    clickCount: 0,
    name: 'Tabby',
    imgSrc: 'img/434164568_fea0ad4013_z.jpg',
    level: "Infant",
    nickname: ["nickname1", "nickname2", "nickname3"]
  },
  {
    clickCount: 0,
    name: 'Tiger',
    imgSrc: 'img/22252709_010df3379e_z.jpg',
    level: "Infant",
    nickname: ["nickname1", "nickname2", "nickname3"]
  },
  {
    clickCount: 0,
    name: 'Timo',
    imgSrc: 'img/1413379559_412a540d29_z.jpg',
    level: "Infant",
    nickname: ["nickname1", "nickname2", "nickname3"]
  },
  {
    clickCount: 0,
    name: 'Tata',
    imgSrc: 'img/4154543904_6e2428c421_z.jpg',
    level: "Infant",
    nickname: ["nickname1", "nickname2", "nickname3"]
  },
  {
    clickCount: 0,
    name: 'Tom',
    imgSrc: 'img/9648464288_2516b35537_z.jpg',
    level: "Infant",
    nickname: ["nickname1", "nickname2", "nickname3"]
  }
];

var Cat = function(data){
  this.clickCount = ko.observable(data.clickCount);
  this.name = ko.observable(data.name);
  this.imgSrc = ko.observable(data.imgSrc)
  this.level = ko.observable(data.level);
  this.nickname= ko.observableArray(data.nickname);
  this.changeAge = function(){
    if (this.clickCount() > 9){
      this.level("Kid");
    }
  };
}

var ViewModel = function(){
  var self = this;
  this.catList = ko.observableArray([]);
  initialCats.forEach(function(catItem){
    self.catList.push(new Cat(catItem))
  })

  this.currentCat = ko.observable(this.catList()[0]);

  this.incrementCounter = function(){
    self.currentCat().clickCount(self.currentCat().clickCount()+1);
    self.currentCat().changeAge();
  };

  this.switchCat = function(cat){
    self.currentCat(cat);
    //console.log(self.currentCat(cat).clickCount());
  }
}

ko.applyBindings(new ViewModel())
