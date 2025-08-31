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

// const observe = new IntersectionObserver((entries, observer) => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       loadNewElements();              // your function to append new items
//       observer.unobserve(entry.target); // stop observing the old one
//       entry.target.classList.add('show')
//     }
//   });
// }, {});

const element = document.querySelectorAll("#section, .section2>.listOfcard>.cards")
element.forEach(el => observe.observe(el));