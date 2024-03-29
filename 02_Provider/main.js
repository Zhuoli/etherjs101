import { ethers } from "ethers";
// 利用Infura的rpc节点连接以太坊网络
// 填入Infura API Key, 教程：https://github.com/AmazingAng/WTFSolidity/blob/main/Topics/Tools/TOOL02_Infura/readme.md

let INFURA_ID = process.env.INFURA_ID;

// 连接以太坊主网
const providerETH = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`)
// 连接Goerli测试网
const providerGoerli = new ethers.providers.JsonRpcProvider(`https://goerli.infura.io/v3/${INFURA_ID}`)

// 1. 查询vitalik在主网和Goerli测试网的ETH余额
console.log("1. 查询vitalik在主网和Goerli测试网的ETH余额");
const balance = await providerETH.getBalance(`vitalik.eth`);
const balanceGoerli = await providerGoerli.getBalance(`vitalik.eth`);
// 将余额输出在console（主网）
console.log(`ETH Balance of vitalik: ${ethers.utils.formatEther(balance)} ETH`);
// 输出Goerli测试网ETH余额
console.log(`Goerli ETH Balance of vitalik: ${ethers.utils.formatEther(balanceGoerli)} ETH`);

// 2. 查询provider连接到了哪条链
console.log("\n2. 查询provider连接到了哪条链")
const network = await providerETH.getNetwork();
console.log(network);

// 3. 查询区块高度
console.log("\n3. 查询区块高度")
const blockNumber = await providerETH.getBlockNumber();
console.log(blockNumber);

// 4. 查询当前gas price
console.log("\n4. 查询当前gas price")
const gasPrice = await providerETH.getGasPrice();
console.log(gasPrice);

// 5. 查询当前建议的gas设置
console.log("\n5. 查询当前建议的gas设置")
const feeData = await providerETH.getFeeData();
console.log(feeData);

// 6. 查询区块信息
console.log("\n6. 查询区块信息")
const block = await providerETH.getBlock(0);
console.log(block);