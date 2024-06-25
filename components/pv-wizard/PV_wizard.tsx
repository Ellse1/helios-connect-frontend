"use client";
import { useState } from "react"
import { useMemo } from "react"
import dynamic from 'next/dynamic'
import EConsumption from "./E_consumption"
import AgreementAndExplanation from "./AgreementAndExplanation";
import ContactAndExplanation from "./ContactAndExplanation";
import Results from "./Results";
import PrecisePVSystem from "./PrecisePVSystem";
import { GGVProjectProps } from "@/../models/GGVProjectProps"



export default function Wizard({promode = false}) {

    // the GGV project prop, that is shared between the different (child) components
    const [ggvProject, setGGVProject] = useState<GGVProjectProps>({
        id: 0,
        location_label_open_streetmap: "",
        location_latitute: 0,
        location_longitude: 0,
        inhabitantsOfLivingUnits: [],
        electrcityConsumption: 0,
        pv_strings: [],
        email: "",
        phone_number: "",
        address_for_contact: ""
    });

    const updateGGVProject = (newGGVProject:GGVProjectProps) => {
        setGGVProject(newGGVProject);
        console.log("GGV Project updated: ", newGGVProject);
    }

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
                {wizardStep === 1 && <Map onStatusChange={handleStatusChange} updateGGVProject={updateGGVProject}  />}
                {wizardStep === 2 && <EConsumption onStatusChange={handleStatusChange} ggvProject={ggvProject} updateGGVProject={updateGGVProject} />}
                {wizardStep === 3 && <ContactAndExplanation onStatusChange={handleStatusChange} ggvProject={ggvProject} updateGGVProject={updateGGVProject} />}
                {wizardStep === 4 && <Results ggvProject={ggvProject} />}
            </div>
            )}

            {(promode == true) && (
            <div className="flex justify-center mt-5">
                {wizardStep === 0 && <AgreementAndExplanation />}
                {wizardStep === 1 && <Map onStatusChange={handleStatusChange} updateGGVProject={updateGGVProject} />}
                {wizardStep === 2 && <PrecisePVSystem onStatusChange={handleStatusChange} />}
                {wizardStep === 3 && <EConsumption onStatusChange={handleStatusChange} ggvProject={ggvProject} updateGGVProject={updateGGVProject} />}
                {wizardStep === 4 && <ContactAndExplanation onStatusChange={handleStatusChange} ggvProject={ggvProject} updateGGVProject={updateGGVProject}/>}
                {wizardStep === 5 && <Results ggvProject={ggvProject} />}
            </div>
            )}

            
            {((isChildReady && promode==false && wizardStep != 3) || (isChildReady && promode && wizardStep != 4)) && (
            <div className="flex justify-center mt-5">
                <button className="px-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded" onClick={() => {setCurrentStep(wizardStep + 1); setIsChildReady(false) }}>Next</button>
            </div>
            )}
            {((wizardStep == 3 && !promode) || (wizardStep == 4 && promode)) && (
            <div className="flex justify-center mt-5">
                <button disabled={!isChildReady} className={`px-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled ${!isChildReady ? "cursor-not-allowed" : ""}`} onClick={() => {setCurrentStep(wizardStep + 1); setIsChildReady(false) }}>Show first results</button>
            </div>
            )}

        </div>

    )
}