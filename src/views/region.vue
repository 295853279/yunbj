<template>
<div>
   <Head></Head>
    <div class="region">
        <h2 class="title">
            新用户注册
        </h2>
        <div class="item">
            <input type="text" placeholder="用户名" v-model="username">
        </div>

        <div class="item">
            <input type="text" placeholder="邮箱"  v-model="email">
        </div>

        <div class="item">
            <input type="password" placeholder="密码"  v-model="password" @keyup.enter="handelRegion">
        </div>

        <div class="item">
            <button type="primary" class="btn"@click="handelRegion" >
                注册
            </button>
        </div>
    </div>
</div>

</template>

<script>
    import Head from '../components/Head'
    export default {
        components:{
            Head
        },
        data () {
            return {
                username: "",
                password:"",
                email:""
            }
        },
        methods:{
            handelRegion (){
                let params = {
                    username: this.username,
                    password: this.password,
                    email: this.email
                }
                this.$axios.post('/user',params).then(res => {
                    if (res.data.code == 200){
                        alert('注册成功！')
                        this.$router.push('/')
                    }
                    else{
                        alert(res.data.msg)
                    }
                })
            }
        }
    }
</script>

<style scoped lang="less">
    .region {
        color: #333;
        padding-top: 30px;
        padding-bottom: 50px;
        width: 714px;
        margin: 100px auto 0;
        border-radius: 6px;
        background: #fff;

    h2 {
        text-align: center;
        color: #333;
        font-weight: 400;
    }
    }

    .item {
        box-sizing: border-box;
        width: 390px;
        margin: 30px auto 0;

    .btn {
        width: 100%;
        height: 40px;
        background: #409dee;
        color: #fff;
        border: none;
        font-size: 16px;
    }

    input {
         box-sizing: border-box;
         width: 100%;
         border: 1px solid #f1f1f1;
         border-radius: 4px;
         padding: 14px;
         outline: none;
     }
    }
</style>