let mondayWork = function(work = "go to the office") {
    return (`This Monday, I will ${work}.`);
}
let saturdayFun = function(fun = "roller-skate") {
    return (`This Saturday, I want to ${fun}!`);
}
function wrapAdjective (wrap = "*") {
    return function(adj = "special") {
        return `You are ${wrap}${adj}${wrap}!`
    }
}