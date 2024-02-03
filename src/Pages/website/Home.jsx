import React from 'react'
import Header from '../../Components/Website/Nav';
import Hero from './Hero';
import Features from './Features';

const Home = () => {
   
  return (
    <>
    <Header/>
    <Hero/>
    <Features />
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
