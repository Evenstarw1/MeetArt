(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,t,a){},162:function(e,t,a){e.exports=a(406)},171:function(e,t,a){},173:function(e,t,a){},194:function(e,t,a){},198:function(e,t,a){},201:function(e,t,a){},400:function(e,t,a){},402:function(e,t,a){},404:function(e,t,a){},406:function(e,t,a){"use strict";a.r(t);a(163);var n=a(0),l=a.n(n),r=a(67),i=a.n(r),c=(a(169),a(171),a(2)),s=a(3),o=a(5),m=a(4),u=a(6),p=(a(173),a(411)),d=a(410),h=a(159),g=a(407),E=a(14),f=a.n(E),v=function e(){var t=this;Object(c.a)(this,e),this.signup=function(e,a,n){return t.service.post("/signup",{username:e,password:a,email:n}).then(function(e){return e.data})},this.login=function(e,a){return t.service.post("/login",{username:e,password:a}).then(function(e){return e.data})},this.loggedin=function(){return t.service.get("/currentUser").then(function(e){return e.data})},this.logout=function(){return t.service.get("/logout").then(function(e){return e.data})},this.edit=function(e,a,n,l,r,i){return t.service.post("/EditProfile",{username:e,image:a,description:n,location:l,gender:r,role:i}).then(function(e){return e.data})},this.service=f.a.create({baseURL:"".concat("https://meetart.herokuapp.com","/api/auth"),withCredentials:!0})},b=(a(194),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).handleLogout=function(e){a.props.logout()},a.state={loggedInUser:null},a.service=new v,a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState(Object(h.a)({},this.state,{loggedInUser:e.userInSession}))}},{key:"render",value:function(){return this.state.loggedInUser?l.a.createElement("div",null,l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("img",{className:"logo-nav",src:"https://res.cloudinary.com/dqesvgqq9/image/upload/v1539856293/MeetArt/meetart_logo.png",alt:""}),"            ",l.a.createElement("div",{className:"nav-link-direction"},l.a.createElement("ul",{className:"navbar-nav mr-auto"},l.a.createElement("li",{className:"nav-item active li-white"},l.a.createElement(g.a,{className:"nav-link-white",to:"/"},"Home")),l.a.createElement("li",{className:"nav-item active li-white"},l.a.createElement(g.a,{className:"nav-link-white",to:"/profile"},"Profile")),l.a.createElement("li",{className:"nav-item active li-white"},l.a.createElement(g.a,{className:"nav-link-white",to:"/meetings"},"Meetings")),l.a.createElement("li",{className:""},l.a.createElement("button",{className:"btn-navbar btn-grad-navbar",onClick:this.handleLogout},"Logout"))))))):l.a.createElement("div",null,l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("img",{className:"logo-nav",src:"https://res.cloudinary.com/dqesvgqq9/image/upload/v1539856293/MeetArt/meetart_logo.png",alt:""}),l.a.createElement("ul",{className:"navbar-nav mr-auto"},l.a.createElement("li",{className:"nav-item active"},l.a.createElement(g.a,{className:"nav-link-white",to:"/signup"},"Signup")),l.a.createElement("li",{className:"nav-item active"},l.a.createElement(g.a,{className:"nav-link-white",to:"/login"},"Login"))))))}}]),t}(n.Component)),y=a(39),N=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=a.state.username,n=a.state.password,l=a.state.email;a.service.signup(t,n,l).then(function(e){a.setState({username:"",password:"",email:""}),a.props.getUser(e.user)}).catch(function(e){return console.log(e)})},a.handleChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(y.a)({},n,l))},a.state={username:"",password:"",email:""},a.service=new v,a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("h3",null,"Welcome!, create your account next:"),l.a.createElement("form",{onSubmit:this.handleFormSubmit},l.a.createElement("fieldset",null,l.a.createElement("label",null,"Username:"),l.a.createElement("input",{type:"text",name:"username",value:this.state.username,onChange:function(t){return e.handleChange(t)}})),l.a.createElement("fieldset",null,l.a.createElement("label",null,"Password:"),l.a.createElement("input",{type:"password",name:"password",value:this.state.password,onChange:function(t){return e.handleChange(t)}})),l.a.createElement("fieldset",null,l.a.createElement("label",null,"Email:"),l.a.createElement("input",{type:"email",name:"email",value:this.state.email,onChange:function(t){return e.handleChange(t)}})),l.a.createElement("input",{type:"submit",value:"Sign up"})))}}]),t}(n.Component),O=a(409),k=(a(198),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=a.state.username,n=a.state.password;a.service.login(t,n).then(function(e){a.setState({username:t,password:n,error:!1,redirect:!0}),a.props.getUser(e)}).catch(function(e){a.setState({username:t,password:n,error:!0})})},a.handleChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(y.a)({},n,l))},a.state={username:"",password:""},a.service=new v,a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return this.state.redirect?l.a.createElement(O.a,{to:"/profile"}):l.a.createElement("div",null,l.a.createElement("h3",null,"Please, login to our site"),l.a.createElement("form",{className:"px-4 py-3 loginBox",onSubmit:this.handleFormSubmit},l.a.createElement("div",{className:""},l.a.createElement("div",{className:"form-group"},l.a.createElement("fieldset",null,l.a.createElement("label",null,"Username:"),l.a.createElement("input",{className:"form-control",type:"text",name:"username",value:this.state.username,onChange:function(t){return e.handleChange(t)}}))),l.a.createElement("div",{className:"form-group"},l.a.createElement("fieldset",null,l.a.createElement("label",null,"Password:"),l.a.createElement("input",{className:"form-control",type:"password",name:"password",value:this.state.password,onChange:function(t){return e.handleChange(t)}}))),l.a.createElement("input",{type:"submit",value:"Login"}))),l.a.createElement("h1",null,this.state.error?"Error":""))}}]),t}(n.Component)),j=function(){function e(){Object(c.a)(this,e),this.service=f.a.create({baseURL:"".concat("https://meetart.herokuapp.com","/api/item"),withCredentials:!0}),this.service2=f.a.create({baseURL:"".concat("https://meetart.herokuapp.com","/api/EditProfile"),withCredentials:!0})}return Object(s.a)(e,[{key:"addPicture",value:function(e,t,a,n){var l=new FormData;return l.append("item",e),l.append("title",t),l.append("description",a),l.append("category",n),console.log("DEBUG formData"),this.service.post("/",l,{headers:{"Content-Type":"multipart/form-data"}}).then(function(e){return e.data})}}]),e}(),C=(a(201),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).componentDidMount=function(){console.log(a.props.user),a.setState({user:a.props.user})},a.handleFormSubmit=function(e){e.preventDefault();var t=a.state,n=t.user,r=t.image,i=new FormData;return i.append("image",r),i.append("username",n.username),i.append("description",n.description),i.append("location",n.location),i.append("gender",n.gender),i.append("role",n.role),f.a.post("".concat("https://meetart.herokuapp.com","/api/user/").concat(a.state.user._id),i,{headers:{"Conent-Type":"multipart/form-data"},withCredentials:!0}).then(function(e){return console.log(e),l.a.createElement(O.a,{to:"/Profile"})}).catch(function(e){return console.log("Error",e)})},a.handleChangeProf=function(e,t){var n=Object.assign({},a.state.user);n[t]=e.target.value,a.setState({user:n})},a.state={user:{}},a.service=new j,a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state.user,a=this.props.displayEdit?"block":"none";return l.a.createElement("div",{style:{display:a}},l.a.createElement("hr",null),l.a.createElement("h5",null,"Edit your Profile"),l.a.createElement("p",null,"Your information will appear on your public profile."),l.a.createElement("div",{className:"box-edit-background"},l.a.createElement("div",{className:"box-edit-profile"},l.a.createElement("div",{className:"meeting-form"},l.a.createElement("form",{onSubmit:this.handleFormSubmit},l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label label-text"},"Username:"),l.a.createElement("input",{className:"input",type:"text",name:"username",value:t.username,onChange:function(t){return e.handleChangeProf(t,"username")}})),l.a.createElement("label",{className:"label label-text"},"Description:"),l.a.createElement("textarea",{className:"textarea",name:"description",value:t.description,onChange:function(t){return e.handleChangeProf(t,"description")}}),l.a.createElement("p",null,"Use your description to introduce yourself to the community. "),l.a.createElement("label",{className:"label label-text"},"Location:"),l.a.createElement("input",{className:"input",type:"text",name:"location",value:t.location,onChange:function(t){return e.handleChangeProf(t,"location")}}),l.a.createElement("label",{className:"label label-text"},"Gender:"),l.a.createElement("div",{class:"control is-center"},l.a.createElement("div",{class:"select"},l.a.createElement("select",{name:"gender",value:t.gender,onChange:function(t){return e.handleChangeProf(t,"gender")}},l.a.createElement("option",{value:"-"},"-"),l.a.createElement("option",{value:"Male"},"Male"),l.a.createElement("option",{value:"Female"},"Female"),l.a.createElement("option",{value:"Robot"},"Robot")))),l.a.createElement("label",{className:"label label-text"},"Role:"),l.a.createElement("div",{class:"control is-center"},l.a.createElement("div",{class:"select"},l.a.createElement("select",{name:"role",value:t.role,onChange:function(t){return e.handleChangeProf(t,"role")}},l.a.createElement("option",{value:"-"},"-"),l.a.createElement("option",{value:"Illustrator"},"Illustrator"),l.a.createElement("option",{value:"Writer"},"Writer"),l.a.createElement("option",{value:"Photographer"},"Photographer")))),l.a.createElement("label",{className:"label label-text"},"Your profile pic:"),l.a.createElement("input",{type:"file",name:"image",placeholder:"Your profile pic",onChange:function(t){return e.setState({image:t.target.files[0]})}}),l.a.createElement("button",{className:"btn btn-grad btn-edit",onClick:this.editProfile},"Submit"))))))}}]),t}(l.a.Component)),x=(a(72),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).getAllItems=function(){f.a.get("".concat("https://meetart.herokuapp.com","/api/item"),{withCredentials:!0}).then(function(t){e.setState({listOfItems:t.data})})},e.state={listOfItems:[]},e}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getAllItems()}},{key:"render",value:function(){return this.state.listOfItems?this.state.listOfItems.map(function(e,t){return l.a.createElement("div",{className:"gallery-container"},l.a.createElement("div",{className:"card card-style"},l.a.createElement("div",{key:t},l.a.createElement("div",{key:e._id},l.a.createElement("div",{className:""},l.a.createElement("img",{className:"card-img-top card-img-height",src:e.image,alt:e.name})),l.a.createElement("h5",{className:"card-title"},e.name),l.a.createElement("p",{className:"card-text"},e.description," "),l.a.createElement("button",{className:"btn btn-grad"},l.a.createElement(g.a,{to:"/item/"+e._id},"Visit"))))))}):l.a.createElement("h3",null,"Loading...")}}]),t}(n.Component)),w=(a(104),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).getAllInfo=function(){f.a.get("".concat("https://meetart.herokuapp.com","/api/user/profile"),{withCredentials:!0}).then(function(t){console.log(t),e.setState({listOfInfo:t.data})})},e.state={},e}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getAllInfo()}},{key:"render",value:function(){var e=this;if(this.state.listOfInfo){var t=this.state.listOfInfo;return l.a.createElement("div",null,l.a.createElement("div",{className:"profile-box"},l.a.createElement("div",{key:t._id},l.a.createElement("div",{className:"profile-info"},l.a.createElement("div",{className:"img-box"},l.a.createElement("img",{className:"img-profile",src:t.image,alt:t.name})),l.a.createElement("div",{className:"txt-box"},l.a.createElement("h5",{className:""},t.username),l.a.createElement("p",null,t.gender),l.a.createElement("h6",null,"My description:"),l.a.createElement("p",{className:""},t.description," "),l.a.createElement("h6",null,"Where I am?"),l.a.createElement("p",null,t.location),l.a.createElement("h6",null,"I'm a..."),l.a.createElement("p",null,t.role))),l.a.createElement("button",{onClick:function(t){return e.props.toggle_visibility(t)},className:"btn btn-grad btn-edit"},"Edit your profile",l.a.createElement("img",{className:"img-button-pencil",src:"https://res.cloudinary.com/dqesvgqq9/image/upload/v1539856293/MeetArt/pencil.png",alt:""})))))}return l.a.createElement("h3",null,"Loading...")}}]),t}(n.Component)),S=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={displayEdit:!1},a.toggle_visibility=function(){var e=a.state.displayEdit;e=!e,a.setState({displayEdit:e})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(w,{toggle_visibility:this.toggle_visibility}),l.a.createElement(C,{id:"edit",displayEdit:this.state.displayEdit,user:this.props.userInSession}),l.a.createElement("hr",null),l.a.createElement("h3",null,"Art Gallery"),l.a.createElement("button",{className:"btn btn-grad btn-submit"},l.a.createElement(g.a,{to:"/submitart"},"Submit Art ",l.a.createElement("img",{className:"img-button",src:"https://res.cloudinary.com/dqesvgqq9/image/upload/v1539856293/MeetArt/upload_item.png",alt:""}))),l.a.createElement("div",{className:"card-group gallery-group"},l.a.createElement(x,null)))}}]),t}(n.Component),M=a(46),I=a(41),U=a(97),A=Object(M.compose)(Object(M.withProps)({googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyCkhuP8ROCRjv9n-f_LuZtylrTZY2yJTP0",loadingElement:l.a.createElement("div",{style:{height:"100%"}}),containerElement:l.a.createElement("div",{style:{height:"600px"}}),mapElement:l.a.createElement("div",{style:{height:"100%"}})}),I.withScriptjs,I.withGoogleMap)(function(e){var t,a="";return e.marker&&(a=l.a.createElement(I.Marker,{position:{lat:e.marker[0].lat,lng:e.marker[0].lng}})),e.markers&&(t=e.markers.map(function(e,t){return l.a.createElement(I.Marker,{key:t,position:{lat:e.lat,lng:e.lng}})})),console.log(U),l.a.createElement(I.GoogleMap,{defaultZoom:15,defaultCenter:{lat:40.4169473,lng:-3.7057172},defaultOptions:{styles:U},onClick:function(t){return e.onMarkerClick(t)}},t,a)}),P=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).getMarkers=function(){if(a.props.meetings&&a.props.meetings.length>0){var e=a.props.meetings.map(function(e){return{lat:e.location.coordinates[0],lng:e.location.coordinates[1]}});a.setState({markers:e})}},a.handleMarkerClick=function(e){a.setState({marker:[{lat:e.latLng.lat(),lng:e.latLng.lng()}]}),a.props.handleClick&&a.props.handleClick(e)},a.props=e,a.state={},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getMarkers()}},{key:"render",value:function(){return l.a.createElement(A,{onMarkerClick:this.handleMarkerClick,markers:this.state.markers,marker:this.state.marker})}}]),t}(l.a.PureComponent),D=(a(400),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).getAllMeetings=function(){f.a.get("".concat("https://meetart.herokuapp.com","/api/meetings/")).then(function(t){console.log(t),e.setState({listOfMeetings:t.data})})},e.state={listOfMeetings:[]},e}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getAllMeetings()}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h3",null,"Meetings"),l.a.createElement("hr",null),l.a.createElement("div",{className:"button-meetings"},l.a.createElement("button",{className:"btn btn-grad btn-edit"},l.a.createElement(g.a,{to:"/createmeeting"},"Create a Meeting"))),l.a.createElement("div",{className:"map-meetings-group"},l.a.createElement("div",{className:"map-list"},this.state.listOfMeetings.length>0?l.a.createElement(P,{className:"map-meeting-list",id:"myMap",meetings:this.state.listOfMeetings}):""),l.a.createElement("div",{className:"meetings-list"},l.a.createElement("h5",null,"Next meetings"),l.a.createElement("div",null,this.state.listOfMeetings.map(function(e,t){return l.a.createElement("div",{className:"each-meeting",key:e._id},l.a.createElement("h6",null,e.name),l.a.createElement("p",null,l.a.createElement("b",null,"Where?")," ",e.place),l.a.createElement("p",null,l.a.createElement("b",null,"When?")," ",e.date," at ",e.time,"h"),l.a.createElement("p",null,e.description," "))})))))}}]),t}(n.Component)),T=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).componentDidMount=function(){a.setState({meetings:a.props.meetings})},a.handleFormSubmit=function(e){var t=a.state.meetings;t.lat=a.state.lat,t.lng=a.state.lng,e.preventDefault(),f.a.post("".concat("https://meetart.herokuapp.com","/api/meetings/"),{data:t}).then(function(e){console.log(e),a.setState({redirect:!0})}).catch(function(e){return console.log("Error",e)})},a.handleAddMeet=function(e,t){var n=Object.assign({},a.state.meetings);n[t]=e.target.value,a.setState({meetings:n})},a.handleClickMap=function(e){a.setState({lat:e.latLng.lat(),lng:e.latLng.lng()})},a.state={meetings:{},redirect:!1},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return this.state.redirect?l.a.createElement(O.a,{to:"/meetings"}):l.a.createElement("div",null,l.a.createElement("h3",null,"Create your Meeting"),l.a.createElement("hr",null),l.a.createElement("div",{className:"map-meetings-group"},l.a.createElement("div",{className:"map-list"},l.a.createElement(P,{className:"map-meeting-list",id:"myMap",handleClick:this.handleClickMap})),l.a.createElement("div",{className:"meeting-form"},l.a.createElement("form",{onSubmit:this.handleFormSubmit},l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label label-text"},"Name:"),l.a.createElement("input",{className:"input",type:"text",name:"name",onChange:function(t){return e.handleAddMeet(t,"name")}})),l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label label-text"},"Description:"),l.a.createElement("textarea",{className:"textarea",name:"description",onChange:function(t){return e.handleAddMeet(t,"description")}})),l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label label-text"},"Place:"),l.a.createElement("input",{className:"input",type:"text",name:"name",onChange:function(t){return e.handleAddMeet(t,"place")}})),l.a.createElement("label",{className:"label label-text"},"Date:"),l.a.createElement("input",{type:"date",name:"date",onChange:function(t){return e.handleAddMeet(t,"date")}}),l.a.createElement("label",{className:"label label-text"},"Time:"),l.a.createElement("input",{type:"time",name:"time",onChange:function(t){return e.handleAddMeet(t,"time")}}),l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label label-text"},"Category:"),l.a.createElement("div",{class:"control is-center"},l.a.createElement("div",{class:"select"},l.a.createElement("select",{name:"category",onChange:function(t){return e.handleAddMeet(t,"category")}},l.a.createElement("option",{value:"Drawing"},"Drawing"),l.a.createElement("option",{value:"Painting"},"Painting"),l.a.createElement("option",{value:"Photography"},"Photography"),l.a.createElement("option",{value:"Writing"},"Writing"))))),l.a.createElement("button",{className:"btn btn-grad btn-edit",type:"submit"},"Submit")))))}}]),t}(l.a.Component),F=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).state={title:"",description:"",category:"",image:null,error:""},e.service=new j,e}return Object(u.a)(t,e),Object(s.a)(t,[{key:"handleChange",value:function(e){this.setState({image:e.target.files[0]})}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.state,a=t.title,n=t.description,l=t.category;this.service.addPicture(this.state.image,a,n,l)}},{key:"render",value:function(){var e=this,t=this.state,a=t.title,n=t.description,r=t.category,i=t.error;return l.a.createElement("div",{className:"form-box-upload"},l.a.createElement("h3",null,"Upload your Art here"),l.a.createElement("div",{className:"form-upload"},l.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)}},l.a.createElement("div",{className:"field"},l.a.createElement("p",{style:{color:"red"}},i),l.a.createElement("label",{className:"label label-text"},"Title"),l.a.createElement("input",{classsName:"input input-display",type:"text",name:"title",placeholder:"Title",value:a,onChange:function(t){return e.setState({title:t.target.value})}})),l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label label-text"},"Description"),l.a.createElement("input",{classsName:"input",type:"text",name:"description",placeholder:"Description",value:n,onChange:function(t){return e.setState({description:t.target.value})}})),l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label label-text"},"Category:"),l.a.createElement("div",{class:"control is-center"},l.a.createElement("div",{class:"select"},l.a.createElement("select",{name:"category",value:r,onChange:function(t){return e.setState({category:t.target.value})}},l.a.createElement("option",{value:"Traditional Art"},"Traditional Art"),l.a.createElement("option",{value:"Digital Art"},"Digital Art"),l.a.createElement("option",{value:"Photography"},"Photography"),l.a.createElement("option",{value:"Literature"},"Literature"))))),l.a.createElement("div",{className:"file is-boxed"},l.a.createElement("label",{className:"file-label"},l.a.createElement("input",{className:"file-input",type:"file",name:"photo",onChange:function(t){return e.handleChange(t)}}),l.a.createElement("span",{className:"file-cta"},l.a.createElement("span",{className:"file-icon"},l.a.createElement("i",{className:"fas fa-upload"})),l.a.createElement("span",{className:"file-label"},"Choose a file\u2026")))),l.a.createElement("button",{className:"btn btn-grad",onClick:function(t){return e.handleSubmit(t)}},"Submit"))))}}]),t}(n.Component),L=(a(402),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).getAllInfo=function(){f.a.get("".concat("https://meetart.herokuapp.com","/api/item/").concat(a.state.id)).then(function(e){console.log(e),a.setState({listOfDetails:e.data})})},a.state={id:e.match.params.id},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getAllInfo()}},{key:"render",value:function(){if(this.state.listOfDetails){var e=this.state.listOfDetails;return l.a.createElement("div",{className:"box-item"},l.a.createElement("div",{key:e._id},l.a.createElement("img",{className:"img-item",src:e.image,alt:e.name}),l.a.createElement("div",{className:"box-info-item"},l.a.createElement("div",{className:"box-align"},l.a.createElement("h4",null,e.title),l.a.createElement("p",{className:"text-type"},"By: ",e.username),l.a.createElement("p",{className:"text-type"},e.category," "),l.a.createElement("p",{className:"text-description"},e.description)))))}return l.a.createElement("h3",null,"Loading...")}}]),t}(n.Component)),q=(a(404),function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("body",{className:"body-home"},l.a.createElement("div",{className:"body-box"},l.a.createElement("div",{className:"box-text"},l.a.createElement("img",{src:"https://res.cloudinary.com/dqesvgqq9/image/upload/v1539859803/logo-color.png",alt:"Meet Art - Community"}),l.a.createElement("h3",null,"Share your art and meet other artists!!"))))}}]),t}(n.Component)),_=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).getTheUser=function(e){a.setState({loggedInUser:e})},a.logout=function(){a.service.logout().then(function(){a.setState({loggedInUser:null})})},a.state={loggedInUser:null},a.service=new v,a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"fetchUser",value:function(){var e=this;null===this.state.loggedInUser&&this.service.loggedin().then(function(t){e.setState({loggedInUser:t})}).catch(function(t){e.setState({loggedInUser:!1})})}},{key:"render",value:function(){var e=this;return this.fetchUser(),this.state.loggedInUser?l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:""},l.a.createElement(b,{userInSession:this.state.loggedInUser,logout:this.logout})),l.a.createElement("div",null,l.a.createElement(p.a,null,l.a.createElement(d.a,{exact:!0,path:"/",render:function(){return l.a.createElement(q,null)}}),l.a.createElement(d.a,{exact:!0,path:"/profile",render:function(){return l.a.createElement(S,{userInSession:e.state.loggedInUser})}}),l.a.createElement(d.a,{exact:!0,path:"/meetings",render:function(){return l.a.createElement(D,null)}}),l.a.createElement(d.a,{exact:!0,path:"/createmeeting",render:function(){return l.a.createElement(T,null)}}),l.a.createElement(d.a,{exact:!0,path:"/submitart",render:function(){return l.a.createElement(F,null)}}),l.a.createElement(d.a,{exact:!0,path:"/item/:id",component:L})))):l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:""},l.a.createElement(b,{userInSession:this.state.loggedInUser,logout:this.logout}),l.a.createElement(p.a,null,l.a.createElement(d.a,{exact:!0,path:"/",render:function(){return l.a.createElement(q,null)}}),l.a.createElement(d.a,{exact:!0,path:"/signup",render:function(){return l.a.createElement(N,{getUser:e.getTheUser})}}),l.a.createElement(d.a,{exact:!0,path:"/login",render:function(){return l.a.createElement(k,{getUser:e.getTheUser})}}))))}}]),t}(n.Component),W=a(408);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(W.a,null,l.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},72:function(e,t,a){},97:function(e){e.exports=[{featureType:"landscape",elementType:"all",stylers:[{hue:"#FF007B"},{saturation:59.80000000000001},{lightness:21},{gamma:1}]},{featureType:"poi",elementType:"all",stylers:[{hue:"#ff00af"},{saturation:32.599999999999994},{lightness:20.599999999999994},{gamma:1},{visibility:"off"}]},{featureType:"poi.park",elementType:"all",stylers:[{visibility:"on"},{saturation:"40"}]},{featureType:"road.highway",elementType:"all",stylers:[{hue:"#FFAF00"},{lightness:50.80000000000001},{gamma:1}]},{featureType:"road.arterial",elementType:"all",stylers:[{hue:"#FFE800"},{lightness:8.600000000000009},{gamma:1}]},{featureType:"road.local",elementType:"all",stylers:[{hue:"#FFD900"},{saturation:44.79999999999998},{lightness:3.6000000000000085},{gamma:1}]},{featureType:"water",elementType:"all",stylers:[{hue:"#0078FF"},{saturation:24.200000000000003},{gamma:1}]}]}},[[162,2,1]]]);
//# sourceMappingURL=main.acad5057.chunk.js.map