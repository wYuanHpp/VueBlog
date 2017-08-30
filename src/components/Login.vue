<template>
    <div id="login_wrap">
        <h2>后台管理</h2>
        <form class="form_wrap">
            <input type="text" title="">
            <input type="password" title="">
        </form>
    </div>
</template>
<script>
    export default {

    }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
    @import '../assets/theme/theme.scss';
    #login_wrap{
        width:400px;
        height:300px;
        margin:auto;
        margin-top: 100px;
        background: $white;
        h2 {
            text-align: center;
        }
    }
    
    .form_wrap{

        input {
            display: block;
            margin:auto;

        }
    }
    


</style>