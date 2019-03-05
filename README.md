This is project to training nodejs

1. Install library
npm install

2. Setup mongodb
https://docs.mongodb.com/manual/tutorial/install-mongodb-enterprise-on-os-x/
https://docs.mongodb.com/manual/tutorial/getting-started/

start: mongod
access: mongo

3. Connect mongodb with nodejs
mongoose.connect('mongodb://localhost/CRMdb', {
  userMongoClient: true
});

4. Implement
4.1 Add router
4.2 Add model
4.3 Add controller
