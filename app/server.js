const Hapi = require('hapi')
const server = new Hapi.Server()
const config = {
  port : 3000,
  host: 'localhost'
}

server.connection(config)

server.start((err) => {
  if (err) {
    throw err
  }

  console.log(`Server rodando em: ${server.info.uri}`);
  console.log('Para derrubar o servidor: ctrl + c');
})
