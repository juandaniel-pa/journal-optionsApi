<template>
    <button class="btn btn-primary d-flex justify-content-center">
        <i 
        class=" fa fa-2x align-self-center" 
        :class="icon"></i>
    </button>
</template>

<script>
//fa-plus

export default {
    props: {
        icon: {
            type: String,
            default: 'fa-plus'
        }
    },

    
}
</script>




<style lang="scss" scoped>
    button {
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 60px;
        height: 60px;
        border-radius: 100%;
    }
</style>