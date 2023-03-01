const { Console } = require("console");
const fs = require("fs");

//#region reading file
fs.readFile("exampleTexts/samplePassword.txt", "utf-8", readCallback);

function readCallback(err, data) {
	if (err) {
		console.log("🚀 ~ file: index.js:8 ~ readCallback ~ err:", err);
		return;
	}
	console.log(data);
	console.log("File reading is finished.");
}
//#endregion

//#region create a file and write into the file
fs.writeFile("exampleTexts/sampleNewFile.txt", "", (err) => {
	if (err) {
		console.log("🚀 ~ file: index.js:19 ~ fs.writeFile ~ err:", err);
		return;
	}
	console.log("File is created.");
});

fs.appendFile("exampleTexts/sampleNewFile.txt", "NEW LINE IS ADDED", (err) => {
	if (err) {
		console.log("🚀 ~ file: index.js:27 ~ fs.appendFile ~ err:", err);
		return;
	}
	console.log("Lines are added.");
});
//#endregion

//#region create folder
fs.mkdir("folder1/folder2", { recursive: true }, (err) => {
	if (err) {
		console.log("🚀 ~ file: index.js:38 ~ fs.mkdir ~ err:", err);
		return;
	}
	console.log("Folders are created.");
});
//#endregion
