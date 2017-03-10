const properties = {
  variables: {
    dependencies: {
      libraries: {
        'jquery': {
          enabled: true
        },
        'react-tap-event-plugin': {
          enabled: true
        }
      },
      ui: {
        'ant-design': {
          enabled: false,
        },
        'material-components-web': {
          enabled: true,
        },
        'material-design-lite': {
          enabled: true,
        },
        'material-ui': {
          enabled: true,
        },
        'materialize-css': {
          enabled: true,
        },
        'react-toolbox': {
          enabled: true,
        },
        'semantic-ui': {
          enabled: true,
        },
        'vue': {
          enabled: true,
        }
      }
    }
  },
};

export default properties;

console.log(properties);