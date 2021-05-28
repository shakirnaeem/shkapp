import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import BrandList from '../brands/brands-list'

export default function SideNav(props) {
    return <div id="app-side-nav" className="sidenav col-md-2 col-6 ml-1 d-lg-block d-md-block d-sm-none d-none rounded">
        <i className="closenav fa fa-close d-lg-none d-md-none"></i>
        <div className="side-nav-head first mt-4">Brands</div>
        <ul className="list-group">
            <BrandList brands={props.brands}></BrandList>
        </ul>
        <div className="side-nav-head">Network</div>
        <ul className="list-group">
            <li className="list-group-item"><a href="devices.html" className="text-white">3G Network Mobiles <FontAwesomeIcon icon={faAngleRight} className="float-right" /></a></li>
            <li className="list-group-item"><a href="devices.html" className="text-white">4G Network Mobiles <FontAwesomeIcon icon={faAngleRight} className="float-right" /></a></li>
            <li className="list-group-item"><a href="devices.html" className="text-white">5G Network Mobiles <FontAwesomeIcon icon={faAngleRight} className="float-right" /></a></li>
        </ul>
        <div className="side-nav-head">Price Range</div>
        <ul className="list-group">
            <li className="list-group-item"><a href="devices.html" className="text-white">Greater then 50,000 <FontAwesomeIcon icon={faAngleRight} className="float-right" /></a></li>
            <li className="list-group-item"><a href="devices.html" className="text-white">40,000 - 50,000 <FontAwesomeIcon icon={faAngleRight} className="float-right" /></a></li>
            <li className="list-group-item"><a href="devices.html" className="text-white">30,000 - 40,000 <FontAwesomeIcon icon={faAngleRight} className="float-right" /></a></li>
            <li className="list-group-item"><a href="devices.html" className="text-white">20,000 - 30,000 <FontAwesomeIcon icon={faAngleRight} className="float-right" /></a></li>
            <li className="list-group-item"><a href="devices.html" className="text-white">10,000 - 20,000 <FontAwesomeIcon icon={faAngleRight} className="float-right" /></a></li>
            <li className="list-group-item"><a href="devices.html" className="text-white">Less then 10,000 <FontAwesomeIcon icon={faAngleRight} className="float-right" /></a></li>
        </ul>
        <div className="side-nav-head">RAM</div>
        <ul className="list-group">
            <li className="list-group-item"><a href="devices.html" className="text-white">512 MB RAM <FontAwesomeIcon icon={faAngleRight} className="float-right" /></a>
            </li>
            <li className="list-group-item"><a href="devices.html" className="text-white">1 GB RAM <FontAwesomeIcon icon={faAngleRight} className="float-right" /></a></li>
            <li className="list-group-item"><a href="devices.html" className="text-white">2 GB RAM <FontAwesomeIcon icon={faAngleRight} className="float-right" /></a></li>
            <li className="list-group-item"><a href="devices.html" className="text-white">4 GB RAM <FontAwesomeIcon icon={faAngleRight} className="float-right" /></a></li>
            <li className="list-group-item"><a href="devices.html" className="text-white">6 GB RAM <FontAwesomeIcon icon={faAngleRight} className="float-right" /></a></li>
            <li className="list-group-item"><a href="devices.html" className="text-white">8 GB RAM <FontAwesomeIcon icon={faAngleRight} className="float-right" /></a></li>
            <li className="list-group-item"><a href="devices.html" className="text-white">10 GB RAM <FontAwesomeIcon icon={faAngleRight} className="float-right" /></a></li>
            <li className="list-group-item"><a href="devices.html" className="text-white">12 GB RAM <FontAwesomeIcon icon={faAngleRight} className="float-right" /></a></li>
            <li className="list-group-item"><a href="devices.html" className="text-white">16 GB RAM <FontAwesomeIcon icon={faAngleRight} className="float-right" /></a></li>
        </ul>
    </div>
}