import React, { Component } from 'react';
import { Form, Button, Table} from 'react-bootstrap';

class Main extends Component {
    constructor(props) {
      super(props);
      this.state = {
          data: [],
        name : '',
        surname: '',
        email: '', 
        id: 0, 
        date: '',
        submitted: false
     }
   
    //  this.handleChange = this.handleChange.bind(this);
    //  this.handleSubmit = this.handleSubmit.bind(this);
    }
  

    // handleChange = (e) => {
      
    
    //     this.setState({
           
    //             [e.target.name]: e.target.value 
                
    //     })
    // }
    

    componentDidMount = () => {
        fetch('http://localhost:3001/users')
        .then(response => response.json())
        .then(data => this.setState({ data }));
            
    }
    // handleSubmit = (e) => {
    //     e.preventDefault();
    //     this.setState({
    //         submitted: true
    //     })
    //     alert('Your data sent successfully');
        
    //     fetch('http://localhost:3001/users', {
    //         method: "POST",
    //         headers: {"Content-Type": "application/json"},
    //         body: JSON.stringify(this.state) // trying to send this text to the server
    //     })
    //         .then((response) => {
    //             console.log('success writing to server', response)
    //         })
    //         .catch((err) => {
    //             console.log('error writing to server', err);
    //         })
    // }
    render(){
        return (
            <>
            <div className='container'>
              
                  <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Surname</th>
                      <th>Email</th>
                      <th>Date Of Birth</th>
                      <th>Edit</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    
        {this.state.data.map(elem => {
                  return(  
                    <tr>         
                     <td>{elem.id}</td>
                      <td>{elem.name}</td>
                      <td>{elem.surname}</td>
                      <td>{elem.email}</td>
                      <td>{elem.birthDate}</td>
                      <td><Button variant="outline-info">Edit</Button></td>
                      <td><Button variant="outline-danger">Delete</Button></td>
                    </tr>
                       )
                    })}
                  </tbody>
                </Table>
             

              {/* <Form onSubmit={this.handleSubmit}>
                   <Form.Group controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control onChange={this.handleChange} type="text" name="name" placeholder="Enter name"  value={this.state.name}/>
                    </Form.Group>
                    <Form.Group controlId="surname">
                        <Form.Label>Surname</Form.Label>
                        <Form.Control onChange={this.handleChange} type="text" name="surname" placeholder="Enter surname" value={this.state.surname}/>
                    </Form.Group>
                    <Form.Group controlId="email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control  onChange={this.handleChange} type="email" name="email" placeholder="Enter email" value={this.state.email}/>
                    </Form.Group>

                    <Form.Group controlId="id">
                        <Form.Label>ID</Form.Label>
                        <Form.Control  onChange={this.handleChange} type="number" name="id" placeholder="Enter ID" value={this.state.id}/>
                    </Form.Group>

                    <Form.Group controlId="date">
                        <Form.Label>Date of Birth</Form.Label>
                        <Form.Control  onChange={this.handleChange} type="date" name="date" value={this.state.date}/>
                    </Form.Group>

                  
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    </Form> */}

                    
               </div>
             {/* {this.state.submitted ? 
                            <div className='container mt-4'>
                                <ul className='list-unstyled'>
                                <li>{this.state.name}</li>
                                <li>{this.state.surname}</li>
                                <li>{this.state.email}</li>
                                <li>{this.state.id}</li>
                                <li>{this.state.date}</li>
                                </ul>
                            </div>
                        :
                        null }     */}
               </>
        )
    }
}


export default Main;