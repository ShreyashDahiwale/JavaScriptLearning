function init() {
    let name = "Shreyash";
    function inner(){
        let secret = "123mysecret"
        console.log(name);
        
    }
    function innerTwo(){
        console.log('InnerTwo', name);
    }
    inner();
    innerTwo();
}

init();

// -- -------------------------------


function makeFunc() {
    const name = "Shreyash";
    function displayName(){
        console.log(name);
    }
    return displayName;
    // return complete lexical scope (with it's outer function)
}

const myFunc = makeFunc();
myFunc();