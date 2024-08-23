import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const CalculatorModule = buildModule("CalculatorModule", (m) => {
  const calculator = m.contract("calculator", [], {});

  return { calculator };
});

export default CalculatorModule;
