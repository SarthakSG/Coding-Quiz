const electron = require('electron');
const problems = require('../data/problems');
const fs = require('fs');
const url = require('url');
const path = require('path')
const readLine = require('readline');

const appRootPath = require('../appRootPath');

pSolved = [];

var currentProblem = 0;
var view = 0;
var difficulty = ['Easy', 'Hard', 'Hard']

var pNum = 0;
var maxTime  = 5400,timeElapsed=0;
document.querySelector('#time-left').innerHTML = parseInt(((maxTime-timeElapsed)/60))+' minutes ';

setInterval(()=>{
    timeElapsed++;
    document.querySelector('#time-left').innerHTML = parseInt(((maxTime-timeElapsed)/60))+' minutes '+parseInt(((maxTime-timeElapsed))%(60))+' seconds';   
},1000)

// 0-2 Easy Problems
pEasy = Math.floor(Math.random() * 3);
// 3-5 Medium Problems
pMedium = Math.floor(Math.random() * 3) + 3;
// 6-8 Medium Problems
pHard = Math.floor(Math.random() * 3) + 6;

var p = [pEasy,pMedium,pHard];

console.log(p);

if (pNum >= 2) {
    document.getElementById('p-next').disabled = true;
}
if (pNum <= 0) {
    document.getElementById('p-prev').disabled = true;
}

if (problems.length > 0) {
    document.querySelector('#p-difficulty').innerHTML = difficulty[pNum];
    document.querySelector('#p-statement').innerHTML = problems[p[pNum]].statement;
    document.querySelector('#p-input').innerHTML = problems[p[pNum]].inputPattern;
    document.querySelector('#p-output').innerHTML = problems[p[pNum]].outputPattern;
    document.querySelector('#p-constraints').innerHTML = problems[p[pNum]].constraints;
    document.querySelector('#name').innerHTML = problems[p[pNum]].name;
    document.querySelector('#p-sample-input').innerHTML = problems[p[pNum]].exampleInput;
    document.querySelector('#p-sample-output').innerHTML = problems[p[pNum]].exampleOutput;
    document.querySelector('#p-explaination').innerHTML = problems[p[pNum]].exampleExplaination;


}

document.querySelector('#p-next').addEventListener('click', () => {
    if (pNum < 2) {
        pNum++;
        document.querySelector('#p-difficulty').innerHTML = difficulty[pNum];
        document.querySelector('#p-statement').innerHTML = problems[p[pNum]].statement;
        document.querySelector('#p-input').innerHTML = problems[p[pNum]].inputPattern;
        document.querySelector('#p-output').innerHTML = problems[p[pNum]].outputPattern;
        document.querySelector('#p-constraints').innerHTML = problems[p[pNum]].constraints;
        document.querySelector('#name').innerHTML = problems[p[pNum]].name;
        document.querySelector('#p-sample-input').innerHTML = problems[p[pNum]].exampleInput;
        document.querySelector('#p-sample-output').innerHTML = problems[p[pNum]].exampleOutput;
        document.querySelector('#p-explaination').innerHTML = problems[p[pNum]].exampleExplaination;
        if (pNum >= 2) {
            document.getElementById('p-next').disabled = true;
        }
        if (pNum > 0) {
            document.getElementById('p-prev').disabled = false;
        }
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

})

document.querySelector('#p-prev').addEventListener('click', () => {
    if (pNum > 0) {
        pNum--;
        document.querySelector('#p-difficulty').innerHTML = difficulty[pNum];
        document.querySelector('#p-statement').innerHTML = problems[p[pNum]].statement;
        document.querySelector('#p-input').innerHTML = problems[p[pNum]].inputPattern;
        document.querySelector('#p-output').innerHTML = problems[p[pNum]].outputPattern;
        document.querySelector('#p-constraints').innerHTML = problems[p[pNum]].constraints;
        document.querySelector('#name').innerHTML = problems[p[pNum]].name;
        document.querySelector('#p-sample-input').innerHTML = problems[p[pNum]].exampleInput;
        document.querySelector('#p-sample-output').innerHTML = problems[p[pNum]].exampleOutput;
        document.querySelector('#p-explaination').innerHTML = problems[p[pNum]].exampleExplaination;
        if (pNum < 2) {
            document.getElementById('p-next').disabled = false;
        }
        if (pNum <= 0) {
            document.getElementById('p-prev').disabled = true;
        }
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

})

document.querySelector('#inputGroupFile02').addEventListener('change', (e) => {
    document.querySelector('#lbl-output').innerHTML = e.target.files[0].path;
})

document.querySelector('#get-input').addEventListener('click', () => {

    electron.shell.openItem(path.join(appRootPath, `data/inputs/${p[pNum]}.txt`));

})

document.querySelector('#submit-output').addEventListener('click', () => {
    const submission = document.querySelector('#inputGroupFile02').files[0].path;
    if (document.querySelector('#inputGroupFile02').value != null) {
        const outputPath = `data/o/${p[pNum]}.txt`;

        let outBuf = fs.readFileSync(outputPath).toString().split(/(?:\r\n|\r|\n)/g);
        let subBuf = fs.readFileSync(submission).toString().split(/(?:\r\n|\r|\n)/g);

        console.log(outBuf);
        console.log(subBuf);

        let filesMathced = true;
        for (var i = 0; i < outBuf.length; i++) {
            console.log(`checking Lne : ${i}`);
            if (outBuf[i] != subBuf[i]) {


                filesMathced = false;
                break;
            }
        }


        if (filesMathced) {
            alert('Output Correct');
        }
        else {
            alert('Ouput Incorrect');
        }
    }

})