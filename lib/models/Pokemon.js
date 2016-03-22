// ***********************************
//  Declaring our colleciton
// ***********************************
Pokemon = new Astrology.Collection('pokemon');

// Schema
let PokemonSchema = {
  name: {
    type: String
  },
  types: {
    type: [String]
  },
  attack: {
    type: Number,
    decimal: true
  },
  defense: {
    type: Number,
    decimal: true
  }
};
Pokemon.defineSchema(PokemonSchema);

//  Configuring
Pokemon.setConfig({
  name: {
    single: 'Pokémon',
    plural: 'Pokémons'
  },
  icon: 'fa fa-bug',
  gender: Astrology.Constants.gender.MALE
});


// ***********************************
//  Plugging packages
// ***********************************
Pokemon.addPlugin('Routes', AstrologyRoutes);
Pokemon.addPlugin('Methods', AstrologyMethods);


// ***********************************
//  Routes
// ***********************************
//  Custom templates, if not specified will load templates from astrology:templates
Pokemon.plugins.Routes.setConfig({
  layoutTemplate: 'customMain',
  dashboardTemplate: 'customDashboard'
});

//  Setting Up
Pokemon.plugins.Routes.buildRoutes();

// Creating a custom route
Pokemon.plugins.Routes.getRouteGroup().route('/custom', {
  action() {
    console.log('custom!');
  }
});

// ***********************************
//  Methods
// ***********************************
Pokemon.plugins.Methods.buildMethods();

Pokemon.plugins.Methods.setConfig({
  update: {
    shouldBeLoggedIn: true,
    authorizedRoles: ['admin']
  },
  insert: {
    shouldBeLoggedIn: true,
    authorizedRoles: ['admin', 'trainer'],
    custom(req, user) {
      return request.doc.name !== 'mewtwo';
    }
  },
  remove: {
    shouldBeLoggedIn: false
  }
});


//
//  Inserting
//
if (Meteor.isClient) {
  Pokemon.plugins.Methods.getMethods().insert.call({
    name: 'Pikachu',
    types: ['electric', 'normal'],
    attack: 20,
    defense: 50
  });  
}

