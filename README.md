# Using opencv4nodejs to stream your webcam with Express, ejs and Socket IO

Follow the steps to stream your webcam with Express and socket io

### Step 1:

Open your terminal and git clone with the following command

```
git clone https://github.com/narenltk/webcam_.git
```

### Step 2:

Since I have given all the dependencies in the package.json all you need to do is give the following command

```
npm install
```

This command actually installs all the dependencies given in the package.json file.

### Step 3:

Once your done with all the steps given above all you to do is just fire up the server, with the following command and check your localhost

```
npm start

or

node server.js

or 

nodemon server.js
```

<p align="center">
  <img src="img/node_server.png">
</p>

checkout "https://localhost:3030"

I have used the port 3030 and you can change the port to any number you like.

## Note

You can also host the application not just on your local machine but also you can use ngrok to host in a public server and follow the following command

Linux users command:
```
./ngrok http 3030
```

windows users command:
```
ngrok http 3030
```
