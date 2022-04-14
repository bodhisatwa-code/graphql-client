import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { ALL_BOOKS } from '../GraphQL/Query';

const AllBooks = () => {

    const [books,setBooks] = useState(null);
    const [fetching,setfetching] = useState(true);

    const {error,loading,data} = useQuery(ALL_BOOKS);

    useEffect(()=>{
        if(data) setBooks(data);
    },[data])
    
    useEffect(()=>{
        if(!loading) setfetching(false)
    },[loading])

    return (
        <div>
            {
                fetching && "loading data ......"
            }
            {
                data
                &&
                JSON.stringify(books)
            }
        </div>
    )
}

export default AllBooks