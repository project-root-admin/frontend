//Create Signup card component using Input and Button components from src/components/common
import React, {useState} from 'react';
import Button from './common/Button';
import Input from './common/Input';
import Select from './common/Select';
import { ADD_USER } from '../graphql/mutation';
import { useMutation } from '@apollo/client';

const SignupForm = () => {

    const [addUser, {data, loading, error}] = useMutation(ADD_USER);
    const [selectedOption, setSelectedOption] = useState('');
    const [payload, setPayload] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        roles: []
    })

    const options = [
        { value: 'admin', label: 'Admin' },
        { value: 'user', label: 'User' },
        { value: 'guest', label: 'Guest' },
      ];
    
      const handleSelectChange = (event) => {
        console.log(payload)
        const { name, value } = event.target;
        setPayload({
            ...payload,
            [name]: [value]
        })

      };
    
    const handleSubmit = async(e) => {
        e.preventDefault();
        await addUser({
            variables: {
                input: payload
            }
        }).then((result) => {
            console.log('User Successfully Added', result);
        }).catch((error) => {
            console.log("Unable to add user", error.msg)
        })
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPayload({
            ...payload,
            [name]: value
        })
    
    }

    return (
        <form onSubmit={handleSubmit}>  
    

      <Input type="firstname" name="firstname" value={payload.firstname} placeholder="Please Enter your Firstname" onChange={handleChange}/>
      <Input type="lastname" name="lastname" value={payload.lastname} placeholder="Please Enter your Lastname" onChange={handleChange}/>
      <Input type="email" name="email" value={payload.email} placeholder="Please Enter your Email" onChange={handleChange}/>
      <Input type="password" name="password" value={payload.password} placeholder="Please Enter your password" onChange={handleChange}/>
      <Select name="roles" options={options} value={payload.roles[0]} onChange={handleSelectChange}/>
      <Button  type="submit" text={"Signup"} />
        </form>
    )
}

export default SignupForm
