import React from 'react'
import './SearchPage.css'
import SearchResult from './SearchResult'
import {Button} from '@material-ui/core'

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__info">
                <p>62 stays &middot; 26 august to 30 august &middot; 2 guest</p>
                <h1>Stays nearby</h1>
                <Button variant="outlined">
                    Cancellation Flexibility
                </Button>
                <Button variant="outlined">
                    Type of place
                </Button>
                <Button variant="outlined">
                    Price
                </Button>
                <Button variant="outlined">
                    Rooms and beds
                </Button>
                <Button variant="outlined">
                    More filters
                </Button>
            </div>
            <SearchResult
            img="https://a0.muscache.com/im/pictures/9bfa4ba2-8aea-43eb-818c-370c2f72a77d.jpg?im_w=1200"
            location="Private room in center of London"
            title="Stay at this spacious Edwardian House"
            description= "1 guest &middot; 1 bedroom &middot; 1 bed &middot; 1.5 shared bathrooms &middot; Wifi &middot; Kitchen &middot; Free parking"
            star={4.83}
            price="$20/night"
            total="$98 total"
            />
            <SearchResult
            img="https://a0.muscache.com/im/pictures/4c18e879-dd70-454f-811e-9a5f78d74898.jpg?im_w=1200"
            location="Private room in center of London"
            title="Stay at this spacious Edwardian House"
            description= "1 guest &middot; 1 bedroom &middot; 1 bed &middot; 1.5 shared bathrooms &middot; Wifi &middot; Kitchen &middot; Free parking"
            star={4.83}
            price="$20/night"
            total="$98 total"
            />
            <SearchResult
            img="https://a0.muscache.com/im/pictures/9bfa4ba2-8aea-43eb-818c-370c2f72a77d.jpg?im_w=1200"
            location="Private room in center of London"
            title="Stay at this spacious Edwardian House"
            description= "1 guest &middot; 1 bedroom &middot; 1 bed &middot; 1.5 shared bathrooms &middot; Wifi &middot; Kitchen &middot; Free parking"
            star={4.83}
            price="$20/night"
            total="$98 total"
            />
            <SearchResult
            img="https://a0.muscache.com/im/pictures/4c18e879-dd70-454f-811e-9a5f78d74898.jpg?im_w=1200"
            location="Private room in center of London"
            title="Stay at this spacious Edwardian House"
            description= "1 guest &middot; 1 bedroom &middot; 1 bed &middot; 1.5 shared bathrooms &middot; Wifi &middot; Kitchen &middot; Free parking"
            star={4.83}
            price="$20/night"
            total="$98 total"
            />
            <SearchResult
            img="https://a0.muscache.com/im/pictures/9bfa4ba2-8aea-43eb-818c-370c2f72a77d.jpg?im_w=1200"
            location="Private room in center of London"
            title="Stay at this spacious Edwardian House"
            description= "1 guest &middot; 1 bedroom &middot; 1 bed &middot; 1.5 shared bathrooms &middot; Wifi &middot; Kitchen &middot; Free parking"
            star={4.83}
            price="$20/night"
            total="$98 total"
            />
            <SearchResult
            img="https://a0.muscache.com/im/pictures/4c18e879-dd70-454f-811e-9a5f78d74898.jpg?im_w=1200"
            location="Private room in center of London"
            title="Stay at this spacious Edwardian House"
            description= "1 guest &middot; 1 bedroom &middot; 1 bed &middot; 1.5 shared bathrooms &middot; Wifi &middot; Kitchen &middot; Free parking"
            star={4.83}
            price="$20/night"
            total="$98 total"
            />
        </div>
    )
}

export default SearchPage
