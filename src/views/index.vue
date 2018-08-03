<template>
    <div class="box">
        <Head></Head>
            <div class="content">
                <img src="/static/img/banner.jpg" alt="">
            </div>
        <div class="login-box" v-if="!usermsg.username">
            <div class="log">
                <input type="text"  placeholder="邮箱" class="ipt-padding" v-model="email">
                <input type="password"  placeholder="密码" class="ipt-padding" v-model="password"
                       @keyup.enter="handelLogin">
                <button class="btn1" @click="handelLogin">登录</button >
                <button class="btn2" @click="$router.push('/region')">去注册</button>
                <div class="text1">
                    <p>this notes is very pretend bility</p>
                </div>
                <div class="text2">
                    <p>IT牛人都在用的笔记...</p>
                </div>
            </div>
        </div>
        <div class="user-box" v-else>
            <img src="../images/01.jpg" alt="">
            <div class="user-name">
                {{usermsg.username}}
            </div>
           <div class="user-name">
               {{usermsg.email}}
           </div>
            <button class="btn3">退出</button>
        </div>
        <div class="article">
            <div class="logo">
                <img src="../images/01.jpg" alt="">
                <div class="title">
                    <h1 class="name">笔记丸子</h1>
                    <h1 class="titles">&nbsp;|&nbsp;浅谈Vue.js</h1>
                    <div class="title-st">
                        <p>浏览：366</p>
                        <p>回复：2</p>
                        <p>分类：类库框架</p>
                    </div>
                </div>
                <!--@click="$router.push('/details')"-->
                <div class="contents">
                    <p>Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被 设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。 另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。 如果你想在深入学习 Vue 之前对它有更多了解，我们制作了一个视频，带您了解其核心概念和一个示例工程。 如果你已经是有经验的前端开发者，想知道 Vue 与其它库/框架有哪些区别，请查看对比其它框架。</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Head from '../components/Head.vue'
    import cookies from 'js-cookie'
    export default {
        components:{
            Head
        },
        data () {
            return{
                email:"",
                password:"",
                usermsg:{
                    username:"",
                    email:""
                }
            }
        },
        methods:{
            handelLogin(){
                let params = {
                    email:this.email,
                    password:this.password
                }
                this.$axios.post('/login', params).then(res => {
                    if(res.data.code == 200){
                        this.usermsg = res.data.data
                        cookies.set('username',this.usermsg.username, {expires:7})
                        cookies.set('email',this.usermsg.email, {expires:7})
                        alert('登录成功,欢迎回来' +res.data.data.username)
                    }
                    else {
                        alert(res.data.msg)
                    }
                })
            },
            getUserMsg () {
                let username = cookies.get('username')
                let email = cookies.get('email')
                if (username && email){
                    this.usermsg.username = username;
                    this.usermsg.email = email
                }
            }
        },
        mounted(){
            this.getUserMsg();
        }
    }
</script>

<style scoped lang="less">
    .box{
        position: relative;
        width: 1519px;
        padding-top: 30px;
    }
    .content{
        position: relative;
        top: 80px;
        left: 250px;
        width: 800px;
        height: 800px;
    }
    .content img{
        width: 800px;
        height: 400px;
    }
    .log{
        position: absolute;
        top: 150px;
        right: 140px;
        width: 280px;
        height: 400px;
        background: #fff;
    }
    input{
        box-sizing: border-box;
        border: 1px solid #f1f1f1;
        border-radius: 4px;
        margin: 25px auto;
        display: block;
        width: 200px;
        height: 30px;
        outline:none;
        padding: 4px;
    }
    .log button{
        display: block;
        margin: 25px auto;
        width: 204px;
        height: 35px;
    }
    .btn1{
        border: none;
        background: #409dee;
        color: #fff;
        outline: none;
    }
    .btn2{
        border: 1px solid #409dee;
        background: #fff;
        color: #409dee;
        outline: none;
    }
    .text1{
        margin: 30px auto;
        width: 200px;
        height: 40px;
        font-size: 12px;
        color: #aaa;
    }
    .text2{
        margin: -20px auto;
        width: 200px;
        height: 40px;
        font-size: 13px;
        color: #aaa;
        text-align: center;
    }
    .article{
        width: 800px;
        position: relative;
        left: 250px;
        top: -250px;

        background: #fff;
    }
    .article img{
        padding: 15px 0 0 15px;
        width: 50px;
        height: 50px;
    }
    .title{
        position: absolute;
        top: 15px;
        left: 80px;
    }
    .titles{
        font-size: 20px;
        font-weight: 400;
    }
    .title h1 {
        display: inline-block;
    }
    .title-st{
        background: #f1f1f1;
        width: 700px;
        height: 30px;
        line-height: 30px;
        font-size: 16px;
        color: #aaa;
        margin-top: 10px;
    }
    .title-st p{
        display: inline-block;
        margin-left: 10px;
    }
    .name{
        font-size: 18px;
        font-weight: 400;
        color: #409dee;
    }

    .contents{
        display: inline-block;
        margin-top: 10px;
        padding: 15px 15px 15px 20px;
    }
    .user-box{
        position: absolute;
        top: 150px;
        right: 140px;
        width: 280px;
        height: 400px;
        background: #fff;
    }
    .user-name{
        font-size: 18px;
        color: red;
        text-align: center;
        margin-top: 15px;
    }
    .btn3{
        position: absolute;
        bottom: 50px;
        left: 96px;
        width: 100px;
        height: 40px;
        border: none;
        outline: none;
        background: red;
        color: #fff;
        font-size: 18px;
    }
    .user-box img{
        margin-top: 20px;
        margin-left: 80px;
        width: 100px;
        height: 100px;
    }
</style>