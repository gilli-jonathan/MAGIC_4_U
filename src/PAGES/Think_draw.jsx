import { useState, useEffect } from "react";


export default function ThinkDraw() {
    const [somma, setSomma] = useState(0);
    // 1. Nuovo stato: un array per ricordare quali card abbiamo già cliccato
    const [cardCliccate, setCardCliccate] = useState([]);

    const [datiMagici, setDatiMagici] = useState([]);

    const [cardsh, setCardsh] = useState([]);


    const magicPic = [
        { id: 1, img: '/Albero.svg' },
        { id: 2, img: '/Barca.svg' },
        { id: 3, img: '/Caffe.svg' },
        { id: 4, img: '/Candela.svg' },
        { id: 5, img: '/Chiave.svg' },
        { id: 6, img: '/Cuore.svg' },
        { id: 7, img: '/Fiore.svg' },
        { id: 8, img: '/Lampadina.svg', },
        { id: 9, img: '/Macchina_.svg', },
        { id: 10, img: '/Mela.svg' },
        { id: 11, img: '/Nuvole.svg' },
        { id: 12, img: '/Orologio.svg' },
        { id: 13, img: '/Palla.svg' },
        { id: 14, img: '/Palloncino.svg' },
        { id: 15, img: '/Teschio.svg' }
    ];


    const numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    function shuffleArray(array) {

        for (let i = array.length - 1; i > 0; i--) {
            // Genera un indice casuale da 0 a i (incluso)
            const j = Math.floor(Math.random() * (i + 1));

            // Scambia l'elemento corrente (i) con l'elemento casuale (j)
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    const numeriCasuali = shuffleArray(numeri)


    useEffect(() => {
        const mergedData = magicPic.map((immagini, i) => {

            const numerosegreto = numeriCasuali[i]

            return {
                ...immagini,
                valoreSegreto: numerosegreto
            }

        })
        console.log(mergedData);

        setDatiMagici(mergedData)
    }, [])


    const magicCards = [
        {
            idCard: 1, valoreBinario: 1,
            immagini: [
                { valoreSegreto: 1 }, { valoreSegreto: 3 }, { valoreSegreto: 5 }, { valoreSegreto: 7 }, { valoreSegreto: 9 }, { valoreSegreto: 11 }, { valoreSegreto: 13 }, { valoreSegreto: 15 }
            ]
        },
        {
            idCard: 2, valoreBinario: 2,
            immagini: [
                { valoreSegreto: 2 }, { valoreSegreto: 3 }, { valoreSegreto: 6 }, { valoreSegreto: 7 }, { valoreSegreto: 10 }, { valoreSegreto: 11 }, { valoreSegreto: 14 }, { valoreSegreto: 15 }
            ]
        },
        {
            idCard: 3, valoreBinario: 4,
            immagini: [
                { valoreSegreto: 4 }, { valoreSegreto: 5 }, { valoreSegreto: 6 }, { valoreSegreto: 7 }, { valoreSegreto: 12 }, { valoreSegreto: 13 }, { valoreSegreto: 14 }, { valoreSegreto: 15 }
            ]
        },
        {
            idCard: 4, valoreBinario: 8,
            immagini: [
                { valoreSegreto: 8 }, { valoreSegreto: 9 }, { valoreSegreto: 10 }, { valoreSegreto: 11 }, { valoreSegreto: 12 }, { valoreSegreto: 13 }, { valoreSegreto: 14 }, { valoreSegreto: 15 }
            ]
        }
    ];


    const shuffleCard = magicCards.immagini







    // Variabile derivata per capire se il gioco è finito
    const giocoFinito = cardCliccate.length === 4;

    // Trova l'immagine corrispondente alla somma finale
    // Se la somma è 0 (l'utente non ha ancora finito o ha imbrogliato dicendo 4 "No"), restituisce undefined
    const immagineScelta = datiMagici.find(p => p.valoreSegreto === somma);





    return (
        <>
            <div>
                <h1 className="text-xl font-bold my-4">
                    think any picture:
                </h1>
                <ul className="flex flex-wrap">
                    {magicPic.map(p => (
                        <li key={p.id}>
                            <img className="h-30" src={p.img} alt="" />
                        </li>
                    ))}
                </ul>

                <hr className="my-4" />

                <h2 className="text-xl font-bold my-4">can you see you picture? </h2>

                {!giocoFinito && (
                    <div className="flex gap-4 card-daddy">

                        {magicCards.map(c => {
                            // 2. Logica: Controlliamo se questa specifica card è già nell'array di quelle cliccate
                            const isDisabilitata = cardCliccate.includes(c.idCard);

                            return (
                                <div key={c.idCard} className="border-2 p-4">
                                    <ul className="flex flex-wrap mb-4">
                                        {c.immagini.map(p => (
                                            <li key={p.id}>
                                                <img className="h-30" src={p.img} alt="" />
                                            </li>
                                        ))}
                                    </ul>

                                    {/* 3. Tailwind: usiamo disabled:opacity-50 e disabled:cursor-not-allowed */}
                                    <button
                                        disabled={isDisabilitata}
                                        className="bg-green-600 hover:bg-green-700 text-white p-2 m-1 rounded disabled:opacity-50 disabled:bg-gray-400 disabled:cursor-not-allowed"
                                        onClick={() => {
                                            setSomma((prev) => prev + c.valoreBinario);
                                            // Aggiungiamo l'ID della card all'array per bloccarla
                                            setCardCliccate((prev) => [...prev, c.idCard]);
                                        }}
                                    >
                                        YESS
                                    </button>

                                    <button
                                        disabled={isDisabilitata}
                                        className="bg-red-700 hover:bg-red-800 text-white p-2 m-1 rounded disabled:opacity-50 disabled:bg-gray-400 disabled:cursor-not-allowed"
                                        onClick={() => {
                                            // Cliccando "No", non sommiamo nulla, ma blocchiamo comunque la card
                                            setCardCliccate((prev) => [...prev, c.idCard]);
                                        }}
                                    >
                                        NOPE
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                )}

                {giocoFinito && immagineScelta && (
                    <div className="mt-8 text-center border-4 p-8 ">

                        <p className="text-xl mb-4">your picture is:</p>

                        <div className="flex justify-center">
                            <img
                                className="h-48 w-48 object-contain"
                                src={immagineScelta.img}
                                alt="La tua carta"
                            />
                        </div>

                        <button
                            className="mt-8 bg-gray-600 text-white font-bold py-3 px-6"
                            onClick={() => {
                                // Resetta il gioco per un'altra magia
                                setSomma(0);
                                setCardCliccate([]);
                            }}
                        >
                            AGAIN
                        </button>
                    </div>
                )}




            </div>
        </>
    );
}