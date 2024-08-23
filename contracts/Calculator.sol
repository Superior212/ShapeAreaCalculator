// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;


contract calculator {

    function triangleArea(uint base, uint height) public pure returns (uint)   {
        return (base * height)/2;
    }
    
    function rectangleArea(uint length, uint width) public  pure returns (uint){
        return length * width;    
     }    
    function squareArea(uint side) public  pure returns (uint){
        return side * side;    
     }    
}