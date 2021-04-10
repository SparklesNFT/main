pragma solidity 0.7.11;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

//ERC20 and zeppelin is a place holder

contract MyToken is ERC20 {
    constructor() public ERC20("MyToken", "MTKN"){
        _mint(msg.sender, 1000000000000000000000000);
    }

    // Allow the owner to increase the smart contract's sparkles balance ***("hardcap limit?")***
    function refill(uint amount) public {
        require(msg.sender == owner, "sol contract owner command req ");
        SparklesBalances[address(this)] += amount;
    }

    // Allow anyone to purchase sparkles
    
    function purchase(uint amount) public payable {
        require(msg.value >= amount * 1 Flare , "You must pay at least 1 FLR per sparkle");  // ICO price???
        require(SparklesBalances[address(this)] >= amount, "Not enough Sparkles in stock to complete this purchase");
        SparklesBalances[address(this)] -= amount;
        SparklesBalances[msg.sender] += amount;
    }
    
    //What token standard do we want to use? or develop our own for COSTON?w
}
}
