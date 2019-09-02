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
  login: function(email, password, callback) {
    call("membership/login", {email: email, password: password}, callback);
  },
  logout: function(sessionId, callback) {
    call("membership/logout", {sessionId: sessionId}, callback);
  },
  signup: function(email, password, nickname, callback) {
    call( "membership/signup", {email: email, password: password, nickname: nickname}, callback)
  },
  find_pw_auth_code: function(email, callback) {
    call("membership/find_pw_auth_code", {email: email}, callback)
  },
  find_pw_auth_identity:function(email, authorize_text, callback) {
    call("membership/find_pw_auth_identity", {email: email, authorize_text}, callback)
  },
  modify_pw:function(sessionId, password, callback) {
    call("membership/modify_pw", {sessionId: sessionId, password: password}, callback)
  },
  authorize_code:function(email, password, nickname, callback) {
    call("membership/authorize_code",{email: email, password: password, nickname: nickname}, callback)
  },
  authorize_identity:function(email, password, nickname, authorizeText, callback) {
    call("membership/authorize_identity",
      {email: email, password: password, nickname: nickname, authorize_text: authorizeText}, callback)
  }
};
