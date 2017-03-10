import React from 'react';
import {LocaleProvider} from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';

import { DatePicker } from 'antd';

const AntDesign = () => {
  return <div>
    <h2>Ant Design</h2>
    <div>
      <LocaleProvider locale={enUS}>
        <DatePicker />
      </LocaleProvider>
    </div>
    <br/>
  </div>;
};

export default AntDesign;