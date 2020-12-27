import React from 'react';

type AlertProps = {
  text: string;
};

const Alert: React.FC<AlertProps> = ({text}) => (
  <div className="alert alert-warning" role="alert">
    {text}
  </div>
);

export default Alert;
