


export const getImage = (name, extension) => {
    const imageSrc = require(`../assets/images/${name}.${extension}`);
    return imageSrc;
}