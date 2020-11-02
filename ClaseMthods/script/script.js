





var Competitor  = {
  name : 'Sergio',
  points: 25,
  show: function(){
      document.write(this.name+'<br>');
       document.write(this.points+'<br>');
  },
  add: function( point  ){
     console.log(point);
 
      this.points = this.points + point;
      
      if (this.points >= 1000) {
        alert("LLego a mil puntos ");
      }
      document.write(this.points+'<br>');

      
      
  },

 
 
  

}


var user = Object.create(Competitor);
user.show();
user.add(5000);



      




