import React from 'react';

import store from '../../../../../configuration/state/redux/store';
import {getAll} from '../../../../../configuration/state/redux/action/users-actions';

store.dispatch(getAll());

const UsersContainer = () => {
  return <div>
    <h2>Users - API</h2>
    <div>

    </div>
    <br/>
  </div>;
};

export default UsersContainer;