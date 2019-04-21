import React, { Component } from 'react';

class TaskForm extends Component {

    constructor(props){
      super(props);
      this.state={
        id:'',
        name:'',
        status: false
      }
    }

    componentWillMount(){
      console.log('componentWillMount')
      if(this.props.task){
        this.setState({
           id:this.props.task.id ,
           name:this.props.task.name,
           status:this.props.task.status
        });
        console.log(this.state);
      }
    }

    componentWillReceiveProps(nextProps){
      console.log('componentWillReceiveProps'+nextProps);
      if(nextProps && nextProps.task){
        this.setState({
           id:nextProps.task.id ,
           name:nextProps.task.name,
           status:nextProps.task.status
        });
        console.log(this.state);
      }else if(!nextProps.task){
        console.log('sua to them')

        this.setState({
          id:'',
          name:'',
          status:false
        })

      }
    }

    onCloseForm=()=>{
        this.props.onCloseForm();
    }

    onChange=(event)=>{
      var target=event.target;
      var name=target.name;
      var value=target.value;

      if(name==='status'){
        value=target.value==='true'?true:false
      }

      this.setState({
        [name]:value
      })

    }

    onSubmit=(event)=>{
        event.preventDefault();
        console.log(this.state)
        this.props.onSubmit(this.state );

        this.onClear();
        this.onCloseForm();
    }

    onClear=()=>{
      this.setState({
        name:'',
        status:false
      })
      this.onCloseForm();
    }

    render() {

      var {id}=this.state;

      return (
        <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title">
            {id !==''?'Update Work':'Add Work'}
            <span
              className="fa fa-times-circle text-right"
              onClick={this.onCloseForm}
            ></span>
          </h3>
        </div>

         <div className="panel-body">
             
             <form onSubmit = {this.onSubmit}>
               <div className="form-group">
                 <label >Name: </label>
                 <input
                  type="text" 
                  className="form-control" 
                  placeholder="Name"
                  name="name"
                  value={this.state.name}
                  onChange={this.onChange}
                  />
               </div>
               <label >Status: </label>

               <select 
                name="status" 
                className="form-control" 
                value={this.state.status}
                onChange={this.onChange}
               >
                 <option value={true}>Active</option>
                 <option value={false}>Hide</option>
               </select><br/>
               
               <div className="text-center" >
                  
                  <button type="submit" className="btn btn-warning">
                    <span className="fa fa-plus mr-5" ></span>SAVE
                  </button>&nbsp;

                  <button onClick={this.onClear} type="button" className="btn btn-danger">
                    <span className="fa fa-close mr-5" ></span>CANCEL
                  </button>

                  
               </div>

               {/* <button type="submit" className="btn btn-primary">Submit</button> */}
             </form>
             
        </div>
       

    </div>

      );
    }
}

export default TaskForm;