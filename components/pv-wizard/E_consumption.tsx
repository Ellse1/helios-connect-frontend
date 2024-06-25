
import React, { useState, useRef, useEffect } from 'react';
import { GGVProjectProps } from "@/../models/GGVProjectProps"

// Define an interface for the component props
interface ChildComponentProps {
    onStatusChange: (status: boolean) => void;
    ggvProject: GGVProjectProps;
    updateGGVProject: (newGGVProject:GGVProjectProps) => void
}

export default function EConsumption({onStatusChange, ggvProject, updateGGVProject}:ChildComponentProps){

    const [households, setHouseholds] = useState<number>(1);


    {/* Electricity consumption in kWh per year */}
    const [electricityConsumption, setElectricityConsumption] = useState<number>(0);
    const handleElectricityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.value === ""){
            setElectricityConsumption(0);
            return;
        }
        setElectricityConsumption(parseInt(e.target.value));
    }


    const formRef = useRef<HTMLFormElement>(null);


    {/* automatically update the electricity consumption when the number of households changes */}
    useEffect(() => {
        recalculateConsumption();
    }, [households]);
    

    {/* recalculate the electricity consumption based on the number of inhabitants in each household*/}
    function recalculateConsumption(){
        const form = formRef.current;
        const values = [];
        // Assuming each input field has a unique name attribute like input0, input1, etc.
        for (let i = 0; i < households; i++) {
            if(form){
                const input = form[`input${i}`] as HTMLInputElement;
                if (input) {
                    values.push(input.value); // Collecting values
                }
            }
        }
        var electricityConsumption = 0;
        for (let i = 0; i < values.length; i++) {
            if (values[i] === "") {
                continue;
            }
            var numberInhabitants = parseInt(values[i]);
            {/* The first inhabitant consumes 1500 kWh per year, each additional inhabitant consumes 1000 kWh per year */}
            if(numberInhabitants < 0){
                numberInhabitants = 0;
            }
            else if (numberInhabitants > 12){
                numberInhabitants = 12;
            }
            else if (numberInhabitants == 1) {
                electricityConsumption += 1500;
            }
            else if(numberInhabitants > 1){
                electricityConsumption += 1500 + 1000 * (numberInhabitants - 1);
            }
        }
        setElectricityConsumption(electricityConsumption);
    } 

    {/** Check for readyness, if electricityConsumption changed */}
    useEffect(() => {
        if(electricityConsumption >= 500 && electricityConsumption < 100000){
            
            // get the exact number of inhabitants for each household
            const form = formRef.current;
            const values: number[] = [];
            // Assuming each input field has a unique name attribute like input0, input1, etc.
            for (let i = 0; i < households; i++) {
                if(form){
                    const input = form[`input${i}`] as HTMLInputElement;
                    if (input) {
                        
                        values.push(Number(input.value)); // Collecting values
                    }
                }
            }
            updateGGVProject({...ggvProject, electrcityConsumption: electricityConsumption, inhabitantsOfLivingUnits: values});
            onStatusChange(true);
        }
        else{
            onStatusChange(false);
        }
    }, [electricityConsumption]);


    return(
        <div className='w-full md:w-1/2'>

            <h1 className="text-2xl font-bold">Electricity Consumption</h1>
            <p className="text-sm">
                Add households and number of inhabitants for each household (for estimating the consumption) or enter electricity consumption in KWh per year
            </p>

            {/* For each household, render an input form to enter number of inhabitants */}
            <form ref={formRef}>
                {Array.from({length: households}, (_, i) => i).map((_, index) => (
                    <div key={index} className="flex justify-center mt-2">
                        <input type="number" min="0" max="12" name={`input${index}`}  className="w-1/2 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-50" placeholder={`Inhabitants in household ${index+1}`} onChange={(e) => recalculateConsumption()} />
                    </div>

            ))}
            </form>

            <div className="flex justify-center mt-2 ">
                <button className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2 `} onClick={() => setHouseholds(households + 1)}>
                    + Household
                </button>
                <button className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2 ${households <= 1 ? 'opacity-50 cursor-not-allowed' : ''}`} onClick={() => setHouseholds(households - 1)} disabled={households <= 1}>
                    - Household
                </button>
            </div>

            <div className='flex justify-center mt-20'>
                <p className="text-sm">Electricity consumption in KWh / year</p>
            </div>
            <div className='flex justify-center mt-2'>
                <input value={electricityConsumption} onChange={handleElectricityChange} type="number" className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Electricity consumption in kWh" />
            </div>

        </div>
    )

}