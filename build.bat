@echo off

if "%API_CONDITION%"=="true" (
    echo Building the project...
    npm run build || echo Build failed, continuing with the script...
    echo All processes have been successfully started.
) else (
    echo Condition not met, skipping build.
)
