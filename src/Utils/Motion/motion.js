import { animate } from "framer-motion"

export const fadeIn = {
initial:{
    y:-200,
    opacity:0,
    // rotate:"90deg"
},
animate:{
    y:0,
    opacity:1,
    // rotate:"0deg"
}
}

export const fadeleft ={
    initial :{
        x : -200,
        opacity : 0,
    },
    animate :{
        x : 0 ,
        opacity :1 
    }
}
export const faderight ={
    initial :{
        x : 100,
        opacity : 0,
    },
    animate :{
        x : 0 ,
        opacity :1 
    }
}
export const fadeleftMat ={
    initial :{
        x : -10,
        opacity : .5,
    },
    animate :{
        x : 0 ,
        opacity :1 
    }
}
export const faderightMat ={
    initial :{
        x : 10,
        opacity : .5,
    },
    animate :{
        x : 0 ,
        opacity :1 
    }
}
export const fadeInOurClient = {
    initial:{
        y:-80,
        opacity:0,
        // rotate:"90deg"
    },
    animate:{
        y:0,
        opacity:1,
        // rotate:"0deg"
    }
    }