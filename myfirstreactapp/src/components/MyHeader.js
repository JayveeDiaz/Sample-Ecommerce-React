// src/components/MyHeader.js
import React from 'react';


const projName = 'ToDoList-React';


function MyHeader() {
  return (
    <header className='p-4 mx-1 my-1 bg-gray-200'>
      <h1 className='text-5xl font-semibold' >{projName}</h1>
    </header>
  );
}

export default MyHeader;
