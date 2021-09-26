import React from 'react';
import './Component.scss';

function Component() {
  return (
    <div className="user-bar">
      <div className="avatar" style={{backgroundImage: "url(/avatar.jpeg)"}}/>
      <div className="greeting">Hello, Philip Jay Fry</div>
    </div>
  );
}

export default Component;




