// code your solution here
function saturdayFun(funActivity="roller-skate") {
    return `This Saturday, I want to ${funActivity}!`;
}

function mondayWork(workActivity="go to the office") {
    return `This Monday, I will ${workActivity}.`;
}

function wrapAdjective(party="*") {
    return function cowboys(which="special") {
        return `You are ${party}${which}${party}!`;
    };

}
wrapAdjective("%")("a dedicated programmer");