/* eslint-disable */


const config = {
    pageTitle: null,
    mastheadTitle: null,
    apiRoot: 'http://localhost:9999/'
}

/* Wrap components in a bit of sugar to turn them into modules that allow
   self-configuration of navigation and routing.
*/
let modules = {
    Homepage: {
        path: '/',
        name: 'homepage',
        component: require('@/components/Homepage').default,
    }
}

/* Routing URLs to modules is order-sensitive, so define the order here. */
let moduleRouteOrder = [modules.Homepage]

/* Modular navigation lets you plug-and-play modules. */
let navigation = {
    topbar: [
        {module: modules.Homepage, label: 'Home'}
    ],
    sidebar: [
        {module: modules.Homepage, label: 'Home'}
    ]
}

export { config, modules, moduleRouteOrder, navigation }