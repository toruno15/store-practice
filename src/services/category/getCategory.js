const apiurl_Categories = 'http://localhost:5300/categories';

const getCategory = async (ident) => {
    try{
        const res = await fetch(`${apiurl_Categories}/${ident}`, {method: 'GET'})
        const category = await res.json();
        console.log(category);
        return category;
    }catch(e){
        console.error(e.message)
    }
}

export default getCategory;