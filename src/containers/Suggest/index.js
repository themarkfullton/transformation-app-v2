import React from "react";
import ResourceTypes from "./APIResourceTypes.json";

class Suggest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            type: '',
            url: '',
            message: '',
            email: ''
        }

        this.onNameChange = this.onNameChange.bind(this);
        this.onTypeChange = this.onTypeChange.bind(this);
        this.onUrlChange = this.onUrlChange.bind(this);
        this.onMessageChange = this.onMessageChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
    }

    onNameChange(e) {
        this.setState({name: e.target.value})
    }

    onTypeChange(e) {
        this.setState({type: e.target.value})
    }

    onUrlChange(e) {
        this.setState({url: e.target.value})
        }
        
    onMessageChange(e) {
        this.setState({message: e.target.value})
    }

    onEmailChange(e) {
        this.setState({email: e.target.value})
    }

    handleSubmit(event) {
        }
    
    render() {
    return(
        <div className="suggestPage">
            <h1>Suggest a Resource</h1>
            <h2>PLEASE NOTE: THIS PAGE IS STILL UNDER CONSTRUCTION</h2>
            <p>Transformation is a project made by the trans community for the trans community. Please feel free to share any trans-friendly resource you have. If approved by our moderators, it will be added to the API where others can see it as well!</p>

            <h2>What can I suggest?</h2>
            <p>Any resource you feel would be helpful to the transgender community whether this be articles, books, or videos! If there isn't currently a category for the resource you'd like to suggest, please use the "Other" option. We might add a new one to the API!</p>

            <h2>Can I suggest my own clinic, media channel, blog or etc?</h2>
            <p>Of course! If you feel it's helpful for the trans community to know about, please feel free to share!</p>

            <h2>Is there anything I shouldn't submit?</h2>
            <p>First and foremost--anything that will threaten transgender individuals or put them in danger. Think before submitting: Is this something I feel will truly help the transgender community?</p>

            <h2>Why do you ask for my e-mail?</h2>
            <p>Your email isn't required, but if you provide it, our moderators can contact you saying whether the resource was approved and why / why not.</p>


        <form id="contact-form" onSubmit={this.handleSubmit} method="POST">
          <div className="form-group">
            <label htmlFor="name">Resource Name</label>
            <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange} required />
          </div>
          <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Resource Type</label>
                    <select id="dropdown" onChange={this.onTypeChange} >
                        {ResourceTypes.map((type, idx) => {
                            return(
                                <option id="dropOpt" key={idx} value={type.name}>{type.name}</option>
                            )
                        })}
                    </select>
                    </div>
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea className="form-control" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default Suggest;