import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { useRouter } from 'next/router';
import CommonService from '../../util/common-service'

export default function BrandList({ brands, setToggleSideNav }) {
    let brandList = [];
    const router = useRouter()
    if (brands instanceof Array) {
        brandList = brands.map(function (item, i) {
            let queryParam = CommonService.encodeParams(`${item.id}|$|${item.name}|$||$||$|`);
            const linkAddress = `/devices/${queryParam}`;
            return <li className="list-group-item" key={i}><a onClick={x => gotoDevice(linkAddress)} className="text-white cursor-pointer">{item.name} <FontAwesomeIcon icon={faAngleRight} className="float-right" /></a></li>
        })
    }

    function gotoDevice(linkAddress) {
        setToggleSideNav(false)
        router.push(linkAddress)
    }

    return <>{brandList}</>
}
