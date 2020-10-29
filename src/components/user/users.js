// class Users{
//     constructor(){
//         this.users = []
//         this.adapter = new UsersAdapter()
//         this.fetchAndLoadUsers()
//         // this.fetchUsers = document.getElementById('user_section')
//     }

//     fetchAndLoadUsers(){
//         document.addEventListener('DOMContentLoaded', () => {
//             this.adapter.getUsers().then((users) => {
//                 this.adapter.fetchUsers(users);
//             }).then(()=>{
//                 let 
//             })
//           }
//         )
//     }
    
    // fetchAndLoadUsers(){
    //     this.adapter.getUsers().then(users => {
    //         console.log(this.users);
    //     })
    // }

    // renderSignupForm(){
    //         const customerPortal = document.getElementById("user_portal")
    //         const userSignUpButton = document.createElement("input")
    //         userSignUpButton.setAttribute("type","button")
    //         userSignUpButton.setAttribute("value","signup")
    //         customerPortal.appendChild(userSignUpButton)
            

    //         userSignUpButton.addEventListener("click", ()=> {
    //             // Createing form
    //         const br = document.createElement('br')
    //         const user = document.getElementById('user_form');
    //         const userForm = document.createElement('form');
    //         userForm.setAttribute("type","text");
    //         const userFormParagraph = document.createElement('h4')
    //         userFormParagraph.innerText = "Enter information below: "
    //         // FIRST NAME LABEL AND INPUT
    //         const userFirstNameLabel = document.createElement('label')
    //         userFirstNameLabel.innerText = "First name: "
    //         const userFirstNameInput = document.createElement('input')
    //         userFirstNameInput.setAttribute('type','text')
    //         userFirstNameInput.setAttribute('id','first_name')
    //         userFirstNameInput.setAttribute('name','first_name')
    //         // LAST NAME LABEL AND INPUT
    //         const userLastNameLabel = document.createElement('label')
    //         userLastNameLabel.innerText = "Last name: "
    //         const userLastNameInput = document.createElement('input')
    //         userLastNameInput.setAttribute('type','text')
    //         userLastNameInput.setAttribute('id','last_name')
    //         userLastNameInput.setAttribute('name','last_name')
    //         // AGE LABEL AND INPUT
    //         const userAgeLabel = document.createElement('label')
    //         userAgeLabel.innerText = "Age: "
    //         const userAgeInput = document.createElement('input')
    //         userAgeInput.setAttribute('type','number')
    //         userAgeInput.setAttribute('id','age')
    //         userAgeInput.setAttribute('name','age')
    //         // NUMBER OF GUESTS LABEL AND INPUT
    //         const userNumOfGuestsLabel = document.createElement('label')
    //         userNumOfGuestsLabel.innerText = "Number of guests: "
    //         const userNumOfGuestsInput = document.createElement('input')
    //         userNumOfGuestsInput.setAttribute('type','number')
    //         userNumOfGuestsInput.setAttribute('id','number_of_guests')
    //         userNumOfGuestsInput.setAttribute('name', 'number_of_guests')
    //         // ADDRESS LABEL AND INPUT
    //         const userAddressLabel = document.createElement('label')
    //         userAddressLabel.innerText = "Address:"
    //         const userAddressInput = document.createElement('input')
    //         userAddressInput.setAttribute('type', 'text')
    //         userAddressInput.setAttribute('id','address')
    //         userAddressInput.setAttribute('name','address')
    //         // CITY LABEL AND INPUT
    //         const userCityLabel = document.createElement('label')
    //         userCityLabel.innerText = "City:"
    //         const userCityInput = document.createElement('input')
    //         userCityInput.setAttribute('type', 'text')
    //         userCityInput.setAttribute('id','city')
    //         userCityInput.setAttribute('name','city')
    //         // STATE LABEL AND INPUT
    //         const userStateLabel = document.createElement('label')
    //         userStateLabel.innerText = "State:"
    //         const userStateInput = document.createElement('input')
    //         userStateInput.setAttribute('type', 'text')
    //         userStateInput.setAttribute('id','state')
    //         userStateInput.setAttribute('name','state')


    //         userForm.appendChild(userFormParagraph)
    //         userForm.appendChild(br)

    //         userForm.appendChild(userFirstNameLabel)
    //         userForm.appendChild(userFirstNameInput)
    //         userForm.appendChild(br)

    //         userForm.appendChild(userLastNameLabel)
    //         userForm.appendChild(userLastNameInput)
    //         userForm.appendChild(br)
            
    //         userForm.appendChild(userAgeLabel)
    //         userForm.appendChild(userAgeInput)
    //         userForm.appendChild(br)
            
    //         userForm.appendChild(userNumOfGuestsLabel)
    //         userForm.appendChild(userNumOfGuestsInput)
    //         userForm.appendChild(br)
            
    //         userForm.appendChild(userAddressLabel)
    //         userForm.appendChild(userAddressInput)
    //         userForm.appendChild(br)
           
    //         userForm.appendChild(userCityLabel)
    //         userForm.appendChild(userCityInput)
    //         userForm.appendChild(br)

    //         userForm.appendChild(userStateLabel)
    //         userForm.appendChild(userStateInput)
            
    //         customerPortal.appendChild(userForm);
            
    //         })
            
    // }
}