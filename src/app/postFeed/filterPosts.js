import React from 'react'
import { Link } from 'react-router-dom'

const FilterFeed = (props) => {

    return (

        <div className="dropDown">
            <ul>
                <a className='dropdown-trigger btn' href='#' data-target='dropdown1'>Sort Feed</a>


                <ul id='dropdown1' className='dropdown-content'>
                    <li onClick={props.showFiltered} data-type="text">Texts </li>
                    <li onClick={props.showFiltered} data-type="image">Images</li>
                    <li onClick={props.showFiltered} data-type="video">Videos</li>
                    <li onClick={props.showFiltered} data-type="all">All</li>

                </ul>
            </ul>
        </div>)
}

export { FilterFeed }