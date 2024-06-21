'use client'

export default function ModalComponent(props: { chara: any; close: any }) {
    if (!props.chara) return null;

    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-y-auto">
                <div className="relative bg-white p-6 rounded-lg max-w-lg w-full max-h-screen overflow-y-auto flex flex-col">
                    <button className="absolute top-2 right-2 text-black bg-white rounded-full p-0 text-2xl" onClick={props.close}>&times;</button>
                    <img src={props.chara.image} alt={props.chara.name} className="w-full md:w-full h-[200px] md:h-[480px] object-cover mb-4 md:mb-0 rounded-[10px] md:mr-4 mt-3 "/>
                    <div className="flex flex-col md:flex-row items-center mt-4">
                        <div className="flex flex-col items-start">
                            <h2 className="text-4xl font-bold mb-4">{props.chara.name}</h2>
                            <p className="font-semibold text-md">{props.chara.alive === true ? "Status: Alive" : "Status: Dead"}</p>
                            <p className="font-semibold text-md">Gender: {props.chara.gender}</p>
                            <p className="font-semibold text-md">House: {props.chara.house}</p>
                            <p className="font-semibold text-md">Hair Color: {props.chara.hairColour}</p>
                            <p className="font-semibold text-md">Date of Birth: {props.chara.dateOfBirth}</p>
                            <p className="font-semibold text-md">Species: {props.chara.species}</p>
                            <div>
                                <p className="font-semibold text-md">Wands:</p>
                                <ul className="list-disc ml-5">
                                    <li>Core: {props.chara.wand?.core}</li>
                                    <li>Length: {props.chara.wand?.length}</li>
                                    <li>Wood: {props.chara.wand?.wood}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}