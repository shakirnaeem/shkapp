import Head from 'next/head'
import Layout from '../../../components/Layout/Layout'
import Image from 'next/image'

export default function Home(props) {
    let brandDevicesList = [];
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
                <h4 className="ml-3 mr-3 border-bottom pb-2 mt-3">Latest Mobiles</h4>
                <div className="row m-0">
                    {brandDevicesList}
                </div>
            </div>
        </Layout>
    )
}

export async function getServerSideProps(context) {
    const res = await fetch(`http://localhost:3000/api/devices/GetBrandDevices?brandId=${context.params.id}`)
    const brandDevices = await res.json();

    return {
        props: { brandDevices },
    }
}

// export async function getStaticProps(context) {

//     const { db } = await connectToDatabase();
//     let brandsData = await db
//         .collection("brands")
//         .find({ isDeleted: false })
//         .project({ _id: 0, id: 1, name: 1, isPopular: 1 })
//         .sort({ metacritic: -1 })
//         //.limit(20)
//         .toArray();

//     const brands = brandsData.map(x => { return { id: x.id, name: x.name } });

//     return {
//         props: { brands }, // will be passed to the page component as props
//     }
// }
