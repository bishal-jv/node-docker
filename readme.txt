Built -> docker build . -t node-docker .
Start -> docker run -p 3000:3000 -d node-docker
Check status -> docker ps
Show images -> dcoker images


kubectl apply -f application.yaml
kubectl expose deployment node-docker --type="LoadBalancer"
kubectl delete service node-docker

kubectl get deployments
kubectl get pods
kubectl get services
kubectl get events