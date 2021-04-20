<template>
  <div class="item-icons">
    <div class="wrap">
      <div class="box" :class="boxShow">
        <item-icon
          v-for="(item, index) in list"
          :key="index"
          :class="
            'item-icon-' + Math.floor(((index + curIndex) % list.length) + 1)
          "
        ></item-icon>
      </div>
    </div>
  </div>
</template>

<script>
import itemIcon from "./itemIcon.vue";
export default {
  components: { itemIcon },
  data() {
    return {
      list: [],
      curIndex: 1,
      boxShow: "",
    };
  },
  created() {
    for (let index = 0; index < 11; index++) {
      this.list.push({});
    }

    setInterval(() => {
      this.curIndex++;
    }, 2000);
  },
  mounted() {
    // 下一帧 再执行
    this.$nextTick(() => {});
    setTimeout(() => {
      this.curIndex++;
      this.boxShow = "boxShow";
    });
  },
};
</script>

<style lang="less" scoped>
.tt(@l,@t) {
  transform: translate(@l / @vw, @t / @vw);
}
.item-icons {
  width: 100%;
}
.wrap {
  display: flex;
  justify-content: center;
  .box {
    position: relative;
    width: 600 / @vw;
    transform: scale(0);
    transition-duration: 0.6s;
  }
  .boxShow {
    transform: scale(1);
  }
  .item-icon {
    position: absolute;
    left: 0;
    top: 0;
    transition: 2s linear;
  }
  .item-icon-1 {
    .tt(100,0);
  }
  .item-icon-2 {
    .tt(200,100);
  }
  .item-icon-3 {
    .tt(300,100);
  }
  .item-icon-4 {
    .tt(400,0);
  }
  .item-icon-5 {
    .tt(500,100);
  }
  .item-icon-6 {
    .tt(450,200);
  }
  .item-icon-7 {
    .tt(350,300);
  }
  .item-icon-8 {
    .tt(250,400);
  }
  .item-icon-9 {
    .tt(150,300);
  }
  .item-icon-10 {
    .tt(75,200);
  }
  .item-icon-11 {
    .tt(0,100);
  }
}
</style>