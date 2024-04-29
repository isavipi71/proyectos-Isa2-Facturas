// module.exports = (api) => {
  // Swagger setup
//   const swaggerJsdoc = require('swagger-jsdoc');
//   const swaggerUi = require('swagger-ui-express');
//   const swaggerDefinition = {
//     openapi: "3.1.0",
//     info: {
//       title: "Proyecto final IFCD0111",
//       version: "1.0.0",
//       description: "API REST Proyecto final IFCD0111 23-24"
//     }
//   };

//   const options = {
//     swaggerDefinition,
//     apis: ["./swagger/*.js"],
//   };

//   const swaggerSpec = swaggerJsdoc(options);
//   api.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
// };


// const swaggerDefinition = require('./swaggerDefinition.js');
//     module.exports = (api) => {
//       const swaggerUi = require('swagger-ui-express');
//     api.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDefinition));
//   // Documentation in JSON format
//   api.get('/docs.json', (req, res) => {
//     res.setHeader('Content-Type', 'application/json');
//     res.send(swaggerDefinition);
//   }); 
//     }
