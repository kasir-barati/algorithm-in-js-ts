// #region: Product
class Computer {
  public CPU: string;
  public GPU: string;
  public RAM: string;
  public storage: string;
  public caseType: string;
  public powerSupply: string;

  public listSpecs(): void {
    console.log(`CPU: ${this.CPU}`);
    console.log(`GPU: ${this.GPU}`);
    console.log(`RAM: ${this.RAM}`);
    console.log(`Storage: ${this.storage}`);
    console.log(`Power Supply: ${this.powerSupply}`);
    console.log(`Case Type: ${this.caseType}`);
  }
}
// #endregion

// #region: Builder
interface ComputerBuilder {
  setCPU(cpu: string): ComputerBuilder;
  setGPU(gpu: string): ComputerBuilder;
  setRAM(ram: string): ComputerBuilder;
  setStorage(storage: string): ComputerBuilder;
  setPowerSupply(power: string): ComputerBuilder;
  setCaseType(caseType: string): ComputerBuilder;
  build(): Computer;
}

class GamingComputerBuilder implements ComputerBuilder {
  private computer: Computer;

  constructor() {
    this.computer = new Computer();
    this.computer.RAM = '32GB DDR4';
    this.computer.CPU = 'Intel i9 10900K';
    this.computer.GPU = 'NVIDIA RTX 3080';
    this.computer.storage = '1TB NVMe SSD';
    this.computer.caseType = 'Mid Tower';
    this.computer.powerSupply = '850W Gold';
  }

  public setCPU(cpu: string): ComputerBuilder {
    this.computer.CPU = cpu;
    return this;
  }
  public setGPU(gpu: string): ComputerBuilder {
    this.computer.GPU = gpu;
    return this;
  }
  public setRAM(ram: string): ComputerBuilder {
    this.computer.RAM = ram;
    return this;
  }
  public setStorage(storage: string): ComputerBuilder {
    this.computer.storage = storage;
    return this;
  }
  public setPowerSupply(power: string): ComputerBuilder {
    this.computer.powerSupply = power;
    return this;
  }
  public setCaseType(caseType: string): ComputerBuilder {
    this.computer.caseType = caseType;
    return this;
  }
  public build(): Computer {
    return this.computer;
  }
}

class OfficeComputerBuilder implements ComputerBuilder {
  private computer: Computer;

  constructor() {
    this.computer = new Computer();
    this.computer.RAM = '16GB DDR4';
    this.computer.CPU = 'Intel i5 10400';
    this.computer.GPU = 'Integrated Graphics';
    this.computer.storage = '512GB SSD';
    this.computer.caseType = 'Mini Tower';
    this.computer.powerSupply = '500W Bronze';
  }

  public setCPU(cpu: string): ComputerBuilder {
    this.computer.CPU = cpu;
    return this;
  }
  public setGPU(gpu: string): ComputerBuilder {
    this.computer.GPU = gpu;
    return this;
  }
  public setRAM(ram: string): ComputerBuilder {
    this.computer.RAM = ram;
    return this;
  }
  public setStorage(storage: string): ComputerBuilder {
    this.computer.storage = storage;
    return this;
  }
  public setPowerSupply(power: string): ComputerBuilder {
    this.computer.powerSupply = power;
    return this;
  }
  public setCaseType(caseType: string): ComputerBuilder {
    this.computer.caseType = caseType;
    return this;
  }
  public build(): Computer {
    return this.computer;
  }
}
// #endregion

// #region: Director
class ComputerDirector {
  private builder: ComputerBuilder;

  constructor(builder: ComputerBuilder) {
    this.builder = builder;
  }

  public constructGamingPc(): void {
    this.builder
      .setCPU('Intel Core i9-14900K')
      .setGPU(
        'GIGABYTE GeForce RTX 4090 Windforce V2 24GB GDDR6X Grafikkarte 1xHDMI, 3xDP',
      )
      .setRAM('G.Skill Trident Z5 Neo RGB DDR5-6000')
      .setStorage('T705 PCIe Gen5 NVMe M. 2 SSD')
      .setPowerSupply('Corsair RM750x')
      .setCaseType('Corsair Obsidian Series 4000X RGB');
  }

  public constructOfficePc(storage: string, caseType: string): void {
    this.builder
      .setCPU('Core i5-12400')
      .setGPU('Ryzen 5 5600G')
      .setRAM('8GB 2Rx8 PC3 12800U')
      .setStorage(storage)
      .setPowerSupply('Seasonic B12 BC-650 650W')
      .setCaseType(caseType);
  }

  public getProduct(): Computer {
    return this.builder.build();
  }
}
// #endregion

const gamingBuilder = new GamingComputerBuilder();
const officeBuilder = new OfficeComputerBuilder();
const director = new ComputerDirector(gamingBuilder);
director.constructGamingPc();
const gamingComputer = director.getProduct();
