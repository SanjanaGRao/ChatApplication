import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

class ActiveUsers extends Component {
  render() {
    return (
      <div className="activeUsers">
        <h2 className="headline">Active users</h2>
        <div id="users">
          <ul>
            {this.props.users.map((user, index) => (
              <li key={index}>
                <FontAwesomeIcon icon={faCircle} size="xs"></FontAwesomeIcon>
                <span>{user}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default ActiveUsers;
