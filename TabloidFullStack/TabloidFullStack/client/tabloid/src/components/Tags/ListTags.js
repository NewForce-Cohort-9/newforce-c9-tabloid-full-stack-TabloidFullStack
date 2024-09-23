import React, {useState, useEffect} from "react";
import { getAllTags, getById } from "./TagManager";
import Tag from "./Tag";
import { useNavigate } from "react-router-dom";


const TagList = () => {
    const [tags, setTags] = useState([])
    const navigate = useNavigate();
    
    const getTags = () => {
        getAllTags().then(all => setTags(all))
    };

    useEffect(()=>{
        getTags();
    },[]);

    const deleteTag = (id) => {
      getById(id).then((e) => {navigate(`/deleteTag/${id}`)})
    }

    const handleEditClick = (id) => {
      getById(id).then((e) => {navigate(`/editTag/${id}`)})
  }



return (
    <>
    
    <div className="container">
      <div className="row justify-content-center" style={{display: 'flex', flexDirection: 'column'}}>
      <h4 style={{marginTop: '20px', marginBottom: '15px'}}>Tags</h4>
          <button onClick={(e) => {
            navigate('/createTag')
          }} style={{width: '120px', marginBottom: '25px'}}
          >Create New Tag</button>
        <div className="cards-column">
          {tags.map((tag) => (
            <div style={{display: 'flex'}}>
            <Tag key={tag.id} tag={tag} />
            <button onClick={(e) => {deleteTag(tag.id)}}style={{width: '60px', height: '30px', margin: '5px'}}>Delete</button>
            <button onClick={(e) => {
                      handleEditClick(tag.id)
                    }} style={{width: '40px', height: '30px', margin: '5px'}}> Edit </button>
          </div>
          
          ))}
          
        </div>
      </div>
    </div>
    </>
  );

}
export default TagList;