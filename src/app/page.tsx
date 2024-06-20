export default function Home() {
  return (
    <div>
      <div style={{width: '100%', height: '100%', position: 'relative'}}>
    <div style={{width: 350, height: 350, left: 800, top: 0, position: 'absolute', background: 'rgba(45, 198, 83, 0.30)', borderRadius: 40}} />
    <img style={{width: 350, height: 350, left: 720, top: 76, position: 'absolute', borderRadius: 40}} src="FirstPicturePV.png" />
    </div>
      <div style={{ width: '42%', marginLeft: '5%', marginTop: '50px' }}>
        <span
          style={{
            color: 'black',
            fontSize: 55,
            fontFamily: 'Syne',
            fontWeight: 700,
            wordWrap: 'break-word'
          }}
        >
          Gemeinschaftliche Gebäudeversorgung, <br />
        </span>
        <span
          style={{
            color: '#2DC653',
            fontSize: 60,
            fontFamily: 'Syne',
            fontWeight: 700,
            wordWrap: 'break-word'
          }}
        >
          but in easy. <br />
        </span>
        <span style={{
            color: 'black',
            fontSize: 24,
            fontFamily: 'Nunito',
            fontWeight: '400', 
            wordWrap: 'break-word'}}>Our Vision is, that everyone can profit from the energy transation. Let us change the future together and join the energy revolution now.
        </span>
      </div>
      {/* Green box with text */}
      <div style={{
        width: '20%', 
        height: '50px', 
        background: '#2DC653', 
        borderRadius: 10, 
        marginTop: '20px',  // Adjusting margin to create space around the element
        marginLeft: '5%',   // Aligning with the content above
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        color: 'white', 
        fontFamily: 'Nunito', 
        fontWeight: 700
      }}>
        Book your free consultation now
      </div>
      <div style={{
        width: '100%', 
        height: '70px', 
        background: '#2DC653', 
        borderRadius: 70, 
        marginTop: '50px',
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        color: 'white', 
        fontFamily: 'Nunito', 
        fontWeight: 700,
        fontSize: 20
        }} >
        Check out the way for landlords AND tenants to benefit from cheap PV electricity from the roof! 
        </div>
    </div>
  );
}

