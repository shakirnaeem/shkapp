import { connectToDatabase } from "../util/mongodb";
import Head from 'next/head'
import Layout from '../components/Layout/Layout'

export default function Home(props) {
  return (
    <Layout brands={props.brands}>
      <div className="col-md-10 col-sm-12 col-xs-12 float-right main">
        <h4 className="ml-3 mr-3 border-bottom pb-2 mt-3">Latest Mobiles</h4>
        <div className="row m-0">
          <div className="col-md-2 mb-2">
            <div className="border text-center rounded pt-3">
              <img src="a51thumb.jpg" width="75" height="100" />
              <div className="mt-3">
                Galaxy A51
                        <h5><span className="badge badge-danger mt-1">Rs. 113,999</span></h5>
                <div><i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i><i className="fa fa-star ml-1"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2 mb-2">
            <div className="border text-center rounded pt-3">
              <img src="a51thumb.jpg" width="75" height="100" />
              <div className="mt-3">
                Galaxy A51
                        <h5><span className="badge badge-danger mt-1">Rs. 113,999</span></h5>
                <div><i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i><i className="fa fa-star ml-1"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2 mb-2">
            <div className="border text-center rounded pt-3">
              <img src="a51thumb.jpg" width="75" height="100" />
              <div className="mt-3">
                Galaxy A51
                        <h5><span className="badge badge-danger mt-1">Rs. 113,999</span></h5>
                <div><i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i><i className="fa fa-star ml-1"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2 mb-2">
            <div className="border text-center rounded pt-3">
              <img src="a51thumb.jpg" width="75" height="100" />
              <div className="mt-3">
                Galaxy A51
                        <h5><span className="badge badge-danger mt-1">Rs. 113,999</span></h5>
                <div><i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i><i className="fa fa-star ml-1"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2 mb-2">
            <div className="border text-center rounded pt-3">
              <img src="a51thumb.jpg" width="75" height="100" />
              <div className="mt-3">
                Galaxy A51
                        <h5><span className="badge badge-danger mt-1">Rs. 113,999</span></h5>
                <div><i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i><i className="fa fa-star ml-1"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2 mb-2">
            <div className="border text-center rounded pt-3">
              <img src="a51thumb.jpg" width="75" height="100" />
              <div className="mt-3">
                Galaxy A51
                        <h5><span className="badge badge-danger mt-1">Rs. 113,999</span></h5>
                <div><i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i><i className="fa fa-star ml-1"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h4 className="ml-3 mr-3 border-bottom pb-2 mt-3">Mobiles greater then Rs. 50,000</h4>
        <div className="row m-0">
          <div className="col-md-2 mb-2">
            <div className="border text-center rounded pt-3">
              <img src="a51thumb.jpg" width="75" height="100" />
              <div className="mt-3">
                Galaxy A51
                        <h5><span className="badge badge-danger mt-1">Rs. 113,999</span></h5>
                <div><i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i><i className="fa fa-star ml-1"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2 mb-2">
            <div className="border text-center rounded pt-3">
              <img src="a51thumb.jpg" width="75" height="100" />
              <div className="mt-3">
                Galaxy A51
                        <h5><span className="badge badge-danger mt-1">Rs. 113,999</span></h5>
                <div><i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i><i className="fa fa-star ml-1"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2 mb-2">
            <div className="border text-center rounded pt-3">
              <img src="a51thumb.jpg" width="75" height="100" />
              <div className="mt-3">
                Galaxy A51
                        <h5><span className="badge badge-danger mt-1">Rs. 113,999</span></h5>
                <div><i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i><i className="fa fa-star ml-1"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2 mb-2">
            <div className="border text-center rounded pt-3">
              <img src="a51thumb.jpg" width="75" height="100" />
              <div className="mt-3">
                Galaxy A51
                        <h5><span className="badge badge-danger mt-1">Rs. 113,999</span></h5>
                <div><i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i><i className="fa fa-star ml-1"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2 mb-2">
            <div className="border text-center rounded pt-3">
              <img src="a51thumb.jpg" width="75" height="100" />
              <div className="mt-3">
                Galaxy A51
                        <h5><span className="badge badge-danger mt-1">Rs. 113,999</span></h5>
                <div><i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i><i className="fa fa-star ml-1"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2 mb-2">
            <div className="border text-center rounded pt-3">
              <img src="a51thumb.jpg" width="75" height="100" />
              <div className="mt-3">
                Galaxy A51
                        <h5><span className="badge badge-danger mt-1">Rs. 113,999</span></h5>
                <div><i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i><i className="fa fa-star ml-1"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h4 className="ml-3 mr-3 border-bottom pb-2 mt-3">Mobiles between Rs. 40,000 and Rs. 50,000</h4>
        <div className="row m-0">
          <div className="col-md-2 mb-2">
            <div className="border text-center rounded pt-3">
              <img src="a51thumb.jpg" width="75" height="100" />
              <div className="mt-3">
                Galaxy A51
                        <h5><span className="badge badge-danger mt-1">Rs. 113,999</span></h5>
                <div><i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i><i className="fa fa-star ml-1"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2 mb-2">
            <div className="border text-center rounded pt-3">
              <img src="a51thumb.jpg" width="75" height="100" />
              <div className="mt-3">
                Galaxy A51
                        <h5><span className="badge badge-danger mt-1">Rs. 113,999</span></h5>
                <div><i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i><i className="fa fa-star ml-1"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2 mb-2">
            <div className="border text-center rounded pt-3">
              <img src="a51thumb.jpg" width="75" height="100" />
              <div className="mt-3">
                Galaxy A51
                        <h5><span className="badge badge-danger mt-1">Rs. 113,999</span></h5>
                <div><i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i><i className="fa fa-star ml-1"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2 mb-2">
            <div className="border text-center rounded pt-3">
              <img src="a51thumb.jpg" width="75" height="100" />
              <div className="mt-3">
                Galaxy A51
                        <h5><span className="badge badge-danger mt-1">Rs. 113,999</span></h5>
                <div><i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i><i className="fa fa-star ml-1"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2 mb-2">
            <div className="border text-center rounded pt-3">
              <img src="a51thumb.jpg" width="75" height="100" />
              <div className="mt-3">
                Galaxy A51
                        <h5><span className="badge badge-danger mt-1">Rs. 113,999</span></h5>
                <div><i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i><i className="fa fa-star ml-1"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2 mb-2">
            <div className="border text-center rounded pt-3">
              <img src="a51thumb.jpg" width="75" height="100" />
              <div className="mt-3">
                Galaxy A51
                        <h5><span className="badge badge-danger mt-1">Rs. 113,999</span></h5>
                <div><i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i><i className="fa fa-star ml-1"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h4 className="ml-3 mr-3 border-bottom pb-2 mt-3">Mobiles between Rs. 30,000 and Rs. 40,000</h4>
        <div className="row m-0">
          <div className="col-md-2 mb-2">
            <div className="border text-center rounded pt-3">
              <img src="a51thumb.jpg" width="75" height="100" />
              <div className="mt-3">
                Galaxy A51
                        <h5><span className="badge badge-danger mt-1">Rs. 113,999</span></h5>
                <div><i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i><i className="fa fa-star ml-1"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2 mb-2">
            <div className="border text-center rounded pt-3">
              <img src="a51thumb.jpg" width="75" height="100" />
              <div className="mt-3">
                Galaxy A51
                        <h5><span className="badge badge-danger mt-1">Rs. 113,999</span></h5>
                <div><i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i><i className="fa fa-star ml-1"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2 mb-2">
            <div className="border text-center rounded pt-3">
              <img src="a51thumb.jpg" width="75" height="100" />
              <div className="mt-3">
                Galaxy A51
                        <h5><span className="badge badge-danger mt-1">Rs. 113,999</span></h5>
                <div><i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i><i className="fa fa-star ml-1"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2 mb-2">
            <div className="border text-center rounded pt-3">
              <img src="a51thumb.jpg" width="75" height="100" />
              <div className="mt-3">
                Galaxy A51
                        <h5><span className="badge badge-danger mt-1">Rs. 113,999</span></h5>
                <div><i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i><i className="fa fa-star ml-1"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2 mb-2">
            <div className="border text-center rounded pt-3">
              <img src="a51thumb.jpg" width="75" height="100" />
              <div className="mt-3">
                Galaxy A51
                        <h5><span className="badge badge-danger mt-1">Rs. 113,999</span></h5>
                <div><i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i><i className="fa fa-star ml-1"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2 mb-2">
            <div className="border text-center rounded pt-3">
              <img src="a51thumb.jpg" width="75" height="100" />
              <div className="mt-3">
                Galaxy A51
                        <h5><span className="badge badge-danger mt-1">Rs. 113,999</span></h5>
                <div><i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i><i className="fa fa-star ml-1"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h4 className="ml-3 mr-3 border-bottom pb-2 mt-3">Mobiles between Rs. 20,000 and Rs. 30,000</h4>
        <div className="row m-0">
          <div className="col-md-2 mb-2">
            <div className="border text-center rounded pt-3">
              <img src="a51thumb.jpg" width="75" height="100" />
              <div className="mt-3">
                Galaxy A51
                        <h5><span className="badge badge-danger mt-1">Rs. 113,999</span></h5>
                <div><i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i><i className="fa fa-star ml-1"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2 mb-2">
            <div className="border text-center rounded pt-3">
              <img src="a51thumb.jpg" width="75" height="100" />
              <div className="mt-3">
                Galaxy A51
                        <h5><span className="badge badge-danger mt-1">Rs. 113,999</span></h5>
                <div><i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i><i className="fa fa-star ml-1"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2 mb-2">
            <div className="border text-center rounded pt-3">
              <img src="a51thumb.jpg" width="75" height="100" />
              <div className="mt-3">
                Galaxy A51
                        <h5><span className="badge badge-danger mt-1">Rs. 113,999</span></h5>
                <div><i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i><i className="fa fa-star ml-1"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2 mb-2">
            <div className="border text-center rounded pt-3">
              <img src="a51thumb.jpg" width="75" height="100" />
              <div className="mt-3">
                Galaxy A51
                        <h5><span className="badge badge-danger mt-1">Rs. 113,999</span></h5>
                <div><i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i><i className="fa fa-star ml-1"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2 mb-2">
            <div className="border text-center rounded pt-3">
              <img src="a51thumb.jpg" width="75" height="100" />
              <div className="mt-3">
                Galaxy A51
                        <h5><span className="badge badge-danger mt-1">Rs. 113,999</span></h5>
                <div><i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i><i className="fa fa-star ml-1"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2 mb-2">
            <div className="border text-center rounded pt-3">
              <img src="a51thumb.jpg" width="75" height="100" />
              <div className="mt-3">
                Galaxy A51
                        <h5><span className="badge badge-danger mt-1">Rs. 113,999</span></h5>
                <div><i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i><i className="fa fa-star ml-1"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h4 className="ml-3 mr-3 border-bottom pb-2 mt-3">Mobiles between Rs. 10,000 and Rs. 20,000</h4>
        <div className="row m-0">
          <div className="col-md-2 mb-2">
            <div className="border text-center rounded pt-3">
              <img src="a51thumb.jpg" width="75" height="100" />
              <div className="mt-3">
                Galaxy A51
                        <h5><span className="badge badge-danger mt-1">Rs. 113,999</span></h5>
                <div><i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i><i className="fa fa-star ml-1"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2 mb-2">
            <div className="border text-center rounded pt-3">
              <img src="a51thumb.jpg" width="75" height="100" />
              <div className="mt-3">
                Galaxy A51
                        <h5><span className="badge badge-danger mt-1">Rs. 113,999</span></h5>
                <div><i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i><i className="fa fa-star ml-1"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2 mb-2">
            <div className="border text-center rounded pt-3">
              <img src="a51thumb.jpg" width="75" height="100" />
              <div className="mt-3">
                Galaxy A51
                        <h5><span className="badge badge-danger mt-1">Rs. 113,999</span></h5>
                <div><i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i><i className="fa fa-star ml-1"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2 mb-2">
            <div className="border text-center rounded pt-3">
              <img src="a51thumb.jpg" width="75" height="100" />
              <div className="mt-3">
                Galaxy A51
                        <h5><span className="badge badge-danger mt-1">Rs. 113,999</span></h5>
                <div><i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i><i className="fa fa-star ml-1"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2 mb-2">
            <div className="border text-center rounded pt-3">
              <img src="a51thumb.jpg" width="75" height="100" />
              <div className="mt-3">
                Galaxy A51
                        <h5><span className="badge badge-danger mt-1">Rs. 113,999</span></h5>
                <div><i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i><i className="fa fa-star ml-1"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2 mb-2">
            <div className="border text-center rounded pt-3">
              <img src="a51thumb.jpg" width="75" height="100" />
              <div className="mt-3">
                Galaxy A51
                        <h5><span className="badge badge-danger mt-1">Rs. 113,999</span></h5>
                <div><i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i><i className="fa fa-star ml-1"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps(context) {

  const { db } = await connectToDatabase();
    const brands = await db
        .collection("brands")
        .find({ isDeleted: false })
        .project({ _id: 0, id: 1, name: 1 })
        .sort({ metacritic: -1 })
        //.limit(20)
        .toArray();

  return {
    props: { brands }, // will be passed to the page component as props
  }
}
