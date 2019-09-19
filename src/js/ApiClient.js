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

// get 방식 호출
function get(api, data, callback) {
  axios.get(baseURL+api, data).catch((error) => {
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
  login: function(email, password, callback) {
    call("membership/login", {email: email, password: password}, callback);
  },
  logout: function(session_id, callback) {
    call("membership/logout", {session_id: session_id}, callback);
  },
  check_email: function(email, callback) {
    call( "membership/check_email", {email: email}, callback)
  },
  find_pw_auth_code: function(email, callback) {
    call("membership/find_pw_auth_code", {email: email}, callback)
  },
  find_pw_auth_identity:function(email, authorize_text, callback) {
    call("membership/find_pw_auth_identity", {email: email, authorize_text}, callback)
  },
  modify_pw:function(session_id, password, callback) {
    call("membership/modify_pw", {session_id: session_id, password: password}, callback)
  },
  signup:function(email, password, nickname, callback) {
    call("membership/signup",{email: email, password: password, nickname: nickname}, callback)
  },
  authorize_identity:function(email, password, nickname, authorize_text, callback) {
    call("membership/authorize_identity",
      {email: email, password: password, nickname: nickname, authorize_text: authorize_text}, callback)
  },
  account:function(session_id, callback) {
    call("membership/",{session_id: session_id}, callback)
  },
  transaction:function(session_id, callback) {
    call("userInfo/transaction",{session_id: session_id}, callback)
  },
  my_question_list:function(session_id, callback) {
    call("userInfo/my_question_list",{session_id: session_id}, callback)
  },
  my_answer_list:function(session_id, callback) {
    call("userInfo/my_answer_list",{session_id: session_id}, callback)
  },
  my_like_list:function(session_id, callback) {
    call("userInfo/my_like_list",{session_id: session_id}, callback)
  },
  my_remain_klay:function(session_id, callback) {
    call("membership/my_remain_klay",{session_id: session_id}, callback)
  },
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
  question_list:function(def, question_state,callback) {
    get("question/question_list", { params : {default:def, question_state: question_state}}, callback)
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
};
