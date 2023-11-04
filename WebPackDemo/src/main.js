import {person} from './person';

const myDiv = document.querySelector("#app");
myDiv.innerHTML = `<h2 style="color:green">${person.firstName} ${person.lastName}</h2>`