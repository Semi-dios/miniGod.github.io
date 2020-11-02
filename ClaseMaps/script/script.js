


let map =  new Map([
  ["Colombia", "50000" ],
  ["Brasil", "500000" ],
  ["Argentina", "5500000" ],
]);


const ul = document.getElementById('ul');

let fragment =  document.createDocumentFragment();


map.forEach((valor, clave)=>{
  document.write(`${clave}  ${valor}<br>`);
  var li = document.createElement('li');
  li.innerHtml= `${clave}  ${valor}`;
  fragment.appendChild(li);

})

ul.appendChild(fragment);












