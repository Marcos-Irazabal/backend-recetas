const express = require('express');
const { dbConnect } = require('../db/config.db.js');

class Server {

    constructor() {
        this.app  = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';
        this.loginPath = '/api/auth';
        this.uploadPath = '/api/upload';
        this.categoryPath = '/api/category';

        this.dbConnection();

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();
    }

    middlewares() {

        // CORS
        //this.app.use( cors() );

        // Lectura y parseo del body
        this.app.use( express.json() );

        // Directorio Público
        this.app.use( express.static('public') );

    }

    //endpoints de mi server:
    routes() {
        // this.app.use( this.usuariosPath, require('../routes/usuarios'));
        // this.app.use( this.loginPath, require('../routes/auth'));
        // this.app.use( this.uploadPath, require('../routes/uploads'));
        // this.app.use( this.categoryPath, require('../routes/category'));
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port );
        });
    }

    async dbConnection(){
        await dbConnect()
    }

}

module.exports = Server;