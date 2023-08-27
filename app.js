const image_one = document.querySelector(".img1");
const image_two = document.querySelector(".img2");
const title = document.querySelector("h1");


let ran_one = Math.floor(((Math.random()) * 6) + 1);
let ran_two = Math.floor(((Math.random()) * 6) + 1);



image_one.setAttribute("src" , `./images/dice${ran_one}.png`);
image_two.setAttribute("src" , `./images/dice${ran_two}.png`);


if(ran_one > ran_two)
{
    title.textContent = "Player one won!!"
}
else if(ran_one < ran_two)
{
    title.textContent = "Player two won"
}
else{
    title.textContent = "Draw!!"
}