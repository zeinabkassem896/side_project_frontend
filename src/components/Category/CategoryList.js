import React, { useState, useEffect } from 'react';
import '../../assets/css/category.css';
import ItemImage from '../../assets/images/category-manager-640x230.jpg';



const CategoryList = (props) => {
    const [updateToggle, setUpdateToggle] = useState(0);

    const [name, setName] = useState(props.ahmad.name);
    const [image, setImage] = useState('');

    const updateCurrentCategory = (e)=>{
        props.updateCategory(e,props.ahmad.id,name,image);
        setUpdateToggle(0);
    }


    return(
        <>
        {updateToggle == 0 ? 
            <div className="category_component_main category_component">
                <img src= {"http://127.0.0.1:8000/image/" + props.ahmad.image} className="imagewidth"/>
               
                <hr/>
                <div className='category_component_start'>
                    <div className='category_component_row'>
                        <div className='category_component_key'>Name:</div> 
                        <div>{props.ahmad.name}</div>
                    </div>
                    </div>
                    <hr/>
                    <button onClick={()=>props.deleteCategory(props.ahmad.id)}>Delete</button>
                    <br></br>
                    <button onClick={()=>setUpdateToggle(1)}>Edit</button>
                    <hr/>
            </div> : 
            <div className="category_component_main category_component">
            <img src= {"http://127.0.0.1:8000/image/" + props.ahmad.image}/>
           
            <hr/>
            <div className='category_component_start'>
                <div className='category_component_row'>
                    <div className='category_component_key'>Name:</div> 
                   <input type="text" name="name" value={name} onChange={e=>setName(e.target.value)}></input>
                </div>
                <div className='category_component_row'>
                    <div className='category_component_key'>Image:</div> 
                   <input type="file" name="image" onChange={e=>setImage(e.target.files[0])}></input>
                </div>
            </div>
                <hr/>
                <button onClick={(e)=> updateCurrentCategory(e)}>Save</button>
                <hr/>
        </div> }
        </>
       
      )
}

export default CategoryList;
