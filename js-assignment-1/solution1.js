const lenOfString = function(x) {
    return x.length;
}

function lengthOfName(firstName, secondName, lenFunction) {
    const result = {};
    return [{firstName: lenFunction(firstName), secondName: lenFunction(secondName)}];
}

const result = lengthOfName('Sagar', 'Yadav', lenOfString);
console.log(result);
