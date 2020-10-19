<template>
  <div class="col-sm-12 col-md-5 chat-layout">
    <h2>Message</h2>
    <div class="chat-container">
      <div class="chat-window scrollbar scrollbar-chat text-center">
          <div
            class="row pt-2"
            v-for="(a, index) in messages"
            :id="'top' + a.nid"
            :key="index"
          >
            <div class="col-md-12">
              <!-- Display written query -->
              <div class="row" v-if="!a.answer">
                <div class="col mb-2 text-left d-flex justify-content-end">
                  <div class="question">{{ a.message }}</div>
                </div>
              </div>

              <!-- Display answers after they are returned by dialogflow -->
              <div class="row" v-if="a.answer">
                <div class="col-md-9 text-left">
                  <div class="answerText">{{ a.message }}</div>
                </div>
              </div>
            </div>
          </div>
          <div id="bottom"></div>
        </div>
      <div class="chat-composer">
        <div class="row" style="padding: 5px 10px">
          <div class="col-md-10 col-sm-10 col-10 search">
            <input
              type="text"
              placeholder="Send message"
              v-model="message"
              @keyup.enter="submit"
              id="queryinput"
            />
          </div>
          <div
            class="col-md-2 col-sm-2 col-2"
            v-show="message != ''"
          >
            <div class="send" @click="submit">
              <i class="fab fa-telegram-plane"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messages: [],
      message: "",
    };
  },
  computed: {},
  methods: {
    submit() {
      let vm = this;
      if (this.message) {
        setTimeout(() => {
          document.querySelector("#bottom").scrollIntoView({
            behavior: "smooth",
          });
        }, 2);

        vm.messages.unshift({
          message: this.message,
          answer: false,
        });
        vm.messages.unshift({
          message: "Static response...",
          answer: true,
        });
        vm.scroll();
        vm.message = "";
        document.getElementById("queryinput").focus();
        $("#queryinput").focus();
      }
    },
    scroll() {
      let vm = this;
      let id = "#top" + vm.id;
      setTimeout(() => {
        document.querySelector(id).scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
      }, 2);
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.disable_cursor {
  pointer-events: none;
}
.chat-layout {
  background-color: #ecf0f0;
  height: calc(70vh);
  h2 {
    margin-top: 12px;
    margin-bottom: 12px;
    font-size: 21px;
  }
  .chat-container {
    position: relative;
    height: 80%;
  }
}
@media only screen and (max-width: 767px) {
  .chat-layout {
    height: calc(42vh);
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
  }
}
@import "../Chat.scss";
</style>