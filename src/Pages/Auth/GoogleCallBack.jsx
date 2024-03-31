import axios from 'axios'
import { useEffect } from 'react'
import { GOOGLE_CALL_BACK, baseUrl } from '../../Api/Api'
import {  useLocation, Navigate } from 'react-router-dom'
import Cookie from 'cookie-universal'

const GoogleCallBack = () => {

const location= useLocation()
const cookie = Cookie()
    useEffect(() => {
        async function GoogleCall(){
            try{
         const res = await axios.get(
           `${baseUrl}/${GOOGLE_CALL_BACK}/${location.search}`
         );
         const token = res.data.access_token;
         cookie.set('e-commerce', token) 
         
        }catch(err){
            console.log(err)
        }
        }
        GoogleCall()
        
    },[])
  return (
    <>
     <Navigate to={'/'}/>
    </>
  );
}

export default GoogleCallBack
