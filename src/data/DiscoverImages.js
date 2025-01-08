
const DiscoverEventsData = [
    {
        id: 1,
        discoverImage:'traditional2.jpg',
        imageTitle:'Cultural Dance',
        eventdate:'December 22',
        eventLocation:'lakeside,pokhara',
        eventPrice:'Free',
        eventTime:'7pm onwards',
    },
    {
        id:crypto.randomUUID(),
        discoverImage:'concert1.jpg',
        imageTitle:'Cultural Dance',
        eventdate:'December 22',
        eventLocation:'lakeside,pokhara',
        eventPrice:'Free',
    },
    {
        id:crypto.randomUUID(),
        discoverImage:'concert1.jpg',
        imageTitle:'Cultural Dance',
        eventdate:'December 22',
        eventLocation:'lakeside,pokhara',
        eventPrice:'Free',
    },
    {
        id:crypto.randomUUID(),
        discoverImage:'traditional2.jpg',
        imageTitle:'Cultural Dance',
        eventdate:'December 22',
        eventLocation:'lakeside,pokhara',
        eventPrice:'Free',
    },
    {
        id:crypto.randomUUID(),
        discoverImage:'concert1.jpg',
        imageTitle:'Cultural Dance',
        eventdate:'December 22',
        eventLocation:'lakeside,pokhara',
        eventPrice:'Free',
    },
    {
        id:crypto.randomUUID(),
        discoverImage:'traditional2.jpg',
        imageTitle:'Cultural Dance',
        eventdate:'December 22',
        eventLocation:'lakeside,pokhara',
        eventPrice:'Free',
    },
    {
        id:crypto.randomUUID(),
        discoverImage:'traditional2.jpg',
        imageTitle:'Cultural Dance',
        eventdate:'December 22',
        eventLocation:'lakeside,pokhara',
        eventPrice:'Free',
    },
    {
        id:crypto.randomUUID(),
        discoverImage:'traditional2.jpg',
        imageTitle:'Cultural Dance',
        eventdate:'December 22',
        eventLocation:'lakeside,pokhara',
        eventPrice:'Free',
    },
   
]

const getDiscoverEventsData = () => {
    return DiscoverEventsData
}
export {getDiscoverEventsData};


function getDiscoverImages(image){
    return new URL(`../assests/Discover_images/${image}`,import.meta.url).href
}
export {getDiscoverImages}