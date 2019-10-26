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
  find_pw_auth_identity:function(authorize_text, password, email, callback) {
    call("membership/find_pw_auth_identity", {authorize_text: authorize_text, password: password, email: email}, callback)
  },
  modify_pw:function(session_id, password, callback) {
    call("membership/modify_pw", {session_id: session_id, password: password}, callback)
  },
  signup:function(email, password, nickname, callback) {
    call("membership/signup",{email: email, password: password, nickname: nickname}, callback)
  },
  authorize_signup:function(email, authorize_text, callback) {
    call("membership/authorize_signup", {email: email, authorize_text: authorize_text}, callback)
  },
  account:function(session_id, callback) {
    call("membership/",{session_id: session_id}, callback)
  },
  transaction:function(session_id, callback) {
    get("userInfo/transaction",{params : {session_id: session_id}}, callback)
  },
  my_question_list:function(session_id, callback) {
    get("userInfo/my_question_list",{params : {session_id: session_id}}, callback)
  },
  my_answer_list:function(session_id, callback) {
    get("userInfo/my_answer_list",{params : {session_id: session_id}}, callback)
  },
  my_like_list:function(session_id, callback) {
    get("userInfo/my_like_list",{params : {session_id: session_id}}, callback)
  },
  my_remain_klay:function(session_id, callback) {
    get("userInfo/my_remain_klay",{params : {session_id: session_id}}, callback)
  },
  category:function(callback) {
    get("question/category", null, callback)
  },
  insert_question:function(session_id, question_title, question_klay, question_content, category, callback) {
    call("question/insert_question",
      {session_id: session_id, question_title: question_title, question_klay: question_klay,
        question_content: question_content, category:category}, callback)
  },
  show_question:function(question_id, callback) {
    get("question/show_question",{params : {question_id: question_id}}, callback)
  },
  question_list:function(def, question_state,callback) {
    get("question/question_list", { params : {default:def, question_state: question_state}}, callback)
  },
  insert_answer:function(question_id, session_id, answer_content, callback) {
    call("question/insert_answer",
      {question_id: question_id, session_id: session_id, answer_content: answer_content}, callback)
  },
  insert_like:function(session_id, question_id, answer_id, callback) {
    call("question/insert_like",{session_id: session_id, question_id: question_id, answer_id: answer_id}, callback)
  },
  select_answer:function(session_id, question_id, answer_id, select_enable, callback) {
    call("question/select_answer",
      {session_id: session_id, question_id: question_id, answer_id: answer_id, select_enable: select_enable}, callback)
  },
  my_page:function (session_id, callback) {
    get( "userInfo/", {params :{session_id:session_id}}, callback)
  }
};
