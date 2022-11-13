import PageContainer from '@/components/PageContainer';
import Actions from '@/components/Actions';

import {SimpleGrid, Box,Tabs, TabList, TabPanels, Tab, TabPanel, Avatar } from '@chakra-ui/react'

const Home = () => (
  <Box>
  <PageContainer>
    
 
    <Box pos="absolute" top="2" left="1200"><Actions switchName="Second Page" /></Box>
    <Box> <Avatar size='2xl' name='Segun Adebayo' src='https://bit.ly/sage-adebayo' /></Box>
    <Tabs variant='enclosed'>
  <TabList>
    <Tab>Web ui desgine</Tab>
    <Tab>Unity3d Assets</Tab>
    <Tab>Random Projects</Tab>
    <Tab>Pentesting</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
    <SimpleGrid columns={2} spacing={10}>
  <Box bg='#9E99EA' height='80px'borderRadius="10"></Box>
  <Box bg='tomato' height='80px'><pop /></Box>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
</SimpleGrid>
    </TabPanel>
    <TabPanel>
    <SimpleGrid columns={2} spacing={10}>
  <Box bg='#99EAC4' height='80px'borderRadius="10"></Box>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
</SimpleGrid>
    </TabPanel>
    <TabPanel>
    <SimpleGrid columns={2} spacing={10}>
  <Box bg='#99D7EA' height='80px' borderRadius="10"></Box>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
</SimpleGrid>
    </TabPanel>
    <TabPanel>
    <SimpleGrid columns={2} spacing={10}>
  <Box bg='#EA99DA' height='80px'borderRadius="10">
    
  </Box>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
</SimpleGrid>
    </TabPanel>
    
  </TabPanels>
</Tabs>


  </PageContainer>
  </Box>
);

export default Home;
