import express from 'express';
import cors from 'cors';
import serviciosRoutes from './routes/serivicios.routes.js';
import clientesRoutes from '../apirest/routes/clientes.routes.js';
import facturasRoutes from './routes/facturas.routes.js';

const port = process.env.PORT || 3000; 
const api = express();

// Middleware
api.use(cors());
api.use(express.json());

api.use(express.static('public', { extensions: ['html', 'htm', 'js'], index: 'clientes.html' }));

// Rutas
api.use('/api/v1/servicios', serviciosRoutes);
api.use('/api/v1/clientes', clientesRoutes);
api.use('/api/v1/facturas', facturasRoutes);

// arrancar server
api.listen(port, () => {
  console.log(`Servidor arrancado y escuchando por el puerto: ${port}`); 
});





  
  

   