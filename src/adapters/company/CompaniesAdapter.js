
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

    postCompanyToApi(configObject){
        return fetch(this.baseUrl, configObject)
        .then(res => res.json())
        .catch(error => alert("Cannot save this company record into database" + error))
    }
    
    getCompanyByRv(rv){
        return fetch(this.baseURL + `/${rv}`).then(res => res.json())
        
    }

    // removeCompany(event){
        
        // const configObj = {
        //     method: 'DELETE',
        //     headers: { 
        //         'Content-Type': 'application/json',
        //         'Accept': 'application/json'
        //     }
        // }

        // let companyUl = this.baseUrl + `/${event.target.dataset.id}`
        
        // fetch(companyUl, configObj)
        // .then(res => res.json())
        // .then((event.target.parentElement.remove()))
        
    // }
}