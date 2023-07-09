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

const TabsComponent = () => {
  return (
    <>
        <Tabs position="relative" variant="unstyled">
            <TabList>
            <Tab>One</Tab>    <Tab>Two</Tab>  <Tab>Three</Tab>
            <Tab>Four </Tab>  <Tab>Five</Tab> <Tab>Six</Tab>
            <Tab>Seven</Tab>  <Tab>Eight</Tab>
            </TabList>
            <TabIndicator
            mt="-1.5px"
            height="2px"
            bg="blue.500"
            borderRadius="1px"
            />
            <TabPanels>
            <TabPanel> <Tab1 />  </TabPanel>
            <TabPanel> <Tab2 />  </TabPanel>
            <TabPanel>  <Tab3 />    </TabPanel>
            <TabPanel> <Tab4 /> </TabPanel>
            <TabPanel> <Tab5  /> </TabPanel>
            <TabPanel> <Tab6  /> </TabPanel>
            <TabPanel> <Tab7 /> </TabPanel>
            <TabPanel> <Tab8  /> </TabPanel>
            </TabPanels>
        </Tabs>
    </>
  )
}

export default TabsComponent