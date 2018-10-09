<template>
    <div>
        <!-- Top level element, required by vue -->
    </div>
</template>

<script>

let $m = {
    /* Model */
    /* Declare all your model attribs in here, even if 
    you're not using them yet, or Vue will get cross */
};
let $s = null;  /* Vuex store placeholder */

export default {
    
    data: () => $m,
    
    methods : {
    },
    
    computed : {
    },
    
    filters : {
    },
    
    beforeCreate () {
        $s = this.$store;
    },
    
    mounted () {
    },
    
    beforeDestroy () {
    },
}

</script>
    
<style scoped>
    
</style>

