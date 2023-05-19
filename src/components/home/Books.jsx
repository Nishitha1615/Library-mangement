import React, { useEffect, useState } from 'react';
import './books.css';
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../global';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export default function Books() {
  const navigate = useNavigate();
  const [book, setBook] = useState([]);

  const getBooks = () => {
    fetch(`${API_URL}`,{
      method: "GET",
    })
    .then((response) => response.json())
    .then((bks) => setBook(bks));
  }
  useEffect(()=>{getBooks()},[]);

  return (
    <div className='books'>
      <div className="addBookButton">
        <div className="addBookTitle">BookList</div>
        <button 
          className="addbtn"
          onClick={() => navigate('/add-book')}
          >Add Book</button>
      </div>
        <div className="tableContainer">
          <TableContainer>
              <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell className="tableHeadCell">Name</TableCell>
                      <TableCell className="tableHeadCell">Author</TableCell>
                      <TableCell className="tableHeadCell">Price</TableCell>
                      <TableCell className="tableHeadCell">View</TableCell>
                      <TableCell className="tableHeadCell">Edit</TableCell>
                      <TableCell className="tableHeadCell">Delete</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {
                      book.map(row => (
                        <TableRow key={row.id}>
                          <TableCell>{row.name}</TableCell>
                          <TableCell>{row.author}</TableCell>
                          <TableCell>{row.price}</TableCell>
                          <TableCell>
                            <button 
                                className="tableViewButton"
                                onClick={()=> navigate(`/view-book/${row.id}`)}
                              >View</button>
                          </TableCell>
                          <TableCell>
                            <button 
                              className="tableEditButton"
                              onClick={()=> navigate(`/update-book/${row.id}`)}
                            >Edit</button>
                          </TableCell>
                          <TableCell>
                              <DeleteOutlineIcon 
                                className="tableDeleteButton"
                                onClick={()=> {
                                  fetch(`${API_URL}/${row.id}`,{
                                    method: "DELETE",
                                  })
                                  .then(() => alert("Book deleted successfully"))
                                  .then(() => getBooks())
                                }}
                                />
                          </TableCell>
                        </TableRow>
                      ))
                    }
                  </TableBody>
              </Table>
          </TableContainer>
        </div>
    </div>
  )
}
