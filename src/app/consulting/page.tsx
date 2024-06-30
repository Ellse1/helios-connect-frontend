import Link from 'next/link'

export default function Consulting(){
    return (

        <div className="w-full md:w-2/3 mx-auto mt-10">
            <h1 className="text-4xl font-bold">Consulting for GGV projects</h1>
            <p className="text-4xl text-green-600">Use solar for multifamiliy houses!</p>
            <p className="mt-5">
                We offer consulting services for photovoltaic projects with multiple tenants. 
                Our team of experts will help you navigate the complexities of energy distribution within communal buildings, 
                ensuring that your project is both efficient and profitable. 
                By leveraging our collective energy solutions, you can reduce costs, 
                increase sustainability, and make the transition to renewable energy sources more accessible for everyone involved.
            </p>

            <Link href="/about"><button className='mt-10  bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded rounded-xl'>Contact us now</button></Link>


            <h1 className="text-2xl font-bold mt-10">Consulting topics</h1>
            <ol className="list-decimal ml-5 mt-5">
                <li>Energy distribution planning</li>
                <li>Financial analysis</li>
                <li>Legal support</li>
                <li>Project management</li>
                <li>Technical support</li>
            </ol>

        </div>
    )
}