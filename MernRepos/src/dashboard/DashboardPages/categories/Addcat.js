import axios from 'axios';
import React, {useState} from 'react'
import Sidebar from '../../Sidebar'
import Topbar from '../../Topbar'
import API_BASE_URL from '../../../config';

const Addcat = () => {
  const [type, setType] = useState("");


 
  const addNewCategory = (e) =>{
    e.preventDefault();
     try {
        axios.post(`${API_BASE_URL}/category/post-category`, {type})
        .then(res => console.log(res))
        setType("")
     } catch (error) {
      console.log(error, 'unable to add new category');
     }
  }

  return (
    <>
    <Topbar />
    <Sidebar />
    <div className='container-fluid mt-5'>
    <div className="form-container mx-auto">
    <h1 className='text-center my-5 pt-5 text-light'>Add category</h1>

          <form className="text-light">
            <div className="mb-3">
              <label className="form-label">Category Type</label>
              <input
                type="text"
                name="type"
                value={type}
                onChange={(e)=>setType(e.target.value)}
                className="form-control"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={addNewCategory}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
    </div>
    </>
  )
}

export default Addcat
