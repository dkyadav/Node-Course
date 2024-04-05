const myPromise = new Promise((resolve, reject) => {
	setTimeout(() => {
		try {
			//throw new Error("test error ret");
			resolve("foo");
		} catch (error) {
			reject(error.message);
		}
	}, 300);
});

myPromise
	.then((value) => console.log(value))
	.catch((err) => {
		console.error(err);
	});

async function myFunction() {
	return "Hello";
}

//const data = await myFunction();
const data = (async () => await myFunction())();
//console.log(data);
data.then((v) => console.log(v));

const { testa } = require("./async_req");

//console.log(testa().then((v) => console.log(v)));

(async () => {
	const res = await testa();
	console.log(res);
})();
