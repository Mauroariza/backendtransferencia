
Descripción del Proyecto
Este proyecto es una aplicación full stack que utiliza React con TypeScript y Vite en el frontend, y Node.js con Express y Sequelize en el backend. La aplicación incluye funcionalidades de autenticación de usuarios y manejo de comentarios.
Estructura del Proyecto
Backend
Tecnologías Utilizadas: Node.js, Express, Sequelize, PostgreSQL.
Funcionalidades: Autenticación de usuarios y manejo de comentarios.
Estructura:
Configuración:
Instalación y Ejecución:
Instala las dependencias:
bash
cd backend
npm install
Inicia el servidor en modo desarrollo:
bash

npm run dev
Archivos Clave:
src/index.ts: Punto de entrada del servidor.
src/db.ts: Configuración de la conexión a la base de datos.
src/controllers/commentController.ts: Controladores para las operaciones de comentarios.
Frontend
Tecnologías Utilizadas: React, TypeScript, Vite, Tailwind CSS.
Estructura:
Instalación y Ejecución:
Instala las dependencias:
bash


cd frontend
npm install
Inicia el servidor de desarrollo:
bash

npm run dev
Archivos Clave:
src/main.tsx: Punto de entrada de la aplicación React.
src/pages/SignIn.tsx: Página de inicio de sesión.
src/api/axios.ts: Configuración de Axios para las solicitudes HTTP.
tailwind.config.js: Configuración de Tailwind CSS.
Scripts Disponibles
Backend
npm run dev: Inicia el servidor en modo desarrollo.
Frontend
npm run dev: Inicia el servidor de desarrollo.
npm run build: Construye la aplicación para producción.
npm run lint: Ejecuta ESLint para encontrar y arreglar problemas en el código.
npm run preview: Previsualiza la aplicación construida.
Descripción del Código
Backend
El backend de este proyecto está construido con Node.js, Express y Sequelize, y utiliza una base de datos PostgreSQL. A continuación, se describe la estructura y las funcionalidades principales del backend:
Configuración de la Base de Datos:
Archivo: src/db.ts
Funciones Importantes:
sequelize.authenticate(): Verifica la conexión a la base de datos.
sequelize.sync(): Sincroniza los modelos con la base de datos.
Modelos:
Archivos: src/models/User.ts, src/models/Comentario.ts, src/models/Device.ts
Funciones Importantes:
UserFactory(sequelize): Define el modelo de usuario.
CommentFactory(sequelize): Define el modelo de comentario.
DeviceFactory(sequelize): Define el modelo de dispositivo.
Servidor:
Archivo: src/server.ts
Funciones Importantes:
server.use(express.json()): Configura el servidor para manejar JSON.
server.use(morgan('dev')): Configura el middleware de logging.
server.use(cors(corsOptions)): Configura el middleware de CORS.
server.use(passport.initialize()): Inicializa Passport para la autenticación.
Punto de Entrada:
Archivo: src/index.ts
Funciones Importantes:
server.listen(PORT): Inicia el servidor en el puerto especificado.
Frontend
El frontend de este proyecto está construido con React, TypeScript y Vite, y utiliza Tailwind CSS para el diseño. A continuación, se describe la estructura y las funcionalidades principales del frontend:
Punto de Entrada:
Archivo: src/main.tsx
Descripción: Este archivo es el punto de entrada de la aplicación React. Aquí se monta el componente raíz en el DOM.
Páginas:
Archivos: src/pages/HomePage.tsx, src/pages/DeviceDetailPage.tsx, src/pages/SignInPage.tsx, src/pages/SignUpPage.tsx
Funciones Importantes:
HomePage: Muestra la lista de dispositivos.
DeviceDetailPage: Muestra los detalles de un dispositivo específico.
SignInPage: Página de inicio de sesión.
SignUpPage: Página de registro de usuarios.
Componentes:
Archivos: src/components/DeviceList.tsx, src/components/Navbar.tsx
Funciones Importantes:
DeviceList: Componente que muestra una lista de dispositivos.
NavBar: Barra de navegación que incluye enlaces a diferentes páginas y opciones de autenticación.
API Services:
Archivos: src/api/deviceService.ts, src/api/commentService.ts
Funciones Importantes:
obtenerDispositivos: Función para obtener la lista de dispositivos desde el backend.
createComment, deleteComment, updateComment: Funciones para manejar comentarios (crear, eliminar, actualizar).
Estado Global:
Archivo: src/store/authStore.ts
Funciones Importantes:
useAuthStore: Hook para manejar el estado de autenticación de usuarios.
Configuración de Estilos:
Archivo: tailwind.config.js
Descripción: Configuración de Tailwind CSS para el diseño de la aplicación.
Funcionalidades Principales
Autenticación de Usuarios:
Utiliza el estado global manejado por useAuthStore para verificar si un usuario está autenticado.
Las páginas de inicio de sesión y registro permiten a los usuarios autenticarse y crear nuevas cuentas.
Manejo de Dispositivos:
La página HomePage muestra una lista de dispositivos utilizando el componente DeviceList.
La página DeviceDetailPage muestra los detalles de un dispositivo específico, incluyendo su nombre, descripción e imagen.
Manejo de Comentarios:
Las funciones createComment, deleteComment y updateComment permiten a los usuarios crear, eliminar y actualizar comentarios en los dispositivos.
Navegación:
Utiliza React Router para manejar la navegación entre diferentes páginas de la aplicación.
El componente NavBar proporciona enlaces a las páginas principales y opciones de autenticación.
Variables de Entorno
Archivo: .env
Descripción: Contiene las variables necesarias para la configuración de la base de datos y el puerto del servidor.
Este frontend está diseñado para proporcionar una interfaz de usuario intuitiva y responsiva, permitiendo a los usuarios explorar dispositivos, ver detalles y manejar comentarios de manera eficiente.



