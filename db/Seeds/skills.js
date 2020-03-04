const faker = require("faker");

exports.seed = async function (knex, Promise) {
  const fakeSkills = [];
  fakeSkills.push({'categories': 'Language', 'skill': 'Japanese'}, 
    {'categories': 'Making Stuff', 'skill': 'Woodworking'},
    {'categories': 'Making Stuff', 'skill': 'Stir-Fry Cooking'},
    {'categories': 'Language', 'skill': 'Esperanto'});
    
  await knex("skill")
    .insert(fakeSkills)
};
