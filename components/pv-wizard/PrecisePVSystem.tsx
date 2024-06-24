import React, { useEffect, useState } from 'react';


interface PVStringProps {
    max_power: number;
    orientation_nord: number;
    tilt_flat: number;
}
interface ChildComponentProps {
    onStatusChange: (status: boolean) => void;
}


export default function PrecisePVSystem({onStatusChange}:ChildComponentProps){ 

    const [pvStrings, setPvStrings] = useState<Array<PVStringProps>>([{max_power: 3000, orientation_nord: 180, tilt_flat: 30}]);
    // 2. Add an item to the list
    const addPVString = (pvString: PVStringProps) => {
        setPvStrings([...pvStrings, pvString]);
    };

    // 3. Remove an item from the list
    const removePVString = (index: number) => {
        setPvStrings(pvStrings.filter((_, i) => i !== index));
    };

    // 4. Update an item in the list
    const updatePVString = (index:number, newPVString:PVStringProps) => {
        setPvStrings(pvStrings.map((item, i) => i === index ? newPVString : item));
    };

    useEffect(() => {
        onStatusChange(true);
    }, [pvStrings]);


    return (

        <div className='w-full md:w-1/2'>

            <h1 className="text-2xl font-bold">Precise PV System</h1>
            <p className="text-sm">
                Add different PV Strings and their orientation to get more precise PV analysis.
            </p>


            <div className='flex mt-5 justify-between w-full'>
                <div className='w-1/3 mr-5'>
                    <p>PV max power (Watt Peak)</p>
                </div>
                <div className='w-1/3 mr-5'>
                    <p>Orientation (0 = Nord, 90 = East)</p>
                </div>
                <div className='w-1/3 mr-5'>
                    <p>Angle (0 = Flat, 20 = 20°)</p>
                </div>
            </div>


            {/* For each PV String, render an input form to enter max power, orientation and tilt */}
            {pvStrings.map((pvString, index) => (
                <div key={index} className="flex justify-between w-full mt-2">
                    <div className='mr-2'>
                        <input className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" value={pvString.max_power} onChange={(e) => updatePVString(index, {...pvString, max_power: parseInt(e.target.value)})} />
                    </div>
                    <div className='mr-2'>
                        <input className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" value={pvString.orientation_nord} onChange={(e) => updatePVString(index, {...pvString, orientation_nord: parseInt(e.target.value)})} />
                    </div>
                    <div className='mr-2'>
                        <input className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" value={pvString.tilt_flat} onChange={(e) => updatePVString(index, {...pvString, tilt_flat: parseInt(e.target.value)})} />
                    </div>
                    <div className='content-center'>
                        <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded" onClick={() => removePVString(index)}>-</button>
                    </div>
                </div>
            ))}
            {/* Add a button to add a new PV String */}
            <div className="flex justify-center mt-2 ">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2" onClick={() => addPVString({max_power: 3000, orientation_nord: 180, tilt_flat: 30})}>
                    + PV String
                </button>
            </div>


        </div>
    )
}