interface SystemConfig {
  attr1 : number;
  attr2 : string;
  func1() : string;
}

interface ModuleType {
  data : {
    attr1?: string,
    attr2?: number
  },
  visible : boolean
}

const config : SystemConfig = {
  attr1: 1,
  attr2: 'str',
  func1: () => ''
};

const mod : ModuleType = {
  data: {
    attr1: '1'
  },
  visible: true
};