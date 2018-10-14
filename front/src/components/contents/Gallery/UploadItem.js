import React, { Component } from 'react';
import UpItem from './UpItem'

export default class UploadItem extends Component {
    constructor() {
        super()
        this.state = {
            title: '',
            description: '',
            category: '',
            image: null,
            error: ''
        }
        this.service = new UpItem();
    }

    handleChange(e) {
        this.setState({
          image: e.target.files[0]
        })
      }
    
    handleSubmit(e) {
        e.preventDefault()
        let { title, description, category } = this.state;
        
        this.service.addPicture(this.state.image, title, description, category )
        this.setState({ error: '', title: '', description: '', category: '' });
    }

    render() {
        let { title, description, category, error } = this.state;
        return (
            <div>
                <form onSubmit={(e)=>this.handleSubmit(e)}>
                    <p style={{ color: "red" }}>{error}</p>
                    <label>Title</label>
                    <input type="text" name='title' placeholder='Title' value={title} onChange={(e) => this.setState({ title: e.target.value })} />
                    <label>Description</label>
                    <input type="text" name='description' placeholder='Description' value={description} onChange={(e) => this.setState({ description: e.target.value })} />
                    <label>Category</label>
                    <input type="text" name='category' placeholder='Category' value={category} onChange={(e) => this.setState({ category: e.target.value })} />
                    <label>Image</label>
                    <input type="file" name='photo' placeholder='Image' onChange={(e)=>this.handleChange(e)} />
                    <button onClick={this.handleSubmit.bind(this)}>Submit</button>
                </form>
            </div>
        )
    }
}