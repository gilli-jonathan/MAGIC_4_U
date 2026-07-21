import { useState, useEffect } from "react";
import { magicPic, basiCards, numeri, shuffleArray } from "../data/ThinkUtils";


export default function Home() {

    const [pic, SetPic] = useState(magicPic)//stato che gestisce l'array con le immagini

    useEffect(() => {
        const picSecretValue = magicPic.map((img, i) => {
            const randomNumbers = shuffleArray(numeri)//Randomizzo i numeri da 1 a 15

            const secretNumber = randomNumbers[i]
            //Durante il map assoccio la posizone dei 2 array e gli unisco nel return creando una nuova key dell'oggetto
            return {
                ...img, secretValue: secretNumber
            }
        })

        console.log(picSecretValue);
        SetPic(picSecretValue)

    }, [])

    return (

        <>
            <div className="max-w-6xl mx-auto text-gray-800">
                {/* header con il titolo */}
                <header className="mb-12 text-center md:text-left">
                    <h1 className="text-3xl md:text-5xl tracking-tight mb-2 font-bold">
                        MAGIC :<span className="font-light" > Think a Draw</span>
                    </h1>
                </header>

                {/* prime istruzioni */}
                <section className="text-center">
                    <div className="space-y-4  text-base md:text-lg leading-relaxed font-light">
                        <p>
                            Guarda questi disegni per qualche secondo e scegli quello che ti
                            piace di più.. forse proprio uno di questi disegni ha rapito subito la tua attenzione!
                        </p>
                    </div>
                </section>

                {/* IL CONTENITORE "WHITEBOARD" - Minimal e pulito */}
                <div className="bg-white border border-gray-200 rounded-3xl p-6 md:p-10 my-6 shadow-sm max-w-5xl mx-auto">
                    <ul className="grid grid-cols-3 md:grid-cols-5 gap-2 md:gap-4">
                        {magicPic.map((p) => (
                            <li
                                key={p.id}
                                className="flex items-center justify-center aspect-square"
                            >
                                <img
                                    className="w-full h-full max-h-[150px] max-w-[150px] object-contain opacity-95"
                                    src={p.img}
                                    alt="Disegno segreto"
                                />
                            </li>
                        ))}
                    </ul>
                </div>

                <section className="text-center">
                    <div className="space-y-4  text-base md:text-lg leading-relaxed font-light">

                        <p>
                            Hai già scelto un disegno? Perfetto. Quello sarà il tuo <strong>disegno segreto</strong>,
                            fissalo bene in mente! Quando sei pronto clicca il bottone qui sotto: con sole 4 domande scoprirò
                            esattamente a quale disegno stai pensando!
                        </p>
                    </div>
                </section>
            </div>

        </>
    );
}