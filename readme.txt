Built -> docker build -t node-docker .
Start -> docker run -p 3000:3000 -d node-docker
Check status -> docker ps
Show images -> docker images


kubectl apply -f deploymentservice.yml
kubectl expose deployment node-docker-deployment --type="LoadBalancer"
kubectl service node-docker-service

kubectl delete service node-docker-service
kubectl delete deployment node-docker-deployment


kubectl get deployments
kubectl get pods
kubectl get services
kubectl get events