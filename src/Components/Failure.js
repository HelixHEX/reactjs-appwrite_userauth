import React from 'react';
import {useEffect} from 'react';


const Failure = ({auth, history, location}) => {
  console.log('IN FAILURE');
  console.log(auth, history);

  useEffect(()=>{
    auth.checkAuthenticated()
        .then((val)=>{
          auth.setAuthenticated(val);
          history.push('/signin');
        });
  }, []);


  return (
    <div> Error {location.search} </div>
  );
};


export default Failure;
