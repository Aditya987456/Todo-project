
let ptr=0;
let todos=[];


function addtudu(){

    ptr++;

//alert message for empty task...
    let inv=document.querySelector('input').value
    if(inv===''){
        alert('please enter the task')
        return
    }
 
    todos.push({
       
        id:ptr,
        tittle:document.querySelector('input').value ,
        completed:false,   
    })
   

    render(todos)     //render() call kardo baki apna own made react dekh  lega
    document.querySelector('input').value=''
}


//check the text..............

function checktodo(ct){
     //let idcheck = `#do-${ctr}`

     todos=todos.map(todoi => todoi.id===ct ?{...todoi, completed:!todoi.completed } : todoi);



  render(todos)
}



function deltodo(ctr){
   
    let selector = `#do-${ctr}`
    let childn=document.querySelector(selector)

    // childn.parentNode.removeChild(childn);
    if (childn) { 
        childn.parentNode.removeChild(childn); }

    todos = todos.filter(todo => todo.id !== parseInt(ctr));
    
    
    render(todos);
}





function render(tudu){

    
    document.querySelector('#taskss').innerHTML=''

    tudu.forEach(element => {

        const text=element.tittle
        let currentctr=element.id
        const comple=element.completed
        
        console.log(text,currentctr)  //---------->>  taskname and id

        const newtododiv=document.createElement('div')
        const todotext=document.createElement('h4')
        const checkbutn=document.createElement('input')
        const delbutn=document.createElement('button')
        
        todotext.innerHTML=text
        delbutn.textContent='Delete'
        
        checkbutn.setAttribute('type','checkbox')

         checkbutn.checked = comple; // Use `completed` here

        //checkbox...

        if(comple){
            
            todotext.style.textDecoration = 'line-through';
             todotext.style.opacity = '0.4';
        }

        

        
        newtododiv.setAttribute('id', `do-${currentctr}`)
        newtododiv.setAttribute('class','divtodo')
        // newtododiv.setAttribute('id','todos.id')
        // const currentctr=element.id;


//check todo ...................
        checkbutn.addEventListener('change', (e)=>{
            checktodo(currentctr);
        });



        delbutn.addEventListener('click', (e)=>{
            //console.log(e.id)
          //  console.log('delete clicked', currentctr)

            deltodo(currentctr);
        });

        newtododiv.appendChild(checkbutn)
        newtododiv.appendChild(todotext)
        newtododiv.appendChild(delbutn)
        

        const parentdiv=document.querySelector('#taskss')
        parentdiv.appendChild(newtododiv)
   
    });

}

render(todos)  
//karna padega isko becz
//Calling render(todos) at the end ensures that the initial list of todos is displayed when the page loads. Without this, the page would start off empty, and you’d only see the todos when you add new ones. It’s basically giving you a starting point.

