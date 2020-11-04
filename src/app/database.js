const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const { MongoClient } = require('mongodb');

const url = process.env.DB_URL;
const dbName = 'gammatest';

let db;

const connectToMongoDb = () =>
  MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
    .then((client) => {
      db = client.db(dbName);
    });

const getProducts = (productId) => {
  const collection = db.collection('products');
  if (productId) {
    collection.countDocuments({ _id: Number(productId) }, (_, count) => {
      if (count === 0) {
        console.log('getProducts: Id does not exist');
      }
    });
    return collection.find({ _id: Number(productId) }).toArray();
  } else if (!productId) {
    return collection.find({}).toArray();
  }
};

const insertProduct = (productId, productName, productPrice) => {
  const collection = db.collection('products');
  return collection.insertOne({ _id: productId, productName: productName, productPrice: productPrice });
};

const deleteProduct = (productId) => {
  const collection = db.collection('products');
  if (productId) {
    collection.countDocuments({ _id: Number(productId) }, (_, count) => {
      if (count === 0) {
        console.log('deleteProduct: Id does not exist');
      }
    });
    return collection.findOneAndDelete({ _id: Number(productId) });
  }
};

module.exports = { connectToMongoDb, insertProduct, getProducts, deleteProduct };
