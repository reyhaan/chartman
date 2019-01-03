const server = require('./routes');
const port = 80

server.listen(port, () => console.log(`Shopify app listening on port ${port}!`));

module.exports = server