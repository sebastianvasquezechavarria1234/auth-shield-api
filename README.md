# JWT API Authentication

Esta es una API REST profesional construida con Node.js, Express y MongoDB para gestionar la autenticación de usuarios mediante JSON Web Tokens (JWT).

## 🚀 Características

- **Autenticación con JWT:** Generación y validación de tokens seguros.
- **Seguridad:** Uso de `helmet` para headers HTTP y `cors` para acceso cruzado.
- **Validación de Datos:** Uso de `Joi` para validar entradas de usuario.
- **Encriptación:** Contraseñas hasheadas con `bcrypt`.
- **Manejo de Errores:** Middleware global para captura de errores y rutas 404.
- **Variables de Entorno:** Configuración segura mediante `.env`.

## 🛠️ Instalación

1. Clonar el repositorio:
   ```bash
   git clone <url-del-repo>
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Configurar variables de entorno:
   - Crea un archivo `.env` en la raíz basado en `.env.example`.

4. Iniciar el servidor:
   ```bash
   npm run dev
   ```

## 🔌 Endpoints

### Usuarios
- `POST /api/user/register`: Registro de nuevos usuarios.
- `POST /api/user/login`: Inicio de sesión y obtención del token.

### Protegidos
- `GET /api/dashboard`: Ruta de ejemplo protegida (requiere header `auth-token`).

## 🔑 Variables de Entorno

- `MONGODB_URI`: Cadena de conexión a MongoDB Atlas.
- `TOKEN_SECRET`: Secreto para firmar los tokens JWT.
- `PORT`: Puerto donde correrá el servidor (opcional, default 3001).
