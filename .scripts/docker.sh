# builds docker and runs it
docker build . -t express-template
docker run --name express-app -p 3000:3000 -d express-template