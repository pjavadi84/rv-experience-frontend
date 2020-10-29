class Companies{
    constructor(){
        this.companies = []
        this.adapter = new CompaniesAdapter()
        const companyCard = document.getElementsByClassName("company-card-container")
        const companyForm = document.getElementsByClassName("new-company-form")
        // this.bindEventListeners()
        this.fetchAndLoadCompanies()
        // this.createCompanies(companies)
        // this.createCompanyCard(company)
    }

    fetchAndLoadCompanies(){
        this.adapter.getCompanies().then(companiesData => this.loadCompanies(companiesData))
    }

    loadCompanies(data){
        let companyLi = document.createElement('li')
        companyLi.setAttribute("class", "companyLi")
    }
}