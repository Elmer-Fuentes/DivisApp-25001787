@echo off
setlocal
TITLE DivisApp 25001787 - Generar APK

echo ==============================================
echo  DivisApp 25001787 - Preparar Android / APK
echo ==============================================
echo.

echo [1/5] Instalando dependencias...
call npm install
if errorlevel 1 goto :error

echo [2/5] Compilando proyecto Ionic...
call npx ionic build
if errorlevel 1 goto :error

echo [3/5] Verificando plataforma Android...
if not exist android (
  call npx cap add android
  if errorlevel 1 goto :error
)

echo [4/5] Sincronizando Capacitor...
call npx cap sync android
if errorlevel 1 goto :error

echo [5/5] Abriendo Android Studio...
call npx cap open android
if errorlevel 1 goto :error

echo.
echo En Android Studio use:
echo Build ^> Build App Bundle(s) / APK(s) ^> Build APK(s)
echo.
echo El APK debug normalmente queda en:
echo android\app\build\outputs\apk\debug\app-debug.apk
pause
exit /b 0

:error
echo.
echo Ocurrio un error. Revise que tenga instalados Node.js, Ionic y Android Studio.
pause
exit /b 1
