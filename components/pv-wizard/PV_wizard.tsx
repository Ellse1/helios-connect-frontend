"use client";
import { useState } from "react"
import { useMemo } from "react"
import dynamic from 'next/dynamic'
import EConsumption from "./E_consumption"
import AgreementAndExplanation from "./AgreementAndExplanation";
import ContactAndExplanation from "./ContactAndExplanation";



export default function Wizard() {

    const Map = useMemo(() => dynamic(
        () => import('@/../components/pv-wizard/Map'),
        { 
          loading: () => <p>A map is loading</p>,
          ssr: false
        }
    ), [])


    const [isChildReady, setIsChildReady] = useState(true);
    const handleStatusChange = (status: boolean) => {
        setIsChildReady(status);
    }



    const [wizardStep, setCurrentStep] = useState<number>(0);

    return (

        <div>
            <div className="flex justify-center mt-5">
                {wizardStep === 0 && <AgreementAndExplanation />}
                {wizardStep === 1 && <Map onStatusChange={handleStatusChange} />}
                {wizardStep === 2 && <EConsumption onStatusChange={handleStatusChange} />}
                {wizardStep === 3 && <ContactAndExplanation onStatusChange={handleStatusChange} />}
            </div>


            
            {(isChildReady && wizardStep != 3) && (
            <div className="flex justify-center mt-5">
                <button className="px-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded" onClick={() => {setCurrentStep(wizardStep + 1); setIsChildReady(false) }}>Next</button>
            </div>
            )}
            {wizardStep == 3 && (
            <div className="flex justify-center mt-5">
                <button disabled={!isChildReady} className={`px-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled ${!isChildReady ? "cursor-not-allowed" : ""}`} onClick={() => {setCurrentStep(wizardStep + 1); setIsChildReady(false) }}>Show first results</button>
            </div>
            )}

        </div>

    )
}