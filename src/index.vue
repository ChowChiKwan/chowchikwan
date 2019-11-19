<template>
  <div class="wrapper clearfix">
    <Header />
    <section
      :style="`min-height: ${minHeight}px`"
      class="main-section"
    >
      <router-view />
    </section>
    <Footer v-if="minHeight > 0"/>
  </div>
</template>
<script>
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';

export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      minHeight: 0,
    };
  },
  mounted() {
    this.setMinHeight();
    window.addEventListener('resize', this.setMinHeight, false);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.setMinHeight, false);
  },
  methods: {
    setMinHeight() {
      const { innerHeight } = window;
      this.minHeight = innerHeight - 195;
    },
  },
};
</script>
