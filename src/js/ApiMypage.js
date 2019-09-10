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
  }
}
