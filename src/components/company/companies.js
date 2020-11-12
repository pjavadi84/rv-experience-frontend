class Companies {
    constructor(){
        this.companies = []
        this.companyId = []
        this.rv = new Rv()
        this.domContent()
        this.bindEventListeners()
        this.companyForm = document.getElementsByClassName("new-company-form")
        this.companyDeleteBtn = document.getElementById("delete-company")
        // this.rvFormSubmit = document.getElementById("rv-form-submit")
        this.listOfRvs = document.getElementsByClassName("btn btn-info")
    }

    

    // DOM CONTENTS UPON LOADING 
    domContent(){
        document.addEventListener("DOMContentLoaded", ()=>{
            this.adapter = new CompaniesAdapter()
            this.adapter.getCompanies()
            .then(companiesData => this.createCompanies(companiesData))
            .then(() => this.addCompaniesToDom())
            .then(() => this.bindEventListeners())
        })
    }



    async bindEventListeners(){
        let rvForms = document.getElementsByClassName("btn btn-dark")
        this.rvList = document.getElementsByClassName("btn btn-info")
        this.allShowRvBtns = document.getElementsByClassName("btn btn-info")
        // this.allShowRvBtns = document.querySelectorAll("button#show-rvs")

        this.companyFormSubmit = document.getElementById("company-form-submit")
        this.deleteBtnCompanies = document.getElementsByClassName("btn btn-danger")

        this.companyFormSubmit.addEventListener("click", function(event){
            this.postCompany(event);
        }.bind(this)) 
            
            
            
        for (let form of rvForms){
            form.addEventListener("click", (event)=>{
                this.rv = new Rv(event.name,event.rate_per_day,event.company_id)
                this.rv.renderRvForm(event)
            })
        }   


        for(let showRvBtn of this.allShowRvBtns){
                showRvBtn.addEventListener("click", (event)=>
                    {this.getRvs(event);}
                )
        }

        for(let deleteCompany of this.deleteBtnCompanies){
            deleteCompany.addEventListener("click", (event)=>{
                this.removeCompanies(event);
            })
        }
    }


    
    getRvs(event){
        let rvsAdapter = new RvsAdapter()
        let companyId = event.target.dataset.id

        rvsAdapter.fetchRvs(companyId)
        .then(rvData => this.rv.renderRVsToDom(rvData,companyId))
        // .then(rvData => this.rvsData(rvData))
        // .then(rvData => this.rvsData(rvData))
       
        

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
        
        this.adapter = new CompaniesAdapter()
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


    async addCompaniesToDom() {
        for (let company of this.companies) {
            company.createCompanyCard()
        }
    }

    async removeCompanies(event){           
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
    }

   

    filterCorrectRvs(rvData, companyId){
        this.itemsSelected = []
        this.compIdInInteger = parseInt(companyId, 10)
        this.rvsArray = rvData.data.rvs
        
        for(let item of this.rvsArray){
            if(item.company_id === companyId){
                this.itemsSelected.push(obj)
                this.rv.renderRVsToDom(this.itemsSelected)
            } else {
                 return this.itemsSelected
            }
        }
    }

    toggleForm(event){
        console.log(event);
        debugger
        this.rvsubmit = document.getElementsByClassName("submit-rv")
        const form = this.rvsubmit[0].parentElement
        this.hideAndShowRvForm(form)
    }

    hideAndShowRvForm(form){
        if (form.classList.contains("hidden")) {
            form.classList.remove("hidden");
          } else {
            form.className += " hidden";
          }
    }

        
}
