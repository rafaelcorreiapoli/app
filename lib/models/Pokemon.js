

// ***********************************
//  Add our plugins
// ***********************************

App.Collections.addPlugin('Pokemon', AstrologyCollections.Collection, {
  name: 'pokemon'
});
App.Collections.Pokemon.addPlugin('Routes', AstrologyRoutes);
App.Collections.Pokemon.addPlugin('Methods', AstrologyMethods);


// ***********************************
//  Config Pokemon Collection
// ***********************************
App.Collections.Pokemon.setConfig({
  name: {
    single: 'Pokemon',
    plural: 'Pokemons'
  },
  icon: 'fa fa-bug',
  gender: Astrology.Constants.gender.MALE
});

// ***********************************
//  Define it's Schema
// ***********************************
App.Collections.Pokemon.defineSchema({
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
});

// ***********************************
//  Config our methods
// ***********************************
App.Collections.Pokemon.Methods.setConfig({
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

// ***********************************
//  Build our methods and routes
// ***********************************
App.Collections.Pokemon.Methods.buildMethods();
App.Collections.Pokemon.Routes.buildRoutes();


