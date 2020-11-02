class Companies {
    constructor(){
        this.companies = []
        this.adapter = new CompaniesAdapter()
        this.companyForm = document.getElementsByClassName("new-company-form")
        this.fetchAndLoadCompanies()
        this.renderCompanyDetails()
        
        // this.bindEventListeners()
    }


    fetchAndLoadCompanies(){
        document.addEventListener("DOMContentLoaded", ()=>{
            this.adapter.getCompanies()
            .then(companiesData => this.createCompanies(companiesData))
            .then(() => this.addCompaniesToDom())
            // .then(() => this.bindEventListeners())
            // debugger
        })   
    }

    async createCompanies(companiesData){
        for(let comp of companiesData.data){
            try {
                this.companies.push(new Company(comp.id, comp.name, comp.address, comp.city, comp.state, comp.zipcode, comp.phonenumber, comp.building_number, comp.password, comp.email,comp.rvs))
            } catch(error){
                console.error(error)
            } 
        }
    }


    addCompaniesToDom() {
        for (let company of this.companies) {
            // debugger
          company.createCompanyCard()
        }
    }

    // should contains all the listeners to the buttons
    // bindEventListeners(){
        // let companyDetails = document.querySelectorAll("button#company-details")
        // companyDetails.addEventListener("click", function() {
        //     console.log("hi")
        // // this.renderCompanyDetails();
        // }) 
    // }


    renderCompanyDetails(){

        // this.adapter.getCompaniesDetails()
        // console.log(companyId)
        // debugger
        // console.log("mashti")
        // Selecting where you want to render:
        // let companyCard = document.getElementsByClassName("company-card")
       
        // Company information
        // let coAddress = document.createElement("ul")
        // coAddress.innerText = `${this.address}`
        // let coCity = document.createElement('ul')
        // let coState = document.createElement('ul')
        // let coBuildNum = document.createElement('ul')
        // let coEmail = document.createElement('ul')
        // RVs Button
        // let rvsButton = document.createElement('button')
        // rvsButton.setAttribute("id", "view-rvs")
        // rvsButton.setAttribute("data-id",`${this.id}`)
        // rvsButton.innerText = "View Rvs"
        // EDIT Button(for Company)
        // let editCompany = document.createElement('button')
        // editCompany.setAttribute("id","edit")
        // editCompany.setAttribute("data-id",`${this.id}`)
        // Delete Button(for Company)
        // let deleteCompany = document.createElement('button')
        // deleteCompany.setAttribute("id","delete")
        // deleteCompany.setAttribute("data-id",`${this.id}`)
        // deleteCompany.innerText = "Delete Company"

        // companyCard.appendChild(coAddress)

        // this.adapter.getCompanyDetails().then(info => console.log(info))
    }

}

