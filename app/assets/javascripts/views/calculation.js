var MgCalculation = Backbone.View.extend({

  el: '#calcForm', 
 
  initialize: function() {
	
   },

   events: {
	"change #calculation_email" : "hanged"
     },

  hanged: function() {
    alert('done init');
  }

  });
