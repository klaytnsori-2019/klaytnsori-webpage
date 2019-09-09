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
  category:function(callback) {
  call("question/category", null, callback)
  },
  insert_question:function(session_id, question_title, klay, question_content, category, callback) {
  call("question/insert_question",
    {session_id: session_id, question_title: question_title, klay: klay,
      question_content: question_content, category:category}, callback)
  },
  show_question:function(question_id, callback) {
  call("question/show_question",{question_id: question_id}, callback)
  },
  question_list:function(category, sort_num, keyword, question_state, select_enable, callback) {
    call("question/question_list",
      {
        category: category,
        sort_num: sort_num,
        keyword: keyword,
        question_state: question_state,
        select_enable: select_enable
      }, callback)
  },
  insert_answer:function(question_id, session_id, answer_content, callback) {
    call("question/insert_answer",
      {question_id: question_id, session_id: session_id, answer_content: answer_content}, callback)
  },
  insert_like:function(session_id, question_num, answer_num, callback) {
  call("question/insert_like",{session_id: session_id, question_num: question_num, answer_num: answer_num}, callback)
 },
  select_answer:function(session_id, question_num, answer_num, select_enable, callback) {
  call("question/select_answer",
    {session_id: session_id, question_num: question_num, answer_num: answer_num, select_enable: select_enable}, callback)
 }
}
