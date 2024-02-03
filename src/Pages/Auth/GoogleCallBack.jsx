import axios from 'axios'
import React, { useEffect } from 'react'
import { GOOGLE_CALL_BACK, baseUrl } from '../../Api/Api'
import { useLocation } from 'react-router-dom'
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
         console.log(res)
        }catch(err){
            console.log(err)
        }
        }
        GoogleCall()
        
    },[])
  return <h1>test</h1>
}

export default GoogleCallBack
