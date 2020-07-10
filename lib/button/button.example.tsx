import React from 'react';
import Button from './button'
const ButtonExample: React.FunctionComponent = () => {
  return (
    <div>
      <Button>普通</Button>
      <Button level="important">重要</Button>
      <Button level="danger">警告</Button>
    </div>
  );
};

export default ButtonExample;