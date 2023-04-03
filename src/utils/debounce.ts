const debounce = function (fn: Function, delay = 500) {
  let t: NodeJS.Timer;
  return function (...arg: any[]) {
    clearTimeout(t);
    console.log('out', arg);

    t = setTimeout(() => {
      console.log('in', arg);

      fn.apply(null, arg);
    }, delay);
  };
};

export default debounce;
