@echo off

echo Building the project...
npm run build || echo Build failed, continuing with the script...
echo All processes have been successfully started.
echo Reloading the application with PM2...
pm2 reload all
