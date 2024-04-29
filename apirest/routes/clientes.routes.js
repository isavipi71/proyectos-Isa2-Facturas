import express from 'express';
import cors from 'cors';
import conexionMysql from '../conexion.js';
import handleError from '../utilidades.js';

const router = express.Router();
// Middleware para parsear el body de las peticiones
router.use(express.json());
router.use(cors()); 

router.post('/crearCliente', async (req, res) => {
    try{
      // Capturar los datos del cliente
      const clientes  = req.body;
      // consulta SQL para insertar un nuevo cliente
      const query = "INSERT INTO clientes (`Nombre`, `nif`, `Calle`, `Provincia`, `Ciudad`, `CodigoPostal`, `Pais`, `Telefono`, `Movil`, `CorreoElectronico`) VALUES (?,?,?,?,?,?,?,?,?,?)";
      conexionMysql.query(query, [clientes.Nombre, clientes.nif,  clientes.Calle, clientes.Provincia, clientes.Ciudad, clientes.CodigoPostal, clientes.Pais, clientes.Telefono, clientes.Movil, clientes.CorreoElectronico], (error, result) => {
        if (error) {
          handleError(res, error, "Error al insertar el cliente");
        } else {
          res.json({
            "mensaje": "Cliente insertado correctamente"
          })
        }
      });
    } catch (error) {
      handleError(res, error, "Error al insertar el cliente");
    }
  });

  // Obtener todos los clientes
router.get('/obtenerClientes', async (req, res) => {
  try{
    const query = "SELECT * FROM clientes";
    conexionMysql.query(query, (error, result) => {
      if (error) {
        handleError(res, error, "Error al obtener los clientes");
      } else {
        if (result.length > 0) {
          res.json(result);
        } else {
          res.status(404).json({
            "mensaje": "Cliente no encontrado"
          });
        }
      }
    });
  } catch (error) {
    handleError(res, error, "Error al obtener los clientes");
  }
});

// obtener cliente por id
router.get('/obtenerCliente/:id', async (req, res) => {
  try{
    const id = req.params.id;
    const query = "SELECT * FROM clientes WHERE id = ?";
    conexionMysql.query(query, [id], (error, result) => {
      if (error) {
        handleError(res, error, "Error al obtener el cliente");
      } else {
        if (result.length > 0) {
          res.json(result[0]);
        } else {
          res.status(404).json({
            "mensaje": "Cliente no encontrado"
          });
        }
      }
    });
  } catch (error) {
    handleError(res, error, "Error al obtener el cliente");
  }
});


// Eliminar un cliente
router.delete('/borrarCliente/:id', (req, res) => {
  try{
    const id = req.params.id;
    const query = "DELETE FROM clientes WHERE id = ?";
    conexionMysql.query(query, [id], (error, result) => {
      if (error) {
        handleError(res, error, "Error al borrar el cliente");
      } else {
        if (result.affectedRows > 0) {
          res.json({
            "mensaje": "Cliente borrado correctamente"
          });
        } else {
          res.status(404).json({
            "mensaje": "Cliente no encontrado"
          });
        }
      }
    });
  }
  catch (error) {
    handleError(res, error, "Error al borrar el cliente");
  }
});

// Actualizar un cliente
router.put('/editarCliente/:id', async (req, res) => {
  try{
    const id = req.params.id;
    const cliente= req.body;
    console.log('Datos recibidos del cliente:', cliente);
    const sql = 'UPDATE clientes SET Nombre = ?, nif = ?, Calle = ?, Provincia = ?, Ciudad = ?, CodigoPostal = ?, Pais = ?, Telefono = ?, Movil = ?, CorreoElectronico = ? WHERE id = ?';
    conexionMysql.query(sql, [cliente.Nombre, cliente.nif, cliente.Calle, cliente.Provincia, cliente.Ciudad, cliente.CodigoPostal, cliente.Pais, cliente.Telefono, cliente.Movil, cliente.CorreoElectronico, id], (error, results) => {
    if (error) {
      handleError(res, error, "Error al editar, no se pudo actualizar el cliente");
    } else {
      if (results.affectedRows > 0) {
        res.json({
          "mensaje": "Cliente editado correctamente"
        });
      } else {
        res.status(404).json({
          "mensaje": "Cliente no encontrado"
        });
      }
    }
  });
  } catch (error) {
    handleError(res, error, "Error al editar el cliente");
  }
});

// Ruta para asignar un servicio a un cliente
router.post('/asignarServicio', async (req, res) => {
  try {
    const { idCliente, idServicio } = req.body;
    // Verificar si el cliente y el servicio existen
    const cliente = await obtenerClientePorId(idCliente);
    const servicio = await obtenerServicioPorId(idServicio);
    if (!cliente || !servicio) {
      return res.status(404).json({ error: "El cliente o el servicio no existen." });
     }
    // Realizar la asignación en la tabla de asignación
    const sql = 'INSERT INTO Asignacion (`id-cliente`, `id-servicio`) VALUES (?, ?)';
     conexionMysql.query(sql, [idCliente, idServicio], (error, results) => {
      if (error) {
        handleError(res, error, 'Error al asignar el servicio al cliente:');
        return;
       }
       res.json({ idCliente, idServicio });
     });
  } catch (error) {
     handleError(res, error, "Error al asignar el servicio al cliente");
   }
 });


 function obtenerClientePorId(idCliente) {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM clientes WHERE id = ?';
    conexionMysql.query(query, [idCliente], (error, result) => {
      if (error) {
        handleError('Error al obtener cliente por ID:', error);
        reject(error);
      } else {
        resolve(result.length > 0 ? result[0] : null);
      }
    });
  });
}

function obtenerServicioPorId(idServicio) {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM Servicios WHERE id = ?';
    conexionMysql.query(query, [idServicio], (error, result) => {
      if (error) {
        handleError('Error al obtener servicio por ID:', error);
        reject(error);
      } else {
        resolve(result.length > 0 ? result[0] : null);
      }
    });
  });
}
 
// funcion para obtener un  cliente por id

// async function obtenerClientePorId(idCliente) {
//   try {
//       const query = 'SELECT * FROM clientes WHERE id = ?';
//       const result =  await conexionMysql.query(query, [idCliente]);
//       return result.length > 0 ? result[0] : null;
//   } catch (error) {
//      handleError('Error al obtener cliente por ID:', error);
//       throw error;
//   }
// }

// // funcion para obtener un servicio por id
// async function obtenerServicioPorId(idServicio) {
//   try {
//       const query = 'SELECT * FROM Servicios WHERE id = ?';
//       const result = await conexionMysql.query(query, [idServicio]);
//       return result.length > 0 ? result[0] : null;
//   } catch (error) {
//       handleError('Error al obtener servicio por ID:', error);
//       throw error;
//   }
// }

export default router;




//obtener los servicios asignados a un cliente
// router.get('/obtenerServiciosCliente/:id', async (req, res) => {
//   try{
//     const sql = `
//     SELECT s.*
//     FROM Asignacion a
//     JOIN Servicios s ON a.\`id-servicio\` = s.id
//      WHERE a.\`id-cliente\` = ?     `;
//     conexionMysql.query(sql, [req.params.id], (error, results) => {
//       if (error) {
//          handleError(res, error, "Error al obtener los servicios del cliente");
//         return res.status(500).json({ error });
//        }
//         if (results.length === 0) {
//       return res.status(404).json({ error: "No se encontraron servicios asignados al cliente." });
//     }
//      res.json(results);
//    });
//    } catch (error) {
//      handleError(res, error, "Error al obtener los servicios del cliente");
//    }
//  });

//obtener los servicios asignados a un cliente

// router.get('/clientes/:id/servicios', (req, res) => {
//   const sql = `
//     SELECT s.*
//     FROM Asignaciones a
//     JOIN Servicios s ON a.IdServicio = s.Id
//     WHERE a.IdCliente = ?
//   `;
//   conexionMysql.query(sql, [req.params.id], (error, results) => {
//     if (error) {
//       handleError(res, error, "Error al obtener los servicios del cliente");
//       return res.status(500).json({ error });
//     }
//     res.json(results);
//   });
// });




//Asignar un servicio a un cliente
// router.post('/clientes/:id/servicios', (req, res) => {
//   const { idServicio } = req.body;
//   const sql = 'INSERT INTO Asignacion (id.cliente, id.servicio) VALUES (?, ?)';
//   conexionMysql.query(sql, [req.params.id, id.servicio], (error, results) => {
//     if (error) {
//       // Aquí puedes llamar a tu función mostrarAlerta
//       return res.status(500).json({ error });
//     }
//     res.json({ id.cliente: req.params.id, id.servicio});
//   });
// });

//asignar un servicio a un cliente
// router.post('/asignarServicio', async (req, res) => {
// const { idCliente, idServicio } = req.body;
// const sql = 'INSERT INTO Asignacion (`id.cliente`, `id.servicio`) VALUES (?, ?)';
// conexionMysql.query(sql, [idCliente, idServicio], (error, results) => {
//     if (error) {
//       handleError(res, error, "Error al asignar el servicio al cliente");
//              return res.status(500).json({ error });
//      }
//     res.json({ idCliente, idServicio });
//   });
//  });


// esta funcion se tiene que probar sino funciona 
//funciones para obtener un cliente por id
// async function obtenerClientePorId(id) {
//   return new Promise((resolve, reject) => {
//     const sql = 'SELECT * FROM clientes WHERE id = ?';
//     conexionMysql.query(sql, [id], (error, results) => {
//       if (error) {
//         reject(error);
//       } else {
//         resolve(results[0]);
//       }
//     });
//   });
// }






