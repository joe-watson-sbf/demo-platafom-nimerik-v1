export const imageUrl1 = 'https://i.picsum.photos/id/20/3670/2462.jpg?hmac=CmQ0ln-k5ZqkdtLvVO23LjVAEabZQx2wOaT4pyeG10I'
const imageUrl2 = 'https://plus.unsplash.com/premium_photo-1663108237864-da30e09faab8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
const imageUrl3 = 'https://images.unsplash.com/photo-1602542165232-0b7f56fe660a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3032&q=80'



export const modelImage = 'assets/images/ananas.png'
export const baseURL = '/demo-platafom-nimerik-v1'

export const dataEgzesisLeti = [
    {
        title: 'Klike sou yon imaj ki kòmanse ak son [ A, a]',
        opsyon: 'a',
        etap: 'DEKOUVÈT',
        audio: "etk1",
        akBoul: false,
        akAudio: true,
        id: 1,
        dataList: [
            {
                id: 1,
                name: "ananas",
                akImaj: true,
                description: "lorem ipsum",
                correctOption: (name, x) => name.startsWith(x)
            },
            {
                id: 2,
                name: "aplikate",
                akImaj: true,
                description: "lorem ipsum",
                correctOption: (name, x) => name.startsWith(x)
            },
            {
                id: 3,
                name: "pilon",
                akImaj: true,
                description: "lorem ipsum",
                correctOption: (name, x) => name.startsWith(x)
            },
            {
                id: 4,
                name: "aranso",
                akImaj: true,
                description: "lorem ipsum",
                correctOption: (name, x) => name.startsWith(x)
            },
            {
                id: 5,
                name: "avyon",
                akImaj: true,
                description: "lorem ipsum",
                correctOption: (name, x) => name.startsWith(x)
            },
            {
                id: 6,
                name: "paj",
                akImaj: true,
                description: "lorem ipsum",
                correctOption: (name, x) => name.startsWith(x)
            },
        ]
    },
    {
        title: 'Klike sou tout mo ki gen lèt [ A, a ] nan yon',
        opsyon: 'a',
        audio: "etk1",
        etap: 'RANFÒSMAN',
        akBoul: false,
        akAudio: false,
        id: 2,
        dataList: [

            {
                id: 1,
                name: "digo",
                akImaj: false,
                description: "lorem ipsum",
                correctOption: (name, x) => name.includes(x)
            },
            {
                id: 2,
                name: "machin",
                akImaj: false,
                description: "lorem ipsum",
                correctOption: (name, x) => name.includes(x)
            },
            {
                id: 3,
                name: "zonyon",
                akImaj: false,
                description: "lorem ipsum",
                correctOption: (name, x) => name.includes(x)
            },
            {
                id: 4,
                name: "aline",
                akImaj: false,
                description: "lorem ipsum",
                correctOption: (name, x) => name.includes(x)
            },
            {
                id: 5,
                name: "papye",
                akImaj: false,
                description: "lorem ipsum",
                correctOption: (name, x) => name.includes(x)
            },
            {
                id: 6,
                name: "jou",
                akImaj: false,
                description: "lorem ipsum",
                correctOption: (name, x) => name.includes(x)
            },
            {
                id: 7,
                name: "pale",
                akImaj: false,
                description: "lorem ipsum",
                correctOption: (name, x) => name.includes(x)
            },
            {
                id: 8,
                name: "malè",
                akImaj: false,
                description: "lorem ipsum",
                correctOption: (name, x) => name.includes(x)
            },
            {
                id: 9,
                name: "boyo",
                akImaj: false,
                description: "lorem ipsum",
                correctOption: (name, x) => name.includes(x)
            },
            {
                id: 10,
                name: "kòdenn",
                akImaj: false,
                description: "lorem ipsum",
                correctOption: (name, x) => name.includes(x)
            },
            {
                id: 11,
                name: "adwaz",
                akImaj: false,
                description: "lorem ipsum",
                correctOption: (name, x) => name.includes(x)
            },
            {
                id: 12,
                name: "falèz",
                akImaj: false,
                description: "lorem ipsum",
                correctOption: (name, x) => name.includes(x)
            },
        ]
    },
    {
        title: 'Touche bon wonn nan pou montre kote [ A, a ] ye nan non yo',
        etap: 'EVALYASYON',
        opsyon: 'a',
        akAudio: false,
        akBoul: true,
        audio: "etk1",
        id: 3,
        dataList: [

            {
                id: 1,
                name: "alimet",
                akImaj: true,
                description: "lorem ipsum",
                correctOption: (nom, index, son) => verifyeSilab(nom, index, son)
            },
            {
                id: 2,
                name: "anana2",
                akImaj: true,
                description: "lorem ipsum",
                correctOption: (nom, index, son) => verifyeSilab(nom, index, son)
            },
            {
                id: 3,
                name: "kalalou",
                akImaj: true,
                description: "lorem ipsum",
                correctOption: (nom, index, son) => verifyeSilab(nom, index, son)
            },
            {
                id: 4,
                name: "chokola",
                akImaj: true,
                description: "lorem ipsum",
                correctOption: (nom, index, son) => verifyeSilab(nom, index, son)
            },
            {
                id: 5,
                name: "pantalon",
                akImaj: true,
                description: "lorem ipsum",
                correctOption: (nom, index, son) => verifyeSilab(nom, index, son)
            }
        ]
    }
]

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




const syllableRegex = /[^aeiouy]*[aeiouy]+(?:[^aeiouy]*$|[^aeiouy](?=[^aeiouy]))?/gi;

function syllabify(words) {
    return words.match(syllableRegex);
}

const verifyeSilab = (nom, index, son) => {
    const arr = [nom].map(syllabify)[0]
    if (arr[index].includes('an')) {
        return false
    }
    return arr[index].includes(son)
}