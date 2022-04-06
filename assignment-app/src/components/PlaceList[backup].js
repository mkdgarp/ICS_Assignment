import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import '../assets/styles/PlaceList.css'
// import SearchZone from './SearchZone.js'
import CardBox from './CardBox';
import ReactPaginate from 'react-paginate';

const PlaceList = () => {

    const [restaurant, setRestaurant] = useState([]);

    function getToDay() {
        var today = new Date();
        return today.getDay();
        // console.log(today.getDay());
    }

    async function fetchData() {
        await fetch("../data/json_data.json")
            .then((response) => response.json())
            .then((response) => setRestaurant(response))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        fetchData()
    }, []);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid className="fx-position" container sx={{
                pl: {
                    xs: '1rem',
                    sm: '8rem'
                }
            }}>
                <Grid container spacing={4}>
                    {restaurant.map((restaurantList, index) => {
                        return (
                            <Grid item xs={12} sm={4} key={index} >
                                <CardBox
                                    idData={restaurantList.id}
                                    srcProfile={restaurantList.profile_image_url}
                                    nameTitle={restaurantList.name}
                                    openTime={restaurantList.operation_time[getToDay()].time_open}
                                    closeTime={restaurantList.operation_time[getToDay()].time_close}
                                    rating={restaurantList.rating}
                                    imageList={restaurantList.images}
                                />
                            </Grid>
                        )
                    })
                    }
                    {/* <Grid item xs={12} sm={4}>
                        <CardBox />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <CardBox />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <CardBox />
                    </Grid> */}
                </Grid>

            </Grid>
        </Box>
    )
}

export default PlaceList