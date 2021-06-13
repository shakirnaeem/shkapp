import Head from 'next/head'
import Layout from '../../../components/Layout/Layout'
import Image from 'next/image'
const { API_URI } = process.env
import { useRouter } from 'next/router'
import CommonService from '../../../util/common-service'
import pageModel from '../../../models/page-model'
import Pagination from "react-js-pagination";

export default function Home(props) {
    let brandDevicesList = [];
    const router = useRouter()
    const { id } = router.query
    let urlParams = CommonService.decodeParams(id);
    let seperatedParams = urlParams.split('|$|');
    const brandName = seperatedParams[1];
    if (props.data.brandDevices instanceof Array) {
        brandDevicesList = props.data.brandDevices.map(function (item, i) {
            return <div className="col-md-2 mb-2" key={i}>
                <div className="border text-center rounded pt-3" onClick={x => gotoDeviceDetail(item.id)}>
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

    function changePage(page) {
        router.push('?page=' + page)
    }

    function gotoDeviceDetail(id) {
        let queryParam = CommonService.encodeParams(`${id}`);
        const linkAddress = `/device-detail/${queryParam}`;
        router.push(linkAddress)
    }

    return (
        <Layout brands={props.brands}>
            <div className="col-md-10 col-sm-12 col-xs-12 float-right main">
                <h4 className="ml-3 mr-3 border-bottom pb-2 mt-3">{brandName} Mobiles</h4>
                <div className="row m-0">
                    {brandDevicesList}
                </div>
                <div className="row m-0">
                    <div className="col-md-12">
                        <Pagination innerClass="pagination float-right"
                            itemClass="page-item"
                            linkClass="page-link"
                            activePage={props.page}
                            itemsCountPerPage={props.pageSize}
                            totalItemsCount={props.data.totalCount}
                            pageRangeDisplayed={5}
                            onChange={changePage}
                        />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export async function getServerSideProps(context) {
    if (context.query.page) {
        pageModel.Page = context.query.page
    }
    else {
        pageModel.Page = 1;
    }
    const queryParam = CommonService.toQueryString(pageModel)
    let urlParams = CommonService.decodeParams(context.params.id);
    let seperatedParams = urlParams.split('|$|');
    const brandId = seperatedParams[0];
    const res = await fetch(`${API_URI}devices/GetBrandDevices?brandId=${brandId}&${queryParam}`)
    const data = await res.json();

    return {
        props: { data, page: Number(pageModel.Page), pageSize: pageModel.PageSize },
    }
}
