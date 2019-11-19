<template>
  <header>
    <div class="title">
      小邹
    </div>
  </header>
</template>
<script>
export default {
  name: 'Footer',
  data() {
    return {
      msg: '',
    };
  },
};
</script>
<style lang="scss">
  header {
    height: 130px;
    padding: 20px 80px;
    border-bottom: 1px solid #eee;

    .title {
      font-size: 60px;
    }
  }
</style>
