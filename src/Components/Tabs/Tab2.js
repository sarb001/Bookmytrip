import React from 'react';

import { placesStore } from '../../Store/MainStore'
import { Link } from 'react-router-dom'
import './Tab.css';

import { BiBed } from 'react-icons/bi';
import { FaBath } from 'react-icons/fa';
import { BsFillBuildingsFill} from 'react-icons/bs';

const Tab2 = () => {
  return (
    <>
           <div className = 'tab1hold'>
                {placesStore.map((item => {
                    if (item.type === "nationalpark") {
                        return (
                            <div className='card-bosh' key={item.id}>
                                <Link  to={`/card/${item.id}`}>
                                      <span>
                                        <img src = {item.homeMainPic}  style = {{width:'25%'}} />
                                      </span>

                                    {item.pets && <div className='flex label'>  POPULAR </div>}

                                    <div className='flex gap-0 pl-3 pr-3 justify-between'>

                                        <div className='flex'>
                                            <p className=' text-violet-600 font-semibold mr-1 text-2xl'> ${item.price.toLocaleString()}</p>
                                            <p className='text-gray-400 text-sm pt-2'> /month </p>
                                        </div>

                                    </div>

                                    <p className='text-2xl pl-3'> {item.name} </p>

                                    <p className='text-gray-400 text-sm pl-3 mb-3 mt-2'> 2699 Green Valley hughland lake ... </p>
                                    <hr className='mb-4' />

                                    <div className='services-division'>
                                        <span className='flex items-center'>
                                          <BiBed />
                                         <p className='text-sm text-gray-400 w-16'>{Math.floor(Math.random() * 5) + 2} beds </p>
                                         </span>
                                        <span className='flex items-center'> 
                                        <FaBath />
                                        <p className='text-sm text-gray-400 w-16'>{Math.floor(Math.random() * 5) + 2} bath </p>
                                         </span>
                                        <span className='flex items-center'> 
                                        <BsFillBuildingsFill />
                                         <p className='text-sm text-gray-400 w-16'> {Math.floor(Math.random() * 2) + 2} floors </p>
                                        </span>

                                    </div>

                                </Link>
                            </div>
                        )
                    }

                }))}
            </div>
    </>
  )
}

export default Tab2