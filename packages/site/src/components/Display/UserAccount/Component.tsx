import React from 'react';
import './Component.scss';

type Account = {
  title: string,
  skeleton?: boolean
}

function Component({ title, skeleton = false }: Account) {
  return (
    <div className={`account${skeleton ? " skeleton" : ""}`}>{title}</div>
  );
}

export default Component;




