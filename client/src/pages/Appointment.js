import React from 'react'
import {Form, Input, message} from 'antd';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import '../styles/appointmentstyle.css'
import { useDispatch } from 'react-redux';
import { showLoading, hideLoading } from '../redux/features/alertSlice';

const Appointment = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onFinishHandler = async (values) => {
    try{
      dispatch(showLoading())
      const res = await axios.post('/api/v1/user/appointment', values);
      dispatch(hideLoading())
      if (res.data.success){
        message.success("Appointment Booked Successfully");
        navigate('/');
      }
      else{
        message.error(res.data.message);
      }
    }
    catch(error){
      dispatch(hideLoading())
      console.log(error);
      message.error("Something went error");
    }
  }
  return (
    <>
      <div className='form-container'>
        <Form layout = 'vertical' onFinish={onFinishHandler} className='book-form'>
          <img src={require("../pictures/logo.png")} alt="Tooth Icon" className="tooth-icon" />
          <h3>Book an Appointment</h3>
          <Form.Item label = "Name" name = "name">
            <Input type = 'text' required />
          </Form.Item>
          <Form.Item label = "Number" name = "number">
            <Input type = 'tel' prefix = '+91' minLength='10' maxLength='10' required />
          </Form.Item>
          <Form.Item label = "Date" name = "date">
            <Input type = 'date' required />
          </Form.Item>

          <button className = 'btn btn-primary' type = "submit">Book</button>
        </Form>
      </div>
    </>
  )
}

export default Appointment