import dynamic from 'next/dynamic'
import { useMemo } from 'react'


export default function Landlords() {
    const Map = useMemo(() => dynamic(
        () => import('@/../components/Map'),
        { 
          loading: () => <p>A map is loading</p>,
          ssr: false
        }
      ), [])
    

      {/* Add the geocoding to the map */}


        return (
            <div>
                <div className='mt-10 mx-auto' style={{width: 600, height:800}}>

                {/* Show map with center in germany and zoom level */}
                <Map position={[49.137154, 11.056124]} zoom={6} />

                </div>
            </div>

        )
}