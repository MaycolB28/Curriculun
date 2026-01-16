# 📄 CV Profesional Interactivo - Brayan Maycol Usquiza Abanto

![React](https://img.shields.io/badge/React-19.2.3-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6.2.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-Live-success?style=for-the-badge&logo=github&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

## 🌐 Ver en Vivo

**🔗 [https://maycolb28.github.io/Curriculun/](https://maycolb28.github.io/Curriculun/)**

## 🚀 Descripción

Currículum Vitae profesional e interactivo desarrollado con las últimas tecnologías web. Esta aplicación presenta mi trayectoria profesional como **Estudiante de Ingeniería Civil** y **Especialista en Seguridad Operativa & Logística** de una manera moderna, elegante y completamente responsive.

### ✨ Características Principales

- 📱 **Diseño Responsive**: Perfectamente adaptado para móviles, tablets y escritorio
- 🎨 **Interfaz Moderna**: UI/UX profesional con diseño limpio y elegante
- 📸 **Gestor de Fotos**: Carga y actualiza tu foto de perfil dinámicamente
- 🤖 **IA Integrada**: Mejora automática de fotos con Google Gemini AI
- 🎯 **Performance Optimizado**: Carga rápida y experiencia fluida
- 🖨️ **Print-Ready**: Diseño optimizado para impresión en PDF
- ⚡ **Build Rápido**: Powered by Vite para desarrollo ágil

## 🛠️ Tecnologías Utilizadas

### Frontend
- **React 19.2.3** - Biblioteca UI de última generación
- **TypeScript 5.8.2** - Type safety y mejor DX
- **Vite 6.2.0** - Build tool ultra rápido

### Librerías
- **Lucide React** - Iconos SVG modernos y ligeros
- **Google Gemini AI** - Mejora de imágenes con IA

### Estilos
- **CSS Vanilla** - Control total del diseño
- **Tailwind-like Classes** - Utility-first approach

## 📦 Instalación

### Prerrequisitos
- Node.js (v16 o superior)
- npm o yarn

### Pasos de Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/MaycolB28/Curriculun.git
cd Curriculun
```

2. **Navegar a la carpeta del proyecto**
```bash
cd "cv-pro---brayan-usquiza (1)"
```

3. **Instalar dependencias**
```bash
npm install
```

4. **Configurar variables de entorno** (Opcional - para la funcionalidad de IA)

Crear un archivo `.env.local` en la raíz del proyecto:
```env
API_KEY=tu_google_gemini_api_key
```

5. **Iniciar el servidor de desarrollo**
```bash
npm run dev
```

6. **Abrir en el navegador**
```
http://localhost:5173
```

## 🏗️ Scripts Disponibles

```bash
# Desarrollo - Inicia el servidor de desarrollo
npm run dev

# Build - Compila para producción
npm run build

# Preview - Vista previa del build de producción
npm run preview
```

## 📂 Estructura del Proyecto

```
cv-pro---brayan-usquiza (1)/
├── 📄 App.tsx              # Componente principal
├── 📄 constants.ts         # Datos del CV
├── 📄 types.ts            # Definiciones TypeScript
├── 📄 index.tsx           # Punto de entrada
├── 📄 index.html          # HTML template
├── 📄 vite.config.ts      # Configuración de Vite
├── 📄 tsconfig.json       # Configuración TypeScript
├── 📄 package.json        # Dependencies
├── 📄 .env.local          # Variables de entorno (no incluido)
└── 📄 .gitignore          # Archivos ignorados
```

## 🎯 Funcionalidades Detalladas

### 1. Perfil Profesional
Presenta un resumen ejecutivo de experiencia y competencias clave en seguridad CCTV, gestión logística e ingeniería civil.

### 2. Experiencia Laboral
Cronología detallada de posiciones profesionales con:
- Empresa y cargo
- Periodo de trabajo
- Responsabilidades y logros específicos

### 3. Formación Académica
Información educativa actualizada incluyendo:
- Universidad Privada del Norte (UPN)
- Ingeniería Civil - Quinto Ciclo
- Estado actual de estudios

### 4. Habilidades
- **Técnicas**: CCTV, Gestión de Inventarios, CAD, Microsoft Office
- **Soft Skills**: Análisis metódico, resolución de conflictos, trabajo en equipo

### 5. Mejora de Foto con IA
Funcionalidad experimental que utiliza Google Gemini AI para:
- Mejorar calidad de imagen a 4K
- Profesionalizar la apariencia
- Optimizar iluminación y nitidez

## 🌐 Deploy

### GitHub Pages (Configurado) ✅

Este proyecto está configurado para desplegarse automáticamente en GitHub Pages mediante GitHub Actions.

**Sitio en vivo**: [https://maycolb28.github.io/Curriculun/](https://maycolb28.github.io/Curriculun/)

#### Cómo funciona:
1. Cada push a la rama `master` dispara automáticamente el workflow de deployment
2. GitHub Actions ejecuta el build del proyecto
3. Los archivos generados se despliegan automáticamente a GitHub Pages
4. El sitio se actualiza en unos minutos

#### Configuración inicial (ya realizada):
- ✅ Workflow de GitHub Actions creado (`.github/workflows/deploy.yml`)
- ✅ Configuración de Vite actualizada con `base: '/Curriculun/'`
- ⚙️ **Acción requerida**: Habilitar GitHub Pages en la configuración del repositorio

#### Para habilitar GitHub Pages (solo primera vez):
1. Ve a: `https://github.com/MaycolB28/Curriculun/settings/pages`
2. En **"Source"**, selecciona **"GitHub Actions"**
3. Guarda los cambios
4. Espera a que el workflow se ejecute (pestaña "Actions")
5. Tu sitio estará disponible en: `https://maycolb28.github.io/Curriculun/`

---

### Otras Opciones de Deploy

#### Vercel
```bash
npm install -g vercel
vercel
```

#### Netlify
```bash
npm run build
# Subir la carpeta dist/ a Netlify
```

## 👨‍💼 Sobre Mí

Soy **Brayan Maycol Usquiza Abanto**, estudiante de Ingeniería Civil con sólida experiencia en seguridad operativa y gestión logística. Mi enfoque combina el rigor técnico de la ingeniería con habilidades de supervisión eficiente y control de inventarios.

### 🎓 Formación
- **Universidad Privada del Norte (UPN)** - Ingeniería Civil (Quinto Ciclo)

### 💼 Experiencia Destacada
- **Operador CCTV** en ISEG PERÚ
- **Servicio al Cliente** en múltiples establecimientos
- **Gestión de Almacén** y prevención de pérdidas

## 📫 Contacto

<div align="center">

[![Email](https://img.shields.io/badge/Email-brayan2805may%40gmail.com-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:brayan2805may@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Maycol_Abanto-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/maycol-abanto-939782141)
[![GitHub](https://img.shields.io/badge/GitHub-MaycolB28-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/MaycolB28)
[![WhatsApp](https://img.shields.io/badge/WhatsApp-%2B51_957671584-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.me/51957671584)

📍 **Ubicación**: Cajamarca, Perú

</div>

---

### 🌟 Redes Sociales

¿Quieres conectar? ¡Encuéntra me en mis redes!

- 💼 [LinkedIn - Maycol Abanto](https://www.linkedin.com/in/maycol-abanto-939782141)
- 📧 Email: brayan2805may@gmail.com
- 📱 WhatsApp: +51 957671584
- 🐙 [GitHub - MaycolB28](https://github.com/MaycolB28)

<!-- Agrega más redes sociales aquí -->
<!-- 
- 🐦 [Twitter](https://twitter.com/tu_usuario)
- 📸 [Instagram](https://instagram.com/tu_usuario)
- 🌐 [Portfolio](https://tu-portfolio.com)
-->

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

## 🤝 Contribuciones

Si tienes sugerencias para mejorar este CV interactivo, ¡no dudes en abrir un issue o enviar un pull request!

---

<div align="center">

**Desarrollado con ❤️ por Brayan Maycol Usquiza Abanto**

⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub!

</div>
