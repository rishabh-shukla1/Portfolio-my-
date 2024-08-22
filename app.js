let rishabh=document.querySelector('#cr')




let a=[ 
     './34c97e5af6234ff0d9abfd7f576d3180.png',
'./801accbd623842ab816fd47472f6e240 (1).png',
'./java_basic certificate.png',
   './python_basic certificate.png'
    ]

    let n=0



setInterval(()=>{


    

    rishabh.setAttribute('src',a[n])

     n= (n +  1) % 4
},2000)