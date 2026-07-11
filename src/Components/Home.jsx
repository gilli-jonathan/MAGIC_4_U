// import { magicPic } from "../data/magicPic"
// import { useState } from "react"

export default function Home() {

    const magicPic = [
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

    const magicCards = [
        {
            idCard: 1,
            valoreBinario: 1,
            immagini: [
                { id: 1, img: '/Albero.svg' },
                { id: 3, img: '/Caffe.svg' },
                { id: 5, img: '/Chiave.svg' },
                { id: 7, img: '/Fiore.svg' },
                { id: 9, img: '/Macchina_.svg' },
                { id: 11, img: '/Nuvole.svg' },
                { id: 13, img: '/Palla.svg' },
                { id: 15, img: '/Teschio.svg' }
            ]
        },
        {
            idCard: 2,
            valoreBinario: 2,
            immagini: [
                { id: 2, img: '/Barca.svg' },
                { id: 3, img: '/Caffe.svg' },
                { id: 6, img: '/Cuore.svg' },
                { id: 7, img: '/Fiore.svg' },
                { id: 10, img: '/Mela.svg' },
                { id: 11, img: '/Nuvole.svg' },
                { id: 14, img: '/Palloncino.svg' },
                { id: 15, img: '/Teschio.svg' }
            ]
        },
        {
            idCard: 3,
            valoreBinario: 4,
            immagini: [
                { id: 4, img: '/Candela.svg' },
                { id: 5, img: '/Chiave.svg' },
                { id: 6, img: '/Cuore.svg' },
                { id: 7, img: '/Fiore.svg' },
                { id: 12, img: '/Orologio.svg' },
                { id: 13, img: '/Palla.svg' },
                { id: 14, img: '/Palloncino.svg' },
                { id: 15, img: '/Teschio.svg' }
            ]
        },

        {
            idCard: 4,
            valoreBinario: 8,
            immagini: [
                { id: 8, img: '/Lampadina.svg' },
                { id: 9, img: '/Macchina_.svg' },
                { id: 10, img: '/Mela.svg' },
                { id: 11, img: '/Nuvole.svg' },
                { id: 12, img: '/Orologio.svg' },
                { id: 13, img: '/Palla.svg' },
                { id: 14, img: '/Palloncino.svg' },
                { id: 15, img: '/Teschio.svg' }
            ]
        }
    ];


    return (
        <>
            <div>
                <ul className="flex flex-wrap" >
                    {magicPic.map(p => (
                        <li key={p.id}>
                            <img className="h-30" src={p.img} alt="" />
                        </li>
                    ))}
                </ul>

                <hr />

                <div className="flex flex-wrap card-daddy" >

                </div>



            </div>

        </>
    )
}