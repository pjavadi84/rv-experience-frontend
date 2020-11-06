class Companies {
    constructor(){
        this.companies = []
        this.adapter = new CompaniesAdapter()
        this.rvsAdapter = new RvsAdapter()
        this.rvs = new Rvs()
        this.rv = new Rv()
        this.companyForm = document.getElementsByClassName("new-company-form")
        this.companyFormSubmit = document.getElementById("company-form-submit");
        this.companyDeleteBtn = document.getElementById("delete-company")
        this.rvFormSubmit = document.getElementById("rv-form-submit")
        this.fetchAndLoadCompanies()   
        // this.rvResources() 
        // this.loadRvResource()    
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
            
            this.showRvs = document.getElementsByClassName("btn btn-dark")

            for (let showForm of this.showRvs){
                showForm.addEventListener("click", (event)=>{
                    this.rv.renderRvForm(event)
                })
            }       
    }


    // POSTING TO MY RAILS API:
    postCompany(event){
        event.preventDefault()
        const form = event.target.parentElement
        
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


        this.adapter.postCompanyToApi(configurationObject).then((json)=>{
            let companyPost = new Company(json.company.id, json.company.name, json.company.address, json.company.city, json.company.state,json.company.zipcode, json.company.phonenumber, json.company.building_number, json.company.email)
            companyPost.createCompanyCard()
        })

    }

    postRv(event){
        console.log(event)
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
            company.createCompanyCard()
        }
    }

    callToRemove(){
        document.querySelectorAll("#delete-company").forEach(deleteBtn => deleteBtn.addEventListener('click', (event)=>{
           
            const configObj = {
                method: 'DELETE',
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
    
            let companyUl = this.adapter.baseUrl + `/${event.target.dataset.id}`
            fetch(companyUl, configObj)   
            let companySection = document.getElementById(`${event.target.dataset.id}`)
            companySection.remove()
            
        })
        )
    }

    submitRvToApi(){
        console.log("shotor")
    }
    

}