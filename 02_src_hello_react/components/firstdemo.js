const os = require('os')

//显示系统的cpu个数/几核
console.log(os.cpus())

//显示系统空余的内存
let totalmem = os.totalmem()/1024/1024/1024; //GB
let freemem = os.freemem()/1024/1024/1024; //GB
//剩余内存比
console.log('freemen/totalmem', parseInt(freemem/totalmem));
//显示当前系统的网络情况
console.log(os.networkInterfaces());

/*
第一个nodejs程序
*/

const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

// 创建一个server实例
const server = http.createServer((req,res)=>{
  // req:请求对象
  // res:响应对象
  res.statusCode = 200;
  res.setHeader('Content-Type','text/plain');
  res.end('Hello World');
})

server.listen(port, hostname, ()=>{
  //回调
  console.log(`服务器启动成功，监听端口：${port}`)
})

// 启动服务
// node helloworld.js

