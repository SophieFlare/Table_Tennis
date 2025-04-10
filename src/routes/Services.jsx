import { useState } from 'react'

import React from 'react'
import Navbar from '../components/Navbar.jsx';
import Nav from './shop/Navigation/Nav.jsx'
import Sidebar from './shop/Sidebar/Sidebar.jsx'
import Recommended from './shop/Recommended/Recommended.jsx'
import Products from './shop/Products/Products.jsx'

//Database
import products from './shop/db/data.jsx'
import Card from './shop/components1/Card.jsx'

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState("null");
  const [query, setQuery] = useState("")


  // ------------Input Filter------------
  const handleInputChange = event => {
    setQuery(event.target.value)
  }
  
  const filteredItems = products.filter((product) => 
    product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1
  );


  // ------------Radio Filter------------
  const handleChange = event => {
    setSelectedCategory(event.target.value)
  }
  // ------------Buttons Filter------------
  const handleClick = event => {
    setSelectedCategory(event.target.value)
  }

  function filteredData(products, selected, query) {
    let filteredProducts = products

    // Filtering Input Items
    if(query) {
      filteredProducts = filteredItems
    }
    // Selected  Filter
    if(selected) {
      filteredProducts = filteredProducts.filter(({category, color,company, newPrice, title }) => 
        category === selected || 
        color === selected || 
        company === selected || 
        newPrice === selected || 
        title === selected 
      )
    }

    return filteredProducts.map(({img, title, star, reviews,newPrice, prevPrice }) => (
      <Card 
        key={Math.random()}
        img={img}
        title={title}
        star={star}
        reviews={reviews}
        newPrice={newPrice}
        prevPrice={prevPrice}
      />
    ))
  }
  const result = filteredData(products, selectedCategory, query)
  
  return (
    <div style={{ backgroundColor: "violet", minHeight: "100vh" }}>
      <Navbar />
      <Sidebar handleChange={handleChange}/>
      <Nav query={query} handleInputChange={handleInputChange}/>
      <Recommended handleClick={handleClick}/>
      <Products result={result}/>
    </div>
  )
}

export default Services