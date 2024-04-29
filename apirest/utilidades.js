//Error handler
function handleError(res, error, mensaje) {
  console.error(mensaje, error);
  res.status(500).json({ 
    status: 500,
    message: `${mensaje}. ${error}`,
    });
};

export default handleError;


 
