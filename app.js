var app = Vue.createApp({
    data()
    {
        return{
            msg:'Welcome To Vue Js Tutorial',
            tutorialinfo:{
                name:"Mamunur Rashid Vue Js Tutorial",
                link:'https://www.youtube.com/@rimonmath'
            },
            htmlcode:'<a href="https://www.youtube.com/@rimonmath">Vue Js Tutorial</a>'
        };
    }
});
app.mount("#app");