docker kill web-app-dev
docker run --rm -d --name web-app-dev -p 8000:80 web-app-dev-container