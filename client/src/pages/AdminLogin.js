import React from 'react'
import { Form, Input, message} from 'antd'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import '../styles/loginstyle.css'
import {useDispatch} from 'react-redux'
import { showLoading, hideLoading } from '../redux/features/alertSlice'

const AdminLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //form handler
  const onFinishHandler = async (values) => {
    try{
      dispatch(showLoading())
      const res = await axios.post('/api/v1/admin/adminLogin', values);
      dispatch(hideLoading())
      if (res.data.success){
        localStorage.setItem("token", res.data.token);
        message.success("Login Successfully");
        navigate('/dashboard');
      }
      else{
        message.error(res.data.message);
      }

    }
    catch(error){
      dispatch(hideLoading())
      console.log(error);
      message.error("Something went wrong");
    }
  }
  return (
    <div className="form-container">
      <Form layout="vertical" onFinish={onFinishHandler} className="login-form">
        <h3>Admin Login</h3>
        <Form.Item label="Number" name="number">
          <Input type="tel" prefix="+91" maxLength={10} minLength={10} required />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input.Password type="password" minLength={6} required />
        </Form.Item>
        <button className="btn btn-primary" type="submit">Login</button>
      </Form>
    </div>
  )
}

export default AdminLogin