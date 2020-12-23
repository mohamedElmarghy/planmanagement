import React from 'react';
import { Link } from 'react-router-dom';
import ProjectSummary from './ProjectSummary';
class ProjectList extends React.Component {
    renderProjects = () => {
        if (this.props.projects) {
        return this.props.projects.map(project => {
            return <Link to={`projects/${project.id}`}  key={project.id}><ProjectSummary project={project}/></Link> 
        })
    }}
    render() {
        return (
            <div className="project-list section">
               {this.renderProjects()}
            </div>
        )
    }
}
export default ProjectList;