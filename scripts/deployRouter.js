const hre = require("hardhat");

const factory = "";
const weth = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";

async function main() {
    try {
        const Router = await hre.ethers.getContractFactory("QuantoSwapV2Router02");
        const router = await Router.deploy(factory, weth);

        await router.deployed();

        console.log(
            `QuantoSwap router deployed to ${router.address}`
        );
    }catch (e){
        console.log(e)
    }
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
