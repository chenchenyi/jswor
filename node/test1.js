setTimeout(function () {
    Promise.resolve().then(()=>console.log(4));
    console.log(123);},0);
setTimeout(function () {
console.log(3);
}, 0);