<template>
    <div id="manageBlogEdit">
        <editor width="90%" height="100%"></editor>
    </div>
</template>
<script>
   import editor from '../bases/editormd.vue'

    export default {
   	    components:{
   	    	editor
        }
    }
</script>
<style>
    #manageBlogEdit{
        width:100%;
        height:100%;
    }
</style>