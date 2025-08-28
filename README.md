# 🚀 Plantilla de Proyecto: React, Vite, TypeScript y Sass

Bienvenido a esta plantilla de proyecto, diseñada para que comiences a desarrollar de forma rápida y eficiente. Utiliza un **stack tecnológico** moderno y está configurada con las herramientas de desarrollo esenciales para garantizar un código de alta calidad.

## 📋 Requisitos y Tecnologías

Este proyecto está construido con:

- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **Vite**: Un `bundler` rápido y optimizado para el desarrollo.
- **TypeScript**: Un superconjunto tipado de JavaScript que mejora la robustez del código.
- **Sass**: Un preprocesador de CSS para escribir estilos más potentes y organizados.

Además, incluye herramientas de desarrollo para asegurar la calidad y consistencia del código:

- **ESLint y Prettier**: Para el análisis y formateo automático del código.
- **Husky y Commitlint**: Para asegurar que los mensajes de `commit` sigan una convención estándar y se ejecuten scripts antes de cada `commit`.
- **Vitest**: Un `framework` de pruebas unitarias.

## 📂 Estructura del Proyecto

La estructura de carpetas sigue un enfoque modular, con nombres en **kebab-case** para mantener la coherencia.

```
.
├── src/
│   ├── assets/              # Contiene imágenes, fuentes, etc.
│   ├── components/          # Componentes reutilizables de la aplicación.
│   ├── pages/               # Vistas o páginas de la aplicación.
│   ├── styles/              # Archivos Sass globales (variables, mixins, theming).
│   ├── App.tsx              # Componente principal de la aplicación.
│   └── main.tsx             # Punto de entrada de la aplicación.
├── .husky/                  # Configuración de los Git Hooks.
├── .eslintrc.cjs            # Configuración de ESLint.
├── .prettierrc              # Configuración de Prettier.
├── commitlint.config.cjs    # Configuración de Commitlint.
├── package.json             # Dependencias y scripts.
└── vite.config.ts           # Configuración de Vite.
```

## 👣 Primeros Pasos

Sigue estos pasos para poner el proyecto en marcha en tu entorno local:

1.  **Clona el repositorio**:

    ```bash
    git clone https://github.com/tu-usuario/nombre-del-repo.git
    cd nombre-del-repo
    ```

2.  **Instala las dependencias**:

    ```bash
    npm install
    ```

3.  **Inicia el servidor de desarrollo**:

    ```bash
    npm run dev
    ```

Esto abrirá la aplicación en `http://localhost:5173`.

## 📜 Scripts Disponibles

El `package.json` incluye varios scripts útiles para el desarrollo y mantenimiento del proyecto.

- `npm run dev`: Inicia el servidor de desarrollo de Vite.
- `npm run build`: Compila la aplicación para producción.
- `npm run lint`: Ejecuta ESLint para analizar el código.
- `npm run test`: Ejecuta las pruebas unitarias con Vitest.

## 🎨 Temas (Claro y Oscuro)

El proyecto incluye un sistema de `theming` que permite cambiar entre un **tema claro y uno oscuro**. Los estilos están configurados en `src/styles/_variables.scss` y se controlan a través del atributo `data-theme` en la etiqueta `<html>`.

Para cambiar de tema, simplemente modifica el valor de este atributo. Puedes implementarlo fácilmente con JavaScript.

---

### 🤝 Contribución

¡Las contribuciones son bienvenidas\! Si tienes ideas para mejorar esta plantilla, no dudes en abrir un `issue` o enviar un `pull request`.
