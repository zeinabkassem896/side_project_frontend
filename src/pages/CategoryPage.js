import React, { useState, useEffect } from 'react';
import CategoryComponent from '../components/Category/CategoryList';
import '../assets/css/category.css';
import axios from "axios";


const CategoryPage = () => {

    const [categories, setCategories] = useState([]);
    const [items, setItems] = useState([]);

    const getAllCategorie = async () => {
        const { data } = await axios("http://127.0.0.1:8000/api/categories");
        setCategories(data.data);
    }

    const getAllItems = async () => {
        const { data } = await axios("http://127.0.0.1:8000/api/items");
        setItems(data.data);
    }

    const deleteCategory = async(id)=>{
         const result = await axios.delete(`http://127.0.0.1:8000/api/categories/${id}`);
         
         const filtered_array = categories.filter((value)=> value.id != id);
         setCategories(filtered_array);
    }

    const updateCategory = async(e,id,name,image)=>{
        e.preventDefault();
        var body = {
            name: name,
            image: image
        }        
        axios({
            method: 'post',
            url: `http://127.0.0.1:8000/api/categories/update/${id}`,
            data: body,
            headers: { "Content-Type": "multipart/form-data" },
        })
        .then(function (response) {
            console.log(response);
            if(response.data.message == 'success'){
                console.log("data.name ",response.data.data.name)
                let newCategoriesArr = [...categories].map((category) => {
                    if (category.id !== id) return category;

                    category.name = response.data.data.name || category.name;
                    category.image = response.data.data.image || category.image;
                    return category;
                  });
          
                  setCategories(newCategoriesArr);
            }
      

        })
        .catch(function (error) {
            console.log(error);
        });
        
       
   }


    useEffect(() => {
        getAllCategorie();
        getAllItems();
      },[]);

    return(
        <>
            <h1>Category Page</h1>
            <div className="category_page">
               {categories.map((value)=>  <CategoryComponent key={value.id} ahmad={value} deleteCategory={deleteCategory} updateCategory={updateCategory} items={items}/>)}
            </div>
        
        </>
       
      )
}

export default CategoryPage;
