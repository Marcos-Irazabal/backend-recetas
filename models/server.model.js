const express = require('express');
const cors = require('cors');
const { dbConnect } = require('../db/config.db.js');

class Server {

    constructor() {
        this.app  = express();
        this.port = process.env.PORT;


        this.registerUserPath = "/api/register"
        this.loginUserPath = "/api/auth"
        this.IngredientsPath ="/api/ingredients"
        this.ordenesPath="/api/ordenes"
        this.recipesPath="/api/recipes"

        this.dbConnection();

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();
    }

    middlewares() {

        //CORS
        this.app.use( cors() );

        // Lectura y parseo del body
        this.app.use( express.json() );

        // Directorio Público
        this.app.use( express.static('public') );

    }

    //endpoints de mi server:
    routes() {
        this.app.use(this.registerUserPath,require('../router/users'));
        this.app.use(this.loginUserPath,require('../router/auth'));
        this.app.use(this.IngredientsPath,require('../router/Ingredientes'));
        this.app.use(this.ordenesPath,require('../router/orders'));
        this.app.use(this.recipesPath,require('../router/recipes'));
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