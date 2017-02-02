
/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the body of the page. From here, you may begin adding components to
 * the application, or feel free to tweak this setup for your needs.
 */
//

var MyComponent = require('./components/VueTypeahead.vue')

Vue.component('vueTypeahead', MyComponent);

const app = new Vue({
    el: '#app',
    data: function() {
        return{
            label:'',
            value: '',
            value1: '',
            myTemplate: '<div><h3>{{team}}</h3><h4>Custom Template</h4></div>',
            localValues: ['Dhaka', 'Rangpur', 'Rajshahi', 'Sylhet', 'Khulna']
        }
    },
    methods: {
        done: function(data) {
            console.log(data);
        }
    }
});
