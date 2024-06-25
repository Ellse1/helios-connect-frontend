
import React, { useEffect, useState } from 'react';
import { GGVProjectProps } from "@/../models/GGVProjectProps"


interface ChildComponentProps {
    onStatusChange: (status: boolean) => void;
    ggvProject: GGVProjectProps;
    updateGGVProject: (newGGVProject:GGVProjectProps) => void
}


export default function ContactAndExplanation({onStatusChange, ggvProject, updateGGVProject}: ChildComponentProps){
    
    const [email, setEmail] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(false);
    
    const[phoneNumber, setPhoneNumber] = useState('');
    const[isValidPhoneNumber, setIsValidPhoneNumber] = useState(false);
  
    const[address, setAddress] = useState(''); // [street, number, zip, city, country

    // Regular expression for basic email validation
    const emailRegex = /\S+@\S+\.\S+/;
    const germanPhoneRegex = /^(?:\+49|0049)?[1-9]\d{1,4}(?:[\s\-]?\d{1,4}){1,6}$/;

    const handleEmailChange = (e: any) => {
      const emailInput = e.target.value;
      setEmail(emailInput);
      setIsValidEmail(emailRegex.test(emailInput));
    };

    const handlePhoneNumberChanged = (e: any) => {
        const phoneNumberInput = e.target.value;
        setPhoneNumber(phoneNumberInput);
        setIsValidPhoneNumber(germanPhoneRegex.test(phoneNumberInput));
        console.log(phoneNumberInput);
        console.log(isValidPhoneNumber);
    };

    const handleAddressChange = (e: any) => {
        const addressInput = e.target.value;
        setAddress(addressInput);
    }

    useEffect(() => {
        // Update the GGV project with the new email, phone number and address
        const newGGVProject: GGVProjectProps = {
            ...ggvProject,
            email: email,
            phone_number: phoneNumber,
            address_for_contact: address
        };
        updateGGVProject(newGGVProject);
        // set to "ready", so the "Show Results" button is enabled
        onStatusChange(isValidEmail);
    }, [isValidEmail]);

    useEffect(() => {
        // Update the GGV project with the new email, phone number and address
        const newGGVProject: GGVProjectProps = {
            ...ggvProject,
            email: email,
            phone_number: phoneNumber,
            address_for_contact: address
        };
        updateGGVProject(newGGVProject);
        // set to "ready", so the "Show Results" button is enabled
        updateGGVProject(newGGVProject);
        onStatusChange(isValidPhoneNumber);
    }, [isValidPhoneNumber]);


    return (
        <div className="w-full md:w-1/2">
            <h1 className="text-2xl font-bold">Caution!</h1>
            <p className="mt-5">
                Now we will present you our first analysis based on multiple asumptions. 
                Please be aware that this is only a first estimation and our final 
                simulation (after 1-2 days) will be more accurate!
            </p>
            <p className="mt-5">
                How can we contact you, if our final simulations are done and results can be inspected?
                The first as well as the precise analysis is free of charge and without any obligations.
            </p>
            <div className="mt-5">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Email
                </label>
                <input value={email} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email" onChange={handleEmailChange} />
            </div>
            <div className="mt-5">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phonenumber">
                    Phone Number
                </label>
                <input value={phoneNumber} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phonenumber" type="text" placeholder="Phone Number" onChange={handlePhoneNumberChanged} />
            </div>
            <div className="mt-5">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
                    Address (optional - We send you information and results to the address)
                </label>
                <input value={address} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="address" type="text" placeholder="Address" onChange={handleAddressChange} />
            </div>
        </div>
    )
}


            