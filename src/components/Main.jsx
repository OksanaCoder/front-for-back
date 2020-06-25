import React, { Component } from 'react';
import { Form, Button, Table, Modal} from 'react-bootstrap';

class Main extends Component {
    constructor(props) {
      super(props);
      this.state = {
          data: [],
          search: '',
        name : '',
        surname: '',
        email: '', 
        id: 0, 
        date: '',
        submitted: false, 
        show: false,
        setShow: false
     }
   
  
    }


     handleClose = () => {
         this.setState({show: false, setShow: false})
     }
  
    handleChange = (e) => {
      
    
        this.setState({
           
                [e.target.name]: e.target.value 
                
        })
    }
    

    componentDidMount = () => {
        fetch('http://localhost:3001/users')
        .then(response => response.json())
        .then(data => this.setState({ data }));
            
    }
    searchUsers = async () => {
        fetch('http://localhost:3001/users/' + this.state.name)
        .then(response => response.json())
        .then(data => this.setState({ data }));
    }
    deleteItem = async (e) => {
        e.preventDefault()
        fetch('http://localhost:3001/users/' + this.state.id, {
            method: 'DELETE',
            
        })
        .then(response => response.json())
        .then(data => this.setState({ data }));
       
    }
    handleShow = async () => {
        this.setState({show: true, setShow: true})

    }

    addItem = async (e) => {
      
        e.preventDefault();
        this.setState({
            submitted: true,
            show: false, 
            setShow: false
        })
        alert('Your data sent successfully');
        
        fetch('http://localhost:3001/users', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(this.state)
        })
            .then((response) => {
                console.log('success writing to server', response)
            })
            .catch((err) => {
                console.log('error writing to server', err);
            })
    }
   

    render(){
        return (
            <>
            <div className='container'>
           
                <input type='text' value={this.state.search} onChange={ e => this.setState({search: e.currentTarget.value})} />
                <Button variant="outline-info" onClick={this.searchUsers}>Search</Button>
          
            
                  <Table striped bordered hover size="sm" className='mt-3'>
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
                    
        {this.state.data.map((elem, i) => {
                  return(  
                    <tr key={i}>         
                     <td>{elem.id}</td>
                      <td>{elem.name}</td>
                      <td>{elem.surname}</td>
                      <td>{elem.email}</td>
                      <td>{elem.birthDate}</td>
                      <td><Button variant="outline-info" onClick={this.changeItem}>Edit</Button></td>
                      <td><Button variant="outline-danger" onClick={this.deleteItem}>Delete</Button></td>
                    </tr>
                       )
                    })}
                  </tbody>
                </Table>
                <Button variant='outline-dark' onClick={this.handleShow}>Add</Button>
             
                <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Fill the form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form onSubmit={this.handleSubmit}>
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

                
                    <Form.Group controlId="date">
                        <Form.Label>Date of Birth</Form.Label>
                        <Form.Control  onChange={this.handleChange} type="date" name="date" value={this.state.date}/>
                    </Form.Group>

                  
                    
                    </Form> 
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={this.addItem}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
            

                
                    
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