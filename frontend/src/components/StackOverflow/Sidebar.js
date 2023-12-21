import React from 'react'
import {Public,Stars,Work} from "@mui/icons-material";
// import StarsIcon from "@mui/icons-material/Stars";
// import WorkIcon from "@mui/icons-material/Work";
import {Link} from "react-router-dom";
import "./css/Sidebar.css";
function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebar-container">
            <div className="sidebar-options">
                <div className="side-option">
                    <Link>Home</Link>
                </div>
                <div className='sidebar-option'>
                    <Link>PUBLIC</Link>
                    <div className="link">
                        <div className='link-tag'>
                            <Public/>
                            <Link>Question</Link>
                        </div>
                        <div className="tags">
                            <p>Tags</p>
                            <p>Users</p>
                        </div>
                    </div>
                </div>
                <div className='sidebar-option'>
                    <p>Collective</p>
                    <div className="link">
                        <div className='link-tag'>
                            <Stars/>
                            <Link>Explore Collectives</Link>
                        </div>
                    </div>
                </div>
                <div className='sidebar-option'>
                    <p>Find a job</p>
                    <div className="link">
                        <div className="link-tag">
                            <Link>jobs</Link>
                            <Link>Companie</Link>
                        </div>
                    </div>
                </div>
                <div className='sidebar-option'>
                    <p>Teams</p>
                    <div className="link">
                        <div className="link-tag">
                            <Work/>
                            <Link>Companies</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar