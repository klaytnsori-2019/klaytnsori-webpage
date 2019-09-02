import axios from 'axios';

const baseURL = "http://15.164.129.118:3000/v1/app/klaytnsori/";

function call(api, data, callback) {
  axios.post(baseURL+api, data).catch((error) => {
    //error!!
  }).then((result) => {
    if(result.data.result===true) {
      callback(true, result.data.data);
    } else {
      callback(false, result.data.message);
      console.log(result.data.errors)
    }
  });
}

export default {
  categ:function(callback) {
  call("question/category", {}, callback)
  },
  insert_question:function(sessionId, questionTitle, klay, questionContent, category, callback) {
  call("question/insert_question",
    {sessionId: sessionId, questionTitle: questionTitle, klay: klay,
      questionContent: questionContent, category:category}, callback)
  },
  show_question:function(questionId, callback) {
  call("question/show_question",{questionId: questionId}, callback)
  },
  question_list:function(category, sortNum, keyword, questionState, selectEnable, callback) {
    call("question/question_list",
      {
        category: category,
        sortNum: sortNum,
        keyword: keyword,
        questionState: questionState,
        selectEnable: selectEnable
      }, callback)
  },
  insert_answer:function(questionId, sessionId, answerContent, callback) {
    call("question/insert_answer",
      {questionId: questionId, sessionId: sessionId, answerContent: answerContent}, callback)
  },
  insert_like:function(sessionId, questionNum, answerNum, callback) {
  call("question/insert_like",{sessionId: sessionId, questionNum: questionNum, answerNum: answerNum}, callback)
 },
  select_answer:function(sessionId, questionNum, answerNum, selectEnable, callback) {
  call("question/select_answer",
    {sessionId: sessionId, questionNum: questionNum, answerNum: answerNum, selectEnable: selectEnable}, callback)
 }
}
