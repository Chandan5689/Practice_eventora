
const IconsData = [
    {
        id:crypto.randomUUID(),
        IconImage:'music.png',
        title:'Music',
    },
    {
        id:crypto.randomUUID(),
        IconImage:'holidays.png',
        title:'Holidays',
    },
    {
        id:crypto.randomUUID(),
        IconImage:'hobbies.png',
        title:'Hobbies',
    },
    {
        id:crypto.randomUUID(),
        IconImage:'hobbies.png',
        title:'Hobbies',
    },
    {
        id:crypto.randomUUID(),
        IconImage:'hobbies.png',
        title:'Hobbies',
    },
    {
        id:crypto.randomUUID(),
        IconImage:'hobbies.png',
        title:'Hobbies',
    },
    {
        id:crypto.randomUUID(),
        IconImage:'hobbies.png',
        title:'Hobbies',
    },
    {
        id:crypto.randomUUID(),
        IconImage:'business.png',
        title:'business',
    },
    {
        id:crypto.randomUUID(),
        IconImage:'music.png',
        title:'music',
    },
    {
        id:crypto.randomUUID(),
        IconImage:'music.png',
        title:'music',
    },
    {
        id:crypto.randomUUID(),
        IconImage:'music.png',
        title:'music',
    },
    {
        id:crypto.randomUUID(),
        IconImage:'music.png',
        title:'music',
    },
    {
        id:crypto.randomUUID(),
        IconImage:'music.png',
        title:'music',
    },
    {
        id:crypto.randomUUID(),
        IconImage:'music.png',
        title:'music',
    },
   
]
const getIconsData = () =>{
    return IconsData
}
export {getIconsData}



function getIconsImage(name){
    return new URL(`../assests/Explore_icons/${name}`,import.meta.url).href
}

export {getIconsImage}