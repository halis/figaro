
docker rm -f selenium-firefox &>/dev/null \
|| echo Selenium not found \
&& echo Removing selenium

echo Installing selenium
docker pull selenium/standalone-firefox &>/dev/null
docker run --name selenium-firefox -d -p 4444:4444 selenium/standalone-firefox &>/dev/null
docker stop selenium-firefox &>/dev/null
