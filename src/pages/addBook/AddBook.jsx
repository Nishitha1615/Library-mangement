import React from 'react';
import './addBook.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../global';
import { useFormik } from 'formik';
import { bookSchema } from '../../Validation';


export default function AddBook() {
    const navigate = useNavigate();
    // const [name ,setName] = useState("");
    // const [author, setAuthor] = useState("");
    // const [price, setPrice] = useState("");
    // formik using
    const formik = useFormik({
        initialValues: {
            name: "",
            author: "",
            price: ""
        },
        validationSchema: bookSchema,
        onSubmit: (newBook) => {
            createBook(newBook);
        }
    });

    const createBook = (newBook) => {
        fetch(`${API_URL}`, {
            method: "POST",
            body: JSON.stringify(newBook),
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then(() => alert("Book added successfully"))
        .then(() => navigate(-1))
    };
    
    

//   return (
//     <div className='book'>
//       <div className="bookContainer">
//             <div>
//                 <button className="bookBack"
//                     onClick={()=> navigate(-1)}
//                     >
//                     <ArrowBackIcon className='bookBsckIcon'/>
//                     <span className="bookButtonTitle">Back</span> 
//                 </button>
//             </div>
//         <span className="bookTitle">Add Book</span>
//         <div >
//             <form className="bookInput">
//                 <TextField 
//                     id="outlined-basic" 
//                     label="Name" 
//                     variant="outlined" 
//                     className='bookInputField'
//                     value={name}
//                     onChange={(event) => setName(event.target.value)}                
//                 />
//                 <TextField 
//                     id="outlined-basic" 
//                     label="Author" 
//                     variant="outlined" 
//                     className='bookInputField'
//                     value={author}
//                     onChange={(event) => setAuthor(event.target.value)}
//                 />
//                 <TextField 
//                     id="outlined-basic" 
//                     label="Price" 
//                     variant="outlined" 
//                     className='bookInputField'
//                     value={price}
//                     onChange={(event) => setPrice(event.target.value)}
//                 />
//                 <button 
//                     className="bookSave"
//                     onClick={ () => {
//                         const newBook = {
//                             name,
//                             author,
//                             price
//                         }
//                         fetch(`${API_URL}`, {
//                             method: "POST",
//                             body: JSON.stringify(newBook),
//                             headers: {
//                                 "Content-type": "application/json",
//                             }
//                         })
//                         .then((data) => data.json())
//                         .then(() => alert("Book added successfully"))
//                     } }
//                     // onSubmit={onFormSubmit}
//                 >Save</button>
//             </form>
//         </div>
//       </div>
//     </div>
//   )

return (
    <div className='book'>
      <div className="bookContainer">
            <div>
                <button className="bookBack"
                    onClick={()=> navigate(-1)}
                    >
                    <ArrowBackIcon className='bookBsckIcon'/>
                    <span className="bookButtonTitle">Back</span> 
                </button>
            </div>
        <span className="bookTitle">Add Book</span>
        <div >
            <form onSubmit={formik.handleSubmit} className="bookInput">
                <TextField 
                    id="name"
                    name="name" 
                    label="Name" 
                    variant="outlined" 
                    className='bookInputField'
                    value={formik.values.name}
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur}               
                />
                 {formik.touched.name && formik.errors.name ? formik.errors.name : ""}
                <TextField 
                    id="author" 
                    name="author"
                    label="Author" 
                    variant="outlined" 
                    className='bookInputField'
                    value={formik.values.author}
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur} 
                />
                 {formik.touched.author && formik.errors.author
                    ? formik.errors.author
                    : ""}
                <TextField 
                    id="price"
                    name="price" 
                    label="Price" 
                    variant="outlined" 
                    className='bookInputField'
                    value={formik.values.price}
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur} 
                />
                    {formik.touched.price && formik.errors.price
                    ? formik.errors.price
                    : ""}

            <button 
                type="submit"  
                className="bookSave"
                // onClick={createBook}
                >
                    Save
                </button>
                {/* <button 
                    className="bookSave"
                    onClick={ () => {
                        const newBook = {
                            name,
                            author,
                            price
                        }
                        fetch(`${API_URL}`, {
                            method: "POST",
                            body: JSON.stringify(newBook),
                            headers: {
                                "Content-type": "application/json",
                            }
                        })
                        .then((data) => data.json())
                        .then(() => alert("Book added successfully"))
                    } }
                    // onSubmit={onFormSubmit}
                >Save</button> */}
            </form>
        </div>
      </div>
    </div>
  )
}
