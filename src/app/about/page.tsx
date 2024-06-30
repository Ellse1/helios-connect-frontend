
export default function About() {


    return (
        <div className="w-full md:w-2/3 mx-auto">
            <p className="mt-5 text-center">We are a software company that specializes in the development of software for the energy sector. Our goal is to make the energy transition accessible to everyone.</p>


            <div className="flex flex-row flex-wrap justify-center md:justify-between items-center mt-8">
                <div>
                    <img src="/images/people/Bild1.png" alt="Description 1" className="w-20 h-20 md:w-24 md:h-24 rounded-full border-8 border-green-500 object-cover mb-4 md:mb-0"/>
                    <p className="text-center mt-2">David</p>
                </div>
                <div>
                    <img src="/images/people/Bild2.jpg" alt="Description 1" className="w-20 h-20 md:w-24 md:h-24 rounded-full border-8 border-green-500 object-cover mb-4 md:mb-0"/>
                    <p className="text-center mt-2">Francisca</p>
                </div>
                <div>
                    <img src="/images/people/Bild3.jpg" alt="Description 1" className="w-20 h-20 md:w-24 md:h-24 rounded-full border-8 border-green-500 object-cover mb-4 md:mb-0"/>
                    <p className="text-center mt-2">Elias</p>
                </div>
                <div>
                    <img src="/images/people/Bild4.png" alt="Description 1" className="w-20 h-20 md:w-24 md:h-24 rounded-full border-8 border-green-500 object-cover mb-4 md:mb-0"/>
                    <p className="text-center mt-2">Marcel</p>
                </div>
                <div>
                    <img src="/images/people/Bild5.jpg" alt="Description 1" className="w-20 h-20 md:w-24 md:h-24 rounded-full border-8 border-green-500 object-cover mb-4 md:mb-0"/>
                    <p className="text-center mt-2">Maxi</p>
                </div>
            </div>

            <div className="text-center mt-10">
                <p className="">
                    As students at the Technical University of Munich (TUM), we embarked on an exciting 
                    journey in the TechChallenge course, where we were tasked with developing innovative 
                    solutions to real-world problems. Our focus was on the energy sector, specifically on 
                    accelerating the energy transition in urban environments. Through collaborative efforts, 
                    we devised a solution aimed at boosting energy transitions in cities, leveraging cutting-edge 
                    technology and sustainable practices to create a more efficient and green urban landscape.
                </p>
                <div className="mt-8">
                    <a href="mailto:elias.singer@online.de" className="bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-32 rounded">
                        Contact
                    </a>
                </div>
            </div>

        
        </div>
    )
}