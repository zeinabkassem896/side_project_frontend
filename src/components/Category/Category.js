import React, { useState } from 'react';
import ItemImage from '../../assets/images/download.png';
import '../../assets/css/category.css';

const Category = (props) => {

  return(
      <div className="category_component_main category_component">
          <img src={ItemImage}/>
          <div className='category_component_start'>
            <div className='category_component_row'>
                <div className='category_component_key'>Name:</div> 
                <div> {props.categoryDetails.name} </div>
            </div>
            <hr/>
            <div className='category_component_row'>
                <div>
                    <div className='category_component_key'>Categories:</div>
                </div>
                <div  className="category_component">
                    {props.categoryDetails.item_categories.map((value)=>{
                        return <div>{value?value.name:''}</div>
                    })}
                </div>
            </div>
            <hr/>
          </div>
    
          
        
         
        </div>
    )

}

export default Category;