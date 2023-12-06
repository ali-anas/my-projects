//  JS problem 1 - 

function curry(fn) {
  return function curried(...args){
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  }
}

// Problem 2 - implement curry() with placeholder support
function curryPlaceHolder(fn) {
  return function curried(...args1) {
    const areEnoughArgs = args1.lengt >= fn.length && args1.slice(0, fn.length).every(it => curryPlaceHolder.placeholder !== it);
    if (areEnoughArgs) {
      return fn.apply(this, args1);
    } else {
      return function (...args2) {
        const newArr = [];
        let i = 0;
        let j = 0;
        // merge the two arrays
        while (i < args1.length && j < args2.length) {
          if (args1[i] === curryPlaceHolder.placeholder) {
            newArr.push(args2[j];
            i+=1;
            j+=1;
          } else {
            newArr.push(args2[j]);
            j+=1;
          }
        }
        // left over
        while(i < args1.length) {
          newArr.push(args1[i]);
          i+=1;
        }

        while(j < args2.length) {
          newArr.push(args2[j];
          j+=1;
        }

        return curried.apply(this, newArr);
      }
    }
  }
}

  curryPlaceHolder.placeholder = Symbol();
