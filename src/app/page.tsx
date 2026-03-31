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

        <div className='LoginButton_Items'>
        <button className="pushable">
          <span className="front">
            დარეგისტრირდი
          </span>
        </button>
        </div>




        <div>
          <img 
          src="/Screenshot_2026-03-31_124452-removebg-preview.png"
          alt="Pipe At Right"
          className='PipeLeft'
          id='PipeRight'
          />
        </div>

        <h1 className='DescTXT'>
          კეთილი იყოს თქვენი მობრძანება <b>Lcode</b> - ზე!
          <br />
          ბოლო ვებსაიტი, სადაც <b>პროგრამირების</b> სასწავლათ
          <br />
          ოდესმე <b>შემოხვალთ!</b> 
          <br /><br />
          დარეგისტრირების შემდეგ <b>გექნებათ წვდომა</b> 10 + 
          <br />
          Web კურსზე <b>სრულიად უფასოდ!</b> სრული კარიერული გზამკვლევის
          <br />
          შეძენა შეგიძლიათ <b>დღესვე,</b> სულ რაღაც <b>15 ლარად!</b>
          <br />
          პროექტის წარმდგენი: <b>ალექსანდრე აბალოიძე,</b> 13 წლის Web დეველოპერი
          <br /><br />
          მადლობას გიხდით <b>შემოსვლისთვის!</b> 
          <br />    
        </h1>

      </center>
    </>
  );
}