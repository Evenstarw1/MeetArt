import React, { Component } from 'react';
import UpItem from './UpItem'
import './gallery.css';
import { Redirect } from "react-router-dom";

export default class UploadItem extends Component {
    constructor() {
        super()
        this.state = {
            title: '',
            description: '',
            category: '',
            image: null,
            error: '',
            redirect: false,
        }
        this.service = new UpItem();
    }

    handleChange(e) {
        this.setState({
            image: e.target.files[0],
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        let { title, description, category } = this.state;

        this.service.addPicture(this.state.image, title, description, category)
        .then(res => {
            console.log(res)
            this.setState({ redirect: true })
          })
          .catch(e => console.log("Error", e))
    }

    render() {
        let { title, description, category, error } = this.state;
        if (this.state.redirect) return <Redirect to='/profile' />
        return (
            <div className="form-box-upload">
                <h3>Upload your Art here</h3>
            <div className="form-upload">
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <div className="field">
                        <p style={{ color: "red" }}>{error}</p>
                        <label className="label label-text">Title</label>
                        <input classsName="input input-display" type="text" name='title' placeholder='Title' value={title} onChange={(e) => this.setState({ title: e.target.value })} />
                    </div>
                    <div className="field">
                        <label className="label label-text">Description</label>
                        <input classsName="input" type="text" name='description' placeholder='Description' value={description} onChange={(e) => this.setState({ description: e.target.value })} />
                    </div>
                    <div className="field">
                        <label className="label label-text">Category:</label>
                        <div class="control is-center">
                            <div class="select">
                                <select name="category" value={category} onChange={(e) => this.setState({ category: e.target.value })}>
                                    <option value="Traditional Art">Traditional Art</option>
                                    <option value="Digital Art">Digital Art</option>
                                    <option value="Photography">Photography</option>
                                    <option value="Literature">Literature</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="file is-boxed">
                        <label className="file-label">
                            <input className="file-input" type="file" name='photo' onChange={(e) => this.handleChange(e)} />
                            <span className="file-cta">
                                <span className="file-icon">
                                    <i className="fas fa-upload"></i>
                                </span>
                                <span className="file-label">
                                    Choose a file…
                                </span>
                            </span>
                        </label>
                    </div>

                    <button className="btn btn-grad" onClick={(e) => this.handleSubmit(e)}>Submit</button>
                </form>

            </div>
            </div>
        )
    }
}

