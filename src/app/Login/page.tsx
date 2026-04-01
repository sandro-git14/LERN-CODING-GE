import '../styles/LoginPage.css';
import Inp from '../Input/page'

//add so0me input components please
export default function LoginPage() {
    return (
        <>
        <center>
            <br />
            <div className='Login_Main_BG'>
                <br />
                <h1 className='Login_TXT'>შესვლა</h1>
                <br /><br /><br />
                <Inp />
                <br /><br /><br /><br /><br />
                <Inp />
            </div>
        </center>
        </>
    )
}