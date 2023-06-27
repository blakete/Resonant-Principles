aws lightsail create-container-service-deployment --region ca-central-1 \
    --service-name principia-container-service \
    --containers file://./containers.json \
    --public-endpoint file://./public-endpoint.json 
    