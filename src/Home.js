import React from 'react'
import './Home.css'
import Banner from './Banner'
import Card from './Card'

function Home() {
    return (
        <div className="home">
            <Banner/>
            <div className="home__section">
                <Card
                src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=480"
                title="Unique stays"
                description="Spaces that are more than just a place to sleep."
                />
                <Card
                src="https://a0.muscache.com/im/pictures/8e3d5167-55ca-4fbd-832d-e3b66dad54ec.jpg?im_w=480"
                title="Online Experiences"
                description="A new way to travel from home."
                />
                <Card
                src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=480"
                title="Entire homes"
                description="Comfortable private places, with room for friends or family."
                />
            </div>
            <div className="home__section">
            <Card
                src="https://a0.muscache.com/im/pictures/4c18e879-dd70-454f-811e-9a5f78d74898.jpg?im_w=1200"
                title="Apartament Nowy Świat"
                description="Entire apartment hosted by Krzysztof"
                price="$100/night "
                />
            <Card
                src="https://a0.muscache.com/im/pictures/3758e5b6-26ec-4c6a-acff-197c7f9cea68.jpg?im_w=1200"
                title="Domek Leśne Zacisze"
                description="Entire cottage hosted by Iwona"
                price="$50/night "
                />
            <Card
                src="https://a0.muscache.com/im/pictures/26e0ab3a-29f5-43af-b243-d358ba816aaf.jpg?im_w=1200"
                title="Stylowy Apartament w Centrum"
                description="Entire apartment hosted by Ela"
                price="$20/night "
                />
            </div>
        </div>
    )
}

export default Home
