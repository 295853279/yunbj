<template>
    <div>
        <Head></Head>
        <div class="box" >
            <div class="sousuo">
                <input type="text"  placeholder="请输入关键字..." class="ipt-padding">
                <button class="btn">搜索</button>
            </div>
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
                <div class="contents"  @click="$router.push('/details')">
                    <p>Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被 设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。 另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。 如果你想在深入学习 Vue 之前对它有更多了解，我们制作了一个视频，带您了解其核心概念和一个示例工程。 如果你已经是有经验的前端开发者，想知道 Vue 与其它库/框架有哪些区别，请查看对比其它框架。</p>
                </div>
            </div>
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

                <div class="contents" @click="$router.push('/details')">
                    <p>Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被 设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。 另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。 如果你想在深入学习 Vue 之前对它有更多了解，我们制作了一个视频，带您了解其核心概念和一个示例工程。 如果你已经是有经验的前端开发者，想知道 Vue 与其它库/框架有哪些区别，请查看对比其它框架。</p>
                </div>
            </div>
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

                <div class="contents" @click="$router.push('/details')">
                    <p>Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被 设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。 另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。 如果你想在深入学习 Vue 之前对它有更多了解，我们制作了一个视频，带您了解其核心概念和一个示例工程。 如果你已经是有经验的前端开发者，想知道 Vue 与其它库/框架有哪些区别，请查看对比其它框架。</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Head from '../components/Head'
    export default {
        components:{
            Head
        }
    }
</script>

<style scoped lang="less">
    .box{
        width: 68%;
        margin: 50px auto;
    }
    .sousuo{
        width: 100%;
        height: 50px;
    }
    .sousuo input{
        width: 89%;
        height: 42px;
        outline: none;
        border-radius: 3px;
        box-sizing: border-box;
        border: 1px solid #f1f1f1;
        padding: 8px;
    }
    .btn{
        width: 100px;
        height: 40px;
        border: none;
        outline: none;
        border-radius: 3px;
        box-sizing: border-box;
        background: #409dee;
        color: #fff;
    }
    .article{
        position: relative;
        left: 244px;
        width: 1025px;
        background: #fff;
    }
    .article img{
        cursor: pointer;
        padding: 15px 0 0 15px;
        width: 50px;
        height: 50px;
    }
    .title{
        position:relative;
        top: -56px;
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
        width: 900px;
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
        margin-top: -50px;
        padding: 15px 15px 15px 20px;
    }
</style>