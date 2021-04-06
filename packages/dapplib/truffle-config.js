require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney climb force ten fire note machine midnight hunt hero fringe gauge'; 
let testAccounts = [
"0x2b78ddb16f41f959f60f0a7c5901a58dbcab1a7161a94051cea8c07a9872b677",
"0x80ad4800678328446dcd51dba5d49cb58edbfc77d28ce0cea63567bf30ed4824",
"0xcff5032284b5be430ef4cc4d924a8bb144ae1222c038cc10ad37290f1abc14b9",
"0x5311ff0fd7a8011c6ceb1ebe6021c913770fa149ca9333eb9c712965cb12cd1e",
"0x58c284bcf2374b401f2d7c8752eb8a33b7b7b34015c98ade39c14f400010a573",
"0xe600e6a9d0573d537dd912dd5af8a5a584fadb9c156358ac65490071deea1fed",
"0x44ec0e59fd6403c98ddd760ca9cde8e6275edf7c372f83279d610e0ccc1908d1",
"0x5c8b07b2d0a8128bc5c075bf471cd207fbebe739c53dde518846568bf4dda8a5",
"0xfcb69a645795a50ba4eae943d7cd6c0223c66e60bfacfba523b95e2f18fe9e6c",
"0x86c6455e641f49ac8ffacb8a71050f218d48e1ed6253f73179c972980ea6d10d"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
