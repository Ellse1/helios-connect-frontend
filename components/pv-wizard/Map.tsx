// src/components/Map.tsx
"use client";
import { useState } from "react";
import { useEffect } from "react"
import { MapContainer, TileLayer, useMap } from "react-leaflet"
// import { MapContainer, Marker, TileLayer, Tooltip } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
import 'leaflet-geosearch/dist/geosearch.css';

import { GGVProjectProps } from "@/../models/GGVProjectProps"

import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';

// Define an interface for the component props
interface ChildComponentProps {
    onStatusChange: (status: boolean) => void;
    updateGGVProject: (newGGVProject:GGVProjectProps) => void
}

function Search({markAsReady, updateGGVProject}: {markAsReady: () => void, updateGGVProject: (newGGVProject:GGVProjectProps) => void}){

    const map = useMap();

    function checkIfAddressIsValid(location_label: string){
        console.log(location_label);

        // split the address into parts by comma
        const addressParts = location_label.split(",");

        //check for all things that are not valid
        
        var adress_valid = true;
        if(addressParts.length <= 5){
            adress_valid = false;
        }

        return adress_valid;
    }

    useEffect(() => {
        const provider = new OpenStreetMapProvider();
      
        const searchControl:any = new (GeoSearchControl as any) ({
            provider: provider,
            style: 'bar',
            showMarker: true,
            showPopup: true,
            autoClose: false,
            retainZoomLevel: false,
            animateZoom: true,
            keepResult: false,
            searchLabel: 'Enter address where GGV shall be used',
            collapsed: false,                      
        });


        map.addControl(searchControl);
        
        map.on('geosearch/showlocation', function(data:any){
            if(checkIfAddressIsValid(data.location.label)){

                // Before "mark as ready": call the backend:
                // 1) check if the address is already in the database. if not, add it
                // 2) if promode is active (later logged in user), return the data for this specific adress, as this should be shown and editable in the next steps
                // 3) if promode is not active, don't return any data, as the data needs to be kept secret

                /**
                const addressData = {
                    address: data.location.label,
                }
                
                try {
                    const response = fetch('http://localhost:8000/api/v1/ggv-projects/', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(addressData),
                    })
                    .then(response => response.json())
                    .then(data => {
                        console.log('Success:', data);
                    })
                    .catch((error) => {
                        console.error('Error:', error);
                    });
                }
                catch (error) {
                    console.error('There was a problem with the fetch operation:', error);
                } */

                // normaly a new (or old) PV system should be given by the backend
                // for test, we just create a new one here
                const newGGVProject: GGVProjectProps = {
                    id: 1,
                    location_label_open_streetmap: data.location.label,
                    location_latitute: data.location.y,
                    location_longitude: data.location.x,
                    inhabitantsOfLivingUnits: [],
                    electrcityConsumption: 0,
                    pv_strings: [],
                    email: "",
                    phone_number: "",
                    address_for_contact: ""
                };
                // push this new GGV project to the parent component
                updateGGVProject(newGGVProject);



                markAsReady();
            }
        }
        );
        

        return () => {
            if(searchControl){
                map.removeControl(searchControl);
            }
        };
    }, [map]);

  return null;
}

export default function MyMap({onStatusChange, updateGGVProject}: ChildComponentProps) {
    const zoom  = 6;
    const position: [number, number] = [49.137154, 11.056124];

    const markAsReady = () => {
        onStatusChange(true);
      };

    return(

        <div className="w-full md:w-1/2">              
            <h1 className="text-2xl font-bold">Address</h1>
            <p className="text-sm">Where PV-electricity should be generated and sold to inhabitants</p>

            <MapContainer center={position} zoom={zoom} scrollWheelZoom={true} className="map-container" >

                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}"
                maxZoom={20}
                subdomains={['mt0', 'mt1', 'mt2', 'mt3']}
                />

                <Search markAsReady={markAsReady} updateGGVProject={updateGGVProject} />
            </MapContainer>
        </div>

    )
}