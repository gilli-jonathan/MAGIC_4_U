import { useState, useEffect } from "react";


export default function ThinkDraw() {
    const [somma, setSomma] = useState(0);
    // 1. Nuovo stato: un array per ricordare quali card abbiamo già cliccato
    const [cardCliccate, setCardCliccate] = useState([]);

    const [datiMagici, setDatiMagici] = useState([]);

    const [cardsh, setCardsh] = useState([]);



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