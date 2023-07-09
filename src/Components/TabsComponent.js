import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel, TabIndicator } from '@chakra-ui/react';
import Tab1 from './Tabs/Tab1';
import Tab2 from './Tabs/Tab2';
import Tab3 from './Tabs/Tab3';
import Tab4 from './Tabs/Tab4';
import Tab5 from './Tabs/Tab5';
import Tab6 from './Tabs/Tab6';
import Tab7 from './Tabs/Tab7';
import Tab8 from './Tabs/Tab8';
import './Tabs/Tab.css';


const TabsComponent = ({  toggle ,setToggle }) => {
  return (
    <>
        <Tabs position="relative" variant="unstyled">
            <TabList className = 'placeTabs-hold'>

                <Tab>One</Tab>    <Tab>Two</Tab>  <Tab>Three</Tab>
                <Tab>Four </Tab>  <Tab>Five</Tab> <Tab>Six</Tab>
                <Tab>Seven</Tab>  <Tab>Eight</Tab>

            </TabList>
            <TabIndicator
            mt="-1.5px"
            height="2px"
            bg="blue.500"
            borderRadius="1px"  />

            <TabPanels>
                    <TabPanel> <Tab1    pushdown = {toggle} />  </TabPanel>
                    <TabPanel> <Tab2  pushdown= {toggle} />  </TabPanel>
                    <TabPanel>  <Tab3  pushdown= {toggle} />    </TabPanel>
                    <TabPanel> <Tab4  pushdown= {toggle}/> </TabPanel>
                    <TabPanel> <Tab5   pushdown= {toggle}/> </TabPanel>
                    <TabPanel> <Tab6  pushdown= {toggle}/> </TabPanel>
                    <TabPanel> <Tab7  pushdown= {toggle} /> </TabPanel>
                    <TabPanel> <Tab8   pushdown= {toggle} /> </TabPanel>
            </TabPanels>
        </Tabs>
    </>
  )
}

export default TabsComponent