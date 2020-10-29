class Company {
    constructor(company){
        this.id = company.id,
        this.name = company.name,
        this.address = company.address,
        this.city = company.city,
        this.state = company.state,
        this.zipcode = company.zipcode,
        this.phonenumber = company.phonenumber,
        this.building_number = company.building_number,
        this.password = company.password, 
        this.email = company.email,
        this.rvs = company.rvs
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