

import { createApp } from 'vue'
// import App from './App.vue'
// import App from './App01.vue'
// import App from './App02.vue'
import App from './App03.vue'

const app=createApp(App)
app.directive('highlight',{
    mounted(el,bingding){
        debugger
        let delay=0;
        if(bingding.modifiers.delayed){
            delay=3000
        }
        if(bingding.modifiers.blink){
            let mainColor=bingding.value.mainColor;
            let secondColor=bingding.value.secondColor;
            let currentColor=mainColor;
            setTimeout(() => {
                setInterval(() => {
                    currentColor==secondColor?(currentColor=mainColor):(currentColor=secondColor)
                    if(bingding.arg==='background'){
                        el.style.backgroundColor=currentColor;
                    }
                    else{
                        el.style.color=currentColor;
                    }
                }, bingding.value.delay);
            }, delay);
        }
        else{
            setTimeout(() => {
                if(bingding.arg==='background'){
                    el.style.backgroundColor=bingding.value.mainColor;
                }
                else{
                    el.style.color=bingding.value.mainColor;
                }
            }, delay);
        }
        
    }
})
app.mount('#app')
