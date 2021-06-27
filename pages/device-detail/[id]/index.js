import Head from 'next/head'
import Layout from '../../../components/Layout/Layout'
import Image from 'next/image'
const { API_URI } = process.env
import { useRouter } from 'next/router'
import CommonService from '../../../util/common-service'

export default function Home(props) {
    const router = useRouter()
    const { id } = router.query
    let urlParams = CommonService.decodeParams(id);
    let seperatedParams = urlParams.split('|$|');
    const brandName = seperatedParams[1];
    return (
        <Layout brands={props.brands}>
            <div className="col-md-10 col-sm-12 col-xs-12 float-right main">
                <div className="row m-0">
                    <div className="col-md-3 text-center mb-2">
                        <Image src="/images/a51.jpg" width={160} height={212} />
                    </div>
                    <div className="col-md-9">
                        <h5 className="border-bottom pb-2 text-lg-left text-center">{brandName} {props.deviceDetail.Name}</h5>
                        <div className="row">
                            <div className="col-md-3 col-6 mb-2">
                                <div className="text-danger"><strong><i className="fa fa-tv mr-1"></i>Display</strong></div>
                                <div>{props.deviceDetail.OverviewDisplaySize}</div>
                            </div>
                            <div className="col-md-3 col-6 mb-2">
                                <div className="text-danger"><strong><i className="fa fa-camera mr-1"></i>Camera</strong></div>
                                <div>{props.deviceDetail.OverviewCameraPhoto}</div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3 col-6 mb-2">
                                <div className="text-danger"><strong><i className="fa fa-database mr-1"></i>Storage</strong></div>
                                <div>{props.deviceDetail.OverviewInternalStorage}</div>
                            </div>
                            <div className="col-md-3 col-6 mb-2">
                                <div className="text-danger"><strong><i className="fa fa-battery-three-quarters mr-1"></i>Battery</strong></div>
                                <div>{props.deviceDetail.OverviewBattery}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card col-md-10 col-12 p-0 ml-md-3 mb-3">
                    <div className="card-body">
                        <h5 className="border-bottom pb-2 text-danger">Network</h5>
                        <div className="row">
                            <div className="col-4">2G Bands</div>
                            <div className="col-8">{props.deviceDetail.Network2G}</div>
                        </div>
                        <div className="row">
                            <div className="col-4">3G Bands</div>
                            <div className="col-8">{props.deviceDetail.Network3G}</div>
                        </div>
                        <div className="row">
                            <div className="col-4">4G Bands</div>
                            <div className="col-8">{props.deviceDetail.Network4G}</div>
                        </div>
                        <div className="row">
                            <div className="col-4">5G Bands</div>
                            <div className="col-8">{props.deviceDetail.Network5G}</div>
                        </div>
                    </div>
                </div>
                <div className="card col-md-10 col-12 p-0 ml-md-3 mb-3">
                    <div className="card-body">
                        <h5 className="border-bottom pb-2 text-danger">Design</h5>
                        <div className="row">
                            <div className="col-4">Dimensions</div>
                            <div className="col-8">{props.deviceDetail.Dimensions}</div>
                        </div>
                        <div className="row">
                            <div className="col-4">Weight</div>
                            <div className="col-8">{props.deviceDetail.Weight}</div>
                        </div>
                        <div className="row">
                            <div className="col-4">Build</div>
                            <div className="col-8">{props.deviceDetail.Build}</div>
                        </div>
                        <div className="row">
                            <div className="col-4">Sim</div>
                            <div className="col-8">{props.deviceDetail.SimSituation}</div>
                        </div>
                    </div>
                </div>
                <div className="card col-md-10 col-12 p-0 ml-md-3 mb-3">
                    <div className="card-body">
                        <h5 className="border-bottom pb-2 text-danger">Display</h5>
                        <div className="row">
                            <div className="col-4">Size</div>
                            <div className="col-8">{props.deviceDetail.DisplaySize}</div>
                        </div>
                        <div className="row">
                            <div className="col-4">Resolution</div>
                            <div className="col-8">{props.deviceDetail.Resolution}</div>
                        </div>
                        <div className="row">
                            <div className="col-4">Technology</div>
                            <div className="col-8">{props.deviceDetail.DisplayType}</div>
                        </div>
                        <div className="row">
                            <div className="col-4">Protection</div>
                            <div className="col-8">{props.deviceDetail.DisplayProtection}</div>
                        </div>
                    </div>
                </div>
                <div className="card col-md-10 col-12 p-0 ml-md-3 mb-3">
                    <div className="card-body">
                        <h5 className="border-bottom pb-2 text-danger">Hardware and Performance</h5>
                        <div className="row">
                            <div className="col-4">System Chip</div>
                            <div className="col-8">{props.deviceDetail.Chipset}</div>
                        </div>
                        <div className="row">
                            <div className="col-4">Processor</div>
                            <div className="col-8">{props.deviceDetail.CPU}</div>
                        </div>
                        <div className="row">
                            <div className="col-4">GPU</div>
                            <div className="col-8">{props.deviceDetail.GPU}</div>
                        </div>
                        <div className="row">
                            <div className="col-4">Storage</div>
                            <div className="col-8">{props.deviceDetail.InternalMemory}</div>
                        </div>
                        <div className="row">
                            <div className="col-4">External Storage</div>
                            <div className="col-8">{props.deviceDetail.CardSlot}</div>
                        </div>
                        <div className="row">
                            <div className="col-4">OS</div>
                            <div className="col-8">{props.deviceDetail.OS}</div>
                        </div>
                    </div>
                </div>
                <div className="card col-md-10 col-12 p-0 ml-md-3 mb-3">
                    <div className="card-body">
                        <h5 className="border-bottom pb-2 text-danger">Camera</h5>
                        <div className="row">
                            <div className="col-4">Camera</div>
                            <div className="col-8">{props.deviceDetail.PrimaryCamera}</div>
                        </div>
                        <div className="row">
                            <div className="col-4">Features</div>
                            <div className="col-8">{props.deviceDetail.PrimaryCameraFeatures}</div>
                        </div>
                        <div className="row">
                            <div className="col-4">Video recording</div>
                            <div className="col-8">{props.deviceDetail.PrimaryCameraVideo}</div>
                        </div>
                    </div>
                </div>
                <div className="card col-md-10 col-12 p-0 ml-md-3 mb-3">
                    <div className="card-body">
                        <h5 className="border-bottom pb-2 text-danger">Selfie Camera</h5>
                        <div className="row">
                            <div className="col-4">Camera</div>
                            <div className="col-8">{props.deviceDetail.SecondaryCamera}</div>
                        </div>
                        <div className="row">
                            <div className="col-4">Features</div>
                            <div className="col-8">{props.deviceDetail.SecondaryCameraFeatures}</div>
                        </div>
                        <div className="row">
                            <div className="col-4">Video recording</div>
                            <div className="col-8">{props.deviceDetail.SecondaryCameraVideo}</div>
                        </div>
                    </div>
                </div>
                <div className="card col-md-10 col-12 p-0 ml-md-3 mb-3">
                    <div className="card-body">
                        <h5 className="border-bottom pb-2 text-danger">Connectivity</h5>
                        <div className="row">
                            <div className="col-4">Bluetooth</div>
                            <div className="col-8">{props.deviceDetail.Bluetooth}</div>
                        </div>
                        <div className="row">
                            <div className="col-4">GPS</div>
                            <div className="col-8">{props.deviceDetail.GPS}</div>
                        </div>
                        <div className="row">
                            <div className="col-4">NFC</div>
                            <div className="col-8">{props.deviceDetail.NFC}</div>
                        </div>
                        <div className="row">
                            <div className="col-4">Radio</div>
                            <div className="col-8">{props.deviceDetail.Radio}</div>
                        </div>
                        <div className="row">
                            <div className="col-4">USB</div>
                            <div className="col-8">{props.deviceDetail.USB}</div>
                        </div>
                        <div className="row">
                            <div className="col-4">WLAN</div>
                            <div className="col-8">{props.deviceDetail.WLAN}</div>
                        </div>
                    </div>
                </div>
                <div className="card col-md-10 col-12 p-0 ml-md-3 mb-3">
                    <div className="card-body">
                        <h5 className="border-bottom pb-2 text-danger">Battery</h5>
                        <div className="row">
                            <div className="col-4">Capacity</div>
                            <div className="col-8">{props.deviceDetail.Battery}</div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export async function getServerSideProps(context) {
    let urlParams = CommonService.decodeParams(context.params.id);
    let seperatedParams = urlParams.split('|$|');
    const uniqueId = seperatedParams[0];
    const res = await fetch(`${API_URI}device-details/GetDeviceDetails?uniqueId=${uniqueId}`)
    const data = await res.json();
    console.log(data)

    return {
        props: { deviceDetail: data },
    }
}
