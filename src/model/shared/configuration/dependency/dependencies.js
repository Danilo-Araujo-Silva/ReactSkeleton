import properties from '../properties/properties';

if (properties.variables.dependencies.libraries.jquery.enabled) {
  require('model/shared/configuration/utility/jquery/jquery');
}

if (properties.variables.dependencies.libraries['react-tap-event-plugin'].enabled) {
  require('model/shared/configuration/event/tap/apple/ios/react-tap-event-plugin');
}

if (properties.variables.dependencies.ui['ant-design'].enabled) {
  require('model/shared/configuration/ui/ant-design/ant-design');
}

if (properties.variables.dependencies.ui['material-components-web'].enabled) {
  require('model/shared/configuration/ui/material-components-web/material-components-web');
}

if (properties.variables.dependencies.ui['material-design-lite'].enabled) {
  require('model/shared/configuration/ui/material-design-lite/material-design-lite');
}

if (properties.variables.dependencies.ui['material-ui'].enabled) {
  require('model/shared/configuration/ui/material-ui/material-ui');
}

if (properties.variables.dependencies.ui['materialize-css'].enabled) {
  require('model/shared/configuration/ui/materialize-css/materialize-css');
}

if (properties.variables.dependencies.ui['react-toolbox'].enabled) {
  require('model/shared/configuration/ui/react-toolbox/react-toolbox');
}

if (properties.variables.dependencies.ui['semantic-ui'].enabled) {
  require('model/shared/configuration/ui/semantic-ui/semantic-ui');
}