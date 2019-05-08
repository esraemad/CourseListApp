import React, {Component,Fragment} from 'react';


class CourseList extends Component {
    
    state ={
     isEdit :false 
    }

    //redndercourse
    rendercourse = () =>
    {
        return(
            <li>
            <span>{this.props.dteails.name}</span>
            <button onClick={ ()=> {this.toggleState()}}>Edit Course</button>
            <button onClick={ () => {this.props.deletecourse(this.props.index)}}>Delete Course</button>
        </li>
        )
    }
        //togglestate
        toggleState = () =>{
            let isEdit=this.state.isEdit;
            this.setState({
                isEdit: !isEdit
            })
        }
    
        //updatecourseitem
        updatecourseitem =(e) =>
        {
            e.preventDefault();
            this.props.editcourse(this.props.index, this.input.value);
            this.toggleState();
        }
    


    //rednerupdatecourse 

    renderUpdateCourse = () =>
    {
     return(
        <form onSubmit ={this.updatecourseitem}>
        <input type="text" ref={(v) => {this.input=v}} defaultValue={this.props.dteails.name}/>
        <button>Update Course</button>
        </form>
     )
    }
    

 render(){
     let isEdit = this.state.isEdit
  return (
    <Fragment>
        { isEdit? this.renderUpdateCourse() : this.rendercourse()}
    </Fragment>
  );
 }
}


export default CourseList;
