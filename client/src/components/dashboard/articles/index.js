import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { AdminTitle } from '../../../utils/tools'
import PaginateComponent from './paginate';

import { useDispatch, useSelector } from 'react-redux';
import { getPaginateArticles } from '../../../store/actions/articles'

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
                />
            </>


        </div>
        </>
    )

}

export default AdminArticles;