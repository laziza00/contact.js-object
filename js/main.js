let form = document.querySelector('#formOne');
let firstName = document.querySelector('#exampleInputName1');
let lastName = document.querySelector('#exampleInputFam1');
let telNume = document.querySelector('#exampleInputNumber1');
let category = document.querySelector('#selectOne');
let contactList =document.querySelector('#contact-list');
let sortElemet = document.querySelector('#sort');




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


            let newTypeArr = arr.filter((item)=>{
                return item.fcategory == e.target.textContent
            })
    

            if(e.target.textContent=='All') {

                newTypeArr= arr
            }


            let newListArrOne = newTypeArr.map((item) => {
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

        
            contactList.innerHTML= newListArrOne.join('')
})







function removeItem (e) {
    let removeArr=[];

    if (confirm("Are you sure you want to delete it? "))
    {
        contactList.innerHTML ="";
        newArr.forEach((el)=>{
            if(el.id!==e) {
                removeArr.push(el)
            }
        })

    }
    newArr = removeArr;
    showContacts(newArr)
}