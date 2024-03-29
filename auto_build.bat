@echo off
:loop

echo Pulling latest code from the master branch...
git pull origin main -f

echo Making a PATCH request to the API to update goal status...
call axios.bat

echo Building the project...
call build.bat || echo Build failed, continuing with the script...

echo Reloading the application with PM2...
call pm2reload.bat

echo Making a PATCH request to the API to update goal status...
call doneBuild.bat

del api_response.txt

goto loop
