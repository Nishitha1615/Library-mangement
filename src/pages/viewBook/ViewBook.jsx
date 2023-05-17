import React, { useEffect, useState } from 'react';
import './viewBook.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate, useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { API_URL } from '../../global';

export default function ViewBook() {
  const { bookid } = useParams();
  // console.log(bookid);
  const navigate = useNavigate();
  // const [book, setBook] = useState({});
  // console.log(book);
  const [name ,setName] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [show, setShow] = useState(true);
    

    useEffect(() => {
      fetch(`${API_URL}/${bookid}`,{
          method: "GET"
      })
      .then((data) => data.json())
      .then((bk) => {
          setName(bk.name)
          setAuthor(bk.author)
          setPrice(bk.price)
      })
  },[]);

  // toggle the buttons functions
  const handleClick = () => {
    setShow(!show);
  }

  return (
    <div className='viewBook'>
            <div>
                <button className="bookBack"
                    onClick={()=> navigate(-1)}
                    >
                    <ArrowBackIcon className='bookBsckIcon'/>
                    <span className="bookButtonTitle">Back</span> 
                </button>
            </div>
            <div className="viewBookContainer">
              <span className="viewTitle">Book Details</span>
                <div className="viewTableContainer">
                <form className="bookInput">
                <TextField 
                    id="name"
                    name="name" 
                    label="Name" 
                    variant="outlined" 
                    className='bookInputFields' 
                    value={name}  
                    onChange={(event) => setName(event.target.value)}           
                />
                <TextField 
                    id="author" 
                    name="author"
                    label="Author" 
                    variant="outlined" 
                    className='bookInputFields'
                    value={author}
                    onChange={(event) => setAuthor(event.target.value)}
                />
                <TextField 
                    id="price"
                    name="price" 
                    label="Price" 
                    variant="outlined" 
                    className='bookInputFields'
                    value={price}
                    onChange={(event) => setPrice(event.target.value)}
                />
              </form>

                </div>
                <div className="viewBookButtons">
                  {
                    show ? 
                      <button className="viewBorrow" onClick={handleClick}>Borrow</button> :
                      <button className="viewReturn" onClick={() => setShow(!show)}>Return</button>
                  }                 
                  
                  <button 
                    className="viewClose"
                    onClick={() => navigate('/')}
                  >Close</button>
                </div>
            </div>
    </div>
  )
}
