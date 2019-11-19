<template>
  <footer>
    <div class="beian">
      <a
        target="_blank"
        href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44060602001383"
      >
        <img src="assets/images/beian.png">
        <p>
          粤公网安备 44060602001383号
          <span>
            粤ICP备19110420号
          </span>
        </p>
      </a>
    </div>
  </footer>
</template>
<style lang="scss">
  footer {
    height: 60px;
    border-top: 1px solid #eee;

    .beian {
      width: 325px;
      padding: 20px 0;
      margin: 0 auto;

      a {
        display: inline-block;
        height: 20px;
        line-height: 20px;
        text-decoration: none;

        img {
          float: left;
        }

        p {
          float: left;
          height: 20px;
          margin: 0 0 0 5px;
          line-height: 20px;
          color: #939393;

          span {
            margin-left: 20px;
          }
        }
      }
    }
  }
</style>
