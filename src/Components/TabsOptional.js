import React, { useEffect, useState } from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Heading, Stack, Text, StackDivider, Box, ModalHeader, ModalBody, Select } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import CalendarNavbar from './CalendarNavbar';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';
import { AiFillPlusCircle , AiFillMinusCircle } from 'react-icons/ai';
import { GrLocation } from 'react-icons/gr';
import './TabsOptional.css';
import { placesStore } from '../Store/MainStore';

  const placesArray = [
    {
      id: "1",
      place: "london"
    },
    {
      id: "2",
      place: "russia"
    },
    {
      id: "3",
      place: "spain"
    },
    {
      id: "4",
      place: "brazil"
    },
    {
      id: "5",
      place: "india"
    },
    {
      id: "6",
      place: "france"
    },

    {
      id: "9",
      place: "italy"
    },
    {
      id: "10",
      place: "australia"
    },
    {
      id: "11",
      place: "canada"
    },
    {
      id: "12",
      place: "spain"
    },
    {
      id: "13",
      place: "usa"
    },
    {
      id: "14",
      place: "kyiv"
    },
    {
      id: "15",
      place: "ukraine"
    },
    {
      id: "16",
      place: "newyork"
    },
    {
      id: "17",
      place: "europe"
    },

  ]


const TabsOptional = () => {

   const [inputvalue,setinputvalue] = useState("");
   const [clickedlinkvalue,setclickedlinkvalue] = useState("");

    const [infants,setinfants] = useState(0);
    const [children,setchildren] = useState(0);
    const [adultsquantity,setadultsquantity] = useState(0);

    const [selectedOption,setselectedOption] = useState(null);


   const setinputhandler = (e) => {
          setinputvalue(e.target.value);
   }

   const increasehandler = () => {
       setadultsquantity(adultsquantity + 1);
   }

   const decreasehandler = () => {
    if(adultsquantity <= 0){
      return 
   }else{
     setadultsquantity(adultsquantity - 1);
   }
  }

   const increasechildhandler = () => {
      setchildren(children + 1);
   }

   const decreasechildhandler = () => {
    if(children <= 0){  
       return 
    }else{
      setchildren(children - 1);
    }
   }

   const increaseinfantshandler = () => {
    setinfants(infants + 1);
  }

  const decreaseinfantshandler = () => {
    if(infants <= 0){
       return 
    }else{
      setinfants(infants - 1);
    }
   }

      

  return (
    <>
         <ModalHeader >
             <div className = "search-bar">
               <input type = "text"   value = {inputvalue}
               placeholder = 'Enter Destination Value' 
               onChange = {setinputhandler}  />
             </div>
          </ModalHeader>
          
            
            <Tabs>
                <TabList>
                    <Tab> Places  </Tab>
                    <Tab> Dates  </Tab>
                </TabList>

                    <TabPanels>
                            <TabPanel>
                                  <div className="absolute z-50 tabContentPlaces" >

                                          {inputvalue === "" ? (
                                            <>
                                                  <div className = 'tabContent1Hold cursor-pointer' >
                                                        <Link  to={`/location/usa`} >
                                                          <img src='https://a0.muscache.com/pictures/f9ec8a23-ed44-420b-83e5-10ff1f071a13.jpg' className='tabContent1Image' />
                                                          <span > I'm flexible  </span>
                                                        </Link>

                                                      <Link to={`/location/europe`}>
                                                        <img src='https://a0.muscache.com/im/pictures/7b5cf816-6c16-49f8-99e5-cbc4adfd97e2.jpg?im_w=320' className='tabContent1Image' />
                                                        <span> Europe </span>
                                                      </Link>

                                                        <Link to={`/location/london`} >
                                                          <img src='https://a0.muscache.com/im/pictures/dbb2b5ef-2efe-4099-81ac-c7b957f384ed.jpg?im_w=320' className='tabContent1Image' />
                                                          <span > United Kingdom </span>
                                                        </Link>
                                                  </div>

                                                  <div className='secImages' >
                                                      <Link to={`/location/canada`} >
                                                        <img src='https://a0.muscache.com/im/pictures/d77de9f5-5318-4571-88c7-e97d2355d20a.jpg?im_w=320' className='tabContent1Image' />
                                                        <span className='fs'> SouthEast Asia </span>
                                                      </Link>
                                                      <Link to={`/location/italy`} >
                                                        <img src='https://a0.muscache.com/im/pictures/ebc5a343-8b76-4ae5-8700-eb5e9cec9243.jpg?im_w=320' className='tabContent1Image mr-1' />
                                                        <span className='fs'> Indonesia </span>
                                                      </Link>
                                                      <Link to={`/location/kyiv`} >
                                                        <img src='https://a0.muscache.com/im/pictures/66355b01-4695-4db9-b292-c149c46fb1ca.jpg?im_w=320' className='tabContent1Image' />
                                                        <span className='fs'> MiddleEast </span>
                                                      </Link>
                                                  </div>

                                            </>
                                          ) : (
                                            <> 
                                              {placesArray.filter((item) => {
                                                if(inputvalue === ""){
                                                    return ""
                                                }else if(item.place.toLocaleLowerCase().includes(inputvalue)){
                                                    return item;
                                                }
                                              }).map((item) => {
                                                  return (
                                                    <>
                                                      <div className = "searchdisplayIndivitual" >   
                                                        <div>
                                                    
                                                          <Link to = {`/location/${clickedlinkvalue}`}>
                                                                <GrLocation   className  = 'inline-block mb-2 text-2xl'  />
                                                                <p onMouseOver = {(e) => setclickedlinkvalue(e.target.innerText)}
                                                                className='capitalize fof inline-block' >
                                                                  {item.place} 
                                                                </p>
                                                          </Link>
                                                          
                                                        </div>
                                                      </div>
                                                    </>
                                                  )
                                              })
                                              }
                                            </>
                                          )}
                                  </div>
                            </TabPanel>


                            <TabPanel>
                                <CalendarNavbar />
                            </TabPanel>


                    </TabPanels>
            </Tabs>

    </>
  )

}

export default TabsOptional