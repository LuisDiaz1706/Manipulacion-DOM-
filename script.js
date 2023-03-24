// let h1 = document.querySelector("h1");
// let p = document.querySelector("p");
// let parrafo = document.querySelector("parrafo");
// let ID = document.querySelector("#ID");
// let input = document.querySelector("input")


// console.log(input.value);

// console.log({
//     h1,
//     p,
//     parrafo,
//     ID,
//     input
// });


// h1.innerText = 'PAto <br> FEO'



// //  input.value = '4523'
//  input.placeholder = "Escribe"

//  let img = document.createElement('img');

//  img.setAttribute('src', 'https://static.wikia.nocookie.net/disneyypixar/images/8/8e/Panchito_Pistoles.png/revision/latest?cb=20210618225035&path-prefix=es');

//  console.log(img);

//  ID.append(img);

let h1 = document.querySelector("h1");
let form = document.querySelector('#form');
let input1 = document.querySelector('#Cal1');
let input2 = document.querySelector('#Cal2');
let btn = document.querySelector('#btnCalcular');
let pResultado = document.querySelector("#resultado");

btn.addEventListener('click',btnOnClick);


function btnOnClick(event){
    console.log({event});
    event.preventDefault();
    let sumaInput = input1.value + input2.value;
    pResultado.innerHTML = "Resultado: " + sumaInput;
}