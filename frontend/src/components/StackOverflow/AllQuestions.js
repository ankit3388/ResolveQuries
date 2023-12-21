import React from 'react'
import {Link} from "react-router-dom";
import { Avatar } from "@mui/material";
function AllQuestions() {
  return (
    <div className="all-questions">
        <div className="all-questions-container">
            <div className="all-question-left">
                <div className="all-options">
                    <div className="all-option">
                        <p>0</p>
                        <span>Votes</span>
                    </div>
                    <div className="all-option">
                        <p>0</p>
                        <span>Answers</span>
                    </div>
                    <div className="all-option">
                        <small>0 Views</small>
                    </div>
                </div>
            </div>
            <div className="question-answer">
                <Link to="/Question">what is mern stack web development?</Link>
                <div style={{
                    width:"90%",
                    }}>
                    <div>
                    MERN Stack is a JavaScript Stack that is used for easier and faster deployment of full-stack web applications. MERN Stack comprises 4 technologies namely: MongoDB, Express, React, and Node.js. It is designed to make the development process smoother and easier.
                    </div>
                </div>
                <div>
                <div className="tag">
                    <div className="question-tags">react</div>
                    <div  className="question-tags">antd</div>
                    <div className="question-tags">frontend</div>
                    </div>
                </div>
                <div className="author">
                    <small>Timestamp</small>
                    <div className="author-details">
                        <Avatar/>
                        <p>Username</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default AllQuestions