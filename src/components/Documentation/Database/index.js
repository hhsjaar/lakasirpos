import React from 'react';
import Hosting from './Hosting';
import Upgrade from './Upgrade';
import Version from './Version';

const Database = () => {
  return (
    <div>
      <h2>Database</h2>
      <Hosting />
      <Upgrade />
      <Version />
    </div>
  );
};

export default Database;
