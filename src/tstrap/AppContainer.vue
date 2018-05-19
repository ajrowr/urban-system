/* eslint-disable */
<!-- App developer shouldn't need to change this -->
<template>
<div id="app-ui">
    <s_menu disposition="inverted huge borderless fixed fluid">
        <a class="header item">{{mastheadTitle}}</a>
        <div class="right menu">
            <!-- <div class="item">
                <div class="ui small input">
                    <input placeholder="Search..." />
                </div>
            </div> -->
            <t_nav_item v-for="navitem in navigation.topbar" :link="navitem.module.path" :key="navitem.module.path">{{navitem.label}}</t_nav_item>
        </div>
    </s_menu>

<!-- Left-hand sidebar menu -->
    <s_grid id="app">
        <s_row>
            <s_col id="sidebar">
                <s_menu disposition="secondary vertical fluid">
                    <t_nav_item v-for="navitem in navigation.sidebar" :link="navitem.module.path" :key="navitem.module.path">{{navitem.label}}</t_nav_item>

                    <s_divider disposition="hidden" />

                    <!-- <t_nav_item link="/export">Data Import &amp; Export</t_nav_item> -->
                    <!-- <t_nav_item link="/macos">Mac OS</t_nav_item> -->
                    <!-- <t_nav_item link="/linux">Linux</t_nav_item> -->
                    <!-- <t_nav_item link="/windows">Windows</t_nav_item> -->

                </s_menu>
            </s_col>

            <s_col id="content">
                <router-view />
                
            </s_col>
        </s_row>
    </s_grid>

</div>
</template>


<script>
/* eslint-disable */    
    import { config as appconfig, api, navigation as appnavigation } from '../Application'
    // let M = {label: 'test', module: {path: '/test'}};
    // let appnavigation = {
    //     topbar: [M, M],
    //     sidebar: [M, M]
    // };
export default {
  name: 'AppContainer',
    
    data () {
        return this._model;
    },
    
    beforeCreate () {
        let $ = this;
        $._model = {
            pageTitle: appconfig.pageTitle || 'Untitled Application',
            mastheadTitle: appconfig.mastheadTitle || appconfig.pageTitle || 'Untitled Application',
            navigation: appnavigation,
            monitor: {}
        };
        window.document.title = $._model.pageTitle;
    },
    
    mounted () {
        // this._model.monitor = monitor;
    },
    
    beforeDestroy () {
    }
    
    
}
</script>

<style>
/*    @import "@semantic-ui-css/semantic.css";*/
#app {
  font-family: 'system-ui', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
/*  margin-top: 60px;*/
}


table.system_statuses {
    font-size: 12pt;
    font-weight: normal;
    text-align: left;
/*    list-style: none;*/
    padding-left: 1ex;
}

/*table.system_statuses tr td {
    margin-top: 1.3ex;
    margin-bottom: 1.3ex;

}
*/

table.system_statuses tr td.trafficlight {
/*    padding: 0.5ex;*/
    font-size: 9pt;
    height: 3em;
    background-color: white;
    border-radius: 1.5em;
    width: 3em;
    text-align: center;
}

table.system_statuses tr.status_ok {
/*    color: green;*/
}
table.system_statuses tr.status_ok td.trafficlight {
    background-color: green;
    color: white;
}

table.system_statuses tr.status_warning {
/*    color: orange;*/
}
table.system_statuses tr.status_warning td.trafficlight {
    background-color: orange;
    color: white;
}

table.system_statuses tr.status_error {
/*    color: red;*/
}
table.system_statuses tr.status_error td.trafficlight {
    background-color: red;
    color: white;
}

table.system_statuses tr.status_unknown {
/*    color: gray;*/
}
table.system_statuses tr.status_unknown td.trafficlight {
    background-color: gray;
    color: white;
}


table.system_statuses tr.status_hidden {
    visibility: hidden;
}


body {
  display: relative;
}

#sidebar {
  position: fixed;
  top: 51.8px;
  left: 0;
  bottom: 0;
  width: 18%;
  background-color: #f5f5f5;
  padding: 0px;
}
#sidebar .ui.menu {
  margin: 2em 0 0;
  font-size: 16px;
}
#sidebar .ui.menu > a.item {
  color: #337ab7;
  border-radius: 0 !important;
}
#sidebar .ui.menu > a.item.active {
  background-color: #337ab7;
  color: white;
  border: none !important;
}
#sidebar .ui.menu > a.item:hover {
  background-color: #4f93ce;
  color: white;
}


#content {
  margin-left: 19%;
  width: 81%;
  margin-top: 3em;
  padding-left: 3em;
  float: left;
}
#content > .ui.grid {
  padding-right: 4em;
  padding-bottom: 3em;
}
#content h1 {
  font-size: 36px;
}
#content .ui.divider:not(.hidden) {
  margin: 0;
}
#content table.ui.table {
  border: none;
}
#content table.ui.table thead th {
  border-bottom: 2px solid #eee !important;
}

</style>
