# Buckets

## Running the Frontend
```
cd frontend
# if you haven't run before
npm install
npx expo start
# Then scan QR code with Expo Go App
# If it above doesn't work
npx expo start --tunnel
```

## Running the Backend
```
cd backend
# if you don't have maven installed 
sudo apt-install maven
# double check your java version
java -version # should be openjdk 17
mvn clean package
docker compose-up --build
```

