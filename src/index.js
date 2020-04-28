/**
 * Reading Environment Variables
 */
//Tiempo de envio de datos
const dotenv = require('dotenv');
dotenv.config();

/**
 * Importing the Main App
 */
const app = require('./app');

app.listen(app.get('port'));
console.log('Server is in port', app.get('port'));