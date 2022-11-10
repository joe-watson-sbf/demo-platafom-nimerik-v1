


export const getImage = (name, extension) => {
    const imageSrc = require(`../assets/images/${name}.${extension}`);
    return imageSrc;
}


export const getAudio = (name) => {
    const audioSrc = require(`../assets/audio/${name}.mp3`);
    return audioSrc;
}