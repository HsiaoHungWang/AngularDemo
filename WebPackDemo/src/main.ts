import abc from './person';

const myDiv = document.querySelector("#app");
if(myDiv != null){
    myDiv.innerHTML = abc('Jack',30);
}
