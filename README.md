# GammaTest

GammaTest is a test app, written in NodeJs, using MongoDB Atlas.

## Installation

1. Clone the repo: 
```sh
git clone https://github.com/alexfrenkel92/gammaTestBackend.git
```

2. Use npm to install the projetc's dependencies: npm install

3. To use the full app locally, you have to connect the clonned app to your MongoDB database, either with MongoDB Compass or MongoDB Atlas.

4. In the database.js file, change the const url to your given value, received from MongoDB:

const userName = process.env.DB_USER;
const password = process.env.DB_PASS;
const url = `mongodb+srv://${userName}:${password}@cluster0.psqbu.mongodb.net/gammatest?retryWrites=true&w=majority`;

![alt text](/readmeImg/mongoDBconnect1.png)
