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

    async createCompanies(companiesData){
        // debugger
        for(let comp of companiesData.data){
            // debugger
            // let rvs = this.createArrayOfCompanyRvs(comp.rvs)
            // let rvs = this.createArrayOfCompanyRvs(comp.rv)
            // this.companies.push(new Company(comp.name, comp.address, comp.city, comp.state, comp.zipcode, comp.phonenumber, comp.building_number, comp.password, comp.email,rvs))
            try {
                // debugger
                // let rvs = await this.createArrayOfCompanyRvs(comp.rvs)
                
                this.companies.push(new Company(comp.id, comp.name, comp.address, comp.city, comp.state, comp.zipcode, comp.phonenumber, comp.building_number, comp.password, comp.email,comp.rvs))
            } catch(error){
                console.error(error)
            } 
        }
    }

    // createArrayOfCompanyRvs(rvs) {
    //     for (let rv of rvs) {
    //       let rvArray = [];
    //       rvArray.push(rv);
    //     }
    //     return rvArray
    // }

    addCompaniesToDom() {
        for (let company of this.companies) {
            // debugger
          company.createCompanyCard()
        }
    }

}

