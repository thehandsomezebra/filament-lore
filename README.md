# filament-lore
Creating a self-hosted db &amp; site to track the appropriate filament printer settings and temps for my 3D printer



```bash
#build the npm crap
cd nodejs
npm install
npm start

##this is running http://localhost:3000/api/data


cd mongodb
docker build -t my-mongodb .
docker run -d -p 27017:27017 --name mongodb_container -v mongodb_data:/data/db mongo




```

```bash
# ##to play in the mongodb shell...
docker exec -it mongodb-container mongosh
```


# Getting it all running



```bash


docker volume create mongodb_data


#start the mongodb
cd mongodb/
docker build -t my-mongodb .
docker run -d -p 27017:27017 --name mongodb-container -v mongodb_data:/data/db my-mongodb

cd ..


#start the nginx app
cd nginx/
docker build -t my-nginx .
docker run -d -p 80:80 --name my-nginx-container my-nginx
cd ..





#start the nodejs server
cd nodejs/
docker build -t my-node-server .

docker run -d -p 3000:3000 --name my-node-server-container my-node-server
cd ..


```