const net = require('net');
const client = net.connect({host:'192.168.50.77',port: 4481}, () => {
  // 'connect' listener
  console.log('connected to server!');
  client.write('SET aaa 老白');
  client.end();
});
client.on('data', (data) => {
  console.log(data.toString());
});
client.on('end', () => {
  console.log('disconnected from server');
});
client.on('error',(err)=>{
	console.error(err);
})
