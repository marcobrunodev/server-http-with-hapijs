const Hapi = require('hapi')
const server = new Hapi.Server()
const config = {
  port : 3000,
  host: 'localhost'
}

server.connection(config)

server.route({
  method : 'GET',
  path : '/',
  handler : (req, res) => {
    res('Hello!')
  }
})

server.route({
  method : 'GET',
  path : '/contato',
  handler : (req, res) => {
    res(`
      <h1>Contato</h1>

      <form action="/contato" method="POST">
        <label for="email">Email:</label>
        <input type="email" name="email" id="email">

        <label for="mensagem">Mensagem:</label>
        <textarea name="mensagem" id="mensagem"></textarea>

        <input type="submit" value="Enviar">
      </form>
    `)
  }
})

server.start((err) => {
  if (err) {
    throw err
  }

  console.log(`Server rodando em: ${server.info.uri}`);
  console.log('Para derrubar o servidor: ctrl + c');
})
