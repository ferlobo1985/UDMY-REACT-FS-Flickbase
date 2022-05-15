import { Outlet } from 'react-router-dom';
import AdminLayout from '../../hoc/admin.Layout';

const Dashboard = () => {
    return(
        <AdminLayout>
            <Outlet/>
        </AdminLayout>
    )
}

export default Dashboard;