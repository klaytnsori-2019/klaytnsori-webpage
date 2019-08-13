<template>
  <div id="main_page" class="page">
    <Header></Header>
    <div class="contents_area">
      <div id="question_area">
        <div class="title_area">
          <span>질문</span>
        </div>
        <ul>
          <li v-for="item in question_item">
            <list-tile :title="item.title" :detail="item.detail" :reward="item.reward" :date="item.date" :id="item.id"></list-tile>
          </li>
        </ul>
      </div>
      <div id="answer_area">
        <div class="title_area">
          <span>답변</span>
        </div>
        <ul>
          <li v-for="item in answer_item">
            <answer-tile :detail="item.detail" :id="item.id" :like="item.like"></answer-tile>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

  import Header from './../component/common/Header'
  import ListTile from '../component/main/QuestionDetailQTile'
  import AnswerTile from '../component/main/QuestionDetailATile'

  export default {
    name: "QuestionDetail_like",
    components: {
      Header,
      ListTile,
      AnswerTile
    },
    data: () => {
      return {
        question_item: question_item,
        answer_item : answer_item
      }
    }
  }
  let question_item = [{title: "이런이런 질문이 있습니다! 답변 부탁드립니다",
    detail:"가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하" +
      "가나다라마바사아자차카타파하가나\n가나다라마바사아자차카타파하가나다라마바사아자차카타파하" +
      "가나다라마바사아자차카\n하가나다라마바사아자차카타파하가나다라마바사아자차카타파하" +
      "가나다라마바사아자차카타파하가나다\n가나다라마바사아자차카타파하가나다라마바사아자차카타파하" +
      "가나다라마바사아자차카타파하가나다라\n마바사아자차카타파하가나다라마바사아자차카타파하" +
      "가나다라마바사아자차카타파하가나다\n가나다라마바사아자차카타파하가나다라마바사아자차카타파하" +
      "가나다라마바사아자차카타파하가나다라마\n바사아자차카타파하가나다라마바사아자차카타파하" +
      "가나다라마바사아자차카타파하가나다\n가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차" +
      "카타파하가나다라마바사아자차카타파하가나\n다라마바사아자차카타파하가나다라마바사아자차카타파하가나다\n",
    id:"doyun0916@naver.com",
    date:"작성일시:2019-08-08 14:28",
    reward: 10}];
  let answer_item = [
    {  detail:"간단한 내용 들어가겠습니다!!! white-space 사랑합니다\n" +
        "간단한 내용 들어가겠습니다!!! white-space 사랑합니다\n"+"간단한 내용 들어가겠습니다!!! white-space 사랑합니다",
      id:"doyun0916@naver.com",like:"12"},
    { detail:"간단한 내용 들어가겠습니다!!! white-space 사랑합니다\n" +
        "간단한 내용 들어가겠습니다!!! white-space 사랑합니다\n"+"간단한 내용 들어가겠습니다!!! white-space 사랑합니다",
      id:"doyun0916@naver.com",like:"12"},
    {detail:"간단한 내용 들어가겠습니다!!! white-space 사랑합니다\n" +
        "간단한 내용 들어가겠습니다!!! white-space 사랑합니다\n"+"간단한 내용 들어가겠습니다!!! white-space 사랑합니다",
      id:"doyun0916@naver.com",like:"12"},
    {detail:"간단한 내용 들어가겠습니다!!! white-space 사랑합니다\n" +
        "간단한 내용 들어가겠습니다!!! white-space 사랑합니다\n"+"간단한 내용 들어가겠습니다!!! white-space 사랑합니다",
      id:"doyun0916@naver.com",like:"12"},
    {detail:"간단한 내용 들어가겠습니다!!! white-space 사랑합니다\n" +
        "간단한 내용 들어가겠습니다!!! white-space 사랑합니다\n"+"간단한 내용 들어가겠습니다!!! white-space 사랑합니다",
      id:"doyun0916@naver.com",like:"12"},
    {detail:"간단한 내용 들어가겠습니다!!! white-space 사랑합니다\n" +
        "간단한 내용 들어가겠습니다!!! white-space 사랑합니다\n"+"간단한 내용 들어가겠습니다!!! white-space 사랑합니다",
      id:"doyun0916@naver.com",like:"12"}
  ];
</script>

<style scoped>

  .contents_area {
    margin: auto;
    width: 1000px;
    text-align: center;
  }

  .title_area {
    text-align: left;
    margin-left: 65px;
    margin-top: 52px;
  }

</style>

