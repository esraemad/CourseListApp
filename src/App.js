import React, {Component} from 'react';
import CourseForm from './Components/CourseForm'
import CourseList from './Components/CourseList'

class App extends Component {
  state = {
   courses :[
     {name:"HTML"},
     {name:"Css"},
     {name:"Javascript"}

   ],
   curent : ""
  }

  //updae course 
  updatecourse = (e) =>
  {
   this.setState({
     curent:e.target.value
   })
  }
  
  //add course 
  addcourse = (e) =>
  {
    e.preventDefault ();
    let curent = this.state.curent;
      let courses = this.state.courses;
      courses.push({name:curent})
      this.setState({
        courses,
        curent:''
      })

  }

  //delete courses

 deletecours = (index) =>
  {
    let courses = this.state.courses;
    courses.splice(index,1);
    this.setState({
      courses
    })

  }

  //edit course

  eitcourse = (index,value) =>
  {
    let courses = this.state.courses;
    let course = courses[index];
    course["name"]=value;
    this.setState({
      courses
    })


  }

 render(){
   const courses = this.state.courses;
   const courseList = courses.map ((course , index)=>{
     return  <CourseList dteails={course} key={index} index={index} 
     deletecourse={this.deletecours} editcourse ={this.eitcourse} />
   })
  return (
    <div className="App"> 
      <h2>Add Course</h2>
      <CourseForm curent = {this.state.curent} updatecourse={this.updatecourse} addcourse={this.addcourse}/>
      <ul>{courseList}</ul>
     

    </div>
  );
 }
}

export default App;
