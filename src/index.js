import properties from 'model/shared/configuration/properties/properties';

if (properties.variables.platform.react.enabled) {
  require('controller/react/root.controller');
}
