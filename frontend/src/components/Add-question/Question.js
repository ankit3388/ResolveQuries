import React from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
// import {TagsInput} from 'react-tag-input-component'
import "./Question.css"
function Question() {
  return (
        <div className="add-question">
            <div className="add-question-container">
                <div className="head-title">
                    <h1>Ask a Public question</h1>
                </div>
                <div className="question-container">
                    <div className="question-options">
                        <div className="question-option">
                            <div className=" title">
                                <h3>Title</h3>
                                <small>Be specific and imagine you are asking a question to another person </small>
                                <input type="text" placeholder="Add the question title"></input>
                            </div>
                        </div>
                        <div class="question-option">
                        <div className=" title">
                                <h3>Body</h3>
                                <small>Include all the information someone would need to answer your question</small>
                                <ReactQuill className="react-quill" theme="snow"/>
                            </div>
                        </div>
                        <div class="question-option">
                        <div className=" title">
                                <h3>Tags</h3>
                                <small>Add up to 5 tags to describe what your question is about  </small>
                                <input type="text" className="tags" placeHolder="press enter to new tag"></input>
                            </div>
                        </div>
                    </div>
                </div> 
                <button className="button">Add your Questions</button>
            </div> 
        </div>
    );
}

export default Question