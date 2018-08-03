<template>
    <div class="header">
        <div class="header_wrap">
            <h1 class="title">云笔记</h1>
            <button class="btn1" @click="$router.push('./search')"><img src="../images/sousuo.png" alt=""></button>
            <button class="btn" @click="$router.push('./publish')">写笔记</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Head"
    }
</script>

<style scoped>
  .header_wrap{
      position: relative;
      width: 100%;
      height: 40px;
      background: #409dee;
  }
.title{
    width: 100px;
    height: 40px;
    line-height: 40px;
    margin-left: 250px;
    color: #fff;
    font-size: 20px;
    font-weight: 400;
}
  .btn1{
      position: absolute;
      top: 7px;
      right: 200px;
      width: 30px;
      height: 30px;
      background: none;
      outline: none;
      border: none;
      margin-right: 150px;
}
  .btn1 img{
      width: 30px;
      height: 30px;
      line-height: 30px;


  }
.btn{
    width: 80px;
    height: 30px;
    background: #fff;
    color: #409dee;
    float: right;
    margin-top: -35px;
    margin-right: 250px;
    border: none;
    border-radius: 4px;
}

</style>