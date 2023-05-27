const inp1=document.getElementById('inp1');
const inp2=document.getElementById('inp2');
const inp3=document.getElementById('inp3');

let ans1="";
let ans2="";
let finalAns="";

const val=['ROCK','PAPER','SCISSOR'];

function check1(){
    let random=val[(Math.floor(Math.random()*3))];
    ans1="You Select ROCK";
    ans2=`System Select ${random}`;
    if(random==="ROCK"){
        finalAns="Match Draw";
    }
    else if(random==="SCISSOR"){
        finalAns="You Won";
    }
    else{
        finalAns="Loss";
    }
    console.log(ans1);
document.getElementById("show1").value=ans1;
document.getElementById('show2').value=ans2;
document.getElementById('answer').value=finalAns;
}

function check2(){
    let random=val[(Math.floor(Math.random()*3))];
    ans1="You Select PAPER";
    ans2=`System Select ${random}`;
    if(random==="PAPER"){
        finalAns="Match Draw";
    }
    else if(random==="SCISSOR"){
        finalAns="Loss";
    }
    else{
        finalAns="You Won";
    }
    console.log(ans1);
document.getElementById("show1").value=ans1;
document.getElementById('show2').value=ans2;
document.getElementById('answer').value=finalAns;
}

function check3(){
    let random=val[(Math.floor(Math.random()*3))];
    ans1="You Select SCISSOR";
    ans2=`System Select ${random}`;
    if(random==="SCISSOR"){
        finalAns="Match Draw";
    }
    else if(random==="PAPER"){
        finalAns="You Won";
    }
    else{
        finalAns="Loss";
    }
    console.log(ans1);
document.getElementById("show1").value=ans1;
document.getElementById('show2').value=ans2;
document.getElementById('answer').value=finalAns;
}