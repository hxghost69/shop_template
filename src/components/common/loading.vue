<template lang="html">
  <div class="wrap">
    <div class="spinner">
      <!-- <div class="double-bounce1"></div>
      <div class="double-bounce2"></div> -->
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
    </div>
    <p>加载中.....</p>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.wrap {
  width: 100%;
  height: 100%;
  background-color: rgba(255,255,255,.8);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99999;
}

p {
  text-align: center;
  font-size: 16px;
}

.spinner {
  width: 100px;
  height: 100px;
  position: relative;
  margin: 65% auto;
  margin-bottom: 20px;
  span{
      display: inline-block;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: #2b2b2b;
      position: absolute;
      -webkit-animation: load 1.04s ease infinite;
     &:nth-child(1){
            left: 0;
            top: 50%;
            margin-top:-8px;
            animation-delay:0.13s;
        }
        &:nth-child(2){
            left: 14px;
            top: 14px;
            animation-delay:0.26s;
        }
        &:nth-child(3){
            left: 50%;
            top: 0;
            margin-left: -8px;
            animation-delay:0.39s;
        }
        &:nth-child(4){
            top: 14px;
            right:14px;
            animation-delay:0.52s;
        }
        &:nth-child(5){
            right: 0;
            top: 50%;
            margin-top:-8px;
            animation-delay:0.65s;
        }
        &:nth-child(6){
            right: 14px;
            bottom:14px;
            animation-delay:0.78s;
        }
        &:nth-child(7){
            bottom: 0;
            left: 50%;
            margin-left: -8px;
            animation-delay:0.91s;
        }
        &:nth-child(8){
            bottom: 14px;
            left: 14px;
            animation-delay:1.04s;
        }     
  }
}
  @keyframes load{
      0%{
          opacity: 1;
      }
      100%{
          opacity: 0.2;
      }
  }
// .double-bounce1, .double-bounce2 {
//   width: 100%;
//   height: 100%;
//   border-radius: 50%;
//   background-color: #facd2d;
//   opacity: 0.6;
//   position: absolute;
//   top: 0;
//   left: 0;

//   -webkit-animation: bounce 2.0s infinite ease-in-out;
//   animation: bounce 2.0s infinite ease-in-out;
// }

// .double-bounce2 {
//   -webkit-animation-delay: -1.0s;
//   animation-delay: -1.0s;
// }
// @-webkit-keyframes bounce {
//   0%, 100% { -webkit-transform: scale(0.0) }
//   50% { -webkit-transform: scale(1.0) }
// }

// @keyframes bounce {
//   0%, 100% {
//     transform: scale(0.0);
//     -webkit-transform: scale(0.0);
//   } 50% {
//     transform: scale(1.0);
//     -webkit-transform: scale(1.0);
//   }
// }

</style>
