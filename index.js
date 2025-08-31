const observe = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            console.log(entry.target)
            entry.target.classList.add('show')
        }else{
            entry.target.classList.remove('show')
        }
    })
} , {})

const element = document.querySelectorAll("#section")
element.forEach(el => observe.observe(el));