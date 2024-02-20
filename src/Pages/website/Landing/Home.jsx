import React from 'react'
import Header from '../../../Components/Website/Header/Header';
import Features from '../../../Components/Website/Hero/Features';
import Hero from '../../../Components/Website/Hero/Hero';
import LatestProducts from '../../../Components/Website/Products/latestProducts';

const Home = () => {
   
  return (
    <>
      <Hero />
      <Features />
      <LatestProducts/>
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
