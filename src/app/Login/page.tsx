import '../styles/LoginPage.css';

export default function LoginPage() {
    return (
        <>
        <center>
            <br />
            <div className='Login_Main_BG'>
                <br />
                <h1 className='Login_TXT'>შესვლა</h1>
                <br /><br /><br />
                <input type="text" className='INP_Email'/>
                <br /><br /><br />
                <input type="text" className='INP_Pass'/>
            </div>
        </center>
        </>
    )
}