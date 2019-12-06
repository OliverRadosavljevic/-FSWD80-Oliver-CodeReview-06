var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Create array which holds info about different places
var placesArray = [];
//Parent class: locations
var locations = /** @class */ (function () {
    function locations(city, ZIP_code, address, image, name) {
        this.city = city;
        this.ZIP_code = ZIP_code;
        this.address = address;
        this.image = image;
        this.name = name;
    }
    //Display locations method
    locations.prototype.displayLocations = function () {
        document.getElementById("content").innerHTML +=
            "<div class=\"col-sm-12 col-md-6 col-lg-3 my-3\">\n<div class=\"col mx-3\">\n<div class=\"card\" style=\"width: 18rem;\">\n  <img src=\"" + this.image + "\" class=\"card-img-top d-none d-sm-block\" alt=\"location_image\">\n  <div class=\"card-body cards\">\n    <h5 class=\"card-title\">" + this.name + "</h5>\n    <p class=\"card-text\">Address: " + this.city + " <br> " + this.address + ", " + this.ZIP_code + "</p>\n  </div>\n  </div>\n</div>\n</div>";
    };
    return locations;
}());
//Child class1: restaurants
var restaurants = /** @class */ (function (_super) {
    __extends(restaurants, _super);
    function restaurants(city, ZIP_code, address, image, name, telephone, type, web_address) {
        var _this = _super.call(this, city, ZIP_code, address, image, name) || this;
        _this.telephone = telephone;
        _this.type = type;
        _this.web_address = web_address;
        return _this;
    }
    //Display restaurants method
    restaurants.prototype.displayRestaurants = function () {
        document.getElementById("content").innerHTML +=
            "<div class=\"col-sm-12 col-md-6 col-lg-3 my-3\">\n\t<div class=\"col mx-3\">\n<div class=\"card\" style=\"width: 18rem;\">\n  <img src=\"" + this.image + "\" class=\"card-img-top d-none d-sm-block\" alt=\"location_image\">\n  <div class=\"card-body cards\">\n    <h5 class=\"card-title\">" + this.name + "</h5>\n    <p class=\"card-text\">Address: " + this.city + " <br> " + this.address + ", " + this.ZIP_code + " <br>Phone number: " + this.telephone + " </br> Type:  " + this.type + " cuisine <br> Website: <a href=\"" + this.web_address + "\"> " + this.web_address + " </a></p>\n  </div>\n  </div>\n</div>\n</div>";
    };
    return restaurants;
}(locations));
//Child class2: events
var events = /** @class */ (function (_super) {
    __extends(events, _super);
    function events(city, ZIP_code, address, image, name, date, time, price, webpage) {
        var _this = _super.call(this, city, ZIP_code, address, image, name) || this;
        _this.date = date;
        _this.time = time;
        _this.price = price;
        _this.webpage = webpage;
        return _this;
    }
    //Display events method
    events.prototype.displayEvents = function () {
        document.getElementById("content").innerHTML += "\n  <div class=\"col-sm-12 col-md-6 col-lg-3 my-3\">\n  <div class=\"col mx-3\">\n<div class=\"card\" style=\"width: 18rem;\">\n  <img src=\"" + this.image + "\" class=\"card-img-top d-none d-sm-block\" alt=\"location_image\" height=\"100px\" >\n  <div class=\"card-body cards\">\n    <h5 class=\"card-title\">" + this.name + "</h5>\n    <p class=\"card-text\">Address: " + this.city + " <br> " + this.address + " <br> " + this.ZIP_code + " <br> Date: " + this.date + " <br> Time: " + this.time + " <br> Website: <a href=\"" + this.webpage + "\"> " + this.webpage + " </a></p>\n  </div>\n</div>\n</div>\n</div>";
    };
    return events;
}(locations));
//Create different objects
var graben = new locations("Vienna", 1110, "Graben", "img/graben.jpg", "Graben");
var karlskirche = new locations("Vienna", 1110, "Karlsplatz 1", "img/karlskirche.jpg", "Karlskirche");
var lemonleaf = new restaurants("Vienna", 1050, "Kettenbrückengasse 19", "img/img3.png", "Restaurant 'Lemon Leaf'", "+43(1)5812308", "thai", "http://www.lemonleaf.at");
var sixta = new restaurants("Vienna", 1050, "Schönbrunner Straße 21", "img/img4.png", "Restaurant 'Sixta'", "+43(1)5852856", "viennese", "http://www.sixta-restaurant.at");
var kriskristoffersen = new events("Vienna", 1150, "Wiener Stadthalle, Halle F, Roland Rainer Platz 1", "img/img5.jpg", "Kris Kristoffersen Concert", "15.11.2019", "20:00", "58,50 EUR", "http://kriskristofferson.com");
var lennykravitz = new events("Vienna", 1150, "Wiener Stadthalle, Halle D, Roland Rainer Platz 1", "img/img6.jpg", "Lenny Kravitz Concert", "09.12.2019", "19:30", "47,80 EUR", "http://www.lennykravitz.com");
//Store all objects in the array
placesArray.push(graben, karlskirche, lemonleaf, sixta, kriskristoffersen, lennykravitz);
//Display objects according to their propertes
placesArray.forEach(function (element) {
    if (element.hasOwnProperty("telephone")) {
        element.displayRestaurants();
    }
    else if (element.hasOwnProperty("date")) {
        element.displayEvents();
    }
    else {
        element.displayLocations();
    }
});
