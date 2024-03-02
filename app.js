let gen = document.getElementById('generate');
let input = document.getElementById('input');
let result = document.getElementById('result');
let result2 = document.getElementById('result2');
let attempt = document.getElementById('attempt');
let retry = document.getElementById('retry');
let rand;
let count =0;
result.style.display = 'none';
result2.style.display = 'none';
function generate(){
    rand = Math.floor(Math.random()*10)+1;
    console.log(rand);
    gen.disabled = true;
    input.disabled = false;
}

function guessValue(){
    if(event.key==="Enter"){
        result.style.display = 'none';
        result2.style.display = 'none';
        if(rand==Number(input.value)){
            result.style.display = 'block';
            retry.disabled = true;
        }
        else{
            result2.style.display = 'block';
            retry.disabled = false;
        }
        count = count+1;
        input.disabled = true;
        attempt.innerHTML = count;
        if(count==3){
            retry.disabled = true;
            alert("You reached the all attemps");
        }
    }
    
}

function Retry(){
    input.disabled = false;
    result.style.display = 'none';
    result2.style.display = 'none';
}

