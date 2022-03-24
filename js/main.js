let form = document.querySelector('#formOne');
let firstName = document.querySelector('#exampleInputName1');
let lastName = document.querySelector('#exampleInputFam1');
let telNume = document.querySelector('#exampleInputNumber1');
let category = document.querySelector('#selectOne');
let contactList =document.querySelector('#contact-list');
let sortElemet = document.querySelector('#sort');


let contactForm = [
    {
        id: 1,
        firstName: 'Parizod',
        lastName: 'Abdulaxtova',
        telNume: '+998901234567',
        category: 'family',
    },
    {
        id: 2,
        firstName: 'Xushnora',
        lastName: 'Nishonova',
        telNume: '+998901234567',
        category: 'friend',
    },
    {
        id: 3,
        firstName: 'Johnny ',
        lastName: 'Deep',
        telNume: '+998901234567',
        category: 'work',
    },
    {
        id: 4,
        firstName: 'Xumora',
        lastName: 'Esanova',
        telNume: '+998901234567',
        category: 'friend',
    }
];

let arr =[]
let newListArr =[]


form.addEventListener('submit', (e) =>{
     
    e.preventDefault();


    arr.push({

        firstname: firstName.value,
        lastname: lastName.value,
        tenume: telNume.value,
        fcategory: category.value
    }
    );

    newListArr= arr.map((item) => {
        return `
        <li class="contact__item">
        <div class="contact__item">
        <div class="contact__inner-box" style="display: flex;">
          <p class="contact__name" >${item.firstname}</p>
          <p class="contact__name" >${item.lastname}</p>
        </div>
        <div class="contact__number-box">
        <div>
        <a class="contact__number" href="tel:${item.tenume}"> ${item.tenume}
        <i class='bx bxs-phone'></i></a>
      
        <p class="contact__rel" id="relative">${item.fcategory}</p>
        </div>
        <button class="contact__btn-remove" onclick="removeItem(${item.id})"> <i class='bx bx-trash'></i></button>
        </div>
      </div>
      </li>`
    })

contactList.innerHTML= newListArr.join(" ")


    firstName.value = "",
    lastName.value = "",
    telNume.value ="";
})


sortElemet.addEventListener('click', (e)=> {

    if(e.target.textContent==='family'){
        let newBadiiy = arr.filter((item)=>{
            return item.category== "Family"
        })

        newListArr = newBadiiy.map((item) => {
            return `
            <li class="contact__item">
            <div class="contact__item">
            <div class="contact__inner-box" style="display: flex;">
              <p class="contact__name" >${item.firstname}</p>
              <p class="contact__name" >${item.lastname}</p>
            </div>
            <div class="contact__number-box">
            <div>
            <a class="contact__number" href="tel:${item.tenume}"> ${item.tenume}
            <i class='bx bxs-phone'></i></a>
          
            <p class="contact__rel" id="relative">${item.fcategory}</p>
            </div>
            <button class="contact__btn-remove" onclick="removeItem(${item.id})"> <i class='bx bx-trash'></i></button>
            </div>
          </div>
          </li>`
        })
    
        contactList.innerHTML= newListArr.join('')
    }
})






// function showContacts(e) {

//     e.forEach(el =>{
    //     let li = document.createElement('li');
    //     li.className = "contact__item"
    //     li.innerHTML =`
    //     <div class="contact__item">
    //     <div class="contact__inner-box" style="display: flex;">
    //       <p class="contact__name" >${el.firstName}</p>
    //       <p class="contact__name" >${el.lastName}</p>
    //     </div>
    //     <div class="contact__number-box">
    //     <div>
    //     <a class="contact__number" href="tel:${el.telNume}"> ${el.telNume}
    //     <i class='bx bxs-phone'></i></a>
      
    //     <p class="contact__rel" id="relative">${el.category}</p>
    //     </div>
    //     <button class="contact__btn-remove" onclick="removeItem(${el.id})"> <i class='bx bx-trash'></i></button>
    //     </div>
    //   </div>
    //     `
//         contactList.appendChild(li)
//         console.log(li);

//     })
//     firstName = "",
//     lastName = "",
//     telNume ="";
//     category =""
// }

// sortElemet.addEventListener('click', sortItems);

// let newArr = contactForm.concat(arr);

// function sortItems (e) {

//     contactList.innerHTML = '';

//     switch(e.target.value) {
//         case 'all':
//             showContacts(newArr);
//             break;

//         case 'relatives':
//         let a = newArr.filter((el) => {
//             if (el.category=='relative') return true;
//         })
//         showContacts(a)
//         break;
//         case 'friends':
//         let b = newArr.filter((el) => {
//             if (el.category=='friend') return true;
//         })
//         showContacts(b);
//         break;
//         case 'work':
//             let c = newArr.filter((el) => {
//                 if (el.category=='work') return true;
//             })
//             showContacts(c);
//             break;
//     }
// }

// function removeItem (e) {
//     let removeArr=[];

//     if (confirm("Are you sure you want to delete it? "))
//     {
//         contactList.innerHTML ="";
//         newArr.forEach((el)=>{
//             if(el.id!==e) {
//                 removeArr.push(el)
//             }
//         })

//     }
//     newArr = removeArr;
//     showContacts(newArr)
// }