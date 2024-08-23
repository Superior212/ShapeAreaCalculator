const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Calculator Contract", function () {
    let Calculator;
    let calculator;

    before(async function () {

        Calculator = await ethers.getContractFactory("calculator");
        calculator = await Calculator.deploy();
    });

    it("Should return the correct area of a triangle", async function () {
        const base = 10;
        const height = 20;
        const expectedArea = (base * height) / 2;

        expect(await calculator.triangleArea(base, height)).to.equal(expectedArea);
    });

    it("Should return the correct area of a rectangle", async function () {
        const length = 10;
        const width = 20;
        const expectedArea = length * width;

        expect(await calculator.rectangleArea(length, width)).to.equal(expectedArea);
    });

    it("Should return the correct area of a square", async function () {
        const side = 10;
        const expectedArea = side * side;

        expect(await calculator.squareArea(side)).to.equal(expectedArea);
    });
});
