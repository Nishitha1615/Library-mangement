import React from 'react';
import './sidebar.css';
import LineStyleIcon from '@mui/icons-material/LineStyle';
import { Link } from 'react-router-dom';
import '../../App.css';

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Dashboard</h3>
              <ul className="sidebarList">
                <Link to='/' className="link">
                <li className="sidebarListItem active">
                    <LineStyleIcon className='sidebarIcon'/>
                    Books
                </li>
                </Link>
              </ul>
          </div>
        </div>
    </div>
  )
}
