<template>
  <div class="container">
    <div class="row main-layout">
      <video-player></video-player>
      <chat-area></chat-area>
    </div>
  </div>
</template>

<script>
import VideoPlayer from "./components/VideoPlayer.vue";
import ChatArea from "./components/ChatArea.vue";

export default {
  name: "App",
  components: {
    VideoPlayer,
    ChatArea,
  },
};
</script>
<style lang="scss" scoped>
.main-layout {
  // height: calc(100vh);
  padding-top: 25px;
}
</style>
