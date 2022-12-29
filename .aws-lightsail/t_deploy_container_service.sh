aws lightsail create-container-service-deployment \
    --service-name principia-container-service \
    --containers file://./containers.json \
    --public-endpoint file://./public-endpoint.json
    