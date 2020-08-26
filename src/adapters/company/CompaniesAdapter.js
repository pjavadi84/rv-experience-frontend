class CompaniesAdapter{
    constructor(){
        this.baseUrl = "http://localhost:3000/api/v1/companies"
    }

    getCompanies(){
        return fetch(this.baseUrl).then(res=> res.json())
    }
}