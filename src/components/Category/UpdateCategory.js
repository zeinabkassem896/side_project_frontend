import React, { useState , useEffect} from 'react';
import '../../assets/css/category.css';
import ItemImage from '../../assets/images/download.png';
import axios from "axios";


const UpdateCategory = (props) => {

    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [item, setItem] = useState([]);
    const [selecteditem, setSelectedItem] = useState([]);

    const getItems = async () => {
        const { data } = await axios("http://127.0.0.1:8000/api/items");
        setItem(data.data);
      };

      useEffect(() => {
        getItems();
      },[]);

    const handleSelect = (e)=>{
        let value = Array.from(e, option => option.value);
        setSelectedItem(value);
    }

    const handleSubmit = async(e) =>{
        e.preventDefault();
        console.log(selecteditem);//['2','3']

        var body = {
            name: name,
            image: image
        }

        console.log(body);
        
        axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/categories',
            data: body,
            headers: { "Content-Type": "multipart/form-data" },
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    };

  return(
      <>
     <h1>Update Category</h1>

      <form onSubmit={e=> handleSubmit(e)}>
        <div className="category_component_main category_component">
         <hr/>
            <div className='category_component_start'>
                <div className='category_component_row'>
                    <div className='category_component_key'>Name* :</div> 
                    <div>
                        <input required type="text" name="name" placeholder="Name" value={name} onChange={e => setName(e.target.value)}/>
                        </div>
                </div>
                <hr/>
                <div className='category_component_row'>
                    <div>
                        <div className='category_component_key'>Image:</div>
                    </div>
                    <div  className="category_component">
                        <input type="file" name="image" required onChange={e=> setImage(e.target.files[0])}></input>
                        
                    {/* <select multiple={true} onChange={(e)=> handleSelect(e.target.selectedOptions)}>

                        {item.map((value,index)=> { return <option key={value.id} value={value.id}>{value.name}</option>})}
                    </select> */}

                    </div>
                </div>
                <hr/>
            </div>
            <button type="submit">create</button>
            <hr/>
        </div>
        </form>
        </>
    )

}

export default UpdateCategory;