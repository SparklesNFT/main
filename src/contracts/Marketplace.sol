pragma solidity >=0.6.0 <0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


contract Marketplace is ERC721, Ownable{

    //address public constant MARKET_ADDR = 0x1B0a6e0878E8276FF15991a2a474e51c042a7BB5;
    address public constant BURN_ADDR = 0x0000000000000000000000000000000005080099;
    address payable public _contractOwner = 0x7FDD0CdA6c4DABeD754fF2E75b9c4ACcD025F172;

   constructor() ERC721("Sparkles", "SKL") {}

    mapping(uint => Product) public products;
    uint public productCount = 0;

    struct Product {
        uint id;
        string name;
        uint price;
        address payable owner;
        bool purchased;
    }

    event ProductCreated(
        uint id,
        string name,
        uint price,
        address payable owner,
        bool purchased
    );

    event ProductPurchased(
        uint id,
        string name,
        uint price,
        address payable owner,
        bool purchased
    );

    event ProductListed(
        uint id,
        string name,
        uint price,
        address payable owner,
        bool purchased
        );

        function createProduct(string memory _name, uint _price) external payable {
            // Require a valid name
            require(bytes(_name).length > 0);
            // Require a valid price
            require(_price > 0);
            // Increment product count
            productCount ++;
            // Create the product
            products[productCount] = Product(productCount, _name, _price, msg.sender, false);
            _mint(msg.sender, productCount);
            //_setTokenURI(productCount, _name);
            approve(address(this), productCount);
            // Trigger an event
            emit ProductCreated(productCount, _name, _price, msg.sender, false);
    }

        function purchaseProduct(uint _id) external payable{
            //fetch the product
            Product memory _product = products[_id];
            //fetch the owner
            address payable _seller = _product.owner;
            //make sure the product is valid id
            require(_product.id > 0 && _product.id <= productCount);
            //requre that there is enough ether in the transaction
            require(msg.value >= _product.price);
            //requre that the product has not been purchased already;
            require(!_product.purchased);
            //require that the buyer is not the seller
            require(_seller != msg.sender);
            //transfer ownership to buyer
            _product.owner = msg.sender;
            // mark as purchased
            _product.purchased = true;
            //updrate the product
            products[_id] = _product;
            //payy the seller by sending flare
            _trade(_id);
            //trigger event
            emit ProductPurchased(productCount, _product.name, _product.price, msg.sender, true);
    }


        function _trade(uint _id) internal {
            address payable _buyer = payable(msg.sender);
            address payable _owner = payable(ownerOf(_id));
            Product memory _product = products[_id];
            _transfer(_owner, _buyer, _id);
            // 2.5% commission cut
            uint _commissionValue = _product.price / 40 ;
            uint _sellerValue = _product.price - _commissionValue;
            _owner.transfer(_sellerValue);
            _contractOwner.transfer(_commissionValue);

    }

    //for products already minted on sparkles 

        function _listOld(string memory _name,uint _id, uint _price ) external payable { 
            require(bytes(_name).length > 0);
            // Require a valid price
            require(_price > 0);
            Product memory _product = products[_id];
            address payable _seller = _product.owner;
            require(_seller == msg.sender);
            productCount = _id;
            products[productCount] = Product(productCount, _name, _price, msg.sender, false);
            approve(address(this), productCount);
            emit ProductListed(productCount, _name, _price, msg.sender, false);

    }

    //for already minted products not minted on sparkles
        function _listNew(string memory _name,uint _id, uint _price ) external payable {
            
            //fetch the product
            Product memory _product = products[_id];
            //fetch the owner
            address payable _seller = _product.owner;
            require(_seller == msg.sender);
            // Require a valid name
            require(bytes(_name).length > 0);
            // Require a valid price
            require(_price > 0);
            // Increment product count
            productCount ++;
            // Create the product
            products[productCount] = Product(productCount, _name, _price, msg.sender, false);
            approve(address(this), productCount);
            emit ProductListed(productCount, _name, _price, msg.sender, false);
    }

    // burn function product must be delisted
        function _burnNft(uint _id)public {
            //fetch the product
            Product memory _product = products[_id];
            //fetch the owner
            address payable _seller = _product.owner;
            //make sure the product is valid id
            require(_product.id > 0 && _product.id <= productCount);
            require(_seller == msg.sender);
            require(_product.purchased = true);
            
            _transfer(msg.sender, BURN_ADDR, _id);
            emit ProductListed(productCount, _product.name, _product.price, msg.sender, true);

    }

        function _delist(uint _id) public {
            //fetch the product
            Product memory _product = products[_id];
            //fetch the owner
            address payable _seller = _product.owner;
            //make sure the product is valid id
            require(_product.id > 0 && _product.id <= productCount);
            require(_seller == msg.sender);
            _product.purchased = true;
            emit ProductListed(productCount, _product.name, _product.price, msg.sender, true);
    }

}


