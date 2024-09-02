import express from 'express';

import {  } from "../controlers/question.js";

const router = express.Router()


router.get("", );

export default router










/*import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const Questions = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchAllQuestions = async () => {
      try {
        const res = await axios.get("http://localhost:5000/questions");
        setQuestions(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllQuestions();
  }, []);

  return (
    <div>
      <h1>Jewelry Crafters Forum</h1>
      <div className="questions">
        {questions.map((question) => (
          <div className="question" key={questions.qid}>
            <h2>{question.qcat}</h2>
            <p>{question.question}</p>
            <span>{question.qdateadded}</span>
            <p>{question.qansw}</p>
            <span>{question.qanswdateadded}</span>
            <span>{question.qanswvid}</span>
          </div>
        ))}
      </div>
      <button>
        <Link to="/add">Ask a Question</Link>
      </button>
    </div>
  )
}*/


