interface Machine {
  move() : void
}

interface Human {
  run() : void
}

class Base {}

class Robot extends Base implements Machine,
Human {
  run() {
    console.log('run');
  }
  move() {
    console.log('move');
  }
}

const rob = new Robot();
rob.run()