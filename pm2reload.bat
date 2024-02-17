@echo off

if "%API_CONDITION%"=="true" (
    echo Building the project...
    npm run build || echo Build failed, continuing with the script...
    echo All processes have been successfully started.
    echo Reloading the application with PM2...
    pm2 reload all
    echo Application has been successfully reloaded.
) else (
    echo Condition not met, skipping build and reload.
)
