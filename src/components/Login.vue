<template>
    <div id="login">
        <div class="login_wrap">
            <h2>后台管理</h2>
            <form class="form_wrap">
                <input type="text" title="">
                <input type="password" title="">
                <button >登录</button>
            </form>
        </div>
    </div>
</template>
<script>
    export default {

    }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
    @import '../assets/theme/theme.scss';
    #login {
        height : 100%;
        width : 100%;
        position: absolute;
        background: radial-gradient(ellipse at center,transparent 0,rgba(0,0,0,.8) 100%);
    }
    .login_wrap{
        width:500px;
        height:350px;
        margin:auto;
        margin-top: 100px;
        background: $black-bg;
        border-radius: 10px;
        h2 {
            padding-top:50px;
            text-align: center;
            color: $white;
        }
    }

    .form_wrap{
        input {
            display: block;
            outline: none;
            margin: 20px auto;
            width:300px;
            height:20px;
            padding:8px 10px;
            line-height:20px;
            font-size:16px;

        }
        button {
            display: block;
            @include btn-default;
            margin:auto;
        }
    }



</style>