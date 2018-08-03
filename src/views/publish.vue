<template>
    <div>
        <Head></Head>
        <div class="box">
            <div class="title">
                <h1>标题</h1>
                <input type="text" placeholder="请输入笔记标题" class="ipt-padding">
            </div>
            <div class="content">
                <h1>内容</h1>
                <el-input type="textarea" :rows="15" placeholder="请输入笔记内容" v-model="textarea">
                </el-input>
            </div>
            <button class="btn">发布</button>
        </div>
        <div>
            <quillEditor></quillEditor>
        </div>

    </div>
</template>

<script>
    import Head from '../components/Head'
    import 'quill/dist/quill.core.css'
    import 'quill/dist/quill.snow.css'
    import 'quill/dist/quill.bubble.css'

    import { quillEditor } from 'vue-quill-editor'


    export default {
        data() {
            return {
                textarea: '',

            }
        },
       components:{
           Head,
           quillEditor
       }
    }
</script>

<style scoped lang="less">
    .box{
        width: 67%;

        margin: 50px auto;
        background-color: #fff;
    }
    .title{
        width: 100%;
        padding: 15px;
    }
    .title h1{
        font-size: 24px;
    }
    .title input{
        width: 95%;
        height: 40px;
        box-sizing: border-box;
        border: 1px solid #f1f1f1;
        outline: none;
        font-size: 18px;
        margin-top: 10px;
        padding: 12px;
        border-radius: 4px;
    }
    .content{
        width: 95%;
        padding: 15px;
    }
    .content h1{
        font-size: 24px;
        margin-bottom: 15px;
    }
    .btn{
        width: 100px;
        height: 40px;
        border: none;
        border-radius: 4px;
        background: #409dee;
        color: #fff;
        /*margin-top: 100px;*/
        margin-bottom: 30px;
        margin-left: 15px;
        outline: none;
    }
</style>