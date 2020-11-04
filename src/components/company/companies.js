class Companies {
    constructor(){
        this.companies = []
        this.adapter = new CompaniesAdapter()
        this.rvs = new Rvs()
        this.companyForm = document.getElementsByClassName("new-company-form")
        this.companyFormSubmit = document.getElementById("company-form-submit");
        this.companyDeleteBtn = document.getElementById("delete-company")
        this.fetchAndLoadCompanies()
        this.bindEventListeners()
        this.callToRemove()
        
    }



    fetchAndLoadCompanies(){
        document.addEventListener("DOMContentLoaded", ()=>{
            this.adapter.getCompanies()
            .then(companiesData => this.createCompanies(companiesData))
            .then(() => this.addCompaniesToDom())
            .then(() => this.bindEventListeners())
            .then(() => this.callToRemove())
        })   
    }


    async bindEventListeners(){
            this.companyFormSubmit.addEventListener("click", function(event){   
            this.postCompany(event);
            }.bind(this))   
    }
    
    



    async createCompanies(companiesData){
        for(let comp of companiesData.data){
            try {
                this.companies.push(new Company(comp.id, comp.name, comp.address, comp.city, comp.state, comp.zipcode, comp.phonenumber, comp.building_number, comp.email, comp.rvs))
                
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
        // debugger
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

          form.reset();

          this.adapter.postCompanyToApi(configurationObject).then(function(json) {
            var companyPost = new Company(json.company.id, json.company.name, json.company.address, json.company.city, json.company.state,
                json.company.zipcode, json.company.phonenumber, json.company.building_number, json.company.email)
            // let companyHash = companyPost.name
            
            companyPost.createCompanyCard();
            // debugger
          }.bind(this))  
    }

    callToRemove(){
        document.querySelectorAll("#delete-company").forEach(deleteBtn => deleteBtn.addEventListener('click', (event)=>{
            // this.adapter.removeCompany(event)
            const configObj = {
                method: 'DELETE',
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
    
            let companyUl = this.adapter.baseUrl + `/${event.target.dataset.id}`
            
            fetch(companyUl, configObj)
            // .then(res => res.json())
            // .then((event.target.parentElement.remove()))
        })
        )
    }
    

}