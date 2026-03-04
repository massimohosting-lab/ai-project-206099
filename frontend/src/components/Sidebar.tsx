import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 bg-gray-800 text-white flex-none">
      <ul className="mt-4">
        <li className="p-4 hover:bg-gray-700">
          <Link to="/">Dashboard</Link>
        </li>
        <li className="p-4 hover:bg-gray-700">
          <Link to="/moduleA">Module A</Link>
        </li>
        <li className="p-4 hover:bg-gray-700">
          <Link to="/moduleB">Module B</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
