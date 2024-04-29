import express from 'express';
import cors from 'cors';
import conexionMysql from '../conexion.js';
import handleError from '../utilidades.js';

const router = express.Router();

router.use(express.json());
router.use(cors()); 
//CRUD de servicios POST

router.post('/crearServicio', async (req, res) => {
  try{
    const servicio = req.body;
    const query = "INSERT INTO Servicios (`Nombre_Servicio`, `Precio`, `Descripcion`, `Informacion_Adicional`) VALUES (?,?,?,?)";
    conexionMysql.query(query, [servicio.Nombre_Servicio, servicio.Precio, servicio.Descripcion, servicio.Informacion_Adicional], (error, result) => {
      if (error) {
        handleError(res, error, "Error al insertar el servicio");
      } else {
        res.json({
          "mensaje": "Servicio insertado correctamente"
        })
      }
    });
  } catch (error) {
    handleError(res, error, "Error al insertar el servicio");
  }
});

//lEer todos los servicios //CRUD GET
router.get('/obtenerServicio', async (req, res) => {
  try {
    const query = "SELECT * FROM Servicios";
    conexionMysql.query(query, (error, result) => {
      if (error) {
        handleError(res, error, "Error al obtener el servicio");
      } else {
        if (result.length > 0) {
          res.json(result);
        } else {
          res.status(404).json({
            "mensaje": "Servicio no encontrado"
          });
        }
      }
    });
  } catch (error) {
    handleError(res, error, "Error al obtener el servicio");
  }
});


// obtener servicio por id
router.get('/obtenerServicio/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const query = "SELECT * FROM Servicios WHERE id = ?";
    conexionMysql.query(query, [id], (error, result) => {
      if (error) {
        handleError(res, error, "Error al obtener el servicio");
      } else {
        if (result.length > 0) {
          res.json(result[0]);
        } else {
          res.status(404).json({
            "mensaje": "Servicio no encontrado"
          });
        }
      }
    });
  } catch (error) {
    handleError(res, error, "Error al obtener el servicio");
  }
});


// borra un servicio CRUD DELETE
router.delete('/borrarServicio/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const query = "DELETE FROM Servicios WHERE id = ?";
    conexionMysql.query(query, [id], (error, result) => {
      if (error) {
        handleError(res, error, "Error al borrar el servicio");
      } else {
        if (result.affectedRows > 0) {
          res.json({
            "mensaje": "Servicio borrado correctamente"
          });
        } else {
          res.status(404).json({
            "mensaje": "Servicio no encontrado"
          });
        }
      }
    });
  } catch (error) {
    handleError(res, error, "Error al borrar el servicio");
  }
});

// editar un servicio CRUD PUT
router.put('/editarServicio/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const servicio = req.body;
    const query = "UPDATE Servicios SET Nombre_Servicio = ?, Precio = ?, Descripcion = ?, Informacion_Adicional = ? WHERE id = ?";
    conexionMysql.query(query, [servicio.Nombre_Servicio, servicio.Precio, servicio.Descripcion, servicio.Informacion_Adicional, id], (error, result) => {
      if (error) {
        handleError(res, error, "Error al editar el servicio");
      } else {
        if (result.affectedRows > 0) {
          res.json({
            "mensaje": "Servicio editado correctamente"
          });
        } else {
          res.status(404).json({
            "mensaje": "Servicio no encontrado"
          });
        }
      }
    });
  } catch (error) {
    handleError(res, error, "Error al editar el servicio");
  }
});

export default router;



