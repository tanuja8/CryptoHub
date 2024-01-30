import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query';
    

const cryptoApiHeaders={
    'X-RapidAPI-Key': '9eaac95708msh8cc4e7880f84137p1ec825jsn0ee89bafad1b',
   'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
        
}

const baseUrl= 'https://coinranking1.p.rapidapi.com/coins';
const createRequest=(url)=>({url,headers:cryptoApiHeaders})


export const cryptoApi=createApi({
        reducerPath:'cryptoApi',
        baseQuery:fetchBaseQuery({baseUrl}),
        endpoints:(builder)=>({
            getCryptos:builder.query({
                query:()=>createRequest('/exchanges')
            })
        })
    })
