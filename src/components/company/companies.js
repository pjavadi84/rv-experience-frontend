class Companies{
    constructor(){
        this.companies = []
        this.adapter = new CompaniesAdapter()
        const companyForm = document.getElementsByClassName("new-company-form")
        // this.bindEventListeners()
        this.fetchAndLoadCompanies()
        // this.createCompanies(companies)
        // this.createCompanyCard(company)
    }

     

    fetchAndLoadCompanies(){
        document.addEventListener("DOMContentLoaded", ()=>{
            this.adapter.getCompanies().then(companiesData => this.createCompanies(companiesData)).then(() => this.addCompaniesToDom())
            
        })   
    }

    createCompanies(companiesData){
        // debugger
        for(let comp of companiesData.data){
            // debugger
            let rvs = this.createArrayOfCompanyRvs(comp.rvs)
            // debugger
            this.companies.push(new Company(comp.name, comp.address, comp.city, comp.state, comp.zipcode, comp.phonenumber, comp.building_number, comp.password, comp.email,rvs))
            debugger
        }
    }

    createArrayOfCompanyRvs(ingredients) {
        let ingredientArray = [];
        for (let ingredient of ingredients) {
          ingredientArray.push(ingredient.name);
        }
        return ingredientArray
      }

}

