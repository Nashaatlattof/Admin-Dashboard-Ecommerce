import axios from 'axios'
import React from 'react'
import { baseUrl } from './Api'
import Cookie from 'cookie-universal'



const cookie = Cookie()
const token = cookie.get('e-commerce')  


 export const Axios = axios.create({
    baseURL: baseUrl,
    headers: {
        authorization: `Bearer ${token}`,
    },
 })
