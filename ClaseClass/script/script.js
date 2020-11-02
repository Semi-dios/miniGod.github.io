/* 





 class user{
    constructor(name , age){
      this.name = name;
      this.age= age;
    }

   show() {
     if(this.age > 18) {
       document.write("He's older <br>");
      document.write('Name: ' +this.name +'<br>'+'Age: '+this.age);
      return;
     }
     document.write("Not he's older");
     document.write('Name: ' +this.name +'<br>'+'Age: '+this.age);
   }
}

const nName= prompt('Enter your name');
const nAge= prompt('Enter your Age');



let nUser = new user(nName, nAge);

nUser.show();
 */


 
class orderedList{

  constructor(){
    this.list = [];
  }

  add(...params){
    for (let index = 0; index < params.length; index++) {
      this.list.push(params[index]);
      
    }
  }
  show(){

    var fragment = document.createDocumentFragment();
     var ul = document.getElementById('ul');
     for (let index = 0; index < this.list.length; index++) {
          var li = document.createElement('li');
          li.textContent= this.list[index];
          fragment.appendChild(li);
     }

    
    
     ul.append(fragment);



  }
}



var newList = new orderedList();

newList.add('woman', 'men', 'boy','girl');
newList.show();


      




