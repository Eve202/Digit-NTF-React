import React from 'react'
import Layout from '../components/Layout/Layout';
import HeroSection from '../components/Acceuil/HeroSection';
import Section2 from '../components/Acceuil/Section2';
import Section3 from '../components/Acceuil/Section3';
import BuildNFT from '../components/Acceuil/BuildNFT';
const Home = () => {
  return (
    <Layout>
      <HeroSection title="See the NFT new world" description="Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, di" buttontext="Discover Vow" image="img/heroSectionImg.svg" />
      <Section2 />
      <Section3 />
      <BuildNFT props = {{title: "Build your NFT profile", description: 'Join almost 10k NFT profiles on Digit !'}} />
    </Layout>
  )
}

export default Home
