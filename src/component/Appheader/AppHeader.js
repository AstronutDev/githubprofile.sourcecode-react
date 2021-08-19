
import './AppHeader.css'

function AppHeader() {

    return(
            <div className="app-container">
                <img className="profile-img" src="/img/profile.png"/>
                <div>
                    <h1 className="fullname">Supanut Laddayam</h1>
                    <p className="pContent">Software - Developer 💻</p>
                    <p  className="pContent">Phuket | Thailand🏝️</p>
                    <p className="pContent">. . .</p>
                </div>
            </div>
    )
}

export default AppHeader

