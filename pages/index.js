import { connectToDatabase } from "../util/mongodb";
import Head from 'next/head'
import Layout from '../components/Layout/Layout'

export default function Home(props) {
  console.log(props);
  let popularBrandList = [];
  let latestDevicesList = [];
  if (props.latestDevices instanceof Array) {
    latestDevicesList = props.latestDevices.map(function (item, i) {
      return <div className="col-md-2 mb-2" key={i}>
        <div className="border text-center rounded pt-3">
          <img src="a51thumb.jpg" width="75" height="100" />
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

  if (props.popularBrands instanceof Array) {
    popularBrandList = props.popularBrands.map(function (item, i) {
      return <div className="col-md-2 mb-2" key={i}>
        <div className="border text-center rounded pt-3">
          <h5>{`${item.name}`}</h5>
        </div>
      </div>
    })
  }
  return (
    <Layout brands={props.brands}>
      <div className="col-md-10 col-sm-12 col-xs-12 float-right main">
        <h4 className="ml-3 mr-3 border-bottom pb-2 mt-3">Latest Mobiles</h4>
        <div className="row m-0">
          {latestDevicesList}
        </div>
        <h4 className="ml-3 mr-3 border-bottom pb-2 mt-3">Popular Brands</h4>
        <div className="row m-0">
          {popularBrandList}
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps(context) {

  const { db } = await connectToDatabase();
  let brandsData = await db
    .collection("brands")
    .find({ isDeleted: false })
    .project({ _id: 0, id: 1, name: 1, isPopular: 1 })
    .sort({ metacritic: -1 })
    //.limit(20)
    .toArray();

  const popularBrands = brandsData.filter(x => x.isPopular == true).map(x => { return { id: x.id, name: x.name } });
  const brands = brandsData.map(x => { return { id: x.id, name: x.name } });

  const latestDevices = await db
    .collection("devices")
    .find({ isDeleted: false, isLatest: true })
    .project({ _id: 0, id: 1, brandName: 1, name: 1, price: 1, uniqueId: 1 })
    .sort({ metacritic: -1 })
    //.limit(20)
    .toArray();

  return {
    props: { brands, popularBrands, latestDevices }, // will be passed to the page component as props
  }
}
