import React from 'react'

import { dataQuestions, dataSubmissions } from '../mocks/dataQuestionBoard'

/* output

input = [
  {
    "id": "sign-up-form",
    "name": "Sign-Up Form",
    "category": "HTML"
  },
  {
    "id": "debounce",
    "name": "Debounce",
    "category": "JavaScript"
  }
]

ouput = {
  "HTML": [
    { id : "sign-up-form",
      name: "Sign-Up Form"
    }
  ],
  "JavaScript": [
    { 
      id : "debounce",
      name: "Debounce"
    }
  ]
}

function convert(input) {
  let output = {};
  input.forEach((item) => {
    const { id, name, category } = item;
    !output['HTML'] => !{} => false
    if (!output[category]) {
      output[category] = []; => output['HTML'] = []
    }

    output[category].push({ id, name });
    {
      'HTML': [
        {
          "id": "sign-up-form",
          "name": "Sign-Up Form",
          "category": "HTML"
        }
      ]
    }
  });
  return output;
}

*/

const sleep = (time = 1000) => {
  return new Promise(resovle => setTimeout(resovle, time))
}

function TonyQuestionBoard() {
  const [questions, setQuestions] = React.useState(null)
  // how to convert object to array: Object.keys(), Object.values(), Object.entries()

  React.useEffect(() => {
    async function fetchQuestions() {
      await sleep(500);
      const result = dataQuestions.reduce((acc, curr) => {
        if(!acc[curr.category]) {
          acc[curr.category] = [];
        }
        acc[curr.category].push(curr)
        return acc;
      }, {})
      setQuestions(result);
    }
    fetchQuestions();
  }, [])

  return (
    <div> 
      <h1>Challenge: TonyQuestionBoard</h1>
      <br />
      <div className="question_board">
        {Object.keys(questions || {}).map(key => {
          const interviews = questions[key];
          return (
            <div key={key} className="column">
              <h2>{key} - 1 / {interviews.length}</h2>
              {interviews.map(interview => {
                const submissionItem = dataSubmissions.find(sub => sub.questionId === interview.id);
                const status = submissionItem ? submissionItem.status : 'none'
                return (
                  <div key={interview.id} className="boards">
                    <div className="question">
                      <div className={`question__status question__status--${status}`}></div>
                      <h2 className="question__title">{interview.name}</h2>
                    </div>
                  </div>
                )
              })}
            </div>
          )
        })}


        {/* <div className="column">
          <h2>HTML - 1 / 4</h2>
          <div className="boards">
            <div className="question">
              <div className="question__status question__status--correct"></div>
              <h2 className="question__title">Sign-Up Form</h2>
            </div>
          </div>
          <div className="boards">
            <div className="question">
              <div className="question__status question__status--incorrect"></div>
              <h2 className="question__title">Item cart</h2>
            </div>
          </div>
          <div className="boards">
            <div className="question">
              <div className="question__status question__status--partially_correct"></div>
              <h2 className="question__title">Item cart</h2>
            </div>
          </div>
        </div>
        <div className="column">
          <h2>JAVASCRIPT - 0 / 4</h2>
          <div className="boards">
            <div className="question">
              <div className="question__status question__status--none"></div>
              <h2 className="question__title">ES6</h2>
            </div>
          </div>
        </div>
        <div className="column">
          <h2>CSS - 0 / 4</h2>
          <div className="boards">
            <div className="question">
              <div className="question__status question__status--incorrect"></div>
              <h2 className="question__title">Box Modal</h2>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default  TonyQuestionBoard