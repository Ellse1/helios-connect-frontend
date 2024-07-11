import Link from 'next/link';
import Image from 'next/image';


export default function Home() {
  return (
    <div className="">

      <div className='bg-green-600 mt-10'>
        <div className='w-full bg-white rounded-br-xl rounded-bl-xl px-20'>
          <div className='grid grid-cols-3 pb-20'>
            <div className='col-span-2'>
              <div className='mt-10'>
                <h1 className="text-4xl font-bold">Gemeinschaftliche<br />Gebäudeversorgung</h1>
                <p className="text-4xl text-green-600">Sell Solar-Energy to your Tenants!</p>
              </div>
              <p>Our Vision is, that everyone can profit from the energy transation. Let us change the future together and join the energy revolution now.</p>

              <button className='mt-10 bg-green-600 border py-2 px-5 rounded rounded-xl text-white'>Book a free consultation now</button>

            </div>
            <div className='col-span-1'>
              <Image src="/images/Hero-Image.png" alt="Description of Image" width={300} height={300} />
            </div>

          </div>
        </div>
      </div>



      <div className="text-center bg-green-600 py-10 rounded-bl-xl rounded-br-xl">
        <div className='md:w-2/3 mx-auto text-white'>
          <p className="text-xl">Check out the way landlords and tenants benefit from cheap PV electricity from the roof! </p>
        </div>
      </div>

      <div className='mt-20 w-3/4 mx-auto'>
        <div className='grid grid-cols-6 gap-4'>
          <div className='col-span-2 text-center'>
            <Image src="/images/Landlord.png" alt="Description of Image" width={500} height={500} />
          </div>
          <div className='col-span-4'>
            <h2 className='text-2xl font-bold mt-5'>Meet, our landlord Thomas!</h2>
            <p className='mt-5'>
              Thomas wanted to build a PV plant on his roof so that he can sell the electricity to his tenants for a fair price. Mieterstrom was too complicated for Thomas to manage so he didnt act on the idea. However with HeliosConnect he could realize this project without a hassle and now he benefits from an additional revenue stream.
            </p>
            <Link href="/landlords"><button className='mt-4 bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded rounded-xl'>Calculate Profit now</button></Link>
          </div>
        </div>
      </div>

      <div className=' py-20 w-3/4 mx-auto'>
        <div className='grid grid-cols-6 gap-4'>
          <div className='col-span-4'>
            <h2 className='text-2xl font-bold'>Meet, our tenant Gisela!</h2>
            <p className='mt-5'>
              Gisela is a tenant in a multi family home and she wanted to benefit from cheap electricity from her roof like so many people in single family homes. The problem was she doesn’t really know her landlord or the housing association and it would be umcomfortable to approach them. Luckily with HeliosConnect she found a company that would approach those parties and give them holistic information about the topic. Now she also benefits from cheap electricity from her roof!            
            </p>
            <Link href="/landlords"><button className='mt-4 bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded rounded-xl'>Calculate Profit now</button></Link>
          </div>
          <div className='col-span-2 text-center'>
            <Image src="/images/Tenant.png" alt="Description of Image" width={500} height={500} />
          </div>
        </div>
      </div>

      <div className=''>
        <div className='grid grid-cols-6 px-20'>
          <div className='col-span-2 flex flex-col justify-center'>
            <p className='text-2xl'>
              Our HeliosConnect platform offers an easy solution for contracting, metering and invoicing.
            </p>
          </div>
          <div className='col-span-4'>
            <Image src="/images/Dashboard.png" alt="Description of Image" width={800} height={400} />
          </div>
        </div>
      </div>


      <div className="w-3/4 mx-auto mt-20">
        <div className="grid grid-cols-3 gap-4">
          <div className='col-span-1 items-stretch'>
            <div className='bg-green-200 p-4 rounded-xl h-full'>
                <h3 className='font-bold'>Consumption Monitoring</h3>
                <p>
                  Always have an overview of the consumption, production and performance of your photovoltaik system.
                </p>
                <Image className='mx-auto mt-10' src="/images/Consumption-Monitoring.png" alt="Description of Image" width={100} height={100} />
            </div>
          </div>
          <div className='col-span-2 flex flex-col gap-4'>
            <div className='grid grid-cols-2 gap-4'>
              <div className='col-span-2 bg-green-200 p-4 rounded-xl'>
                <h3 className='font-bold'>Metering</h3>
                <div className="grid grid-cols-6">
                  <div className="col-span-4">
                    Manual metering once a month to ensure correct invoices? Not with us and our fully automated metering in 15 minute intervals!
                  </div>
                  <div className="col-span-2">
                    <Image src="/images/Metering.png" alt="Description of Image" width={100} height={100} />
                  </div>
                </div>
              </div>
              <div className='bg-green-200 p-4 rounded-xl'>
                <h3 className='font-bold'>Invoicing</h3>
                We all know Germany is a beaurocratic mess. Keep your efforts low with our automated invoicing workflow.              </div>
              <div className='bg-green-200 p-4 rounded-xl'>
                <h3 className='font-bold'>Contract Management</h3>
                Keeping contracts neatly organized in your cabinet? What’s next? Sending a Fax to your 20-year-old tenant?              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 w-full mt-4">
          <div className="col-span-2 bg-green-200 p-4 rounded-xl">
            <h3 className='font-bold'>Contributing to the energy transition</h3>
            We think providing clean energy locally shouldn’t be a hassle. That’s why our vision is to keep your workload as small as possible while keeping your PV Systems’ yield as high as possible.
          </div>
          <div className="col-span-1 bg-green-200 p-4 rounded-xl">
            <h3 className='font-bold'>Consultation</h3>
            We bring your PV System from concept to up-and-running in no time with our professional consultation.
          </div>
        </div>


      </div>

    </div>
  );
}

