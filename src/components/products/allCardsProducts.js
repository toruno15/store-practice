import React, {useState, useMemo} from 'react';
import CarProduct from './cardProduct';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import '../../styles/card.css';
import { useParams } from 'react-router-dom';

export default function AllCardsProducts({ objects }){
    const [search, setSearch] = useState('');
    const { category_id } = useParams();

    const searchItem = (event) => {
        setSearch(event.target.value);
    };

    const list = objects.filter(object => object.categoryId == category_id);
    const filteredList = useMemo(() => 
        list.filter(object => object.name.toLowerCase().includes(search.toLowerCase())).map( (objeto) =>
            <div key={objeto.id} class="card">
                <CarProduct product={objeto}/>
            </div>
        ),
        [list, search]
    );

    return(
        <React.Fragment>
            <Box sx={{ 
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'flex-end',
                mb: 4
            }}>
                <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField id="input-search" label="Search ..." variant="standard" onChange={searchItem}/>
            </Box>
            <Box
                sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                }}
            >
                {filteredList}
            </Box>
        </React.Fragment>
    );
}