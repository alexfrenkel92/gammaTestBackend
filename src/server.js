const app = require('./app/routes.js');
const PORT = process.env.PORT || 8080;

const { connectToMongoDb } = require('./app/database');


app.get('/', (req, res) => {
  res.send('Server is running')
});

connectToMongoDb().then(() => {
  console.log('MongoDB is connected');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
})

module.exports = app;