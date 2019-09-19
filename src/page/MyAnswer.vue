<template>
  <div id="main_page" class="page">
    <Header></Header>
    <div class="contents_area">
      <wallet_info></wallet_info>
      <div id="menu_name">
        <span id="menu">My answer</span>
        <div id="contents">
          <ul>
            <li v-for="item in question_item">
              <myquestion :title="item.title" :contents="item.contents"></myquestion>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import Header from "../component/common/Header";
    import wallet_info from "../component/wallet/wallet_info";
    import myquestion from "../component/question_list/MyQuestionListTile";

    export default {
        name: "MyAnswer",
        components:{Header,wallet_info,myquestion},
    data: () => {
        return {
            question_item: question
        }
    }
    }

    let question = [
        {title: "이런이런 질문이 있습니다! 답변 부탁드립니다", contents: "내가 이런이런 답변을 달았었음\n" + "두줄까지 노출", like:true},
        {title: "이런이런 질문이 있습니다! 답변 부탁드립니다", contents: "내가 이런이런 답변을 달았었음\n" + "두줄까지 노출", like:true},
        {title: "이런이런 질문이 있습니다! 답변 부탁드립니다", contents: "내가 이런이런 답변을 달았었음\n" + "두줄까지 노출", like:true},
        {title: "이런이런 질문이 있습니다! 답변 부탁드립니다", contents: "내가 이런이런 답변을 달았었음\n" + "두줄까지 노출", like:true},
        {title: "이런이런 질문이 있습니다! 답변 부탁드립니다", contents: "내가 이런이런 답변을 달았었음\n" + "두줄까지 노출"}

    ];

</script>

<style scoped>

  .contents_area {
    margin: auto;
    /*position: relative;*/
    text-align: center;
    width:1000px;
  }

  #menu {
    font-family: "Nanum Gothic";
    font-size: 20px;
    color: #5d5d5d;
    margin-right: 760px;
    margin-top: 20px;
  }

  #contents {
    margin : 20px auto;
  }
</style>
