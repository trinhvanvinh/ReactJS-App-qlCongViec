import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TaskForm from './components/TaskForm';
import Control from './components/Control';
import TaskList from './components/TaskList';
import { createCipher } from 'crypto';
import _ from 'lodash'

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      tasks:[],
      isDisplay:false,
      taskEditing:null,
      filter:{
        name:'',
        status:-1
      },
      keyword:'',
      sortBy:'name',
      sortValue:1
    }
  }

  componentWillMount(){

    console.log("componentWillMount")

    if(localStorage && localStorage.getItem('tasks')){
      var tasks=JSON.parse(localStorage.getItem('tasks'));
      this.setState({
          tasks:tasks
      });
    }
    

  }

  // onGenarateData =() => {
  //   console.log("ongenarate");

  //   var tasks=[
  //     {
  //       id : this.generateID(),
  //       name:'React JS',
  //       status:true
  //     },
  //     {
  //       id : this.generateID(),
  //       name:'Angular js',
  //       status:false
  //     },
  //     {
  //       id : this.generateID(),
  //       name:'Android',
  //       status:true
  //     },
  //     {
  //       id : this.generateID(),
  //       name:'IOS',
  //       status:false
  //     },
  //     {
  //       id : this.generateID(),
  //       name:'Python',
  //       status:true
  //     },
  //     {
  //       id : this.generateID(),
  //       name:'HTML CSS',
  //       status:false
  //     },
  //     {
  //       id : this.generateID(),
  //       name:'Javascript',
  //       status:true
  //     },
  //     {
  //       id : this.generateID(),
  //       name:'Emberded',
  //       status:false
  //     }

  //   ];

  //   console.log(tasks);
  //   this.setState({
  //     tasks:tasks
  //   });

  //   localStorage.setItem('tasks',JSON.stringify(tasks));
  // }

  s4(){
    return Math.floor((1+Math.random())*0x10000).toString(16).substring(1) ; 
  }

  generateID(){
    return this.s4()+this.s4()+'-'+this.s4()+'-'+this.s4()+'-'+this.s4()+"-"+
    this.s4()+this.s4()+this.s4() ;
  }

  onToggleForm=()=>{
    if(this.state.isDisplay && this.state.taskEditing!== null){
      this.setState({
        isDisplay:true,
        taskEditing:null
      });
    }else{
      this.setState({
        isDisplay:!this.state.isDisplay,
        taskEditing:null
      });
    }
   
  }

  onCloseForm=()=>{
    console.log('onCloseForm');

    this.setState({
      isDisplay:false
    })

  }

  onShowForm=()=>{
    console.log('onShowForm');

    this.setState({
      isDisplay:true
    })
  }

  onSubmit=(data)=>{
    console.log("data "+JSON.stringify(data) );

    var {tasks} =this.state;

    if(data.id===''){
      data.id=this.generateID();
      tasks.push(data);
    }else{

      var index=this.finIndex(data.id);
      tasks[index]=data;

    }
    this.setState({
      tasks:tasks,
      taskEditing:null
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));

  }

  onUpdateStatus=(id)=>{
    console.log("app "+id);
    var {tasks} = this.state;
   // var index=this.finIndex(id);

   var index=_.findIndex(tasks,(task)=>{
      return task.id===id;
   });

    console.log(index);
    if(index !== -1){
      tasks[index].status= !tasks[index].status;
      this.setState({
        tasks:tasks
      });
      localStorage.setItem('tasks',JSON.stringify(tasks));
    }

  }

  

  finIndex=(id)=>{
    var {tasks}=this.state;
    var result=-1;
    tasks.forEach((task, index)=>{
      if(task.id===id){
        result = index;
      }
    });
    return result;
  }

  onDelete=(id)=>{
   console.log("ondelete");
    var {tasks} = this.state;
    var index=this.finIndex(id);
    if(index !== -1){
      tasks.splice(index, 1);
      this.setState({
        tasks:tasks
      });
      localStorage.setItem('tasks',JSON.stringify(tasks));
    }
    this.onCloseForm();
  }

  onUpdate=(id)=>{
    console.log("id "+id);

    var {tasks}=this.state;
    var index=this.finIndex(id);
    // console.log(index);
    // this.setState({
    //   taskEditing:  tasks[index]
    // });
    // console.log(this.state.taskEditing);

    var taskEditing=tasks[index];
    console.log(taskEditing);
    this.setState({
      taskEditing:taskEditing
    });

    this.onShowForm();

  }

  onFilter=(filterName, filterStatus)=>{
    console.log(filterName+" "+filterStatus)
    filterStatus=parseInt(filterStatus,0);
    console.log(typeof filterStatus)

    this.setState({
      filter:{
        name:filterName.toLowerCase(),
        status:filterStatus
      }
    })

  }

  onSearch=(keyword)=>{
    console.log(keyword)

    this.setState({
      keyword:keyword
    });

  }

  onSort=(sortBy, sortValue)=>{

    this.setState({
      sortBy:sortBy,
      sortValue: sortValue
    })

    console.log(this.state);
  }

  render() {



    var {tasks, isDisplay, taskEditing, filter, keyword, sortBy, sortValue} = this.state;

    console.log(filter)

    if(filter){
      if(filter.name){
        tasks = tasks.filter((task)=>{
          return task.name.toLowerCase().indexOf(filter.name) !==-1;
        })
      }

      // if(filter.status){
        tasks=tasks.filter((task)=>{
          if(filter.status===-1){
            return task;
          }else{
            return task.status===  (filter.status ===1 ?true:false );
          }
        })
      // }

      if(sortBy==='name'){
        tasks.sort((a,b)=>{
          if(a.name>b.name) return sortValue;
          else if(a.name<b.name) return -sortValue;
          else return 0;
        })
      }else{
        tasks.sort((a,b)=>{
          if(a.status>b.status) return -sortValue;
          else if(a.status<b.status) return sortValue;
          else return 0;
        })
      }

    }

    // if(keyword){
    //   tasks=tasks.filter((task)=>{
    //     return task.name.toLowerCase().indexOf(keyword)!==-1;
    //   });
    // }

    tasks=_.filter(tasks, (task)=>{
      return task.name.toLowerCase().indexOf(keyword.toLocaleLowerCase()) !==-1
    })

    var elmTaskForm= isDisplay ? < TaskForm 
    onSubmit={this.onSubmit}
    onCloseForm={this.onCloseForm} 
    task={taskEditing}
    />:'';

    return (
      
      <div className="container">
        <div className="text-center" >
          <h1>Work Management </h1><hr/>
        </div>

        
        <div className="row">
          
          <div className={isDisplay?'col-xs-4 col-sm-4 col-md-4 col-lg-4':''}>
            {/* form */}

            {elmTaskForm}

          </div>
          
          
          <div className={isDisplay ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8':'col-xs-12 col-sm-12 col-md-12 col-lg-12' }>
            
            <button
            onClick={this.onToggleForm}
             type="button" 
             className="btn btn-primary">
              <span className="fa fa-plus mr-5" ></span>
            Add Work</button>

            {/* <button type="button" className="btn btn-danger ml-5" 
            onClick ={this.onGenarateData}
            >
            Generate Data</button> */}
            
              <Control
               onSearch={this.onSearch} 
              onSort={this.onSort}
              sortBy={sortBy}
              sortValue={sortValue}
              />

            {/* LIST */}

            <div className="row mt-15" >

                
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  
                  {/* TaskList */}

                  <TaskList tasks={tasks}
                   onUpdateStatus={this.onUpdateStatus}
                    onDelete={this.onDelete}
                    onUpdate={this.onUpdate}
                    onFilter={this.onFilter}
                  />
                

                </div>
                

            </div>
            
            
          </div>
          

        </div>
        

      </div>
      
    );
  }
}

export default App;
