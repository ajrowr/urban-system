/* eslint-disable */
import Vue from 'vue'



Vue.component('s_grid', {
    props: ['disposition', 'id'],
    template: '<div class="ui grid" :class="disposition" :id="id"><slot></slot></div>'
})

Vue.component('s_row', {
    props: ['disposition', 'id'],
    template: '<div class="row" :class="disposition" :id="id"><slot></slot></div>'
})

Vue.component('s_col', {
    props: ['disposition', 'id'],
    template: '<div class="column" :class="disposition" :id="id"><slot></slot></div>'
})

Vue.component('s_divider', {
    props: ['disposition', 'id'],
    template: '<div class="ui divider" :class="disposition" :id="id"><slot></slot></div>'
})

Vue.component('s_label', {
    props: ['disposition', 'id'],
    template: '<div class="ui label" :class="disposition" :id="id"><slot></slot></div>'
})

Vue.component('s_menu', {
    props: ['disposition', 'id'],
    template: '<div class="ui menu" :class="disposition" :id="id"><slot></slot></div>'
})

Vue.component('t_nav_item', {
    props: ['active', 'title', 'link', 'to'],
    template: '<router-link active-class="active" class="item" :to="link" :exact="true"><slot></slot></router-link>'
})

Vue.component('t_page_title', {
    props: ['disposition', 'id'],
    template: '<s_row><h1 class="ui header" :class="disposition"><slot></slot></h1></s_row>'
})

Vue.component('s_table', {
    props: ['disposition', 'id'],
    template: '<table class="ui table" :class="disposition" :id="id"><slot></slot></table>'
})



