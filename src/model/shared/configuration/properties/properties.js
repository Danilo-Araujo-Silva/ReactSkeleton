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
      dev: {
        enabled: true,
      },
      hmg: {
        enabled: false,
      },
      prd: {
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

export default properties;
