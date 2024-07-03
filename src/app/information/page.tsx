import Link from 'next/link';

export default function Information(){
    return (
        <div className="w-full md:w-2/3 mx-auto mt-10">
            <h1 className="text-4xl font-bold">Gemeinschaftliche Gebäudeversorgung</h1>
            <p className="text-4xl text-green-600">but easy!</p>

            <p className="mt-5">
                The Gemeinschaftliche Gebäudeversorgung (GGV) initiative has recently been enacted by the Bundestag, 
                marking a significant step forward in the energy sector. This innovative approach is designed to 
                streamline and enhance the efficiency of energy distribution within communal buildings, offering 
                a straightforward and profitable method for managing energy resources. By leveraging collective 
                energy solutions, GGV aims to reduce costs, increase sustainability, and make the transition to 
                renewable energy sources more accessible for everyone involved. 
            </p>

            <Link href="/landlords"><button className='mt-10  bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded rounded-xl'>Calculate Profit now</button></Link>


            {/** Image of GGV */}
            <img src="/images/GGVImage.jpg" alt="GGV" className="mt-10 w-full rounded" />

        </div>
    )
}