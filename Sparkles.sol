pragma solidity 0.6.11;

contract Sparkles {
  address public owner;
    mapping (address => uint) public SparklesBalances;
    // When 'Sparkles' contract is deployed:
    // 1. set the deploying address as the owner of the contract
    // 2. set the deployed smart contract's Sparkles balance to 100000
    
    constructor() public {
        owner = msg.sender;
        SparklesBalances[address(this)] = 100000;
    }

    // Allow the owner to increase the smart contract's sparkles balance ***("hardcap limit?")***
    function refill(uint amount) public {
        require(msg.sender == owner, "sol contract owner command req ");
        SparklesBalances[address(this)] += amount;
    }

    // Allow anyone to purchase sparkles
    function purchase(uint amount) public payable {
        require(msg.value >= amount * 1 Flare , "You must pay at least 1 FLR per cupcake");
        require(SparklesBalances[address(this)] >= amount, "Not enough Sparkles in stock to complete this purchase");
        SparklesBalances[address(this)] -= amount;
        SparklesBalances[msg.sender] += amount;
    }
}
}
