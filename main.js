
(function(){	
	var number = [1,2,3,4,5,6,7];
	var found = _.filter(number, function(num){
		return num % 3 == 0;		
	});	
	console.log(found);
})();

//Alert message
var Website = Backbone.Model.extend({
	defaults:{
		bread:"wheat",		
	},
	initialize: function (){
		this.bindEvents();
	},
	bindEvents: function (){
		this.on("change:bread", (model)=>{
			var my_new_bread = model.get("bread");
			alert("Your bread changed to my new " + my_new_bread);
			
		});
	}
});

//alert message converted to launcher

var AlertChange = Backbone.Model.extend({
	
	defaults:{
		job:"TDA",
	},
	
	initialize:function(){
		this.bindEventsw();
		
	},
	
	bindEventsw:function(){
		this.on("change:job", function(model){
				var pages = new Website();	
	pages.set({bread:"corn"});		
		var aTemplate = new Template({el: $("#container")});	
		var aDescription = new Description();	
			
		});
		
	},
	

	
	
});

//just a div appends

var Description = Backbone.View.extend({	
	id:"descriptio",
	tagName:"div",	
	initialize:function(){		
	
		$("#main").append(this.$el);		
	}		
	
});

//a template created before.

var Template = Backbone.View.extend({
	
	initialize:function(){
		this.render();		
	},
	render:function(){		
		var template = _.template($("#ourTemplate").html(), {});
		this.$el.html(template);
	},
		events: {
	"click #button" : "clicked"
	
	},
	
	clicked:function(){
		alert("you clicked");
	}
	
});

$(document).ready(function(){
	var page = new AlertChange();	
	page.set({job:"corn"});
	
	$("button1").click(function(){
		$.get('https://api.iextrading.com/1.0/ref-data/symbols', function(data, status){
			$("#test").html(data);
			console.log(data);
			alert(status);
		})
	})
})










