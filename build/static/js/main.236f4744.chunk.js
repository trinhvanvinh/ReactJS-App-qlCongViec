(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{130:function(e,t){},131:function(e,t){},177:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(82),l=a.n(o),r=(a(88),a(6)),c=a(7),i=a(9),m=a(8),u=a(10),p=(a(89),a(90),a(19)),d=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).onCloseForm=function(){a.props.onCloseForm()},a.onChange=function(e){var t=e.target,n=t.name,s=t.value;"status"===n&&(s="true"===t.value),a.setState(Object(p.a)({},n,s))},a.onSubmit=function(e){e.preventDefault(),console.log(a.state),a.props.onSubmit(a.state),a.onClear(),a.onCloseForm()},a.onClear=function(){a.setState({name:"",status:!1}),a.onCloseForm()},a.state={id:"",name:"",status:!1},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){console.log("componentWillMount"),this.props.task&&(this.setState({id:this.props.task.id,name:this.props.task.name,status:this.props.task.status}),console.log(this.state))}},{key:"componentWillReceiveProps",value:function(e){console.log("componentWillReceiveProps"+e),e&&e.task?(this.setState({id:e.task.id,name:e.task.name,status:e.task.status}),console.log(this.state)):e.task||(console.log("sua to them"),this.setState({id:"",name:"",status:!1}))}},{key:"render",value:function(){var e=this.state.id;return s.a.createElement("div",{className:"panel panel-warning"},s.a.createElement("div",{className:"panel-heading"},s.a.createElement("h3",{className:"panel-title"},""!==e?"Update Work":"Add Work",s.a.createElement("span",{className:"fa fa-times-circle text-right",onClick:this.onCloseForm}))),s.a.createElement("div",{className:"panel-body"},s.a.createElement("form",{onSubmit:this.onSubmit},s.a.createElement("div",{className:"form-group"},s.a.createElement("label",null,"Name: "),s.a.createElement("input",{type:"text",className:"form-control",placeholder:"Name",name:"name",value:this.state.name,onChange:this.onChange})),s.a.createElement("label",null,"Status: "),s.a.createElement("select",{name:"status",className:"form-control",value:this.state.status,onChange:this.onChange},s.a.createElement("option",{value:!0},"Active"),s.a.createElement("option",{value:!1},"Hide")),s.a.createElement("br",null),s.a.createElement("div",{className:"text-center"},s.a.createElement("button",{type:"submit",className:"btn btn-warning"},s.a.createElement("span",{className:"fa fa-plus mr-5"}),"SAVE"),"\xa0",s.a.createElement("button",{onClick:this.onClear,type:"button",className:"btn btn-danger"},s.a.createElement("span",{className:"fa fa-close mr-5"}),"CANCEL")))))}}]),t}(n.Component),h=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).onChange=function(e){var t=e.target,n=t.name,s=t.value;a.setState(Object(p.a)({},n,s))},a.onSearch=function(){console.log(a.state),a.props.onSearch(a.state.keyword)},a.state={keyword:""},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state.keyword;return s.a.createElement("div",{className:"col-xs-6 col-sm-6 col-md-6 col-lg-6"},s.a.createElement("div",{className:"input-group"},s.a.createElement("input",{name:"keyword",type:"text",className:"form-control",placeholder:"input key word",value:e,onChange:this.onChange}),s.a.createElement("span",{className:"input-group-btn"},s.a.createElement("button",{onClick:this.onSearch,type:"button",className:"btn btn-primary"},s.a.createElement("span",{className:"fa fa-search mr-5"}),"FIND"))))}}]),t}(n.Component),f=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).onClick=function(e,t){console.log(e,"-",t),console.log(a.state),a.props.onSort(e,t)},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentWillReceiveProps",value:function(e){console.log(e)}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"col-xs-6 col-sm-6 col-md-6 col-lg-6"},s.a.createElement("div",{className:"dropdown"},s.a.createElement("button",{type:"button",className:"btn btn-primary dropdown-toggle ",id:"dropdownMenu1","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"true"},"SORT",s.a.createElement("span",{className:"fa fa-caret-square-o-down m1-5"})),s.a.createElement("ul",{className:"dropdown-menu","aria-labelledby":"dropdownMenu1"},s.a.createElement("li",{onClick:function(){return e.onClick("name",1)}},s.a.createElement("a",{role:"button",className:"name"===this.props.sortBy&&1===this.props.sortValue?"sort_selected":""},s.a.createElement("span",{className:"fa fa-sort-alpha-asc pr-5"},"Name A-Z"))),s.a.createElement("li",{onClick:function(){return e.onClick("name",-1)}},s.a.createElement("a",{role:"button",className:"name"===this.props.sortBy&&-1===this.props.sortValue?"sort_selected":""},s.a.createElement("span",{className:"fa fa-sort-alpha-desc pr-5"},"Name Z-A"))),s.a.createElement("li",{role:"separator",className:"divider"}),s.a.createElement("li",{onClick:function(){return e.onClick("status",1)}},s.a.createElement("a",{role:"button",className:"status"===this.props.sortBy&&1===this.props.sortValue?"sort_selected":""},"Active")),s.a.createElement("li",{onClick:function(){return e.onClick("status",-1)}},s.a.createElement("a",{role:"button",className:"status"===this.props.sortBy&&-1===this.props.sortValue?"sort_selected":""},"Hide")))))}}]),t}(n.Component),g=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"row mt-15"},s.a.createElement(h,{onSearch:this.props.onSearch}),s.a.createElement(f,{onSort:this.props.onSort,sortBy:this.props.sortBy,sortValue:this.props.sortValue}))}}]),t}(n.Component),E=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).onUpdateStatus=function(){console.log(a.props.task.id),a.props.onUpdateStatus(a.props.task.id)},a.onDelete=function(){a.props.onDelete(a.props.task.id),console.log("delete")},a.onUpdate=function(){a.props.onUpdate(a.props.task.id),console.log("update")},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.task,a=e.index;return s.a.createElement("tr",null,s.a.createElement("td",null,a+1),s.a.createElement("td",null,t.name),s.a.createElement("td",{className:"text-center"},s.a.createElement("span",{className:!0===t.status?"label label-danger":"label label-success",onClick:this.onUpdateStatus},!0===t.status?"Action":"Hide")),s.a.createElement("td",{className:"text-center"},s.a.createElement("button",{type:"button",className:"btn btn-warning",onClick:this.onUpdate},s.a.createElement("span",{className:"fa fa-pencil mr-5"})," Edit"),"\xa0",s.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:this.onDelete},s.a.createElement("span",{className:"fa fa-trash mr-5"})," Delete")))}}]),t}(n.Component),b=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).onChange=function(e){var t=e.target,n=t.name,s=t.value;console.log("onchange ",n),a.props.onFilter("filterName"===n?s:a.state.filterName,"filterStatus"===n?s:a.state.filterStatus),a.setState(Object(p.a)({},n,s))},a.state={filterName:"",filterStatus:-1},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.tasks,a=this.state,n=a.filterName,o=a.filterStatus,l=t.map(function(t,a){return s.a.createElement(E,{key:t.id,index:a,task:t,onUpdateStatus:e.props.onUpdateStatus,onDelete:e.props.onDelete,onUpdate:e.props.onUpdate})});return s.a.createElement("table",{className:"table table-bordered table-hover mt-15 "},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",{className:"text-center"},"STT"),s.a.createElement("th",{className:"text-center"},"Name"),s.a.createElement("th",{className:"text-center"},"Status"),s.a.createElement("th",{className:"text-center"},"Action"))),s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("td",null),s.a.createElement("td",null,s.a.createElement("input",{type:"text",className:"form-control",name:"filterName",value:n,onChange:this.onChange})),s.a.createElement("td",null,s.a.createElement("select",{className:"form-control",name:"filterStatus",value:o,onChange:this.onChange},s.a.createElement("option",{value:-1},"All"),s.a.createElement("option",{value:0},"Hide"),s.a.createElement("option",{value:1},"Action"))),s.a.createElement("td",null)),l))}}]),t}(n.Component),k=(a(91),a(44)),v=a.n(k),S=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).onToggleForm=function(){a.state.isDisplay&&null!==a.state.taskEditing?a.setState({isDisplay:!0,taskEditing:null}):a.setState({isDisplay:!a.state.isDisplay,taskEditing:null})},a.onCloseForm=function(){console.log("onCloseForm"),a.setState({isDisplay:!1})},a.onShowForm=function(){console.log("onShowForm"),a.setState({isDisplay:!0})},a.onSubmit=function(e){console.log("data "+JSON.stringify(e));var t=a.state.tasks;""===e.id?(e.id=a.generateID(),t.push(e)):t[a.finIndex(e.id)]=e;a.setState({tasks:t,taskEditing:null}),localStorage.setItem("tasks",JSON.stringify(t))},a.onUpdateStatus=function(e){console.log("app "+e);var t=a.state.tasks,n=v.a.findIndex(t,function(t){return t.id===e});console.log(n),-1!==n&&(t[n].status=!t[n].status,a.setState({tasks:t}),localStorage.setItem("tasks",JSON.stringify(t)))},a.finIndex=function(e){var t=a.state.tasks,n=-1;return t.forEach(function(t,a){t.id===e&&(n=a)}),n},a.onDelete=function(e){console.log("ondelete");var t=a.state.tasks,n=a.finIndex(e);-1!==n&&(t.splice(n,1),a.setState({tasks:t}),localStorage.setItem("tasks",JSON.stringify(t))),a.onCloseForm()},a.onUpdate=function(e){console.log("id "+e);var t=a.state.tasks[a.finIndex(e)];console.log(t),a.setState({taskEditing:t}),a.onShowForm()},a.onFilter=function(e,t){console.log(e+" "+t),t=parseInt(t,0),console.log(typeof t),a.setState({filter:{name:e.toLowerCase(),status:t}})},a.onSearch=function(e){console.log(e),a.setState({keyword:e})},a.onSort=function(e,t){a.setState({sortBy:e,sortValue:t}),console.log(a.state)},a.state={tasks:[],isDisplay:!1,taskEditing:null,filter:{name:"",status:-1},keyword:"",sortBy:"name",sortValue:1},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){if(console.log("componentWillMount"),localStorage&&localStorage.getItem("tasks")){var e=JSON.parse(localStorage.getItem("tasks"));this.setState({tasks:e})}}},{key:"s4",value:function(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}},{key:"generateID",value:function(){return this.s4()+this.s4()+"-"+this.s4()+"-"+this.s4()+"-"+this.s4()+"-"+this.s4()+this.s4()+this.s4()}},{key:"render",value:function(){var e=this.state,t=e.tasks,a=e.isDisplay,n=e.taskEditing,o=e.filter,l=e.keyword,r=e.sortBy,c=e.sortValue;console.log(o),o&&(o.name&&(t=t.filter(function(e){return-1!==e.name.toLowerCase().indexOf(o.name)})),t=t.filter(function(e){return-1===o.status?e:e.status===(1===o.status)}),"name"===r?t.sort(function(e,t){return e.name>t.name?c:e.name<t.name?-c:0}):t.sort(function(e,t){return e.status>t.status?-c:e.status<t.status?c:0})),t=v.a.filter(t,function(e){return-1!==e.name.toLowerCase().indexOf(l.toLocaleLowerCase())});var i=a?s.a.createElement(d,{onSubmit:this.onSubmit,onCloseForm:this.onCloseForm,task:n}):"";return s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"text-center"},s.a.createElement("h1",null,"Work Management "),s.a.createElement("hr",null)),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:a?"col-xs-4 col-sm-4 col-md-4 col-lg-4":""},i),s.a.createElement("div",{className:a?"col-xs-8 col-sm-8 col-md-8 col-lg-8":"col-xs-12 col-sm-12 col-md-12 col-lg-12"},s.a.createElement("button",{onClick:this.onToggleForm,type:"button",className:"btn btn-primary"},s.a.createElement("span",{className:"fa fa-plus mr-5"}),"Add Work"),s.a.createElement(g,{onSearch:this.onSearch,onSort:this.onSort,sortBy:r,sortValue:c}),s.a.createElement("div",{className:"row mt-15"},s.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-12"},s.a.createElement(b,{tasks:t,onUpdateStatus:this.onUpdateStatus,onDelete:this.onDelete,onUpdate:this.onUpdate,onFilter:this.onFilter}))))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},83:function(e,t,a){e.exports=a(177)},88:function(e,t,a){},89:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},90:function(e,t,a){},94:function(e,t){},96:function(e,t){}},[[83,1,2]]]);
//# sourceMappingURL=main.236f4744.chunk.js.map