module.exports = {
    devServer: {
        before: (app, server) => {
            app.get('/data/catalogo.json', (req, res) => {
                const result = require('./src/assets/catalogo.json');
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(result));
            })
            app.get('/data/catalogo2.json', (req, res) => {
                const result = require('./src/assets/catalogo2.json');
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(result));
            })
        }
    }
}