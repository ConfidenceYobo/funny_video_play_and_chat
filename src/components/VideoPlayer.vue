<template>
  <div class="col-sm-12 col-md-7 video-holder">
    <video playsinline autoplay loop controls>
 	<source type="video/mp4" src="../assets/videoplayback.mp4">
</video>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {},
  methods: {},
  mounted() {},
};
</script>

<style lang="scss" scoped>
.disable_cursor {
  pointer-events: none;
}

.video-holder {
  min-height: 300px;
  video {
    background: #ECF0F0;
    width: 100% !important;
    height: 100% !important;
  }
}

@media only screen and (max-width: 767px) {
  .video-holder {
    height: calc(30vh);
    video {
      max-height: 400px;
    }
  }
}
</style>