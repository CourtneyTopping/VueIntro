import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js'

//set up a viewmodel and use the Vue framework
const my_vm = (() => {
// VARIABLES, or DEINFE COMPONENTS... whatever

let vue_VM = new Vue({
    data: {
message: "hello from vue",

collection: [
    {name: "Joe", role: "Prof"},
    {name: "John", role: "Prof"},
    {name: "Jarrod", role: "Prof"}
]
    },
    
    methods: {
        logClicked() {
            console.log('clicked on an element');
        }
    }
}).$mount("#app");
})();