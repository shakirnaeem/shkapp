import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout/Layout'
import Image from 'next/image'
const { API_URI } = process.env

export default function Home(props) {
  let popularBrandList = [];
  let latestDevicesList = [];
  if (props.latestDevices instanceof Array) {
    latestDevicesList = props.latestDevices.map(function (item, i) {
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

export async function getServerSideProps(context) {
    const res = await fetch(`${API_URI}brands/GetPopularBrands`)
    const popularBrands = await res.json();

    const dres = await fetch(`${API_URI}devices/GetLatestDevices`)
    const latestDevices = await dres.json();

    return {
        props: { popularBrands, latestDevices }
    }
}
