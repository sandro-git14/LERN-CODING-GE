import '../app/styles/page.css'

export default function Home({
}: {
  children: React.ReactNode;
}) {
  return (
    <>
<div className='Items'>
    <br /><br />
    <center>
    <div className="HelloPanel">
      <h1 className='WebHello'>მოგესალმებით მთავარ გვერდზე</h1>
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

    <div>
      <img src='public/Pipe1' alt="" />
    </div>

    </center>
</div>
    </>
  );
}
