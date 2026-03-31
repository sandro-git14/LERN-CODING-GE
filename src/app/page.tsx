import '../app/styles/page.css'

export default function Home({
}: {
  children: React.ReactNode;
}) {
  return (
    <>
<div>
    <br /><br />
    <center>
    <div className="HelloPanel">
      <h1 className='WebHello'>მოგესალმებით</h1>
    </div>


    <div>
      <img 
      src="/LcodeLogo.png" 
      alt="Logo On Center Left" 
      className='LogoRight'/>
    </div>

    <div>
      <img 
      src="/LcodeLogo.png" 
      alt="Logo In Center Right" 
      className='LogoLeft'
      />
    </div>

    </center>
</div>
    </>
  );
}
