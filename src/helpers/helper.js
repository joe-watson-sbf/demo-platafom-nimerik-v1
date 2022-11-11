


export const getImage = (name, extension) => {
    const imageSrc = require(`../assets/images/${name}.${extension}`);
    return imageSrc;
}


export const getAudio = (name, ext) => {

    const extension = ext || 'mp3';
    const audioSrc = require(`../assets/audio/${name}.${extension}`);
    return audioSrc;
}