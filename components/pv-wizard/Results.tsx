import { Bar, Line } from 'react-chartjs-2';
import { useState } from 'react';
import { elements, plugins, scales, CategoryScale } from 'chart.js';

import Chart from 'chart.js/auto';
Chart.register(plugins, scales, CategoryScale);

import { GGVProjectProps } from "@/../models/GGVProjectProps"
import { useEffect } from 'react';




export default function Results({ggvProject}:{ggvProject:GGVProjectProps}){

    const data: any ={
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        datasets: [
            {
            data: [ 100, 110, 120, 130, 200, 180, 160, 150, 110, 90, 80, 90]
            },
        ],
    }

    const options:any  = {
        plugins : {
            legend: {
                display: false,
            }
        }, 
        elements: {
            point: {
                radius: 0,
                hitRadius: 0,
            },
            bar: {
                borderWidth: 0,
                borderRadius: 10,
                borderSkipped: "bottom",
                backgroundColor: "rgba(20,220,0,1)",
            }
        },
        scales: {
            xAxis: {
                display: false
            },
            yAxis: {
                display: false
            }
        }
    }
    
    const [results, setResults] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(true);


    // make an API call for getting results
    const api_call_data = {
        "location": {
            "longitude": ggvProject.location_longitude,
            "latitude": ggvProject.location_latitute
        },
        "rooftop": {
            "tilt_angle": 30,
            "azimut_angle": 180
        },
        "annual_el_demand": ggvProject.electrcityConsumption,
    }


    useEffect(() => {
        // Simulate fetching data from backend
        const fetchData = async () => {
          try {
            // Replace this URL with your actual endpoint
            // const response = await fetch('http://localhost:8000/api/calculate', {
            const response = await fetch('http://helios-connect-backend.185.170.114.79.sslip.io/api/calculate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(api_call_data),  
            });
            const data = await response.json();
            console.log(data);
            setResults(data);
          } catch (error) {
            console.error('Error fetching data:', error);
          } finally {
            setIsLoading(false); // Set loading to false regardless of outcome
          }
        };
    
        fetchData();
      }, []); // Empty dependency array means this effect runs once on mount
    
      if (isLoading) {
        return <div>Loading...</div>; // Show loading animation or message
      }




    return (
        <div className="w-full md:w-1/2">
            <h1 className="text-2xl font-bold">Yearly Results</h1>


            <Bar data={data} options={options} />

            <div className="grid grid-cols-2 mt-4">
                <div>
                    PV Production: 
                </div>
                <div>
                    {results && results["annual_el_production"].toFixed(0)} KWh
                </div>
                {/** 
                <div>
                    Sold to tenants:
                </div>
                <div>
                    4000 KWh
                </div>
                <div>
                    Fed into the grid:
                </div>
                <div>
                    6000 KWh
                </div>*/}
            </div>


            <div className="grid grid-cols-2 mt-4">
                <div>
                    Money earned from tenants:
                </div>
                <div>
                    {results && results["cost_savings_GGV"]} €
                </div>
                <div>
                    Money Earned from Grid Operator:
                </div>
                <div>
                    {results && results["profit_grid_feed_in"]} €
                </div>
            </div>

            <div className="grid grid-cols-2 mt-4">
                <div className="font-bold">
                    Money Earned yearly:
                </div>
                <div className='font-bold'>
                    {results && ( results["cost_savings_GGV"].toFixed(0) +  "€ + " + results["profit_grid_feed_in"].toFixed(0) + "€ = " + (results["cost_savings_GGV"] + results["profit_grid_feed_in"]).toFixed(0))} €
                </div>
            </div>
        </div>
    )
}