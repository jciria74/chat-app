import React, {Component} from 'react';
import './Contact.scss';

class Contact extends Component {

  constructor(props){
    super(props);
    this.state = {
      onlineStatus: props.onlineStatus
    }
  }

  render(){
    return(
      <div className="Contact">
        <img src={this.props.image} alt={this.props.name} className="avatar"/>
        <div>
          <p className="name">{this.props.name}</p>
          <div className="status" onClick={()=>{this.setState({onlineStatus: !this.state.onlineStatus})}}>
              {
                this.state.onlineStatus
                ? <div>
                    <div className="status-online"></div>
                    <p className="status-text">online</p>
                  </div>
                : <div>
                    <div className="status-offline"></div>
                    <p className="status-text">offline</p>
                  </div>
              }
          </div>
        </div>
      </div>
    )
  }

}


export default Contact



