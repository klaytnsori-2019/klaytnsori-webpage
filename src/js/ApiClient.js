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

export default {
  login: function(email, password, callback) {
    call("membership/login", {email: email, password: password}, callback);
  },
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
  }
};
