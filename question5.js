function getChaseVerdict(target, scored, ballsLeft){
    const runsNeeded = target - scored;
    const requiredRate = (runsNeeded / ballsLeft) * 6;
    if(runsNeeded<=0){
        console.log("Won")
    }
    else if(runsNeeded>0&&ballsLeft==0){
        console.log("Lost")
    }
    else if(requiredRate<=6){
        console.log(`Need ${runsNeeded} runs in ${ballsLeft} balls | Comfortable`);
    }
    else if(requiredRate>6&&requiredRate<=12){
        console.log(`Need ${runsNeeded} runs in ${ballsLeft} balls | Tough`);
    }
    else if(requiredRate>12){
        console.log(`Need ${runsNeeded} runs in ${ballsLeft} balls | Almost Impossible`)
    }
}

