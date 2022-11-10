export const imageUrl1 = 'https://i.picsum.photos/id/20/3670/2462.jpg?hmac=CmQ0ln-k5ZqkdtLvVO23LjVAEabZQx2wOaT4pyeG10I'
const imageUrl2 = 'https://plus.unsplash.com/premium_photo-1663108237864-da30e09faab8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
const imageUrl3 = 'https://images.unsplash.com/photo-1602542165232-0b7f56fe660a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3032&q=80'

export const modelImage = 'assets/images/ananas.png'


export const dataEgzesisLeti = {
    title: 'Klike sou yon imaj ki kòmanse ak son ',
    opsyon: 'a',
    dataList: [

        {
            id: 1,
            name: "ananas",
            description: "lorem ipsum",
            correctOption: (name, x) => name.startsWith(x)
        },
        {
            id: 2,
            name: "aplikate",
            description: "lorem ipsum",
            correctOption: (name, x) => name.startsWith(x)
        },
        {
            id: 3,
            name: "pilon",
            description: "lorem ipsum",
            correctOption: (name, x) => name.startsWith(x)
        },
        {
            id: 4,
            name: "aranso",
            description: "lorem ipsum",
            correctOption: (name, x) => name.startsWith(x)
        },
        {
            id: 5,
            name: "avyon",
            description: "lorem ipsum",
            correctOption: (name, x) => name.startsWith(x)
        },
        {
            id: 6,
            name: "paj",
            description: "lorem ipsum",
            correctOption: (name, x) => name.startsWith(x)
        },
    ]
}

const matye = [
    {
        name: "Kominikasyon Kreyol",
        path: "kominikasyon-kreyol",
        image: imageUrl2
    },
    {
        name: "Communication francaise",
        path: "communication-francaise",
        image: imageUrl2
    },
    {
        name: "Matematik",
        path: "matematik",
        image: imageUrl2
    },
    {
        name: "Syans Sosyal",
        path: "syans-sosyal",
        image: imageUrl2
    },
    {
        name: "Syans esperimantal",
        path: "syans-esperimantal",
        image: imageUrl2
    },
]

const sekans = [
    {
        name: "Lèkti",
        path: "lekti",
        tan: 'Dire - 9 minit',
        image: imageUrl3
    },
    {
        name: "Òtograf",
        path: "otograf",
        tan: 'Dire - 5 minit',
        image: imageUrl3
    },
]



export const listKlasYo = () => {

    return { matye, sekans };
}

