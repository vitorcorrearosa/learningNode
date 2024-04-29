const moduleA = require("../../../getStarted/moduleA");
const moduleB = require("../../../getStarted/moduleB");

const http = require("http");

const hello = require("./folderC");

console.log(moduleA.hello);
console.log(hello.hello2);

// http
//   .createServer((req, res) => {
//     res.write("Good Morning!");
//     res.end();
//   })
//   .listen(8080);
