const mongoose = require('mongoose');
const faker = require('faker');
const url = "mongodb://localhost:27017/Recipes";

mongoose.connect(url)

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
  console.log('CONNECTED TO DATABASE!');
});

//Schema for Recipe Preview 
const RecipePreviewSchema = new mongoose.Schema({
  _id: Number,
  picture: String,
  category: String,
  name: String,
  shortDescription: String,
});

// model to create new documents of Preview Page
const RecipePreview = mongoose.model('Preview', RecipePreviewSchema);

for (let i = 0; i < 100; i++) {
  const preview = {
    _id: faker.random.number(),
    picture: faker.image.food(),
    category: faker.lorem.word(),
    name: faker.lorem.words(),
    shortDescription: faker.lorem.sentence()
  }

    // saves each new Preview to the DB
    const newRecipePreview = new RecipePreview(preview);
    newRecipePreview.save((err) => {
      if (err) {
        console.log(`ERROR IN SAVE RESTAURANT ${err}`);
      }
    });
}
