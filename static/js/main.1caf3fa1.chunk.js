(this["webpackJsonpcs-tools"]=this["webpackJsonpcs-tools"]||[]).push([[0],{139:function(e,t,n){},140:function(e,t,n){},143:function(e,t,n){},147:function(e,t,n){},177:function(e,t,n){},182:function(e,t,n){"use strict";n.r(t);var o=n(1),a=n.n(o),r=n(24),s=n.n(r),i=(n(139),n(27)),c=n(28),l=n(30),b=n(29),u=n.p+"static/media/Upitt_logo_400x400.8afe9141.jpg",d=n(200),j=n(199),h=(n(140),n(105),n(8)),O=[{label:"Student",value:"Student"},{label:"Librarian",value:"Librarian"}],v=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props.value;return Object(h.jsx)(d.a.Group,{options:O,onChange:this.props.onChange,value:e,optionType:"button",buttonStyle:"solid"})}}]),n}(o.Component),f=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("header",{className:"App-header",children:[Object(h.jsx)("img",{src:u,alt:"logo",className:"App-logo"}),Object(h.jsx)("p",{className:"title",children:"Memory Paging Practice System"}),Object(h.jsx)(j.a,{type:"default",className:"overview-button",onClick:this.props.clickOverview,children:"Overview"}),Object(h.jsx)("div",{className:"role-button",children:Object(h.jsx)(v,{value:this.props.value,onChange:this.props.onChange})})]})}}]),n}(o.Component),p=(n(143),function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(h.jsx)("footer",{className:"footer",children:"University of Pittsburgh"})}}]),n}(o.Component)),m=n(43),g=n(34),k=n(133),x=n(198),y="book",S=n(195),w=n(202),N=n(204),B=n.p+"static/media/bookCover.6a39f467.jpg",_=n(197);var C=function(e){var t=S.a.Meta,n=Object(_.a)((function(){return{type:y,item:{code:e.code,name:e.name,author:e.author,level:e.level,position:e.position,created_date:e.created_date,frequency:e.frequency,last_borrowed:e.last_borrowed},collect:function(e){return{isDragging:!!e.isDragging()}}}})),o=Object(g.a)(n,2),a=(o[0].isDragging,o[1]),r=Object(h.jsxs)("div",{children:[Object(h.jsxs)("p",{children:["Created: ",e.created_date]}),Object(h.jsxs)("p",{children:["Frequency: ",e.frequency]}),Object(h.jsxs)("p",{children:["Last borrowed: ",e.last_borrowed]})]});return Object(h.jsx)("div",{ref:a,children:Object(h.jsx)(w.a,{count:e.frequency,children:Object(h.jsx)(N.a,{content:r,title:e.name,mouseEnterDelay:2,children:Object(h.jsx)(S.a,{hoverable:!0,style:{left:14,width:70,height:80},cover:Object(h.jsx)("img",{alt:"bookcover",src:B}),children:Object(h.jsx)(t,{title:e.name,description:e.author})})})})})};var L=function(e){var t="Position "+e.position,n=Object(x.a)({accept:y,drop:function(t,n){return e.dragHandler(t,1,0,e.level,e.position)},collect:function(e){return{isOver:!!e.isOver()}}}),o=Object(g.a)(n,2),a=(o[0].isOver,o[1]),r=e.books;if(0===Object.keys(r).length&&r.constructor===Object)return Object(h.jsx)(k.a,{placement:"bottom",title:t,children:Object(h.jsx)("div",{className:"bookstand"})});var s=r.filter((function(e){return 1===e.location}));return Object(h.jsx)(k.a,{placement:"bottom",title:t,children:Object(h.jsx)("div",{className:"bookstand",ref:a,children:s.map((function(t){if(t.level===e.level&&t.position===e.position)return Object(h.jsx)(C,{code:t.code,name:t.name,author:t.author,location:t.location,level:t.level,position:t.position,created_date:t.created_date,frequency:t.frequency,last_borrowed:t.last_borrowed})}))})})},P=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){for(var e=this,t="Level "+this.props.level,n=this.props.numOfBooksPerLevel,o=[],a=0;a<n;a++)o=[].concat(Object(m.a)(o),[{position:a+1,level:this.props.level,books:this.props.books}]);return Object(h.jsx)(k.a,{placement:"leftTop",title:t,children:Object(h.jsx)("div",{className:"bookcase",children:o.map((function(t){return Object(h.jsx)("div",{className:"single",children:Object(h.jsx)(L,{position:t.position,level:t.level,books:t.books,dragHandler:e.props.dragHandler},t.position)})}))})})}}]),n}(o.Component),q=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(i.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={},e}return Object(c.a)(n,[{key:"render",value:function(){for(var e=this,t=this.props.numOfLevels,n=this.props.numOfBooksPerLevel,o=[],a=0;a<t;a++)o=[].concat(Object(m.a)(o),[{level:a+1,numOfBooks:n,books:this.props.books}]);return Object(h.jsx)("div",{className:"bookshelf",children:o.map((function(t){return Object(h.jsx)(P,{level:t.level,numOfBooksPerLevel:t.numOfBooks,books:t.books,dragHandler:e.props.dragHandler,dbclick:e.props.dbclick},t.level)}))})}}]),n}(o.Component),I=(n(147),n(127)),D=n(87),E=n(88),H=n(129),K=n(103),T=n(194),M=n(203),Y="STORED_BOOK_KEY";function A(){var e=localStorage.getItem(Y);return e?JSON.parse(e):(localStorage.setItem(Y,"[]"),[])}function F(e){var t=a.a.useState(),o=Object(g.a)(t,2),r=o[0],s=o[1],i=a.a.useState(),c=Object(g.a)(i,2),l=c[0],b=c[1],u=a.a.useState(),d=Object(g.a)(u,2),j=d[0],O=d[1],v=a.a.useState(),f=Object(g.a)(v,2),p=f[0],m=f[1];return a.a.useEffect((function(){if(e.show){!function(e,t){console.log("storing book",e);var o,a,r=A();if(r.find((function(t){return t.name===e})))sessionStorage.setItem(Y,e);else{var s={code:n(174)(),name:e,location:0,bin:(o=1,a=t,o=Math.ceil(o),a=Math.floor(a),Math.floor(Math.random()*(a-o+1)+o)),level:0,position:0,created_date:0,frequency:0,last_borrowed:0};r.push(s);var i=JSON.stringify(r);localStorage.setItem(Y,i)}}(e.query,e.numOfBins);var t=A().find((function(t){return t.name===e.query}));t&&(s(t.location),b(t.level),O(t.position),m(t.bin))}}),[e.show,e.query,e.numOfBins]),Object(h.jsxs)(T.a,Object(K.a)(Object(K.a)({},e),{},{dialogClassName:"custom-dialog",children:[Object(h.jsx)(T.a.Header,{className:"modal-header",closeButton:!0,children:Object(h.jsx)(T.a.Title,{children:"Library Catalog"})}),Object(h.jsxs)(T.a.Body,{children:[Object(h.jsxs)("p",{children:["Book Name: ",e.query]}),Object(h.jsxs)("p",{children:["Location: ",0===r?"storage":"bookshelf",Object(h.jsx)("br",{}),"Storage Bin: ",p,Object(h.jsx)("br",{}),"Level: ",l,Object(h.jsx)("br",{}),"Position: ",j]})]}),Object(h.jsx)(T.a.Footer,{children:Object(h.jsx)(M.a,{type:"button",onClick:function(){e.onHide(),window.location.reload()},children:"Close"})})]}))}var J=n(193),R=n(130);var V=function(e){var t=e.binId,n=Object(x.a)({accept:y,drop:function(n,o){return e.dragHandler(n,0,t,0,0)},collect:function(e){return{isOver:!!e.isOver()}}}),o=Object(g.a)(n,2),a=(o[0].isOver,o[1]),r=Object(h.jsx)("div",{className:"book-container"}),s="Bin "+e.binId;if(0===Object.keys(e.books).length&&e.books.constructor===Object);else{var i=e.books.filter((function(e){return 0===e.location}));r=Object(h.jsx)("div",{className:"book-container",children:i.map((function(e){return Object(h.jsx)("div",{className:"book-align-block",children:Object(h.jsx)(C,{code:e.code,name:e.name,author:e.author,location:e.location,level:e.level,position:e.position,created_date:e.created_date,frequency:e.frequency,last_borrowed:e.last_borrowed})})}))})}return Object(h.jsx)(k.a,{placement:"top",title:s,children:Object(h.jsx)(N.a,{content:r,placement:"top",title:s,trigger:"click",children:Object(h.jsx)("div",{className:"bin",ref:a})})})},U=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(i.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this,t=this.props.numOfBins,n=this.props.books,o=[];if(0===Object.keys(this.props.books).length&&this.props.books.constructor===Object)for(var a=0;a<t;a++)o=[].concat(Object(m.a)(o),[{binId:a+1,books:[]}]);else for(var r=function(e){var t=n.filter((function(t){return t.bin===e+1}));o=[].concat(Object(m.a)(o),[{binId:e+1,books:t}])},s=0;s<t;s++)r(s);return Object(h.jsxs)("div",{className:"storage",children:[o.map((function(t){return Object(h.jsx)(V,{binId:t.binId,books:t.books,dragHandler:e.props.dragHandler},t.binId)})),Object(h.jsx)("h5",{children:"Book Storage"})]})}}]),n}(o.Component);function z(){var e=localStorage.getItem("STORED_BOOK_KEY");return e?JSON.parse(e):(localStorage.setItem("STORED_BOOK_KEY","[]"),[])}function G(){var e={};return Object.entries(localStorage).map((function(t){var n=Object(g.a)(t,2),o=(n[0],n[1]),a=JSON.parse(o);e=a})),e}var Q=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(e){var o;return Object(i.a)(this,n),(o=t.call(this,e)).dragHandler=function(e,t,n,a,r){var s=Object(m.a)(o.state.books),i=s.filter((function(t){return t.code===e.code})),c=s.indexOf(i[0]);i[0].location=t,i[0].bin=n,i[0].level=a,i[0].position=r,s[c]=i[0],o.setState({books:s});for(var l=0,b=1,u=z(),d=0;d<u.length;d++)u[d].name!==e.name&&1===t&&u[d].level===a&&u[d].position===r&&(l=1),1===u[d].location&&(b+=1);if(1===t&&b>o.state.numOfShelfLevels*o.state.numOfBooksPerLevel&&(l=2),0===l)for(d=0;d<u.length;d++){if(u[d].code===e.code){if(0===u[d].location&&1===t){var j=new Date;u[d].created_date=j.getFullYear()+"-"+(j.getMonth()+1)+"-"+j.getDate()}u[d].name=e.name,u[d].location=t,u[d].bin=n,u[d].level=a,u[d].position=r}var h=JSON.stringify(u);localStorage.setItem("STORED_BOOK_KEY",h),window.location.reload()}else 1===l?(alert("Already has book on this position. Please change to another position as librarian role again!"),window.location.reload()):(alert("The bookshelf already fulled."),window.location.reload())},o.dbclick=function(){document.ondblclick=function(e){if(!0===e.target.draggable){var t=e.target.offsetParent.innerText,n=sessionStorage.getItem("STORED_BOOK_KEY");if(n===t){alert("You choose right");for(var o=z(),a=new Date,r=0;r<o.length;r++){o[r].name===n&&(o[r].frequency+=1,o[r].last_borrowed=a.getFullYear()+"-"+(a.getMonth()+1)+"-"+a.getDate()+" "+a.toLocaleTimeString());var s=JSON.stringify(o);localStorage.setItem("STORED_BOOK_KEY",s),window.location.reload()}sessionStorage.setItem("STORED_BOOK_KEY","")}else alert("Please choose again")}}},o.catalogClose=function(){return o.setState({catalogShow:!1})},o.state={value:"",lib:[],catalogShow:!1,numOfShelfLevels:5,numOfBooksPerLevel:3,numOfBins:4,books:G(),query:""},o}return Object(c.a)(n,[{key:"render",value:function(){var e=this,t=this.props.value;this.state.lib;return Object(h.jsx)("div",{className:"main",children:Object(h.jsx)(I.a,{fluid:"lg",children:Object(h.jsxs)(D.a,{children:[Object(h.jsx)(E.a,{children:Object(h.jsx)("div",{className:"search-monitor",children:Object(h.jsxs)("div",{className:"search-container",children:[Object(h.jsx)(D.a,{children:Object(h.jsx)("h6",{children:"Search a Book in the Library"})}),Object(h.jsxs)(D.a,{children:[Object(h.jsxs)("div",{className:"form-inline mt-4 mb-4",children:[Object(h.jsx)(H.c,{icon:"search"}),Object(h.jsx)("input",{className:"form-control form-control-sm ml-3 w-75",type:"text",placeholder:"Find a Book","aria-label":"Search",value:this.state.query,onChange:function(t){return e.setState({query:t.target.value})},onKeyPress:function(t){"Enter"===t.key&&(e.state.query?e.setState({catalogShow:!0,value:t.target.value}):alert("Please input a name!"))}})]}),Object(h.jsx)(F,{query:this.state.query,show:this.state.catalogShow,onHide:this.catalogClose,numOfBins:this.state.numOfBins})]})]})})}),Object(h.jsxs)(J.a,{backend:R.a,children:[Object(h.jsx)(E.a,{className:"bookshelf-view",children:Object(h.jsx)("div",{children:Object(h.jsx)(q,{numOfLevels:this.state.numOfShelfLevels,numOfBooksPerLevel:this.state.numOfBooksPerLevel,books:this.state.books,dragHandler:this.dragHandler.bind(this),dbclick:this.dbclick()})})}),Object(h.jsx)(E.a,{className:"storage-view",children:Object(h.jsx)("div",{className:"Student"===t?"wrapper":"",children:Object(h.jsx)("div",{className:"Student"===t?"is-disabled":"",children:Object(h.jsx)(U,{books:this.state.books,numOfBins:this.state.numOfBins,dragHandler:this.dragHandler.bind(this)})})})})]})]})})})}}]),n}(o.Component),W=n(201),X=(n(177),function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(i.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={value:"Student",visible:!1},e.handleValueChange=function(t){console.log("role button checked",t.target.value),e.setState({value:t.target.value})},e.clickOverview=function(t){console.log("overview button clicked",t.target.value),e.showDrawer()},e.showDrawer=function(){e.setState({visible:!0})},e.onClose=function(){e.setState({visible:!1})},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this.state.value;return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(f,{value:e,onChange:this.handleValueChange.bind(this),clickOverview:this.clickOverview.bind(this)}),Object(h.jsxs)(W.a,{title:"Introduction",placement:"right",width:"400px",closable:!1,onClose:this.onClose,visible:this.state.visible,children:[Object(h.jsx)("h5",{children:"Memory Paging vs. Library Analogy"}),Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:"A page is a book on the bookshelf."}),Object(h.jsx)("li",{children:"Virtual memory is the list of names of books available."}),Object(h.jsx)("li",{children:"Physical memory is the bookshelf with level numbers and position numbers as 'addresses'."}),Object(h.jsx)("li",{children:"Swap space is the basement book storage where unpopular books are kept."}),Object(h.jsx)("li",{children:"Page table is the catalog that maps a book name to level number and position number."}),Object(h.jsx)("li",{children:"Operating system is the librarian in charge of organizing the books."})]})]}),Object(h.jsx)(Q,{value:e}),Object(h.jsx)(p,{})]})}}]),n}(a.a.Component)),Z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,205)).then((function(t){var n=t.getCLS,o=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),o(e),a(e),r(e),s(e)}))};n(178),n(179),n(180),n(181);s.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(X,{})}),document.getElementById("root")),Z()}},[[182,1,2]]]);
//# sourceMappingURL=main.1caf3fa1.chunk.js.map