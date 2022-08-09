import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import { Typeahead } from "react-bootstrap-typeahead";
import { BsTrash,BsPencilSquare,BsCheck2Square } from "react-icons/bs";
import axios from "axios";

function UseCases() {
  const [items, setItems] = useState([]);

  const [postId, setPostId] = useState(null);
  
  const [pageCount, setpageCount] = useState(0);

  const [isRowinEdit, setIsRowinEdit] = useState(0);

  let limit = 10;


  useEffect(() => {
    const getComments = async () => {
        let requrl ;
        if(postId){
            requrl = `https://jsonplaceholder.typicode.com/comments?_page=1&postId=${postId}&_limit=${limit}`
        }else{
            requrl = `https://jsonplaceholder.typicode.com/comments?_page=1&_limit=${limit}`
        }
      const res = await fetch(
              requrl
      );
     // const res = await axios.get(requrl);
      const data = await res.json();
      const total = res.headers.get("x-total-count");
      setpageCount(Math.ceil(total / limit));
      setItems(data);
    };

    getComments();
  }, [limit, postId]);

  const fetchComments = async (currentPage, postId) => {
    let requrl ;
        if(postId){
            requrl = `https://jsonplaceholder.typicode.com/comments?_page=${currentPage}&postId=${postId}&_limit=${limit}`
        }else{
            requrl = `https://jsonplaceholder.typicode.com/comments?_page=${currentPage}&_limit=${limit}`
        }
    // const res = await fetch(
    //   requrl
    // );
    const res = await axios.get(requrl);
    const data = await res.json();
    return data;
  };

  const handlePageClick = async (data) => {
    console.log(data.selected);

    let currentPage = data.selected + 1;
    

    const commentsFormServer = await fetchComments(currentPage,postId);

    setItems(commentsFormServer);
  };

  
  return (
    <div className="container">
       
      <div className="row m-2">
        <div className="row row-cols-3 pt-3">
        <div className="col-6">
        <a href="/usecaseregistration" class="btn btn-secondary" role="button">Register UseCases</a>
          </div>
        <div className="col-6">
        Search: <input  onChange={e => setPostId(e.target.value)}></input>
        
        </div>
        
        </div>
            <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Application Id </th>
                    <th>Application Name</th>                    
                    <th>Use Case</th>
                    <th></th>
                </tr>
                </thead>
              
              {items.map((item) => {
          return (
            <tbody>
                <tr>
                    <td>
                      { (isRowinEdit ==  item.id)?
                        <input defaultValue={item.postId} ></input>
                        :
                        item.postId
                      }
                    </td>
                    <td>
                    {item.email}
                    </td>
                    <td>
                    {item.email}
                    </td>
                    <td>
                    <button type="button" class="btn btn-default"><BsTrash/></button>
                    {console.log(isRowinEdit ===  item.id)}
                   { (isRowinEdit !=  item.id)?                  
                    <button type="button" class="btn btn-default" onClick={ e=>{ console.log("edit");setIsRowinEdit(item.id);}}><BsPencilSquare/></button>                    
                    : 
                    <button type="button" class="btn btn-default" onClick={ e=> {console.log("not edit");setIsRowinEdit(null)}}><BsCheck2Square/></button>  
                   }            
                    </td>
                </tr>     
                </tbody>       
            );
        })}
        </Table>
      </div>

      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </div>
  );
}

export default UseCases;

