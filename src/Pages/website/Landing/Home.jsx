
import Carousel from '../../../Components/Website/Carousel/Carousel';
import Features from '../../../Components/Website/Hero/Features';
import Hero from '../../../Components/Website/Hero/Hero';
import LatestProducts from '../../../Components/Website/Products/LatestProducts';
import SalesProducts from "../../../Components/Website/Products/SalesProducts";


const Home = () => {
   
  return (
    <>
      <Hero />
      <Carousel />
      <Features />
      <LatestProducts />
      <SalesProducts />
    </>
  );
}

export default Home


  /* {<Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 ? (
              <tr>
                <td colSpan={12} className="text-center">
                  Loading.....
                </td>
              </tr>
            ) : (
              showUsers
            )}
          </tbody>
        </Table> }*/
