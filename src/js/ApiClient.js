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

<<<<<<< HEAD
// get 방식 호
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

=======
>>>>>>> master
export default {
  login: function(email, password, callback) {
    call("membership/login", {email: email, password: password}, callback);
  },
<<<<<<< HEAD
  logout: function(sessionId, callback) {
    call("membership/logout", {sessionId: sessionId}, callback);
  },

  signup: function (email, password, nickname, callback) {
    call( "membership/signup", {email:email, password:password, nickname:nickname}, callback )
  },

  questionlist: function (def=0, question_state=0, callback) {
    get( "question/question_list", {  params: { default: def, question_state: question_state}}, callback)
  },

  remainklay: function (sessionId, callback) {
    get( "membership/my_remain_klay", { params: { session_id : sessionId}}, callback)
=======
  logout: function(session_id, callback) {
    call("membership/logout", {session_id: session_id}, callback);
  },
  signup: function(email, callback) {
    call( "membership/signup", {email: email}, callback)
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
  authorize_code:function(email, password, nickname, callback) {
    call("membership/authorize_code",{email: email, password: password, nickname: nickname}, callback)
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
>>>>>>> master
  }
};
