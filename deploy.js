const { ethers } = require("ethers");
// const fs = require("fs-extra");

const main = async () => {
    // http://127.0.0.1:7545
    const provider = new ethers.providers.JsonRpcProvider(
        "http://127.0.0.1:7545"
    );
    const blockNumber = await provider.getBlockNumber();
    const privateKey =
        "0x5568080dc28b6905e036cde74302cb60931d7c3dbdf6751c7c5f15973f5e3e0a";
    const wallet = new ethers.Wallet(privateKey, provider);
    // const signer = provider.getSigner();
};

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });

// Ethers js helps us to interact with the blockchain.
