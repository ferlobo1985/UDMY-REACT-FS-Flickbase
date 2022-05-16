import { Table, Pagination} from 'react-bootstrap';
import { Loader } from '../../../utils/tools';
import Moment from 'react-moment';


const PaginateComponent = ({
    articles,
    goToPrevPage,
    goToNextPage,
    goToEdit,
    handleStatusChange,
    handleShow
}) => {


    return(
        <>
            { articles && articles.docs ?
                <>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Created</th>
                                <th>Title</th>
                                <th>Score</th>
                            </tr>
                        </thead>
                        <tbody>
                            { articles.docs.map(item=>(
                                <tr key={item._id}>
                                    <td><Moment to={item.date}></Moment></td>
                                    <td>{item.title}</td>
                                    <td>{item.score}</td>
                                    <td className='action_btn remove_btn'
                                        onClick={()=> handleShow(item._id) }
                                    >
                                        Remove
                                    </td>
                                    <td className='action_btn edit_btn'
                                        onClick={()=> goToEdit(item._id)}
                                    >
                                        Edit
                                    </td>
                                    <td className='action_btn status_btn'
                                        onClick={()=> handleStatusChange(item.status,item._id)}
                                    >
                                        {item.status}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <Pagination>
                        { articles.hasPrevPage ?
                            <>
                                <Pagination.Prev 
                                    onClick={()=> goToPrevPage(articles.prevPage)}
                                />
                                <Pagination.Item
                                    onClick={()=> goToPrevPage(articles.prevPage)}
                                >
                                    {articles.prevPage}
                                </Pagination.Item>
                            </>
                            :null
                        }
                        <Pagination.Item active>{articles.page}</Pagination.Item>
                        { articles.hasNextPage ?
                            <>
                                <Pagination.Item
                                    onClick={()=> goToNextPage(articles.nextPage)}
                                >
                                    {articles.nextPage}
                                </Pagination.Item>
                                <Pagination.Next
                                    onClick={()=> goToNextPage(articles.nextPage)}
                                />
                            </>
                        :null
                        }

                    </Pagination>
                </>
            :
                <Loader/>
            }


        </>
    )

}

export default PaginateComponent