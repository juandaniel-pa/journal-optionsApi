export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(), //12434234
            date: new Date().toDateString(), // sat 23, junio,
            text: 'lorem ipsum askldnoqnwdlkaskd asdoqporj mbmppweirdnasd',
            picture: null, //https://
        },
        {
            id: new Date().getTime() + 1000, //12434234
            date: new Date().toDateString(), // sat 23, junio,
            text: 'gdppdfgio asdnjasdnja akjsdlkaksdnlasn ',
            picture: null, //https://
        },
        {
            id: new Date().getTime() - 2000, //12434234
            date: new Date().toDateString(), // sat 23, junio,
            text: 'asdasdasd gfdfgjasdkjasd klklklwef ',
            picture: null, //https://
        },
    ]


}) 