<template>
    <div>
        <!-- Your content here -->
    </div>
</template>

<script>

function componentModel () {
    return {
        /* Declare the structure of your model here. */
    }
}

/* NB: Be sure and define methods, computed and filters using 
        functionname () {
            ...
        }
   notation, because () => {} notation won't get a `this`. */

export default {
    
    data () {
        return this._model;
    },
        
    methods : {
    },
    
    computed : {
    },
    
    filters : {
    },
    
    beforeCreate () {
        /* If using Vuex, the state store will be injected as this.$store */
        this._model = componentModel();
    },
    
    mounted () {
        
    },
    
    beforeDestroy () {
        
    },
        
}

</script>
    
<style scoped>
    
</style>

