import Link from 'next/link';
import Image from 'next/image';


export default function Home() {
  return (
    <div className="">
      <div className="bg-[url('/images/Hero-Image.png')] bg-cover bg-center h-96 flex items-center justify-center text-white">
        <div className="text-center ">
          <div className='bg-white bg-opacity-50 rounded p-5'>
            <h1 className="text-4xl font-bold text-green-600">Gemeinschaftliche Gebäudeversorgung <br/><span className="text-black">but easy!</span></h1>
          </div>
          {/*<p className="">Our Vision is, that everyone can profit from the energy transition. Let us change the future together and join the energy revolution now.</p>*/}
          <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Book a free consultation now
          </button>
        </div>
      </div>

      <div className="text-center md:w-1/2 mx-auto mt-20">
        <p className="text-4xl">Check out the way landlords and tenants benefit from cheap PV electricity from the roof! </p>
        <Link href="/landlords"><button className='mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Calculate Profit now</button></Link>
      </div>

      <div className='mt-20 bg-green-200 py-20'>
        <div className='grid grid-cols-6 px-20'>
          <div className='col-span-1 text-center'>
            <Image src="/images/Landlord.png" alt="Description of Image" width={100} height={300} />
          </div>
          <div className='col-span-5'>
            <h2 className='text-2xl'>Meet, our landlord Thomas!</h2>
            <p>
              Thomas wanted to build a PV plant on his roof so that he can sell the electricity to his tenants for a fair price. Mieterstrom was too complicated for Thomas to manage so he didnt act on the idea. However with HeliosConnect he could realize this project without a hassle and now he benefits from an additional revenue stream.
            </p>
            <Link href="/landlords"><button className='mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Calculate Profit now</button></Link>
          </div>
        </div>
      </div>

      <div className='bg-green-300 py-20'>
        <div className='grid grid-cols-6 px-20'>
          <div className='col-span-5'>
            <h2 className='text-2xl'>Meet, our tenant Gisela!</h2>
            <p>
              Gisela is a tenant in a multi family home and she wanted to benefit from cheap electricity from her roof like so many people in single family homes. The problem was she doesn’t really know her landlord or the housing association and it would be umcomfortable to approach them. Luckily with HeliosConnect she found a company that would approach those parties and give them holistic information about the topic. Now she also benefits from cheap electricity from her roof!            
            </p>
            <Link href="/landlords"><button className='mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Calculate Profit now</button></Link>
          </div>
          <div className='col-span-1 text-center'>
            <Image src="/images/Tenant.png" alt="Description of Image" width={100} height={300} />
          </div>
        </div>
      </div>

      <div className='py-20'>
        <div className='grid grid-cols-6 px-20'>
          <div className='col-span-1 flex flex-col justify-end  bottom-0'>
            <p className='text-2xl'>
              Our HeliosConnect platform offers a easy solution for contracting, metering and invoicing.
            </p>
          </div>
          <div className='col-span-5'>
            <Image src="/images/Dashboard.png" alt="Description of Image" width={800} height={400} />
          </div>
        </div>
      </div>

    </div>
  );
}

