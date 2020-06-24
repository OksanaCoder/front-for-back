import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class Test extends Component {
    constructor(props) {
      super(props);
      this.state = {
        userId : 0,
        id : 0,
        title : '',
        completed : false
     }
   
     this.handleChange = this.handleChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
    }
  

    handleChange = (e) => {
      
    
        this.setState({
           
                [e.target.name]: e.target.value 
                
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            completed: true
        })
        alert('Your data sent successfully');
        
        fetch('https://jsonplaceholder.typicode.com/todos', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(this.state) // trying to send this text to the server
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
              <h1>Enter your personal data</h1>

              <Form onSubmit={this.handleSubmit}>
                   <Form.Group controlId="name">
                        <Form.Label>UserId</Form.Label>
                        <Form.Control onChange={this.handleChange} type="number" name="userId" placeholder="Enter id"  value={this.state.userId}/>
                    </Form.Group>
                    <Form.Group controlId="surname">
                        <Form.Label>Id</Form.Label>
                        <Form.Control onChange={this.handleChange} type="number" name="id" placeholder="Enter id" value={this.state.id}/>
                    </Form.Group>
                    <Form.Group controlId="email">
                        <Form.Label>Title</Form.Label>
                        <Form.Control  onChange={this.handleChange} type="text" name="title" placeholder="Enter email" value={this.state.title}/>
                    </Form.Group>

                    
                  
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    </Form>

                    
               </div>
             {this.state.completed ? 
                            <div className='container mt-4'>
                                <ul className='list-unstyled'>
                                <li>{this.state.userId}</li>
                                <li>{this.state.id}</li>
                                <li>{this.state.title}</li>
                                
                                </ul>
                            </div>
                        :
                        null }    
                      
               </>
        )
    }
}


export default Test;