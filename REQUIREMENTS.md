## Requisitos del Repositorio

A continuación, se presenta un **listado de requisitos** esenciales para el repositorio, siguiendo las especificaciones que mencionaste.

- **Stack Tecnológico**: Se utilizarán las últimas versiones estables de **React, Vite, Typescript y Sass**.
- **Dependencias de Desarrollo**:
  - **Vite**: Como empaquetador de módulos (`bundler`).
  - **Eslint**: Para garantizar la calidad y coherencia del código. Se configurará con las reglas recomendadas para **React y Typescript**.
  - **Prettier**: Para formateo de código automático. Se integrará con Eslint.
  - **Husky**: Para gestionar los `git hooks` de manera sencilla, lo que permitirá ejecutar scripts antes de realizar `commits` o `pushes`.
  - **Commitlint**: Para asegurar que los mensajes de `commit` sigan una convención estándar (como la de Conventional Commits).
  - **Vitest**: Como herramienta para pruebas unitarias. Los **scripts de prueba** se añadirán en el `package.json`.
- **Convenciones de Nomenclatura**: Todos los nombres de carpetas y ficheros estarán en **kebab-case** (ej. `mi-componente.tsx`, `pagina-de-inicio.tsx`).
- **Estructura de Carpetas**: La estructura principal se encuentra dentro de `src/`, con las siguientes subcarpetas:
  - `assets/`: Contiene recursos estáticos como imágenes, fuentes y archivos JSON.
  - `components/`: Para los **componentes reutilizables** y transversales de la aplicación, como `button` o `header`.
  - `pages/`: Para los **componentes que representan las distintas páginas** o vistas. Cada página tendrá su propia subcarpeta (ej. `pages/landing-page/`).
  - `styles/`: Aloja los **estilos globales de Sass**, incluyendo la configuración de variables, `mixins` y el sistema de `theming`.
- **Páginas (Vistas)**: Se implementarán los siguientes **componentes de página**:
  - `LandingPage` (usuarios no autenticados).
  - `AboutPage`.
  - `ContactPage`.
  - `LoginPage`.
  - `HomePage` (usuarios autenticados).
  - `ProfilePage`.
  - `NotFoundPage`.
- **Sistema de Estilos (Theming)**:
  - Se implementará un sistema de **temas claro y oscuro** utilizando variables de CSS y el atributo `data-theme` en la etiqueta `<html>`.
  - Las variables de color y otros valores de diseño se definirán en un archivo Sass global dentro de `src/styles/`.
  - Se creará un **hook personalizado** para cambiar de tema y almacenarlo en el `localStorage`.
- **Configuración y Scripts**: El archivo `package.json` incluirá los scripts necesarios para el desarrollo, construcción (`build`), y ejecución de pruebas. También se configurarán archivos para ESLint, Prettier, y Vitest.

---

## Documentación para el Desarrollador

Esta sección complementa los requisitos y sirve como una **guía inicial** para cualquier desarrollador que trabaje con el repositorio.

### Primeros Pasos 👣

1.  **Clonar el repositorio**: `git clone [URL-del-repositorio]`
2.  **Instalar dependencias**: `npm install`
3.  **Iniciar el servidor de desarrollo**: `npm run dev`

### Scripts Principales 📜

- `npm run dev`: Inicia el servidor de desarrollo de Vite.
- `npm run build`: Compila el proyecto para producción.
- `npm run preview`: Previsualiza la versión compilada del proyecto.
- `npm run lint`: Ejecuta ESLint para analizar el código.
- `npm run test`: Ejecuta las pruebas unitarias con Vitest.

### Estructura de Proyecto Recomendada

```
.
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── fonts/
│   ├── components/
│   │   └── button/
│   │       ├── button.module.scss
│   │       └── button.tsx
│   ├── pages/
│   │   ├── about-page/
│   │   │   └── about-page.tsx
│   │   ├── landing-page/
│   │   │   └── landing-page.tsx
│   │   └── ...
│   ├── styles/
│   │   ├── _mixins.scss
│   │   ├── _variables.scss
│   │   └── main.scss
│   ├── App.tsx
│   └── main.tsx
├── .husky/
├── .eslintrc.cjs
├── .prettierrc
├── commitlint.config.cjs
├── package.json
└── vite.config.ts
```

### Convenciones Adicionales

- **Tipado**: Se debe hacer un uso riguroso de **Typescript** para asegurar la robustez del código. Se recomienda tipar las `props` de los componentes.
- **Manejo de Estados**: Para una gestión de estados más compleja en el futuro, se podría considerar la integración de una biblioteca como **Zustand** o **Redux Toolkit**. Aunque no es un requisito inicial, es una buena práctica a tener en cuenta.
- **Routing**: Para la navegación entre páginas se utilizará **React Router DOM**. Se debe configurar una ruta para cada una de las páginas mencionadas y una ruta `*` para la página `NotFoundPage`.

### Ejemplo de Configuración de Tema en `src/styles/_variables.scss`

```scss
:root[data-theme="light"] {
  --color-primary: #ffffff;
  --color-secondary: #000000;
}

:root[data-theme="dark"] {
  --color-primary: #000000;
  --color-secondary: #ffffff;
}
```

Esto permitirá utilizar las variables de color en cualquier componente simplemente llamándolas (`background-color: var(--color-primary);`).
