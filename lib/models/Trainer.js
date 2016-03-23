// ***********************************
//  Add our plugins
// ***********************************
App.Collections.addPlugin('Trainer', AstrologyCollections.Collection, {
  name: 'trainer'
});
App.Collections.Trainer.addPlugin('Routes', AstrologyRoutes);
App.Collections.Trainer.addPlugin('Methods', AstrologyMethods);


// ***********************************
//  Config Trainer Collection
// ***********************************
App.Collections.Trainer.setConfig({
  name: {
    single: 'Trainer',
    plural: 'Trainers'
  },
  icon: 'fa fa-user',
  gender: Astrology.Constants.gender.MALE
});

// ***********************************
//  Define it's Schema
// ***********************************
App.Collections.Trainer.defineSchema({
  name: {
    type: String
  },
  city: {
    type: String
  },
  badges: {
    type: [String]
  }
});

// ***********************************
//  Config our methods
// ***********************************
App.Collections.Trainer.Methods.setConfig({
  update: {
    shouldBeLoggedIn: false,
    authorizedRoles: ['admin']
  },
  insert: {
    shouldBeLoggedIn: false,
  },
  remove: {
    shouldBeLoggedIn: false
  }
});

// ***********************************
//  Build our methods and routes
// ***********************************
App.Collections.Trainer.Methods.buildMethods();
App.Collections.Trainer.Routes.buildRoutes();


