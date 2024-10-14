var app = Vue.createApp({
    data()
    {
        return{
            count:0,
            msg:'Welcome To Vue Js Tutorial',
            tutorialinfo:{
                name:"Mamunur Rashid Vue Js Tutorial",
                link:'https://www.youtube.com/@rimonmath'
            },
            htmlcode:'<a href="https://www.youtube.com/@rimonmath">Vue Js Tutorial</a>'
        };
    },
    methods:{
        getCurrentTime()
        {
            return new Date();
        },
        Increment()
        {
            this.count++;
        },
        Decrement()
        {
            this.count--;
        }
    }
});
app.mount("#app");