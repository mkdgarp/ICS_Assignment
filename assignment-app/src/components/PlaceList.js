import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import '../assets/styles/PlaceList.css'
// import SearchZone from './SearchZone.js'
import CardBox from './CardBox';
import ReactPaginate from 'react-paginate';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import { Input } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';


const PlaceList = ({ itemsPerPage }) => {
    // const items = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const [restaurant, setRestaurant] = useState([]); //data json_data.json
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    function ItemsPaginate({ currentItems }) {
        return (
            <>
                {currentItems && currentItems.map((restaurantList, index) => {
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
            </>
        );
    }

    async function fetchData() {
        await fetch("../data/json_data.json")
            .then((response) => response.json())
            .then((response) => {
                setRestaurant(response)
                const endOffset = itemOffset + itemsPerPage;
                // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
                setCurrentItems(response.slice(itemOffset, endOffset));
                setPageCount(Math.ceil(response.length / itemsPerPage));
                // console.log(response.slice(itemOffset, endOffset))
            })
            .catch(err => console.log(err))
    }

    function getToDay() {
        var today = new Date();
        return today.getDay();
        // console.log(today.getDay());
    }

    useEffect(() => {
        fetchData()
    }, [itemOffset, itemsPerPage]);


    function handlePageClick(event) {
        const newOffset = (event.selected * itemsPerPage) % restaurant.length;
        // console.log(
        //     `User requested page number ${event.selected}, which is offset ${newOffset}`
        // );
        setItemOffset(newOffset);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid className="fx-position" container sx={{
                pl: {
                    xs: '1rem',
                    sm: '8rem'
                }
            }}>


                <Box sx={{
                    display: {
                        xs: 'block',
                        sm: 'flex'
                    }, width: '100%', pb: 2
                }}>
                    <Grid item sm={5} sx={{
                        display: {
                            xs: 'none',
                            sm: 'block'
                        },
                    }}>
                        <Box className="h4" component="span" sx={{ fontWeight: '500' }}>Place List</Box>
                    </Grid>
                    <Grid item sm={3} xs={12} sx={{ textAlign: 'right', pb: 2 }}>
                        <FormControl sx={{ width: '100%', backgroundColor: 'white', borderRadius: '50px' }}>
                            <InputLabel id="demo-simple-select-label">Restaurant</InputLabel>
                            <Select sx={{ height: '50px', pl: 2 }} className="border-select"
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                            </Select>
                        </FormControl>

                    </Grid>
                    <Box className="border-right-input" sx={{
                        display: {
                            xs: 'none',
                            sm: 'block'
                        }, height: '50px'
                    }}>&nbsp;</Box>
                    <Grid item sm={4} xs={12} >
                        <FormControl sx={{ width: '100%', backgroundColor: 'white', borderRadius: '50px' }}>
                            <Input className="input-fx border-select" sx={{ height: '50px', pl: 2 }}
                                type='text'
                                placeholder='Search name..'
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                        >
                                            <SearchIcon />
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />

                        </FormControl>
                    </Grid>
                </Box>

                <Grid container spacing={4}>
                    <ItemsPaginate currentItems={currentItems} />
                </Grid>
                <>
                    <ReactPaginate className='paginate-placeList'
                        breakLabel="..."
                        nextLabel=">"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={5}
                        pageCount={pageCount}
                        previousLabel="<"
                        renderOnZeroPageCount={null}
                    />
                </>
            </Grid >
        </Box >
    )
}

export default PlaceList