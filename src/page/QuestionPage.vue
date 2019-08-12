<template>
    <div id="main_page" class="page">
        <Header></Header>
        <div class="contents_area">
          <div id="title_name">
            새 질문 등록
          </div>
          <form id="search_form">
            <div>
              <input id="question_title" v-model="message" placeholder="제목">
            </div>
              <div>
                <select v-model="selected" class="category">
                  <option disabled value="대분류">분류를 선택하세요</option>
                  <option>A</option>
                  <option>B</option>
                  <option>C</option>
                </select>
              </div>
              <div id="klay">
                <ul>
                  <li>
                    <a><input id="question_klay" placeholder="보상"></a>
                    <a>klay</a>
                  </li>
                </ul>
              </div>
              <div>
                <textarea id="contents" v-model="message" placeholder="내용을 입력해 주세요"></textarea>
              </div>
                <ul>
                  <li>
                    <router-link to="#" tag="button" id="reg" class="btn">등록</router-link>
                  </li>
                  <li>
                    <router-link to="#" tag="button" id="cancel" class="btn">취소</router-link>
                  </li>
                </ul>
          </form>
        </div>
    </div>
</template>

<script>
    import Header from './../component/common/Header'
    import ListTile from './../component/main/MainListTile'

    export default {
        name: "MainPage",
        components: {
            Header,
            ListTile
        }
    }

</script>

<style scoped>
    #main_page {
        position: relative;
    }

    /* 새질문 등록 */
    #title_name {
      margin-top: 20px;
      margin-left: 600px;
      font-family: "Nanum Gothic";
      font-size: 20px;
      color: black;

    }

    /* 제목 입력 칸*/
    #question_title {
      /*position: absolute;*/
      margin-top: 20px;
      margin-left: 600px;
      width: 470px;
      height: 32px;
      background: white;
      border: solid 1px #a5a5a5;
      font-family: NanumGothic;
      font-size: 10px;
      /*float: left;*/
      color: black;
      padding-left: 20px;
      -webkit-border-radius: 5px;
      -moz-border-radius: 5px;
      border-radius: 5px;
    }

    /* 카테고리 선택 칸*/
    .category {
      /*position: absolute;*/
      margin-top: 20px;
      margin-left: 600px;
      width: 490px;
      height: 32px;
      background: white;
      border: solid 1px #a5a5a5;
      font-family: NanumGothic;
      font-size: 15px;
      /*float: left;*/
      color: black;
      padding-left: 59px;
      -webkit-border-radius: 5px;
      -moz-border-radius: 5px;
      border-radius: 5px;
    }

    /* 클레이 입력 칸*/
    #question_klay {
      /*position: absolute;*/
      /*margin-top: 20px;*/
      /*margin-left: 600px;*/
      width: 200px;
      height: 32px;
      background: white;
      border: solid 1px #a5a5a5;
      font-family: NanumGothic;
      font-size: 10px;
      /*float: left;*/
      color: black;
      padding-left: 20px;
      -webkit-border-radius: 5px;
      -moz-border-radius: 5px;
      border-radius: 5px;
    }

    /* 질문 내용 입력 칸 */
    #contents {
      /*position: absolute;*/
      margin-top: 10px;
      margin-left: 600px;
      width: 480px;
      height: 300px;
      background: white;
      border: solid 1px #a5a5a5;
      font-family: NanumGothic;
      font-size: 10px;
      /*float: left;*/
      color: black;
      padding-top: 10px;
      padding-left: 10px;
      -webkit-border-radius: 5px;
      -moz-border-radius: 5px;
      border-radius: 5px;
    }

    /* 등록 버튼 */
    #reg {
      /*position: absolute;*/
      /*margin-top: 20px;*/
      /*margin-left: 850px;*/
      margin-right: 10px;
      width: 60px;
      height: 30px;
      float: left;
      color: white;
      background-color: #4695d9;
    }

    /* 취소 버튼 */
    #cancel {
      /*position: absolute;*/
      /*margin-left: 930px;*/
      width: 60px;
      height: 30px;
      float: left;
      float: left;
      color: white;
      background-color: #4695d9;
    }

    /* 버튼 inline*/
    ul li {
      list-style-type: none;
      margin-left: 960px;
    }

    /* klay inline*/
    #klay > ul{
      /*list-style-type: none;*/
      margin-left: -360px;
      float:left;
    }

    #klay li a:nth-of-type(2){
      margin-left: 10px;
    }
</style>
