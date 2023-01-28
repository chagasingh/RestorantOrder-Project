function saveToLocalStorage(event){
    event.preventDefault();
    const amount=event.target.amount.value;
    const description=event.target.description.value;
    const tableno=event.target.tableno.value;
    let myObj={
        amount:amount,
        description:description,
        tableno:tableno,
    }
   var myObjnew=JSON.stringify(myObj);  

   async function getActivity(){
    try{
        let respone=await axios.post('https://crudcrud.com/api/52e2ce87cbe740a78e77ed0599d0bedd/expencedata',myObj)
        showUserOnScreen(respone.data)
        console.log(respone)
    }catch(err){
        console.log(err)
    }

}
getActivity()

    // localStorage.setItem(category,myObjnew);
    //showUserOnScreen(myObj)
}

    function showUserOnScreen(myObj){

        if(myObj.tableno==='TABLE 1'){
            const parentEle=document.getElementById('table 1')
            const childEle =document.createElement('li')
            childEle.textContent='  Order: '+myObj.description+'  Price: '+myObj.amount
            const deleteBtn =document.createElement('input')
            deleteBtn.type='button'
            deleteBtn.style.margin='25px'
            deleteBtn.style.backgroundColor='red'
            deleteBtn.style.color='white'
            deleteBtn.value='Cancel Order'
            deleteBtn.onclick=() => {
                async function getActivity2(){
                    try{
                        let respone=await axios.delete(`https://crudcrud.com/api/52e2ce87cbe740a78e77ed0599d0bedd/expencedata/${myObj._id}`)
                        parentEle.removeChild(childEle)
                        console.log(respone)
                    }catch(err){
                        console.log(err)
                    }
            
                }getActivity2()
            

                //localStorage.removeItem(myObj.category)
                
            }
            childEle.appendChild(deleteBtn)
            parentEle.appendChild(childEle) 

        }else if(myObj.tableno==='TABLE 2'){
            const parentEle=document.getElementById('table 2')
            const childEle =document.createElement('li')
            childEle.textContent='  Order: '+myObj.description+'  Price: '+myObj.amount
            const deleteBtn =document.createElement('input')
            deleteBtn.type='button'
            deleteBtn.style.margin='25px'
            deleteBtn.style.backgroundColor='red'
            deleteBtn.style.color='white'
            deleteBtn.value='Cancel Order'
            deleteBtn.onclick=() => {
                async function getActivity2(){
                    try{
                        let respone=await axios.delete(`https://crudcrud.com/api/52e2ce87cbe740a78e77ed0599d0bedd/expencedata/${myObj._id}`)
                        parentEle.removeChild(childEle)
                        console.log(respone)
                    }catch(err){
                        console.log(err)
                    }
            
                }getActivity2()

                //localStorage.removeItem(myObj.category)
                
            }
            childEle.appendChild(deleteBtn)
            parentEle.appendChild(childEle) 
        }
        else{
            const parentEle=document.getElementById('table 3')
            const childEle =document.createElement('li')
            childEle.textContent='  Order: '+myObj.description+'  Price: '+myObj.amount
            const deleteBtn =document.createElement('input')
            deleteBtn.type='button'
            deleteBtn.style.margin='25px'
            deleteBtn.style.backgroundColor='red'
            deleteBtn.style.color='white'
            deleteBtn.value='Cancel Order'
            deleteBtn.onclick=() => {
                async function getActivity2(){
                    try{
                        let respone=await axios.delete(`https://crudcrud.com/api/52e2ce87cbe740a78e77ed0599d0bedd/expencedata/${myObj._id}`)
                        parentEle.removeChild(childEle)
                        console.log(respone)
                    }catch(err){
                        console.log(err)
                    }
            
                }getActivity2()

                //localStorage.removeItem(myObj.category)
                
            }
            childEle.appendChild(deleteBtn)
            parentEle.appendChild(childEle) 
        }
    }
    // two ways to acheive goal
//  WITH DOM CONENT LOADED
    window.addEventListener("DOMContentLoaded",()=>{

        async function getActivity4(){
            try{
                let respone=await axios.get("https://crudcrud.com/api/52e2ce87cbe740a78e77ed0599d0bedd/expencedata")
                console.log(respone)
                for(var i=0;i<respone.data.length;i++){
                     showUserOnScreen(respone.data[i])
                }
            }catch(err){
                console.log(err)
            }
    
        }
        getActivity4()

    })