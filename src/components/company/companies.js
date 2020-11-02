class Companies {
    constructor(){
        this.companies = []
        this.adapter = new CompaniesAdapter()
        this.companyForm = document.getElementsByClassName("new-company-form")
        this.companyFormSubmit = document.getElementById("company-form-submit");
        this.fetchAndLoadCompanies()
        this.bindEventListeners()
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


    bindEventListeners(){
        this.companyFormSubmit.addEventListener("click", function(event) {
            event.preventDefault();
            this.postCompany(event);
          }.bind(this))
    }


    async createCompanies(companiesData){
        for(let comp of companiesData.data){
            try {
                this.companies.push(new Company(comp.name, comp.address, comp.city, comp.state, comp.zipcode, comp.phonenumber, comp.building_number, comp.email, comp.rvs))
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

    postCompany(event){
        event.preventDefault()
        const form = event.target.parentElement
        const company = new Company(form[0].value,form[1].value,form[2].value,form[3].value,form[4].value,form[5].value,form[6].value,form[7].value)
        const configurationObject = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify({
              "name": form[0].value,
              "address": form[1].value,
              "city": form[2].value,
              "state": form[3].value,
              "zipcode":form[4].value,
              "phonenumber":form[5].value,
              "building_number":form[6].value,
              "email":form[7].value,
            })
          };
          this.adapter.postCompanyToApi(configurationObject).then(function(json) {
            company.createCompanyCard(json);
          }.bind(this))
    }


}

