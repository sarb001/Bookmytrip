import React, { useState } from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Heading, Stack, Text, StackDivider, Box, ModalHeader } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import CalendarNavbar from './CalendarNavbar';

import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';

import { AiFillPlusCircle , AiFillMinusCircle } from 'react-icons/ai';
import { GrLocation } from 'react-icons/gr';

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

   const setinputhandler = (e) => {
          setinputvalue(e.target.value);
   }

  return (
    <>
         <ModalHeader >
             <div className = "search-bar">
               <input type = "text"   value = {inputvalue}
               placeholder = 'Enter Destination Value' 
               onChange = {setinputhandler} />
             </div>
          </ModalHeader>
        <Tabs>
            <TabList>
                <Tab> Places  </Tab>
                <Tab> Dates  </Tab>
                <Tab>  Guests </Tab>
            </TabList>

                <TabPanels>
                        <TabPanel>
                              <div className="tab-content-places" style   = {{display:'grid',gridTemplateRows :'1fr 1fr ',margin:'5%'}}>


                                       {inputvalue === "" ? (
                                         <>
                                              <div className='tabContent1Hold cursor-pointer' style  = {{display:'grid'  , gridTemplateColumns:'1fr 1fr 1fr' }}>
                                                    <Link  to={`/location/usa`} style = {{padding:'5%'}}>
                                                      <img src='https://a0.muscache.com/pictures/f9ec8a23-ed44-420b-83e5-10ff1f071a13.jpg' className='tabContent1Image' />
                                                      <p className='fs'> I'm flexible  </p>
                                                    </Link>

                                                  <Link to={`/location/europe`}  style = {{padding:'5%'}}>
                                                    <img src='https://a0.muscache.com/im/pictures/7b5cf816-6c16-49f8-99e5-cbc4adfd97e2.jpg?im_w=320' className='tabContent1Image' />
                                                    <p className='fs'> Europe </p>
                                                  </Link>

                                                    <Link to={`/location/london`}  style = {{padding:'5%'}}>
                                                      <img src='https://a0.muscache.com/im/pictures/dbb2b5ef-2efe-4099-81ac-c7b957f384ed.jpg?im_w=320' className='tabContent1Image' />
                                                      <p className='fs'> United Kingdom </p>
                                                    </Link>
                                              </div>

                                              <div className='secImages' style  = {{display:'grid'  , gridTemplateColumns:'1fr 1fr 1fr' }}>
                                        <Link to={`/location/canada`}  style = {{padding:'5%'}}>
                                          <img src='https://a0.muscache.com/im/pictures/d77de9f5-5318-4571-88c7-e97d2355d20a.jpg?im_w=320' className='tabContent1Image' />
                                          <p className='fs'> SouthEast Asia </p>
                                        </Link>
                                        <Link to={`/location/italy`}  style = {{padding:'5%'}}>
                                          <img src='https://a0.muscache.com/im/pictures/ebc5a343-8b76-4ae5-8700-eb5e9cec9243.jpg?im_w=320' className='tabContent1Image mr-1' />
                                          <p className='fs'> Indonesia </p>
                                        </Link>
                                        <Link to={`/location/kyiv`}  style = {{padding:'5%'}}>
                                          <img src='https://a0.muscache.com/im/pictures/66355b01-4695-4db9-b292-c149c46fb1ca.jpg?im_w=320' className='tabContent1Image' />
                                          <p className='fs'> MiddleEast </p>
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
                                                  <div className = "main-item" style = {{backgroundColor:'rosybrown',width:'30%',
                                                  margin:'2%',color:'black',fontSize:'18px',cursor:'pointer'}}>   
                                                  <Link to = {`/location/${clickedlinkvalue}`} style = {{display:'grid',gridTemplateColumns:'1fr 1fr',
                                                  margin:'9%' ,textAlign:'center' ,justifyItems:'center'}}>
                                                      <div className="location-icon" style = {{alignSelf:'center'}}>
                                                        <GrLocation   />
                                                      </div>
                                                      <div className="place-main">
                                                        <p onMouseOver = {(e) => setclickedlinkvalue(e.target.innerText)}>
                                                          {item.place} 
                                                        </p>
                                                      </div>
                                                  </Link>
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


                        <TabPanel>  
                              <Card>
                          <CardBody>
                            <Stack  divider={<StackDivider  />} spacing='4'>

                              <Box style = {{display:'grid',gridTemplateColumns:'1fr 1fr'}}>
                                <Heading size='xs' textTransform='uppercase'>
                                      <div>   Adults </div> 
                                      <span> Ages 13 or above  </span>
                                </Heading>
                                <Text  pt='2' fontSize='sm'>
                                        <div className="icons" style = {{display:'grid',gridTemplateColumns:'1fr 1fr 1fr' , 
                                        justifyContent:'space-between', alignItems:'center' , justifyItems:'center'}}>
                                            <span style = {{cursor:'pointer'}}>   <AiFillPlusCircle   />  </span>
                                            <span>  1  </span>
                                            <span style = {{cursor:'pointer'}}>   <AiFillMinusCircle /> </span>
                                        </div>
                                </Text>
                              </Box>

                              <Box style = {{display:'grid',gridTemplateColumns:'1fr 1fr'}}>
                                <Heading size='xs' textTransform='uppercase'>
                                        <div>  Children  </div>
                                        <span> Ages 2-12 </span>
                                </Heading>
                                <Text pt='2' fontSize='sm'>
                                    <div className="icons" style = {{display:'grid',gridTemplateColumns:'1fr 1fr 1fr' , 
                                          justifyContent:'space-between', alignItems:'center' ,justifyItems:'center'}}>
                                              <span style = {{cursor:'pointer'}}>   <AiFillPlusCircle   />  </span>
                                              <span>  1  </span>
                                              <span style = {{cursor:'pointer'}}>   <AiFillMinusCircle /> </span>
                                    </div>
                                </Text>
                              </Box>

                              <Box style = {{display:'grid',gridTemplateColumns:'1fr 1fr'}}>
                                <Heading size='xs' textTransform='uppercase'>
                                      <div>  Infants </div>
                                      <span> Under 2  </span>
                                </Heading>
                                <Text pt='2' fontSize='sm'>
                                        <div className = "icons" style = {{display:'grid',gridTemplateColumns:'1fr 1fr 1fr', 
                                          justifyContent:'space-between', alignItems:'center' , justifyItems:'center'}}>
                                              <span style = {{cursor:'pointer'}}>   <AiFillPlusCircle   />  </span>
                                              <span>  1  </span>
                                              <span style = {{cursor:'pointer'}}>   <AiFillMinusCircle /> </span>
                                        </div>
                                  </Text>
                                </Box>
                              <Box>
                                <Heading size='xs' textTransform='uppercase'>
                                        <div> Pets </div>
                                        <span>  ( Select One )   </span>
                                </Heading>
                                <Text pt='2' fontSize='sm'>
                                <div className = "icons" style = {{display:'grid',gridTemplateColumns:'1fr 1fr' , 
                                          justifyContent:'space-between', alignItems:'center' , justifyItems:'center'}}>
                                            <select>
                                            <option value = "Volvo"> Yes  </option>
                                            <option value = "Saab">  No   </option>
                                            </select>
                                        </div>
                                </Text>
                              </Box>

                            </Stack>
                          </CardBody>
                              </Card>
                        </TabPanel>
                </TabPanels>
        </Tabs>
    </>
  )
}

export default TabsOptional