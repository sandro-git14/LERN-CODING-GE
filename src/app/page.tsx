import '../app/styles/page.css'

export default function Home({
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <br /><br />
      <center>
        <div className="HelloPanel">
          <h1 className='WebHello'>მოგესალმებით მთავარ გვერდზე</h1>
        </div>

        <div>
          <img 
            src="/LcodeLogo.png" 
            alt="Logo On Center Left" 
            className='LogoRight'
          />
        </div>

        <div>
          <img 
            src="/LcodeLogo.png" 
            alt="Logo In Center Right" 
            className='LogoLeft'
          />
        </div>

        <div>
          <img 
            src="/Screenshot_2026-03-31_124443-removebg-preview.png" 
            alt="Pipe At Left" 
            className='PipeLeft'
          />
        </div>

        <button className='LoginBtn'>asdasdasd</button>

        <div>
          <img 
          src="/Screenshot_2026-03-31_124452-removebg-preview.png"
          alt="Pipe At Right"
          className='PipeLeft'
          id='PipeRight'
          />
        </div>

      </center>
    </>
  );
}