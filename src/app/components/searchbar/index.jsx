// taget fra tidligere projekt
"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import "./searchbar.scss"
import Image from 'next/image';
function SearchBar() {
    const [query, setQuery] = useState('');
    const [activities, setActivities] = useState([]);



    useEffect(() => {
        const fetchActivities = async () => {
            const response = await fetch(
                `http://localhost:4000/api/v1/activities`
            );
            const data = await response.json();
            setActivities(data);
        };

        fetchActivities();
    }, []);

    const filtered = activities.filter((acti) => acti.name.toLowerCase().includes(query.toLowerCase()))

    return (
        <>
            <div className="search-container">
                <input type="text" placeholder='Søg i Aktiviteter' onChange={(event) => setQuery(event.target.value)} className='search-input' />
            </div>

            {query && filtered.length > 0 && (
                <div>
                    {filtered.map((aktivitet) => (<Link href={`./aktiviteter/${aktivitet.id}`} key={aktivitet.id}>
                       <section className="aktiviteter">
                            <div className="aktivitetDetail__image-wrapper">
                        <Image src={aktivitet.asset.url} width={200} height={100} alt={aktivitet.id} priority></Image>
                   </div>
                   <div className="aktivitetDetail__layout">
                            <h2>{aktivitet.name}</h2>
                                <span>{aktivitet.minAge}-{aktivitet.maxAge}</span>
                            <p>{aktivitet.description}</p>
                            </div>
                            </section></Link> ))}
                </div>
            )}
        </>
    );
}

export default SearchBar;