const all = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];


const main = document.getElementById('mg-main');

//Animals

const animals  =  all.filter( animal => { 
	if(animal.type === 'animal'){ 
	return true;
} 

	else{ 
	return false
} 
});

console.log('Animals ---->', animals);

//Vegetables

const vegetables  =  all.filter( vegetable => { 
	if(vegetable.type === 'vegetable'){ 
	return true;
} 

	else{ 
	return false
} 
});

console.log('Vegetables ---->', vegetables);

//Users

const users  =  all.filter( user => { 
	if(user.type === 'user'){ 
	return true;
} 

	else{ 
	return false
} 
});

console.log('Users ---->', users);

menuChange();

//-------------------------------------//

function printBox(element){
  const box = document.createElement('div');
  box.className = 'mg-box';
  main.append(box);
  box.innerHTML = `
  <div class="mg-icon">
  <i class="${element.family} ${element.prefix}${element.name} mg-${element.color}"></i>
  </div>

  <div class="mg-name">
    <span>${element.name}</span>
  </div>
  `; 
}

function menuChange(){
  const menu = document.getElementById('mg-menu').value;
  
  switch(menu) {
    case 'all' :
      console.log('Menu --->', menu);
      main.innerHTML = ` `;
      for(let i = 0; i < all.length; i++){
        printBox(all[i]);
      }
      break;

    case 'animals' :
      console.log('Menu --->', menu);
      main.innerHTML = ` `;
      for(let i = 0; i < animals.length; i++){
        printBox(animals[i]);
      }
      break;

    case 'vegetables' :
      console.log('Menu --->', menu);
      main.innerHTML = ` `;
      for(let i = 0; i < vegetables.length; i++){
        printBox(vegetables[i]);
      }
      break;

    case 'users' :
      console.log('Menu --->', menu);
      main.innerHTML = ` `;
      for(let i = 0; i < users.length; i++){
        printBox(users[i]);
      }
      break;

    default:
      main.innerHTML = ` `;
      for(let i = 0; i < all.length; i++){
        printBox(all[i]);
      }
      break;
  }
}





