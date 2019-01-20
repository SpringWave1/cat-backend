

var Web3 = require("web3");
let accounts;
let account;
//创建web3对象
var web3 = new Web3();
// 连接到以太坊节点
if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
  } else {
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}




//创建智能合约，参数为solc编译后生成的abi
const catContract = web3.eth.contract(/*abi*/)

//创建initializer，内同填充合约编译生成的bin，主要用于下一步的合约部署 
var initializer = {from: account_0, data: '0x' + /*bin*/, gas: 300000} 
//部署合约 
var book = bookContract.new(initializer)


// 

book.getBook.call()

// 测试
var version = web3.version.node;
console.log(version);


