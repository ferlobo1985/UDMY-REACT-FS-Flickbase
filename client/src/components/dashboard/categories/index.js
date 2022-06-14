import { useEffect } from 'react'
import { AdminTitle  } from '../../../utils/tools';
import AddCategory from './addCategory'

import { useDispatch, useSelector} from 'react-redux';
import { getCategories } from '../../../store/actions/articles';

import { Table, Row, Col } from 'react-bootstrap'

const AdminCategories  = () => {
    const articles = useSelector(state=>state.articles);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getCategories({}))
    },[dispatch])

    return(
        <>
            <AdminTitle title="Categories"/>
            <Row>
                <Col>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            { articles.categories ?
                                articles.categories.map(item =>(
                                    <tr key={item._id}>
                                        <td>{item.name}</td>
                                    </tr>
                                ))
                            :null}
                        </tbody>
                    </Table>
                </Col>
                <Col>
                    <AddCategory/>
                </Col>
            </Row>
        </>
    )
}

export default AdminCategories;