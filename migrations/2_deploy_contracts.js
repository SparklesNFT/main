const Market = artifacts.require("Marketplace.sol");

module.exports = function (deployer) {
  deployer.deploy(Market);
};
