import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { AdminTitle } from '../../../utils/tools'
import PaginateComponent from './paginate';

import { useDispatch, useSelector } from 'react-redux';
import { getPaginateArticles, changeStatusArticle, removeArticle } from '../../../store/actions/articles'

import {
    Modal,
    Button,
    ButtonToolbar,
    ButtonGroup,
    InputGroup,
    FormControl
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'


const AdminArticles = () => {
    const articles = useSelector(state=>state.articles);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [removeAlert,setRemoveAlert] = useState(false);
    const [toRemove,setToRemove] = useState(null);

    const handleClose = () => setRemoveAlert(false);
    const handleShow = (id=null) => {
        setToRemove(id)
        setRemoveAlert(true)
    }

    //// START PAGINATION COMMANDS 
    const goToPrevPage = (page) => {
        dispatch(getPaginateArticles({page}))
    }   

    const goToNextPage = (page) => {
        console.log(page)
        dispatch(getPaginateArticles({page}))
    }   
    const goToEdit = (id) => {
        navigate(`/dashboard/articles/edit/${id}`)
    }

    const handleStatusChange = (status,_id) => {
        let newStatus = status === 'draft' ? 'public':'draft';
        dispatch(changeStatusArticle({newStatus,_id}))
    }
    const handleDelete = () => {
        dispatch(removeArticle(toRemove))
        .unwrap()
        .finally(()=>{
            setRemoveAlert(false);
            setToRemove(null)
        })
    }



    //// END PAGINATION COMMANDS 

    useEffect(()=>{
        dispatch(getPaginateArticles({}))
    },[])


    return(
        <>
        <AdminTitle title="Articles"/>
        <div className='articles_table'>
            <ButtonToolbar className='mb-3'>
                <ButtonGroup className='me-2'>
                    <LinkContainer to="/dashboard/articles/add">
                        <Button variant='secondary'>Add articles</Button>
                    </LinkContainer>
                </ButtonGroup>
                <form>
                    <InputGroup>
                        <InputGroup.Text id="btngrp1">@</InputGroup.Text>
                        <FormControl
                            type='text'
                            placeholder='Search'
                        />
                    </InputGroup>
                </form>
            </ButtonToolbar>

            <>
                <PaginateComponent
                    articles={articles.adminArticles}
                    goToPrevPage={(page)=> goToPrevPage(page)}
                    goToNextPage={(page)=> goToNextPage(page)}
                    goToEdit={(id)=> goToEdit(id)}
                    handleStatusChange={(status,id)=>handleStatusChange(status,id)}
                    handleShow={(id=>handleShow(id))}


                />
            </>


            <Modal show={removeAlert} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title> Are you really sure ?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    There is no going back.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={handleClose}>
                        Oops, close this.
                    </Button>
                    <Button variant='danger' onClick={()=>handleDelete()}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>


        </div>
        </>
    )

}

export default AdminArticles;