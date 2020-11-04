# GammaTest

GammaTest is a test app, written in NodeJs, using MongoDB Atlas.

The app is deployed on heroku:

https://gamma-test-backend.herokuapp.com/

## Install Localy

1. Clone the repo: 
```sh
git clone https://github.com/alexfrenkel92/gammaTestBackend.git
```

2. Use npm to install the projetc's dependencies:
```sh
npm install
```

3. To use the full app locally, you have to connect the clonned app to your MongoDB database, either with MongoDB Compass or MongoDB Atlas.

4. In the database.js file, change the ``` **const url** ``` to your given value, received from MongoDB:

![alt text](/readmeImg/mongoDBconnect1.png)

5. Run the app:
```sh
npm run
```

## API Endpoints

For a detailed API documentation, visit the link below:

https://app.swaggerhub.com/apis-docs/alexfrenkel92/GammaTestApp/1.0.0#/
