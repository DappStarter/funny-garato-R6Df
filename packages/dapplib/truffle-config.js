require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid problem oppose venture stool radar sister company hundred light army gasp'; 
let testAccounts = [
"0x590e1963c54edfe4de0a71a1d52f87404bd1d5b2fca438c8eb4dd984629411ab",
"0x9fbb8c34274f1b2c389196fb24c80f088cb73e4a1a3c16670ce063e030853822",
"0x2b05aa96c4bdb9ba6404d4a9a0f09584f8c802b8eb43db37b86588942d310414",
"0x12d82767cd7869ec56c5ba4f882c841cf846f88a5bf44d87309c55a561ece5f0",
"0x29590597ae2f9995c3e980345ec2ba57b9a265ecaf2889abc0400429d9b8e5c1",
"0x57ba8496950c1a05f094a1bd5251a8ccefdc26fc1f8e1159252fea669f23dcbf",
"0xd7008c29c226b2ecc1eb0745455040b2cee6f5aec6431823085398fee81cef30",
"0x5d7cbfaa2d6ee19f317b2c4f8b7fec9a221851a6cbad1363e25359abb7ad4639",
"0x978488c3be4126f959b391c95e72dd270c59737612ac012ff486a690c5246639",
"0xc3528f7e9e7791d42153fbddedc2a7ad489136d46048d6dcdd1a0410fcb4e0e5"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

