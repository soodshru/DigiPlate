// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract Accidents {
    uint private accidentID;
    
    function setID(uint value) public {
        accidentID = value;
    } 
    
    function getID() public view returns (uint) {
        return accidentID;
    }
}