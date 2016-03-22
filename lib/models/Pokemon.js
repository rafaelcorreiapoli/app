//
//  Declaring our colleciton
//
Pokemon = new Astrology.Collection('pokemon');
//
//  Configuring
//
Pokemon.setConfig({
  name: {
    single: 'Pokémon',
    plural: 'Pokémons'
  },
  icon: 'fa fa-bug',
  gender: Astrology.Constants.gender.MALE
});


//
//  Plugging packages
//
Pokemon.addPlugin('Routes', AstrologyRoutes);

//
//  Custom templates, if not specified will load templates from astrology:templates
//
Pokemon.plugins.Routes.setConfig({
  layoutTemplate: 'customMain',
  dashboardTemplate: 'customDashboard'
});

//
//  Setting Up
//
Pokemon.plugins.Routes.buildRoutes();
//
// Creating a custom route
//
Pokemon.plugins.Routes.getRouteGroup().route('/custom', {
  action() {
    console.log('custom!');
  }
});
