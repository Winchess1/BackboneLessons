var CarModel = Backbone.Model.extend({	
	defaults:{
	name:"unknown",
	year:"null"
	}
});


var CarCollection = Backbone.Collection.extend({	
	model: CarModel		
});

$(document).ready(function(){
	var CarCollectionClass = new CarCollection();
    for (var i = 0; i<10; i++){
	var ranmod = Math.floor(Math.random() *10);
	var randomNumber = new CarModel({name:ranmod, year:ranmod });	
	CarCollectionClass.add([randomNumber])
    }	
	displayCarCollectionClass("Elements", CarCollectionClass);	

})

function displayCarCollectionClass (string, colection){
	var tempo = JSON.stringify(colection.toJSON());
	$("#main").append(tempo);
}


