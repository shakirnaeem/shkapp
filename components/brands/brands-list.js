import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

export default function BrandList({ brands }) {
    let brandList = []; 
    if (brands instanceof Array) {
        brandList = brands.map(function (item, i) {
            //let queryParam = CommonService.encodeParams(`${object.id}|$|${object.name}|$||$||$|`);
            const linkAddress = `/devices/${item.id}`;
            return <li className="list-group-item" key={i}><Link href={linkAddress}><a className="text-white">{item.name} <FontAwesomeIcon icon={faAngleRight} className="float-right" /></a></Link></li>
        })
    }

    return <>{brandList}</>
}
