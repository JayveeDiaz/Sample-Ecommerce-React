// src/components/MyHeader.js
import React from 'react';


const projName = 'ToDoList-React';


function MyHeader() {
  return (

<div>
<header className="p-4 bg-gray-200 inset-x-0 top-0">
  <h1 className="text-5xl font-semibold">{projName}</h1>
</header>
</div>

  );
}

export default MyHeader;
