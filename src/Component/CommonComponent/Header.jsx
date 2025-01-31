
import Navabr_logo_3D from '../../assets/images/navbar/ESDS 3D Logo.png'
import './Header.css'
import UseWindowWidth from '../Custome Hook/useWindowWidth.jsx'
import { Link } from 'react-router-dom';

export default function Header() {
    
    const isMobile = UseWindowWidth(768);
    return (
        <div>
            <div className="navbar-container">
                <div className="navbar-inner">
                    <div className="logo"><img src={Navabr_logo_3D} alt="Logo" /></div>
                   {isMobile ?  <div>x</div> : <Link to={"/navbar"} className='menu'>Menu</Link>}
                </div>
            </div>
        </div>
    )
}