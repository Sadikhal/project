import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Make sure to install axios using npm or yarn

function Home() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const res = await axios.get('https://randomuser.me/api/?page=1&results=1&seed=abc');

        const user = res.data.results[0];
          setData({
            firstName: user.name.first,
            lastName: user.name.last,
            gender: user.gender,
            mobileNumber: user.cell,
            img: user.picture.large,
          });
      } catch (err) {
        setError('Error fetching data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className='flex justify-center items-center w-full h-screen text-center'>
      <div className='flex justify-center text-center items-center w-[55%]  flex-row gap-8 p-12 border shadow-lg rounded-md'>
        {
        loading ? <div>Loading...</div>
        
       :
       <>
        <div className='w-[40%] h-full flex items-center justify-center'>
          <img
            className="aspect-square object-cover h-[250px]  rounded-lg w-full duration-500 hover:scale-150 transition"
            src={data.img}
            alt="Listing"
          />
        </div>
        <div className='w-[50%] flex flex-col items-start gap-8'>
          <div className='flex flex-row gap-4 items-center'>
            <div className='text-[26px] leading-3 font-medium capitalize font-robotos'>
              {data.firstName}
            </div>

            <div className='text-[26px] leading-3 font-medium capitalize font-robotos'>
              {data.lastName}
            </div>
          </div>


          <div className='text-[26px] leading-3 font-medium capitalize font-robotos'>
            {data.gender}
          </div>

          <div className='text-[26px] leading-3 font-medium font-robotos capitalize'>
            {data.mobileNumber}
          </div>

        </div>
        </>
}
      </div>
    </div>
  );
}

export default Home;