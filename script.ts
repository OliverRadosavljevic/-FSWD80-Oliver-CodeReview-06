//Create array which holds info about different places
var placesArray = []


//Parent class: locations
class locations {
	city:string;
	ZIP_code:number;
	address:string;
	image:string;
	name:string;
	created:number;

constructor (city, ZIP_code, address, image, name) {
this.city=city;
this.ZIP_code=ZIP_code;
this.address=address;
this.image=image;
this.name=name;
}

//Display locations method
displayLocations() {
	document.getElementById("content").innerHTML+=
`<div class="col-sm-12 col-md-6 col-lg-3 my-3">
<div class="col mx-3">
<div class="card" style="width: 18rem;">
  <img src="${this.image}" class="card-img-top d-none d-sm-block" alt="location_image">
  <div class="card-body cards">
    <h5 class="card-title">${this.name}</h5>
    <p class="card-text">Address: ${this.city} <br> ${this.address}, ${this.ZIP_code}</p>
  </div>
  </div>
</div>
</div>`
}
}


//Child class1: restaurants
class restaurants extends locations {
	telephone:string;
	type:string;
	web_address:string;

constructor (city, ZIP_code, address, image, name, telephone, type, web_address){
super(city, ZIP_code, address, image, name);
this.telephone=telephone;
this.type=type;
this.web_address=web_address;
}

//Display restaurants method
displayRestaurants() {
	document.getElementById("content").innerHTML+= 
	`<div class="col-sm-12 col-md-6 col-lg-3 my-3">
	<div class="col mx-3">
<div class="card" style="width: 18rem;">
  <img src="${this.image}" class="card-img-top d-none d-sm-block" alt="location_image">
  <div class="card-body cards">
    <h5 class="card-title">${this.name}</h5>
    <p class="card-text">Address: ${this.city} <br> ${this.address}, ${this.ZIP_code} <br>Phone number: ${this.telephone} </br> Type:  ${this.type} cuisine <br> Website: <a href="${this.web_address}"> ${this.web_address} </a></p>
  </div>
  </div>
</div>
</div>`
	}
}


//Child class2: events
class events extends locations {
	date:string;
	time:string;
	price:string;
	webpage:string;

constructor (city, ZIP_code, address, image, name, date, time, price, webpage) {
super(city, ZIP_code, address, image, name);
this.date=date;
this.time=time;
this.price=price;
this.webpage=webpage;
}

//Display events method
displayEvents() {
	document.getElementById("content").innerHTML+= `
  <div class="col-sm-12 col-md-6 col-lg-3 my-3">
  <div class="col mx-3">
<div class="card" style="width: 18rem;">
  <img src="${this.image}" class="card-img-top d-none d-sm-block" alt="location_image" height="100px" >
  <div class="card-body cards">
    <h5 class="card-title">${this.name}</h5>
    <p class="card-text">Address: ${this.city} <br> ${this.address} <br> ${this.ZIP_code} <br> Date: ${this.date} <br> Time: ${this.time} <br> Website: <a href="${this.webpage}"> ${this.webpage} </a></p>
  </div>
</div>
</div>
</div>`
	}
}


//Create different objects
var graben = new locations("Vienna", 1110, "Graben", "img/graben.jpg", "Graben") 
var karlskirche = new locations("Vienna", 1110, "Karlsplatz 1", "img/karlskirche.jpg", "Karlskirche")
var lemonleaf = new restaurants("Vienna", 1050, "Kettenbrückengasse 19", "img/img3.png", "Restaurant 'Lemon Leaf'", "+43(1)5812308", "thai", "http://www.lemonleaf.at")
var sixta = new restaurants("Vienna", 1050, "Schönbrunner Straße 21", "img/img4.png", "Restaurant 'Sixta'",  "+43(1)5852856", "viennese", "http://www.sixta-restaurant.at")
var kriskristoffersen  = new events ("Vienna", 1150, "Wiener Stadthalle, Halle F, Roland Rainer Platz 1", "img/img5.jpg", "Kris Kristoffersen Concert", "15.11.2019", "20:00", "58,50 EUR", "http://kriskristofferson.com")
var lennykravitz = new events ("Vienna", 1150, "Wiener Stadthalle, Halle D, Roland Rainer Platz 1", "img/img6.jpg", "Lenny Kravitz Concert", "09.12.2019", "19:30", "47,80 EUR", "http://www.lennykravitz.com")


//Store all objects in the array
placesArray.push(graben, karlskirche, lemonleaf, sixta, kriskristoffersen, lennykravitz);


//Display objects according to their propertes
placesArray.forEach(element => {
	if (element.hasOwnProperty("telephone")) {
		element.displayRestaurants();	
	} else if (element.hasOwnProperty("date")) {
		element.displayEvents();
	}
	else {
		element.displayLocations();
	}
})