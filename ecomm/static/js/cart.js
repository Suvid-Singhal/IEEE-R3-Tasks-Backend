var updateBtns=document.getElementsByClassName('update-cart')

for(i=0;i<updateBtns.length;i++){
    updateBtns[i].addEventListener('click',function(){
        var productId=this.dataset.product
        var action=this.dataset.action
    if(user=='AnonymousUser'){
        console.log("Not Authenticated")
    }
    else{
        updateUserOrder(productId,action)
    }

    })
}

function updateUserOrder(productId,action){
    console.log("Authenticated")
    var url='/checkout/'
    fetch(url,{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
        },

        body:JSON.stringify({'productId':productId,'action':action})
    })
        .then((response) => {
        return response.json()
    })
        .then((data) =>{
            location.reload()
        })
}

