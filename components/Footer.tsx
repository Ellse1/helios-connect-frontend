
// import Link
import Link from 'next/link';

export default function Footer(){
    return (
        <div className="">
            <div className="bg-green-600 bg-opacity-10 py-10 mt-10 w-full">
                <div className="grid grid-cols-5 mx-20 gap-10">
                    <div className="col-span-2">
                        <h2 className="text-2xl">HELIOSCONNECT</h2>
                        <p className="mt-4">
                            HeliosConnect is a software company that specializes in the development of software for the energy sector. Our goal is to make the energy transition accessible to everyone.
                        </p>
                    </div>
                    <div className="col-span-1">
                        <h2 className="text-2xl">LINKS</h2>
                        <ul className="mt-4">
                            <li><Link className='underline' href="/">Home</Link></li>
                            <li><Link className='underline' href="/information">Information</Link></li>
                            <li><Link className='underline' href="/consulting">Consulting</Link></li>
                            <li><Link className='underline' href="/about">About us</Link></li>
                        </ul>
                    </div>
                    <div className="col-span-1">
                        <h2 className="text-2xl">CONTACT</h2>
                        <p>HeliosConnect</p>
                        <p>Robinienstraße 29</p>
                        <p>80935 Munich</p>
                        <p>Germany</p>
                    </div>
                </div>
            </div>
            <div className='bg-green-200 w-full text-center py-4'>
                &copy; 2024 HeliosConnect            
            </div>
        </div>
    )
}