import express from 'express';
import cors from 'cors';
import conexionMysql from '../conexion.js';
import handleError from '../utilidades.js';

const router = express.Router();

// Middleware para parsear el body de las peticiones
router.use(express.json());
router.use(cors());


//saludo
router.get("/saludo", async (req, res) => {
  try {
    res.status(200).json({ Saludo: "Bienvenido a App-Facturas" });
  } catch (error) {
    handleError(res, error, "Error");
  }
});


// Obtener todas las facturas - CRUD GET
router.get('/leerFacturas', async (req, res) => {
  try {
    const query = "SELECT * FROM facturas";
    conexionMysql.query(query, (error, results) => {
      if (error) {
        handleError(res, error, "Error al obtener las facturas");
      } else {
        res.status(200).json({
          "resultado": results,
        });
      }
    });
  } catch (error) {
    handleError(res, error, "Error al obtener las facturas");
  }
});
    
 
// Obtener una factura por su ID - CRUD GET
// router.get('/:id', (req, res) => {
//     const facturaID = req.params.id;
//     const query = "SELECT * FROM facturas WHERE id = ?";
//     conexionMysql.query(query, [facturaID], (error, results) => {
//         if (error) {
//             handleError(res, error, "Error al obtener la factura");
//         } else {
//             res.status(200).json({
//                 "resultado": results,
//             });
//         }
//     });
// });

// Crear una nueva factura - CRUD POST
router.post('/crearFactura',  async (req, res) => {
  try {
    const factura = req.body;
    const query = "INSERT INTO facturas VALUES (default, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    conexionMysql.query(query, [factura.id_cliente, factura.id_servicio, factura.Fecha_factura, factura.Referencia_pago, factura.Fecha_vencimiento, factura.Cantidad, factura.Precio, factura.Impuesto, factura.Total], (error, result) => {
      if (error) {
        handleError(res, error, "Error al insertar la factura");
      } else {
        res.json({
          "mensaje": "Dato insertado correctamente"
        })
      }
    });

  } catch (error) {
    handleError(res, error, "Error al insertar la factura");
  }
});
   
// Eliminar una factura existente - CRUD DELETE
router.delete('/borrarFactura/:id', async (req, res) => {
  try {
    const facturaId = req.params.id;
    const query = "DELETE FROM facturas WHERE id = ?";
    conexionMysql.query(query, [id], (error, result) => {
      if (error) {
        handleError(res, error, "Error al borrar la factura");
      } else {
        if (result.affectedRows > 0) {
        res.json({ mensaje: "Factura borrada correctamente" });
      }else {
        res.status(404).json({ mensaje: "Factura no encontrada" });
      }
    }
    });
  } catch (error) {
    handleError(res, error, "Error al borrar la factura");
  }
});


// Actualizar una factura existente - CRUD PUT
router.put('/editarFactura/:id', (req, res) => {
  const facturaId = req.params.id;
  const facturaActualizar = req.body;
  try {
    const query = "UPDATE facturas SET Servicio=?, Cantidad=?, Precio=?, Impuesto=?, Fecha_factura=?, Referencia_pago=?, Fecha_vencimiento=?, Total=? WHERE id=?";
    conexionMysql.query(query, [
        facturaActualizar.Servicio,
        facturaActualizar.Cantidad,
        facturaActualizar.Precio,
        facturaActualizar.Impuesto,
        facturaActualizar.Fecha_factura,
        facturaActualizar.Referencia_pago,
        facturaActualizar.Fecha_vencimiento,
        facturaActualizar.Total,
        facturaId
    ], (error, result) => {
        if (error) {
            handleError(result, error, "Error al actualizar la factura");
        } if (result.affectedRows > 0) {
          res.status(200).json({
          mensaje: `Factura con ID ${facturaId} actualizada correctamente`
            });
        }else {
          res.status(404).json({
          mensaje: "Factura no encontrada"
        });
      }
    });

} catch (error) {
    handleError(res, error, "Error al actualizar la factura");
}
});

export default router;















