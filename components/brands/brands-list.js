import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function BrandList({ brands }) {
    let brandList = []; 
    if (brands instanceof Array) {
        brandList = brands.map(function (item, i) {
            //let queryParam = CommonService.encodeParams(`${object.id}|$|${object.name}|$||$||$|`);
            return <li className="list-group-item" key={i}><a href="devices.html" className="text-white">{item.name} <FontAwesomeIcon icon={faAngleRight} className="float-right" /></a></li>
            // return <li className="list-group-item" key={i}><Link to={`/brand-devices/${queryParam}`}>{object.name}</Link></li>;
        })
    }

    return <>{brandList}</>
}
