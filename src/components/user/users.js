class Users{
    constructor(){
        this.users = []
        this.adapter = new UsersAdapter()
        this.bindEventListeners()
        this.fetchAndLoadUsers()
    }

    fetchAndLoadUsers(){
        this.adapter.getUsers().then(users => {
            console.log(users)
        })
    }
}