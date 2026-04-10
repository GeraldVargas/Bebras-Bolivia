# Backend - Bebras API

Backend funcional con Node.js y Express

## 📁 Estructura del Proyecto

```
backb/
├── src/
│   ├── models/          # Modelos de datos
│   ├── routes/          # Rutas de API
│   ├── controllers/      # Lógica de controladores
│   ├── middleware/       # Middlewares personalizados
│   ├── services/        # Lógica de negocio
│   ├── config/          # Configuraciones
│   ├── utils/           # Utilidades y helpers
│   ├── app.js           # Configuración de Express
│   └── server.js        # Inicio del servidor
├── .env.example         # Variables de entorno ejemplo
├── package.json
└── README.md
```

## 🚀 Instalación

```bash
npm install
```

## 📝 Configuración

1. Copiar `.env.example` a `.env`
2. Configurar variables de entorno según necesidad

```bash
cp .env.example .env
```

## ▶️ Ejecutar Servidor

**Modo desarrollo (con reinicio automático):**

```bash
npm run dev
```

**Modo producción:**

```bash
npm start
```

El servidor estará disponible en `http://localhost:3000`

## 📚 Endpoints

### Health Check
- `GET /api/health` - Estado del API

### Usuarios
- `GET /api/users` - Obtener todos los usuarios
- `GET /api/users/:id` - Obtener usuario por ID
- `POST /api/users` - Crear nuevo usuario

## 🔧 Tecnologías

- **Express.js** - Framework web
- **CORS** - Manejo de CORS
- **Dotenv** - Variables de entorno
- **Node.js** - Runtime JavaScript

## 📖 Próximos Pasos

- Integrar base de datos (PostgreSQL, MongoDB, etc.)
- Agregar autenticación (JWT)
- Implementar validaciones avanzadas
- Agregar tests
- Documentación con Swagger
