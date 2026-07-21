// src/data/magicItems.js
export const magicPic = [
    { id: 1, img: '/Albero.svg' },
    { id: 2, img: '/Barca.svg' },
    { id: 3, img: '/Caffe.svg' },
    { id: 4, img: '/Candela.svg' },
    { id: 5, img: '/Chiave.svg' },
    { id: 6, img: '/Cuore.svg' },
    { id: 7, img: '/Fiore.svg' },
    { id: 8, img: '/Lampadina.svg' },
    { id: 9, img: '/Macchina_.svg' },
    { id: 10, img: '/Mela.svg' },
    { id: 11, img: '/Nuvole.svg' },
    { id: 12, img: '/Orologio.svg' },
    { id: 13, img: '/Palla.svg' },
    { id: 14, img: '/Palloncino.svg' },
    { id: 15, img: '/Teschio.svg' }
];

export const numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

export const basiCards = [
    { idCard: 1, valoreBinario: 1, secreti: [1, 3, 5, 7, 9, 11, 13, 15] },
    { idCard: 2, valoreBinario: 2, secreti: [2, 3, 6, 7, 10, 11, 14, 15] },
    { idCard: 3, valoreBinario: 4, secreti: [4, 5, 6, 7, 12, 13, 14, 15] },
    { idCard: 4, valoreBinario: 8, secreti: [8, 9, 10, 11, 12, 13, 14, 15] }
];

export function shuffleArray(array) {
    let newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}