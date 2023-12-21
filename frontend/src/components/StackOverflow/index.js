import React from 'react'
import './css/index.css'
import Sidebar from './Sidebar'
import Main from './Main'
function index() {
  return (
    <div className="stack-index">
        <div className="stack-index-content">
            <Sidebar/>
            <Main/>
        </div>
    </div>

  )
}

export default index