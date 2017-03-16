const checkState = (state) => {
  if (typeof state === 'undefined') {
    throw new Error('State is undefined.');
  } else if (state === null) {
    throw new Error('State is null.');
  } else if (state === {}) {
    throw new Error('State is empty');
  }
};

const checkAction = (action) => {
  if (typeof action === 'undefined') {
    throw new Error('Action is undefined.');
  } else if (action === null) {
    throw new Error('Action is null.');
  } else if (action === {}) {
    throw new Error('Action is empty');
  } else if (!action.type) {
    throw new Error(`Unavailable action type. action = ${action}.`);
  }
};