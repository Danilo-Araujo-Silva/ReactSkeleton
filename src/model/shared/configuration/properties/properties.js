const properties = {
  variables: {
    dependencies: {
      libraries: {
        'jquery': {
          enabled: true,
        },
        'react-tap-event-plugin': {
          enabled: true,
        },
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
          enabled: false,
        },
        'semantic-ui': {
          enabled: true,
        },
        'vue': {
          enabled: true,
        },
      }
    },
    environment: {
      development: {
        enabled: false,
      },
      homologation: {
        enabled: false,
      },
      production: {
        enabled: false
      },
      test: {
        enabled: false
      }
    },
    platform: {
      angular: {
        enabled: false,
      },
      react: {
        enabled: true,
      },
      vue: {
        enabled: false,
      },
    }
  },
};

if (
  !process.env.NODE_ENV
  || process.env.NODE_ENV === 'development'
) {
  properties.variables.environment.development = true;
} else if (process.env.NODE_ENV === 'homologation') {
  properties.variables.environment.homologation = true;
} else if (process.env.NODE_ENV === 'production') {
  properties.variables.environment.production = true;
} else if (process.env.NODE_ENV === 'test') {
  properties.variables.environment.test = true;
} else {
  throw new Error(`Unrecognized environment. process.env.NODE_ENV = ${process.env.NODE_ENV}.`);
}

export default properties;
