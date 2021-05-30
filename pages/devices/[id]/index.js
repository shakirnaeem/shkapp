import Head from 'next/head'
import Layout from '../../../components/Layout/Layout'
import Image from 'next/image'
const { API_URI } = process.env
import { useRouter } from 'next/router'
import CommonService from '../../../util/common-service'

export default function Home(props) {
    let brandDevicesList = [];
    const router = useRouter()
    const { id } = router.query
    let urlParams = CommonService.decodeParams(id);
    let seperatedParams = urlParams.split('|$|');
    const brandName = seperatedParams[1];
    if (props.brandDevices instanceof Array) {
        brandDevicesList = props.brandDevices.map(function (item, i) {
            return <div className="col-md-2 mb-2" key={i}>
                <div className="border text-center rounded pt-3">
                    <Image src="/images/a51thumb.jpg" width={75} height={100} />
                    <div className="mt-3">
                        {`${item.brandName} ${item.name}`}
                        <h5><span className="badge badge-danger mt-1">{item.price}</span></h5>
                        <div><i className="fa fa-star text-warning"></i>
                            <i className="fa fa-star text-warning"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i><i className="fa fa-star ml-1"></i>
                        </div>
                    </div>
                </div>
            </div>
        })
    }

    return (
        <Layout brands={props.brands}>
            <div className="col-md-10 col-sm-12 col-xs-12 float-right main">
                <h4 className="ml-3 mr-3 border-bottom pb-2 mt-3">{brandName} Mobiles</h4>
                <div className="row m-0">
                    {brandDevicesList}
                </div>
            </div>
        </Layout>
    )
}

export async function getServerSideProps(context) {
    let urlParams = CommonService.decodeParams(context.params.id);
    let seperatedParams = urlParams.split('|$|');
    const brandId = seperatedParams[0];
    const res = await fetch(`${API_URI}devices/GetBrandDevices?brandId=${brandId}`)
    const brandDevices = await res.json();

    return {
        props: { brandDevices },
    }
}
