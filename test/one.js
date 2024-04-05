const promiseA = new Promise((resolve, reject) => {
	resolve(777);
});
// At this point, "promiseA" is already settled.
promiseA.then((val) => console.log("asynchronous logging has val:", val));
console.log("immediate logging");

// produces output in this order:
// immediate logging
// asynchronous logging has val: 777

const myPromise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("foo");
	}, 300);
});

//const n = await myPromise();
//myPromise.then(v=>console.log(v))