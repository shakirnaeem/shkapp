import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import CommonService from '../../util/common-service'

export default function BrandList({ brands }) {
    let brandList = []; 
    if (brands instanceof Array) {
        brandList = brands.map(function (item, i) {
            let queryParam = CommonService.encodeParams(`${item.id}|$|${item.name}|$||$||$|`);
            const linkAddress = `/devices/${queryParam}`;
            return <li className="list-group-item" key={i}><Link href={linkAddress}><a className="text-white">{item.name} <FontAwesomeIcon icon={faAngleRight} className="float-right" /></a></Link></li>
        })
    }

    return <>{brandList}</>
}
