
import React, { useState } from 'react'
import "./Home.css"
import Header from '../../components/Header'
import Explore_menu from '../../components/Explore_menu'
import FoodDisplay from '../../components/FoodDisplay'
import AppDownload from '../../components/AppDownload'

const Home = () => {
    const[category,setCategory] = useState("All");
  return (
    <div>
        <Header></Header>
        <Explore_menu category={category} setCategory={setCategory}></Explore_menu>
        <FoodDisplay category={category}></FoodDisplay>
        <AppDownload></AppDownload>
    </div>
  )
}

export default Home
