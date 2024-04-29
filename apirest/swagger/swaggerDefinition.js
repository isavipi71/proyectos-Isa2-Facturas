/**
 * @swagger
 * /saludo:
 *   get:
 *     summary: Hola Mundo!
 *     description: Devuelve un saludo en formato json "Hola Mundo!"
 *     responses:
 *       200:
 *         description: Saludo recibido correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 type: object
 *                 properties:
 *                   Saludo:
 *                     type: string
 *                     description: Saludo enviado
 *       500:
 *         description: Error del servidor.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   description: Codigo error http 
 *                 message:
 *                   type: string
 *                   description: Mensaje de error
 */

// const swaggerDefinition = {
//     openapi: "3.1.0",
//     info: {
//       title: "Administrador de Facturas",
//       version: "1.0.0",
//       description: "'Gestión de facturas. Almacenaje de facturas a traves de una api hacia una base de datos SQL"
//     },
//     servers: [
//       {
//         url: "http://localhost:3000/api/v1",
//         description: "Servidor local de desarrollo"
//       }
//     ],
//         paths: {
//           "/saludo": {
//             get: {
//               summary: "Saludar al mundo",
//               description: "Endpoint para saludar al mundo.",
//               responses: {
//                 "200": {
//                   description: "Saludo exitoso",
//                   content: {
//                     "application/json": {
//                       schema: {
//                         type: "object",
//                         properties: {
//                           Saludo: { type: "string" }
//                         }
//                       }
//                     }
//                   }
//                 },
//                 "default": {
//                   description: "Error al saludar al mundo",
//                   content: {
//                     "application/json": {
//                       schema: {
//                         $ref: "#/components/schemas/Error"
//                       }
//                     }
//                   }
//                 }
//               }
//             }
//         },
//         "/insert": {
//           post: {
//             summary: "Insertar una nueva factura en la base de datos",
//             description: "Inserta una nueva factura con los datos proporcionados en el cuerpo de la solicitud",
//             requestBody: {
//               required: true,
//               content: {
//                 "application/json": {
//                   schema: {
//                     type: "object",
//                     properties: {
//                       id:{ type: "int"},
//                       servicio: { type: "string"},
//                       cantidad: { type: "int" },
//                       precio: { type: "decimal" },
//                       impuesto: { type: "int" },
//                       fecha_factura: { type: "string", format: "date" },
//                       referencia_pago: { type: "int" },
//                       fecha_vencimiento: { type: "string", format: "date" },
//                       total: { type: "decimal" }
//                     }
//                   }
//                 }
//               }
//             },
//             responses: {
//               "200": {
//                 description: "Datos insertados correctamente"
//               },
//               "400": {
//                 description: "Error al insertar la factura",
//                 content: {
//                   "application/json": {
//                     schema: {
//                       $ref: "#/components/schemas/Error"
//                     }
//                   }
//                 }
//               }
//             }
//           }
//       },
//       "/read": {
//         get: {
//           summary: "Obtener todas las facturas",
//           description: "Obtiene todas las facturas almacenadas en la base de datos.",
//           responses: {
//             "200": {
//               description: "Lista de facturas obtenida correctamente",
//               content: {
//                 "application/json": {
//                   schema: {
//                     type: "array",
//                     items: {
//                       type: "object",
//                       properties: {
//                         id: { type: "integer" },
//                         servicio: { type: "string" },
//                         cantidad: { type: "integer" },
//                         precio: { type: "decimal" },
//                         impuesto: { type: "integer" },
//                         fecha_factura: { type: "string", format: "date" },
//                         referencia_pago: { type: "integer" },
//                         fecha_vencimiento: { type: "string", format: "date" },
//                         total: { type: "decimal" }
//                       }
//                     }
//                   }
//                 }
//               }
//            },
//             "400": {
//               description: "Error al obtener las facturas",
//               content: {
//                 "application/json": {
//                   schema: {
//                     $ref: "#/components/schemas/Error"
//                   }
//                 }
//               }
//             }
//           }
//         }
//     },
//     "/delete/{id}": {
//       delete: {
//         summary: "Borrar una factura",
//         description: "Borra una factura específica según su ID.",
//         parameters: [
//           {
//             in: "path",
//             name: "id",
//             required: true,
//             schema: {
//               type: "integer"
//             },
//             description: "ID de la factura a borrar"
//           }
//         ],
//         responses: {
//           "200": {
//             description: "Factura borrada correctamente"
//           },
//           "500": {
//             description: "Error al borrar la factura",
//             content: {
//               "application/json": {
//                 schema: {
//                   $ref: "#/components/schemas/Error"
//                 }
//               }
//             }
//           }
//         }
//       }
//     },
//     "/editar": {
//       put: {
//         summary: "Actualizar una factura",
//         description: "Actualiza una factura existente en la base de datos según su id",
//         parameters: [
//           {
//             in: "path",
//             name: "id",
//             required: true,
//             schema: {
//               type: "integer"
//             },
//             description: "ID de la factura a actualizar"
//           }
//         ],
//         requestBody: {
//           required: true,
//           content: {
//             "application/json": {
//               schema: {
//                 type: "object",
//                 properties: {
//                   id: { type: "integer" },
//                   servicio: { type: "string" },
//                   cantidad: { type: "integer" },
//                   precio: { type: "decimal" },
//                   impuesto: { type: "integer" },
//                   fecha_factura: { type: "string", format: "date" },
//                   referencia_pago: { type: "integer" },
//                   fecha_vencimiento: { type: "string", format: "date" },
//                   total: { type: "decimal" }
//                 }
//               }
//             }
//           }
//         },
//         responses: {
//           "200": {
//             description: "Factura actualizada correctamente"
//           },
//           "400": {
//             description: "Error al actualizar la factura",
//             content: {
//               "application/json": {
//                 schema: {
//                   $ref: "#/components/schemas/Error"
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   },
//   components: {
//       schemas: {
//         Error: {
//           type: "object",
//           properties: {
//             status: { type: "integer" },
//             message: { type: "string" }
//               }
//             }
//           }
//         }
//       };


/**
 * @swagger
 * /api/v1/insert:
 *   post:
 *     summary: Insertar una nueva factura en la base de datos.
 *     description: Inserta una nueva factura con los datos proporcionados en el cuerpo de la solicitud.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               servicio:
 *                 type: string
 *               cantidad:
 *                 type: integer
 *               precio:
 *                 type: number
 *               impuesto:
 *                 type: number
 *               fecha_factura:
 *                 type: string
 *                 format: date
 *               referencia_pago:
 *                 type: string
 *               fecha_vencimiento:
 *                 type: string
 *                 format: date
 *               total:
 *                 type: number
 *     responses:
 *       '200':
 *         description: Datos insertados correctamente.
 *       '500':
 *         description: Error al insertar la factura.
 */ 
   
/**
* @swagger
 * /api/v1/delete:
 *   delete:
 *     summary: Eliminar una factura
 *     description: Eliminar una factura de la base de datos.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 description: ID de la factura a eliminar
 *                 example: 1
 *     responses:
 *       200:
 *         description: Factura eliminada correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensaje:
 *                   type: string
 *                   description: Mensaje de éxito
 *       400:
 *         description: Error en el proceso de eliminación
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensaje:
 *                   type: string
 *                   description: Mensaje de error
 */



// module.exports = swaggerDefinition;