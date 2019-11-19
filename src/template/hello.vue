<template>
  <div class="container">
    <ul>
      <li
        v-for="(article, idx) in articleList"
        :key="idx"
      >
        <div class="article-header">
          <span class="article-header__time">
            {{ article.time }}
          </span>
          <span class="article-header__title">
            {{ article.title }}
          </span>
        </div>
        <div class="article-body">
          {{ article.desc }}
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      articleList: [
        {
          title: '写点东西吧...记录一下工作中遇到的问题',
          time: '2019-10-04',
          desc: '希望通过记录问题，以后再次遇到不会再懵逼~~',
        },
        {
          title: '总想弄点nodejs小玩意，但也不知道弄啥好...',
          time: '2019-10-23',
          desc: '有点迷茫哈哈...',
        },
        {
          title: '无限树状自定义节点问题',
          time: '2019-11-03',
          desc: '今天遇到一个事，做个组织架构的树枝图，如果想要自定义节点，单纯用slot去写的话，貌似无法实现，component中render一个父组件的...',
        },
        {
          title: '今天晚上又跑去新房子组装柜子，安装五金了',
          time: '2019-11-09',
          desc: '感觉还是蛮累的...天天下班还要跑去新房子自己动手装家具，装五金挂件之类的。嘴上说有成就感，其实就是穷，没钱请人来安装~',
        },
      ],
    };
  },
};
</script>
<style lang="scss">
  .container {
    ul {
      width: 1200px;
      margin: 0 auto;

      li {
        padding: 20px;
        border-left: 1px solid #eee;

        .article-header__title {
          font-size: 20px;
        }

        .article-header__time {
          margin-right: 20px;
          color: #8c8c8c;
        }

        .article-body {
          padding: 10px;
        }
      }
    }
  }
</style>
