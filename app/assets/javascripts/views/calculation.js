var MgCalculation = Backbone.View.extend({

  el: '#calculatorMain',
  model: new CalculationModel, 
 
  initialize: function() {
	var t = this;
	var houseSellMax = 2000000;
	var houseSellStep = 10000;
	$( "#sliderToBuy" ).slider({
			range: "min",
     			min: 0,
      			max: houseSellMax,
			step: houseSellStep,
			slide: function( event, ui ) {
				t.onSliderBuyChanged(ui.value);
			}
			});
	
	$( "#sliderPayFor" ).slider({
			range: "min",
     			min: 0,
      			max: houseSellMax,
			step: houseSellStep,
			slide: function( event, ui ) {
				t.onSliderPayForChanged(ui.value);
			}
			});

	$( "#sliderSellFor" ).slider({
			range: "min",
     			min: 0,
      			max: houseSellMax,
			step: houseSellStep,
			slide: function( event, ui ) {
				t.onSliderSellForChanged(ui.value);
			}
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
      			max: 5000,
			slide: function( event, ui ) {
				t.onSlideExtras(ui.value);
			}

			});

	$( "#sliderTakenOver" ).slider({
			range: "min",
			value: 35,
     			min: 0,
      			max: 35,
		        slide: function( event, ui ) {
				t.onSlideTakenOver(ui.value);
			}

			});
	
	$( "#sliderInterestRate" ).slider({
			range: "min",
			value: 20,
     			min: 0,
      			max: 100,
			slide: function( event, ui ) {
				t.onSlideInterestRate(ui.value);
			}

			});


	
	$("#pnlSelling").hide();
	

   },

   events: {
	"click #rdSellNo" : "onSellRadioChanged",
	"click #rdSellYes" : "onSellRadioChanged"	
     },

   onSliderBuyChanged: function(amount){
	this.model.set("amountToBuy", amount);
   	$('#lblHowMuchBuy').text("£" + amount);
	this.adjustSolicitorFees();	
   },

  onSellRadioChanged: function() {
	var sellPanel = $("#pnlSelling");
	if($('input[name=rdSell]:checked').val() == 'no'){
		sellPanel.fadeOut( "fast", function() {
  			
  		});
		this.model.set("houseToSell", false);
	}	
	else{
		sellPanel.fadeIn( "fast", function() {
  			
  		});
		this.model.set("houseToSell", true);

	}

  },

  onSliderPayForChanged: function (amount){
	this.model.set("howMuchPayFor", amount);
	$('#lblHowMuch').text("£" + amount);	  
  },

  onSliderSellForChanged: function (amount){
	this.model.set("howMuchSellFor", amount);
	$('#lblSellFor').text("£" + amount);	
	this.adjustEstateAgentFees();
  },
  
  onSliderSolicitor: function (amount){
	$('#lblSolVal').text("£" + amount);	
  },

  onSliderEstateAgent: function (amount){
	$('#lblEstateAgent').text("£" + amount);	
  },


  onSlideExtras :function(amount){
  	$('#lblExtraCosts').text("£" + amount);	
  },

  onSlideTakenOver :function(amount){
  	$('#lblTakenOver').text(amount + " years");	
  },

  onSlideInterestRate :function(amount){
	var val = amount / 10;
  	$('#lblInterestRate').text(val + "%");	
  },


  

  adjustSolicitorFees:function(){
  	  var middle = this.model.solicitorsFee();
	  var min = 0;
  	  var max = middle * 2;
	  var t = this;
  	  $( "#sliderSolicitor" ).slider({
			range: "min",
			value: middle,
     			min: min,
      			max: max,
		  	slide: function( event, ui ) {
				t.onSliderSolicitor(ui.value);
			}

			});
	  
	  
	  $('#lblSolVal').text("£" + middle);
   },
   
   adjustEstateAgentFees:function(){
  	  var middle = this.model.estateAgentFee();
	  var min = 0;
  	  var max = middle * 2;
	  var t = this;
  	  $( "#sliderEstateAgent" ).slider({
			range: "min",
			value: middle,
     			min: min,
      			max: max,
		  	slide: function( event, ui ) {
				t.onSliderEstateAgent(ui.value);
			}

			});
	  
	  
	  $('#lblEstateAgent').text("£" + middle);
   }   


});
