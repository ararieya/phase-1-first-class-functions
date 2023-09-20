//1
function receivesAFunction(callback,spy) {
    const spy = function() {
      console.log("Callback function is called.");
    };
    return spyFunction;
  }

  const spy = receivesAFunction();
  spyCallback();

  //2
  function returnsANamedFunction() {
    function namedFunction() {
      console.log("This is a named function.");
    }
    return namedFunction;
  }
  const myFunc = returnsANamedFunction();
  myFunc();

  //3
  function returnsAnAnonymousFunction() {
    return function() {
      console.log("This is an anonymous function.");
    };
  }
  const myFunct = returnsAnAnonymousFunction();
  myFunct(); 
  