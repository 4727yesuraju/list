import React, { useState } from 'react'


export default function FetchData() {

    const headers = new Headers({
        "Content-Type": "application/json",
        "x-api-key": "live_SZLJLEkZjz4UifPa8T7ZIMfJqVOxZj4OSbJlRLWp8uxaJCX3uMOMxkbKbPVJvDmt"
    });

    var requestOptions = {
        method: 'GET',
        headers: headers,
        redirect: 'follow'
    };

    return async (setData,limit)=>{
        try {

            const res = await fetch(`https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=${limit}`, requestOptions)
            const data = await res.json();
            if(data.error)  throw new Error(data.error);
            setData(data);

        } catch (error) {
            
            alert(error.message);

        }
    }

}