# DivisApp-25001787

Aplicación móvil híbrida con Ionic 8, Angular 18 y Capacitor para la tarea **Mi primera aplicación móvil híbrida**.

- **Estudiante:** Elmer Leonel De La Cruz Fuentes
- **Carné:** 25001787
- **Universidad:** Universidad Galileo
- **Curso:** Desarrollo de aplicaciones móviles
- **Título visible / nombre Android:** DivisApp 25001787
- **Identificador Android:** com.elmerfuentes.divisapp25001787
- **Repositorio:** https://github.com/Elmer-Fuentes/DivisApp-25001787

## Conversión y evidencia

Se solicita una cantidad en quetzales y se convierte automáticamente al editarla o pulsar **Convertir**. **Limpiar** elimina la entrada, el resultado y los mensajes. Se aceptan cero y decimales; los valores vacíos, negativos o no numéricos no generan resultados válidos.

Tasa fija: **Q8 = US$1**. Fórmula: `dólares = quetzales / 8`.

Al iniciar se carga el carné como ejemplo y se calcula su resultado:

```text
25001787 / 8 = 3125223.375
Q25,001,787.00 / 8 = US$3,125,223.38
```

El cálculo conserva la precisión original; únicamente la presentación se redondea a dos decimales. La pantalla muestra cantidad ingresada, tasa y dólares. Para la evidencia, captura esa pantalla ejecutada en navegador móvil, emulador o dispositivo Android.

## Instalar y ejecutar

Utiliza Node.js 22 LTS (compatible con Angular 18), npm y Git. Instala Ionic CLI para disponer del comando `ionic` directamente:

```bash
npm install -g @ionic/cli@7
npm install
ionic serve
```

Abre la dirección indicada por Ionic, normalmente http://localhost:8100. Si prefieres utilizar exclusivamente las herramientas locales del proyecto:

```bash
npx ionic serve
```

Compilación web:

```bash
ionic build
```

Los archivos compilados se generan directamente en `www/`, incluido `www/index.html`, que utiliza Capacitor. `npm run build` también compila con Angular.

## Android y generación del APK

Instala Android Studio y, desde SDK Manager, Android SDK Platform 34 y Android SDK Build-Tools 34.0.0. Utiliza JDK 17 o JDK 21: el Gradle Wrapper está fijado en 8.5. Configura el SDK en Android Studio o mediante `ANDROID_HOME`; `android/local.properties` es local y no se publica.

```bash
ionic build
npx cap sync android
npx cap open android
```

La carpeta `android/` se entrega creada y debe conservarse en Git. **Solo si partes de una copia sin esa carpeta**, ejecuta antes de sincronizar:

```bash
npx cap add android
```

`cap add android` se ejecuta una sola vez: si Android ya existe, Capacitor lo informa. Para actualizar una plataforma existente, usa `cap sync android`.

En Android Studio:

1. Abre el proyecto `android/` con el comando anterior.
2. Espera a que termine la sincronización de Gradle y descarga los componentes de SDK que solicite.
3. Selecciona **Build > Build App Bundle(s) / APK(s) > Build APK(s)** (el nombre puede variar según la versión).
4. Localiza el APK de depuración en `android/app/build/outputs/apk/debug/app-debug.apk`.

También puedes generarlo desde PowerShell, con el entorno Android configurado:

```powershell
cd android
.\gradlew.bat :app:assembleDebug
```

Ruta absoluta en la carpeta de entrega actual:

```text
C:\Users\Fuentes Elmer\Desktop\DivisApp_25001787_Codigo\divisapp25001787\android\app\build\outputs\apk\debug\app-debug.apk
```

Para un APK firmado de distribución, utiliza **Build > Generate Signed App Bundle / APK > APK**, crea o selecciona una clave propia y guarda la contraseña de forma privada. La salida habitual es `android/app/build/outputs/apk/release/`, o la carpeta elegida en el asistente.

## GitHub

Se conserva el código fuente, el proyecto nativo Android y `package-lock.json`. `.gitignore` excluye `node_modules/`, `www/`, cachés, configuraciones locales, claves y productos de compilación.

Registra cada archivo modificado en un commit separado. Por ejemplo:

```bash
git add src/app/home/home.page.ts
git commit -m "Actualizar conversión y validaciones"
git push -u origin main
```

No utilices `git push --force` para reemplazar un historial existente.

## Comprobaciones realizadas

- Instalación de dependencias completada y versiones registradas en `package-lock.json`; Ionic Angular se fija en 8.4.3 para mantener compatibilidad con el entorno del proyecto.
- `ionic build`: compilación completada sin errores de TypeScript ni de plantillas Angular. Stencil muestra advertencias `empty-glob` de sus importaciones internas.
- `ionic serve`: servidor iniciado correctamente en `http://localhost:8100`.
- Prueba en Chrome con pantalla móvil: título, tasa, cálculo exacto `3125223.375`, presentación `US$3,125,223.38`, conversión automática, ambos botones y validaciones de vacío, negativo y cero comprobados. Sin excepciones JavaScript.
- `npx cap add android` y `npx cap sync android`: completados.
- `gradlew.bat :app:assembleDebug`: **BUILD SUCCESSFUL**. APK de depuración generado; firma y nombre/identificador Android verificados. Los 33 archivos web empaquetados coinciden con la compilación de Ionic.
- Repositorio público comprobado sin autenticación.

En el equipo de preparación no se detectó Android Studio: `npx cap open android` requiere instalarlo o indicar su ejecutable con `CAPACITOR_ANDROID_STUDIO_PATH`. El proyecto Android puede compilarse directamente mediante Gradle con JDK y SDK configurados.

## Entrega a la universidad

Se requieren dos archivos: el PDF con carátula, captura real de la conversión del carné y enlace público al repositorio; y el APK generado. La copia Word es editable y no reemplaza el PDF solicitado.

Los documentos, la captura y la copia del APK se guardan localmente en `entrega/`. Esta carpeta se excluye de Git para que el repositorio conserve el proyecto fuente.

Archivos listos para subir a la plataforma de la universidad:

- `entrega/25001787-Mi-primera-aplicacion-movil-hibrida.pdf`: dos páginas con carátula, captura y URL.
- `entrega/DivisApp-25001787.apk`: copia del APK generado en `android/app/build/outputs/apk/debug/app-debug.apk`.

También se conserva `entrega/25001787-Mi-primera-aplicacion-movil-hibrida.docx` como documento editable.
