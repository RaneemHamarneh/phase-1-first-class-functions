function receivesAFunction(callback){
    callback();
    return callback;
}

const  UseSpyFunction= function() {
    const spy = chai.spy() ;
    return receivesAFunction(spy);
}

function returnsANamedFunction() {
    function namedFunction() {
        console.log("returns a named function.");
    }
    return namedFunction;
}

const returnsAnAnonymousFunction =function(){
    return function(){
       const fan ="";
    }    
}