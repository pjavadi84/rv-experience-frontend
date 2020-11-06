
class CompaniesAdapter{
    constructor(){
        this.baseUrl = "http://localhost:3000/api/v1/companies"
    }


    async getCompanies() {
        try {
          const response = await axios.get(this.baseUrl);
          return response
        } catch {
          alert("Cannot load companies into database")
        }
    }

    async postCompanyToApi(configObject){
        return fetch(this.baseUrl, configObject)
        .then(res => res.json())
        .catch(error => alert("Cannot save this company record into database" + error))
    }
    

}