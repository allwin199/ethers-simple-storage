import { ethers } from "ethers";
import fs from 'fs-extra'
import 'dotenv/config';

// check also sampleDeploy for more info
const main = async () => {
    const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);
    const encryptedJson = fs.readFileSync("./.encryptedkey.json", "utf8");
    let wallet = new ethers.Wallet(process.env.PRIVATE_KEY!, provider)

    // get contract files
    const abi = fs.readFileSync(
        "./SimpleStorage_sol_SimpleStorage.abi",
        "utf8",
    );
    const binary = fs.readFileSync(
        "./SimpleStorage_sol_SimpleStorage.bin",
        "utf8",
    );

    const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
    console.log("Deploying, Please Wait...........");
    const contract = await contractFactory.deploy();
    console.log(`Contract Address: ${contract.address}`);

    await contract.deployTransaction.wait(1);

    console.log("Deployment Successful");
    // console.log("Contract", transactionReceipt);

    const currentFavouriteNumber = await contract.retrieve();
    console.log(`Current Favourite Number is ${currentFavouriteNumber}`);

    const txResponse = await contract.store("22");
    await txResponse.wait(1);

    const updatedFavouriteNumber = await contract.retrieve();
    console.log(`Updated Favourite Number is ${updatedFavouriteNumber}`);
};

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });

// Ethers js helps us to interact with the blockchain.
