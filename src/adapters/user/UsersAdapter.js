class UsersAdapter{
    constructor(){
        this.baseUrl = "http://localhost:3000/api/v1/users"
        this.fetchUsers()
    }
    
    getUsers(){
        return fetch(this.baseUrl).then(response=> response.json()).then((users) => this.fetchUsers(users))
    }

    fetchUsers(users){
        let fetchUsers = document.getElementById('user_section')
                for(let i in users){
                    let userSection = document.createElement('section');
                    let userDiv = document.createElement('div');
                    userSection.setAttribute("class","userSection");
                    fetchUsers.appendChild(userSection);
                    userDiv.setAttribute("class","userDiv");
                    
                    userSection.appendChild(userDiv);
                    userDiv.innerText = users[i].first_name
                   
                }
    }
    
}