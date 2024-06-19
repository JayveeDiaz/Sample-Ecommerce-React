import React from 'react';


function Content() {
  return (
    <div className='flex items-center justify-center min-h-screen'>
      <div className='flex flex-col items-center justify-center'>
      

    <div className='border table'>
    <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border-b border-gray-300">Name</th>
              <th className="py-2 px-4 border-b border-gray-300">Age</th>
              <th className="py-2 px-4 border-b border-gray-300">Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b border-gray-300">John Doe</td>
              <td className="py-2 px-4 border-b border-gray-300">28</td>
              <td className="py-2 px-4 border-b border-gray-300">john.doe@example.com</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="py-2 px-4 border-b border-gray-300">Jane Smith</td>
              <td className="py-2 px-4 border-b border-gray-300">34</td>
              <td className="py-2 px-4 border-b border-gray-300">jane.smith@example.com</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-300">Alice Johnson</td>
              <td className="py-2 px-4 border-b border-gray-300">29</td>
              <td className="py-2 px-4 border-b border-gray-300">alice.johnson@example.com</td>
            </tr>
          </tbody>
        </table>

    </div>


      </div>
    </div>
  );
}

export default Content;
