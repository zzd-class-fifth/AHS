<template>
  <div class="item-icon">
    <div class="wrap">
      <img src="@/assets/logo.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      default: 1,
    },
  },
};
</script>

<style lang="less" scoped>
.wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  .wh(80,80);
}
</style>