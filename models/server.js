const express = require('express');
var cors = require('cors');


class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usariosPath = '/api/usuarios';
        
        this.middlewares();

        this.routes();
    }

    middlewares() {
        this.app.use(cors());

        //Parseo y lectura del body

        this.app.use(express.json());

        //Directorio Público
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use(this.usariosPath,require('../routes/user'));
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        });
    }
}

module.exports = Server;