import 'dotenv/config';
import sequelize from './db'; // Asegúrate de que este archivo exporte la instancia de Sequelize configurada
import server from './server'; // Asegúrate de que este archivo configure y exporte tu aplicación Express

const PORT = process.env.PORT || 3001; // Uso del .env para el puerto

// Verificar la conexión a la base de datos
sequelize.authenticate()
  .then(() => {
    console.log('Conexión a la base de datos exitosa');
  })
  .catch((error: Error) => {
    console.error('Error al conectar a la base de datos:', error.message);
  });

// Sincronizar los modelos
sequelize.sync()
  .then(() => {
    console.log('Sincronización de la base de datos exitosa');
    server.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((error: Error) => {
    console.error('Error al sincronizar la base de datos:', error.message);
    console.error('Detalles del error:', error);
  });



