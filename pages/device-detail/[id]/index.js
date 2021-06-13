import Head from 'next/head'
import Layout from '../../../components/Layout/Layout'
import Image from 'next/image'
const { API_URI } = process.env
import { useRouter } from 'next/router'
import CommonService from '../../../util/common-service'

export default function Home(props) {
    return (
        <Layout brands={props.brands}>
            <div className="col-md-10 col-sm-12 col-xs-12 float-right main">
                <div className="row m-0">
                    <div className="col-md-3 text-center mb-2">
                        <Image src="/images/a51.jpg" width={160} height={212} />
                    </div>
                    <div className="col-md-9">
                        <h5 className="border-bottom pb-2 text-lg-left text-center">Samsung Galaxy A71</h5>
                        <div className="row">
                            <div className="col-md-3 col-6 mb-2">
                                <div className="text-danger"><strong><i className="fa fa-tv mr-1"></i>Display</strong></div>
                                <div>6.7 Inches</div>
                            </div>
                            <div className="col-md-3 col-6 mb-2">
                                <div className="text-danger"><strong><i className="fa fa-camera mr-1"></i>Camera</strong></div>
                                <div>64 MP</div>
                            </div>
                            <div className="col-md-3 col-6 mb-2 mr-md-4">
                                <div className="text-danger"><strong><i className="fa fa-microchip mr-1"></i>Processor</strong></div>
                                <div>Qualcomm SDM730 Snapdragon 730 (8 nm) - GlobalQualcomm SDM730 Snapdragon 730G (8 nm) - Philippines</div>
                            </div>
                            <div className="col-md-3 col-6 mb-2">
                                <div className="text-danger"><strong><i className="fa fa-database mr-1"></i>Storage</strong></div>
                                <div>128 GB</div>
                            </div>
                            <div className="col-md-3 col-6 mb-2">
                                <div className="text-danger"><strong><i className="fa fa-battery-three-quarters mr-1"></i>Battery</strong></div>
                                <div>Li-Ion 4500 mAh, non-removable</div>
                            </div>
                            <div className="col-md-3 col-6 mb-2">
                                <div className="text-danger"><strong><i className="fa fa-android mr-1"></i>OS</strong></div>
                                <div>Android 10, One UI 2.5</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card col-md-10 col-12 p-0 ml-md-3 mb-3">
                    <div className="card-body">
                        <h5 className="border-bottom pb-2">Network</h5>
                        <div className="row">
                            <div className="col-4">2G Bands</div>
                            <div className="col-8">GSM 850 / 900 / 1800 / 1900 - SIM 1 &amp; SIM 2 (dual-SIM model only)</div>
                        </div>
                        <div className="row">
                            <div className="col-4">3G Bands</div>
                            <div className="col-8">HSDPA 850 / 900 / 1900 / 2100</div>
                        </div>
                        <div className="row">
                            <div className="col-4">4G Bands</div>
                            <div className="col-8">1, 2, 3, 4, 5, 7, 8, 12, 13, 17, 20, 28, 38, 40, 41, 66</div>
                        </div>
                        <div className="row">
                            <div className="col-4">5G Bands</div>
                            <div className="col-8"></div>
                        </div>
                    </div>
                </div>
                <div className="card col-md-10 col-12 p-0 ml-md-3 mb-3">
                    <div className="card-body">
                        <h5 className="border-bottom pb-2">Design</h5>
                        <div className="row">
                            <div className="col-4">Dimensions</div>
                            <div className="col-8">163.6 x 76 x 7.7 mm (6.44 x 2.99 x 0.30 in)</div>
                        </div>
                        <div className="row">
                            <div className="col-4">Weight</div>
                            <div className="col-8">179 g (6.31 oz)</div>
                        </div>
                        <div className="row">
                            <div className="col-4">Build</div>
                            <div className="col-8">Glass front (Gorilla Glass 3), plastic back, plastic frame</div>
                        </div>
                        <div className="row">
                            <div className="col-4">Sim</div>
                            <div className="col-8">Single SIM (Nano-SIM) or Dual SIM (Nano-SIM, dual stand-by)</div>
                        </div>
                    </div>
                </div>
                <div className="card col-md-10 col-12 p-0 ml-md-3 mb-3">
                    <div className="card-body">
                        <h5 className="border-bottom pb-2">Display</h5>
                        <div className="row">
                            <div className="col-4">Size</div>
                            <div className="col-8">6.7 inches, 108.4 cm (~87.2% screen-to-body ratio)</div>
                        </div>
                        <div className="row">
                            <div className="col-4">Resolution</div>
                            <div className="col-8">1080 x 2400 pixels, 20:9 ratio (~393 ppi density)</div>
                        </div>
                        <div className="row">
                            <div className="col-4">Technology</div>
                            <div className="col-8">Super AMOLED Plus</div>
                        </div>
                        <div className="row">
                            <div className="col-4">Protection</div>
                            <div className="col-8">Corning Gorilla Glass 3</div>
                        </div>
                    </div>
                </div>
                <div className="card col-md-10 col-12 p-0 ml-md-3 mb-3">
                    <div className="card-body">
                        <h5 className="border-bottom pb-2">Hardware and Performance</h5>
                        <div className="row">
                            <div className="col-4">System Chip</div>
                            <div className="col-8">Qualcomm SDM730 Snapdragon 730 (8 nm) - GlobalQualcomm SDM730 Snapdragon 730G (8 nm) - Philippines</div>
                        </div>
                        <div className="row">
                            <div className="col-4">Processor</div>
                            <div className="col-8">Octa-core (2x2.2 GHz Kryo 470 Gold &amp; 6x1.8 GHz Kryo 470 Silver)</div>
                        </div>
                        <div className="row">
                            <div className="col-4">GPU</div>
                            <div className="col-8">Adreno 618</div>
                        </div>
                        <div className="row">
                            <div className="col-4">Storage</div>
                            <div className="col-8">128GB 6GB RAM, 128GB 8GB RAM</div>
                        </div>
                        <div className="row">
                            <div className="col-4">External Storage</div>
                            <div className="col-8">microSDXC (dedicated slot)</div>
                        </div>
                        <div className="row">
                            <div className="col-4">OS</div>
                            <div className="col-8">Android 10, One UI 2.5</div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export async function getServerSideProps(context) {
    // if (context.query.page) {
    //     pageModel.Page = context.query.page
    // }
    // else{
    //     pageModel.Page = 1;
    // }
    // const queryParam = CommonService.toQueryString(pageModel)
    // let urlParams = CommonService.decodeParams(context.params.id);
    // let seperatedParams = urlParams.split('|$|');
    // const brandId = seperatedParams[0];
    // const res = await fetch(`${API_URI}devices/GetBrandDevices?brandId=${brandId}&${queryParam}`)
    // const data = await res.json();

    return {
        props: {},
    }
}
