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
  account:function(sessionId, callback) {
    call("membership/",{sessionId: sessionId}, callback)
  },
  transaction:function(sessionId, callback) {
    call("my_page/transaction",{sessionId: sessionId}, callback)
  },
  my_question_list:function(sessionId, callback) {
    call("my_page/my_question_list",{sessionId: sessionId}, callback)
  },
  my_answer_list:function(sessionId, callback) {
    call("my_page/my_answer_list",{sessionId: sessionId}, callback)
  },
  my_like_list:function(sessionId, callback) {
    call("my_page/my_like_list",{sessionId: sessionId}, callback)
  },
  my_remain_klay:function(sessionId, callback) {
    call("membership/my_remain_klay",{sessionId: sessionId}, callback)
  }
}
