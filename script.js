const joke2=document.getElementById("joke");
const btn=document.getElementById("button");
const url="https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,explicit&type=single";
let joke1=() =>
{
    fetch(url)
    .then(data => data.json())
    .then(item => {
        joke2.textContent=`${item.joke}`;
    });
}
btn.addEventListener("click",joke1);
joke1();