let d = new Date();
let time = d.toLocaleString();
console.log(time);

// print out every second 
setInterval(function() {console.log(new Date())}, 1000);