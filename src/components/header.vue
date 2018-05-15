<template>
    <mt-header :title="title">
    <!-- <div slot="left">
        <mt-button  icon="back">返回</mt-button>
    </div> -->
    <mt-button  slot="right">
      <mt-button type="default">登录</mt-button>
      <mt-button type="primary">注册</mt-button>
    </mt-button>
    </mt-header>
</template>
<script>
  export default {
    props:['title']
  }
</script>
