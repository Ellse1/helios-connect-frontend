"use client";
import { useState } from "react"
import { useMemo } from "react"
import dynamic from 'next/dynamic'
import EConsumption from "./E_consumption"
import AgreementAndExplanation from "./AgreementAndExplanation";
import ContactAndExplanation from "./ContactAndExplanation";
import Results from "./Results";
import PrecisePVSystem from "./PrecisePVSystem";



export default function Wizard({promode = false}) {

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

            {(promode == false) && (
            <div className="flex justify-center mt-5">
                {wizardStep === 0 && <AgreementAndExplanation />}
                {wizardStep === 1 && <Map onStatusChange={handleStatusChange} />}
                {wizardStep === 2 && <EConsumption onStatusChange={handleStatusChange} />}
                {wizardStep === 3 && <ContactAndExplanation onStatusChange={handleStatusChange} />}
                {wizardStep === 4 && <Results />}
            </div>
            )}

            {(promode == true) && (
            <div className="flex justify-center mt-5">
                {wizardStep === 0 && <AgreementAndExplanation />}
                {wizardStep === 1 && <Map onStatusChange={handleStatusChange} />}
                {wizardStep === 2 && <PrecisePVSystem onStatusChange={handleStatusChange} />}
                {wizardStep === 3 && <EConsumption onStatusChange={handleStatusChange} />}
                {wizardStep === 4 && <ContactAndExplanation onStatusChange={handleStatusChange} />}
                {wizardStep === 5 && <Results />}
            </div>
            )}

            
            {(isChildReady && !promode && wizardStep != 3) || (isChildReady && promode && wizardStep != 4) && (
            <div className="flex justify-center mt-5">
                <button className="px-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded" onClick={() => {setCurrentStep(wizardStep + 1); setIsChildReady(false) }}>Next</button>
            </div>
            )}
            {(wizardStep == 3 && !promode) || (wizardStep == 4 && promode) && (
            <div className="flex justify-center mt-5">
                <button disabled={!isChildReady} className={`px-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled ${!isChildReady ? "cursor-not-allowed" : ""}`} onClick={() => {setCurrentStep(wizardStep + 1); setIsChildReady(false) }}>Show first results</button>
            </div>
            )}

        </div>

    )
}