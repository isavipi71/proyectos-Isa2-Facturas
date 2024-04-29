// Importamos el módulo mysql2 y el módulo util de Node.js. Creamos una conexión a la base de datos MySQL con los datos de acceso a la base de datos Appfacturas. Utilizamos el método promisify() del módulo util para convertir la función query de la conexión a MySQL en una función asíncrona. Finalmente, conectamos a la base
import mysql from 'mysql2';
import util from 'util';

 const conexionMysql = mysql.createConnection ({
   host: 'localhost',
   user: 'root',
   password: '',
   database: 'Appfacturas',
 });


conexionMysql.query = util.promisify(conexionMysql.query).bind(conexionMysql);

conexionMysql.connect(err => {
  if (err) {
    console.log('Error en la conexión MySQL:', err);
  }
  console.log('Base de datos MySQL conectada!');
});

export default conexionMysql;
