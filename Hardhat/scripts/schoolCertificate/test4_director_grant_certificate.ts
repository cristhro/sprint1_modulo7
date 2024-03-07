import { ethers } from "hardhat";
import { expect } from "chai"; // Import assertion library (e.g., Chai)

const schoolCertificateAddress = "0xD5bbD62C24dAF214fAcDC2EA7E0d1c7d0970A8B0";
const _student4Address = "0x664f16E7dC4F28fF1748aD70E3cf228F7D6E66FB"; // Replace with actual address

async function main() {
  const schoolCertificateContract = await ethers.getContractAt('SchoolCertificate', schoolCertificateAddress);

  // El director de la escuela otorgue un título a un estudiante
  const tx = await schoolCertificateContract.grantCertificate( _student4Address);

  await tx.wait();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
