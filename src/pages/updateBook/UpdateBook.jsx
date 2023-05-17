import React,{useState, useEffect} from 'react';
import './updateBook.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate,useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { API_URL } from '../../global';


export default function UpdateBook() {
    const { bookid } = useParams();
    // console.log(bookid);
    const navigate = useNavigate();
    // const [book, setBook] = useState({});
    // console.log(book);
    const [name ,setName] = useState("");
    const [author, setAuthor] = useState("");
    const [price, setPrice] = useState("");

    // useEffect using for fetch the api
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

  return (
    <div className='updateBook'>
        <div className="updateBookContainer">
            <div className='updatePage'>
                <button className="bookBack"
                    onClick={()=> navigate(-1)}
                    >
                    <ArrowBackIcon className='bookBsckIcon'/>
                    <span className="bookButtonTitle">Back</span> 
                </button>
                <span className="bookTitle">Update Book</span>
            <div >
            <form className="bookInput">
                <TextField 
                    id="name"
                    name="name" 
                    label="Name" 
                    variant="outlined" 
                    className='bookInputField' 
                    value={name}  
                    onChange={(event) => setName(event.target.value)}           
                />
                <TextField 
                    id="author" 
                    name="author"
                    label="Author" 
                    variant="outlined" 
                    className='bookInputField'
                    value={author}
                    onChange={(event) => setAuthor(event.target.value)}
                />
                <TextField 
                    id="price"
                    name="price" 
                    label="Price" 
                    variant="outlined" 
                    className='bookInputField'
                    value={price}
                    onChange={(event) => setPrice(event.target.value)}
                />
            <button 
                type="submit"
                className="bookSave" 
                onClick={()=> {
                    const updateBook = {
                        name: name,
                        author: author,
                        price: price

                    };
                    fetch(`${API_URL}/${bookid}`,{
                        method: "PUT",
                        body: JSON.stringify(updateBook),
                        headers: {
                            "Content-Type" : "application/json",
                        },
                    })
                    .then((data) => data.json())
                    .then((data) => console.log(data))
                navigate('/')
                }}
            >
                Update Book
                </button>
            </form>
        </div>
            </div>
        </div>
    </div>
  )
}
