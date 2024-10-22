const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying EduBoxERC20Factory with account:", deployer.address);

  const EduBoxERC20Factory = await hre.ethers.getContractFactory("EduBoxERC20Factory");
  const factory = await EduBoxERC20Factory.deploy();

  await factory.waitForDeployment();

  console.log("EduBoxERC20Factory deployed to:", await factory.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

//   contract address: EduBoxERC20Factory deployed to: 0xB99647a08741C044ddAB9cB0A53d079833725f17