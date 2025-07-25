import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { message, Table } from 'antd';
import moment from 'moment'
import { useNavigate } from 'react-router-dom';
import '../styles/dashboardstyle.css'

const AdminDashboard = () => {
  const [patientData, setPatientData] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate('/');
  }
  const getAdminData = async () => {
    try {
      const res = await axios.post('/api/v1/admin/adminLogin', {}, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem('token')
        },
      });
      if (res.status === 200) {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
    } catch (error) {
      console.log(error);
      setIsAdmin(false);
    }
  };

  const getAppointments = async () => {
    try {
      const res = await axios.get('/api/v1/admin/appointment', {}, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem('token')
        },
      });
      if (res.data && res.data.data) {
        setPatientData(res.data.data);
      } 
    } catch (error) {
      console.log(error);
    }
  };
  const handleRemoveAppointment = async (record) => {
    try {
      const res = await axios.delete('/api/v1/admin/delete',{id : record._id}, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem('token')
        },
      });
      if (res.data.success) {
        message.success("Deleted Successfully")
        setPatientData(patientData.filter(appt => appt._id !== record._id));
      } else {
        console.log('Error deleting appointment:', res.data);
      }
    } catch (error) {
      console.log('Error deleting appointment:', error);
    }
  };
  useEffect(() => {
    getAdminData();
  }, []);

  useEffect(() => {
    if (isAdmin) {
      getAppointments();
    }
  }, [isAdmin]);

  const columns = [
    {
      title: 'S.No',
      dataIndex: 'serialNumber',
      render: (text, record, index) => index + 1,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      render: (text, record) => (
        <span>{record.name}</span>
      )
    },
    {
      title: 'Number',
      dataIndex: 'number',
      render: (text, record) => (
        <span>{record.number}</span>
      )
    },
    {
      title: 'Date',
      dataIndex: 'date',
      render: (text, record) => {
        return (
          <span>
            {moment(record.date).format('DD-MM-YYYY')}
          </span>
        );

      }
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      render: (text, record) => (
        <button onClick={() => handleRemoveAppointment(record)}>Remove</button>
      )
    }
  ];

  return (
    <div className="admin-dashboard">
      <div className="header">
        <h2>Admin Dashboard</h2>
        <button onClick={logout}>Logout</button>
        <button onClick={() => navigate('/')}>Homepage</button>
      </div>
      <div className="table-container">
        {patientData.length > 0 ? (
          <Table columns={columns} dataSource={patientData}  rowKey={(record) => record._id} />
        ) : (
          <div className="no-data-found">No data found</div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;