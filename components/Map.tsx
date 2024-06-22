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



import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';


function Search() {

    const map = useMap();

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
            searchLabel: 'Enter address',
            collapsed: false,                      
        });

        {/*
        (searchControl as any).on('results', function(data:any){
            console.log(data);
        });*/}


        map.addControl(searchControl);
        
        map.on('geosearch/showlocation', function(data:any){
            console.log(data);
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

export default function MyMap(props: any) {
    const { position, zoom } = props


    return(
        <MapContainer center={position} zoom={zoom} scrollWheelZoom={true} style={{width: 600, height:400}} >

            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {/*
            <Marker position={position}>
            <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
            </Marker>*/}

            <Search />
        </MapContainer>
    )
}