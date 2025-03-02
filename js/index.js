const date = new Date();
const mainDate=date.toLocaleDateString();
document.getElementById("the-date").innerHTML = mainDate;
// ==============================================

const completedBtns= document.querySelectorAll(".completed");

for(const completedBtn of completedBtns){
    completedBtn.addEventListener('click',function(event){
        alert('Board updated succesfully')
        completedBtn.disabled = true;
    const headerBtn=document.getElementById('headerbtn');
    const header=parseInt(headerBtn.innerText);
    const totalHeader=header+1;
    document.getElementById('headerbtn').innerText=totalHeader;
    
  

    const taskAssined=document.getElementById('task-assined');
    const tasks=taskAssined.innerText
    const taskAss=parseInt(tasks);
    if(taskAss===1){
       alert('congrates!!! you have completed the current task')
    }
    
    const sum1=tasks - 1;
    if(tasks>0){
        document.getElementById('task-assined').innerText=sum1;
    }
   
    
        
    })
}
// =====first === //
document.getElementById('first-button').addEventListener('click', function(){
    const firstButtonH3=document.getElementById('first-button-h3').innerText;
    const hello='You have Complete The '
    let date = new Date();
    let time = date.toLocaleTimeString();
    

    const total=hello+ firstButtonH3 + " at "+ time;
    const thePrantDiv= document.getElementById('the-prant-div');
    const createElement=document.createElement('p')
    createElement.innerText=total;
    createElement.classList.add('comment')
    thePrantDiv.appendChild(createElement);

    document.getElementById('remove-button').addEventListener('click',function(){
        createElement.style.display='none'
        })
    
})
// ===second=== //
document.getElementById('second-button').addEventListener('click', function(){
    const firstButtonH3=document.getElementById('second-button-h3').innerText;
    const hello='You have Complete The '
    let date = new Date();
    let time = date.toLocaleTimeString();
    

    const total=hello+ firstButtonH3 + " at "+ time;
    const thePrantDiv= document.getElementById('the-prant-div');
    const createElement=document.createElement('p')
    createElement.innerText=total;
    createElement.classList.add('comment')
    thePrantDiv.appendChild(createElement);

    document.getElementById('remove-button').addEventListener('click',function(){
        createElement.style.display='none'
        })
    
})
// ===third ==== //
document.getElementById('third-button').addEventListener('click', function(){
    const firstButtonH3=document.getElementById('third-button-h3').innerText;
    const hello='You have Complete The '
    let date = new Date();
    let time = date.toLocaleTimeString();
    

    const total=hello+ firstButtonH3 + " at "+ time;
    const thePrantDiv= document.getElementById('the-prant-div');
    const createElement=document.createElement('p')
    createElement.innerText=total;
    createElement.classList.add('comment')
    thePrantDiv.appendChild(createElement);

    document.getElementById('remove-button').addEventListener('click',function(){
        createElement.style.display='none'
        })
    
})
// ====forth=== //
document.getElementById('forth-button').addEventListener('click', function(){
    const firstButtonH3=document.getElementById('forth-button-h3').innerText;
    const hello='You have Complete The '
    let date = new Date();
    let time = date.toLocaleTimeString();
    

    const total=hello+ firstButtonH3 + " at "+ time;
    const thePrantDiv= document.getElementById('the-prant-div');
    const createElement=document.createElement('p')
    createElement.innerText=total;
    createElement.classList.add('comment')
    thePrantDiv.appendChild(createElement);

    document.getElementById('remove-button').addEventListener('click',function(){
        createElement.style.display='none'
        })
    
})
// ====== fifth=== //
document.getElementById('fifth-button').addEventListener('click', function(){
    const firstButtonH3=document.getElementById('fifth-button-h3').innerText;
    const hello='You have Complete The '
    let date = new Date();
    let time = date.toLocaleTimeString();
    

    const total=hello+ firstButtonH3 + " at "+ time;
    const thePrantDiv= document.getElementById('the-prant-div');
    const createElement=document.createElement('p')
    createElement.innerText=total;
    createElement.classList.add('comment')
    thePrantDiv.appendChild(createElement);

    document.getElementById('remove-button').addEventListener('click',function(){
        createElement.style.display='none'
        })
    
})
// ====== sixth === //
document.getElementById('sixth-button').addEventListener('click', function(){
    const firstButtonH3=document.getElementById('sixth-button-h3').innerText;
    const hello='You have Complete The '
    let date = new Date();
    let time = date.toLocaleTimeString();
    

    const total=hello+ firstButtonH3 + " at "+ time;
    const thePrantDiv= document.getElementById('the-prant-div');
    const createElement=document.createElement('p')
    createElement.innerText=total;
    createElement.classList.add('comment')
    thePrantDiv.appendChild(createElement);

    document.getElementById('remove-button').addEventListener('click',function(){
    createElement.style.display='none'
    })

    
})

// ============================= //
document.getElementById('theme-color').addEventListener('click',function(){
    document.getElementById('body').style.backgroundColor=`#${Math.floor(Math.random() * 16777215).toString(16)}`;
})

// ========================= //
document.getElementById('discover-button').addEventListener('click',function(){
    window.location.href="second.html"
})
