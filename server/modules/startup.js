var startup = function() {
  _setEnvironmentVariables();
  _setBrowserPolicies();
  _generateAccounts();
  _setAdmins();
};

var _setEnvironmentVariables = function() {
  var settings = Meteor.settings.private;
  process.env.MAIL_URL = settings.MAIL_URL;
};

var _setBrowserPolicies = function() {};

var _generateAccounts = function() {
  TMModules.server.generateAccounts();
};

var _setAdmins = function() { 
  TMModules.server.setAdmins(); 
};

TMModules.server.startup = startup;
