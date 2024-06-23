import { Bar, Line } from 'react-chartjs-2';
import { useState } from 'react';
import { elements, plugins, scales, CategoryScale } from 'chart.js';

import Chart from 'chart.js/auto';
Chart.register(plugins, scales, CategoryScale);




export default function Results(){

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
    

    return (
        <div className="w-full md:w-1/2">
            <h1 className="text-2xl font-bold">Yearly Results</h1>


            <Bar data={data} options={options} />

            <div className="grid grid-cols-2 mt-4">
                <div>
                    PV Production: 
                </div>
                <div>
                    10000 kWh
                </div>
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
                </div>
            </div>


            <div className="grid grid-cols-2 mt-4">
                <div>
                    Money earned from tenants:
                </div>
                <div>
                    4000 KWh * 0.25 €/KWh = 1000 €
                </div>
                <div>
                    Money Earned from Grid Operator:
                </div>
                <div>
                    6000 KWh * 0.08 €/KWh = 480 €
                </div>
            </div>

            <div className="grid grid-cols-2 mt-4">
                <div className="font-bold">
                    Money Earned yearly:
                </div>
                <div className='font-bold'>
                    1000 € + 480 € = 1480 €
                </div>
            </div>
        </div>
    )
}