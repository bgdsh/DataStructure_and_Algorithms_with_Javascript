const play = require('./hello').play;

const helloObj = play.helloworld.create({
  id: 1, str: 'hi', opt: 1
});

const helloBuf = play.helloworld.encode(helloObj).finish();

const revertedObj = play.helloworld.decode(helloBuf);

console.log(revertedObj.toJSON());
