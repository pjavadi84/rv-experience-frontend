class Company {
    constructor(name, address, city, state, zipcode, phonenumber, building_number, password,email, rvs){
        this.id = id,
        this.name = name,
        this.address = address,
        this.city = city,
        this.state = state,
        this.zipcode = zipcode,
        this.phonenumber = phonenumber,
        this.building_number = building_number,
        this.password = password, 
        this.email = email,
        this.rvs = rvs
    }

    renderCompany(){
        return (`<div id="company-id-${this.id}">
                <a href="" data-id="${this.id}">${this.name}</a>
                <ul id="rvs">
                </ul>
                </div>
        `)
    }
}