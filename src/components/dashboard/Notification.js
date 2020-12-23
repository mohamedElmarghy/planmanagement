import React from 'react';
class Notification extends React.Component {
    render() {
        return (
            <div className="section">
            <div className="card z-depth-0">
              <div className="card-content">
                <span className="card-title">Notifications</span>
                <ul className="online-users">
                  <li>Firebase function isn't free anymore</li>
                </ul>
              </div>
            </div>
          </div>
        )
    }
}
export default Notification;