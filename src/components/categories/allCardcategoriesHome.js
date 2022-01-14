import React from 'react';
import Box from '@mui/material/Box';
import CardCategory from "./cardCategory";
import '../../styles/card.css';
import { Link } from 'react-router-dom';

export default function AllCardsCategoriesHome( {objects} ) {
    const lista = objects.slice(0, 4).map((objeto) =>
        <div key={objeto.id} class="card">
            <Link className='link' to={`/store-practice/categories/products/${objeto.id}`}>
                <CardCategory category={objeto}/>
            </Link>
        </div>
    );
    return(
        <React.Fragment>
            <Box
                sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                }}
            > 
                {lista}
            </Box>
        </React.Fragment>
    );
}