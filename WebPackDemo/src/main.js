import {person} from './person';

const myDiv = document.querySelector("#app");
myDiv.innerHTML = `<h2>${person.firstName} ${person.lastName}</h2>`