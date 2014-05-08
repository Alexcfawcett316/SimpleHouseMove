var MgCalculation = Backbone.View.extend({

  el: '#calculatorMain', 
 
  initialize: function() {
	$( ".defaultSlider" ).slider({
			range: "min",
     			min: 0,
      			max: 2000000,
			step: 10000,
			});
		
	$( "#sliderSolicitor" ).slider({
			range: "min",
			value: 0,
     			min: 0,
      			max: 0
			});
	$( "#sliderEstateAgent" ).slider({
			range: "min",
			value: 0,
     			min: 0,
      			max: 0
			});

	$( "#sliderExtraCosts" ).slider({
			range: "min",
			value: 0,
     			min: 0,
      			max: 5000
			});

	$( "#sliderTakenOver" ).slider({
			range: "min",
			value: 35,
     			min: 0,
      			max: 35
			});
	
	$( "#sliderInterestRate" ).slider({
			range: "min",
			value: 20,
     			min: 0,
      			max: 100
			});


	
	$("#pnlSelling").hide();
	

   },

   events: {
	"slide #sliderToBuy" : "onSliderBuyChanged",
	"click #rdSellNo" : "onSellRadioChanged",
	"click #rdSellYes" : "onSellRadioChanged",
    	"slide #sliderPayFor" : "onSliderPayForChanged",
	"slide #sliderSellFor" : "onSliderSellForChanged",
	"slide #sliderSolicitor" : "onSliderSolicitor",
	"slide #sliderEstateAgent" : "onSliderEstateAgent",
	"slide #sliderExtraCosts" : "onSlideExtras",
	"slide #sliderTakenOver" : "onSlideTakenOver",
	"slide #sliderInterestRate" : "onSlideInterestRate"


	
     },

   onSliderBuyChanged: function(){
   	$('#lblHowMuchBuy').text("£" + $('#sliderToBuy').slider("value"));
	this.adjustFees();	
   },

  onSellRadioChanged: function() {
	var sellPanel = $("#pnlSelling");
	if($('input[name=rdSell]:checked').val() == 'no'){
		sellPanel.fadeOut( "fast", function() {
  			
  		});
	}	
	else{
		sellPanel.fadeIn( "fast", function() {
  			
  		});
	}

  },

  onSliderPayForChanged: function (){
	$('#lblHowMuch').text("£" + $('#sliderPayFor').slider("value"));	  
  },

  onSliderSellForChanged: function (){
	$('#lblSellFor').text("£" + $('#sliderSellFor').slider("value"));	  
  },
  
  onSliderSolicitor: function (){
	$('#lblSolVal').text("£" + $('#sliderSolicitor').slider("value"));	
  },

  onSliderEstateAgent: function (){
	$('#lblEstateAgent').text("£" + $('#sliderEstateAgent').slider("value"));	
  },


  onSlideExtras :function(){
  	$('#lblExtraCosts').text("£" + $('#sliderExtraCosts').slider("value"));	
  },

  onSlideTakenOver :function(){
  	$('#lblTakenOver').text($('#sliderTakenOver').slider("value") + " years");	
  },

  onSlideInterestRate :function(){
	var val = $('#sliderInterestRate').slider("value") / 10;
  	$('#lblInterestRate').text(val + "%");	
  },


  

  adjustFees:function(){
  	  var middle = $('#sliderToBuy').slider("value") * 0.01;
	  var min = middle - middle;
  	  var max = middle + middle;
	  
  	  $( "#sliderSolicitor" ).slider({
			range: "min",
			value: middle,
     			min: min,
      			max: max
			});
	  $('#lblSolVal').text("£" + middle);

	  $( "#sliderEstateAgent" ).slider({
			range: "min",
			value: middle,
     			min: min,
      			max: max
			});
	  $('#lblEstateAgent').text("£" + middle);



  }  


});
