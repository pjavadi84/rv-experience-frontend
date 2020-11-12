class Rv{
    constructor(name, capacity, rate_per_day, company_id){
        // this.id = id,
        this.rvArray = [],
        this.name = name,
        this.capacity = capacity,
        this.rate_per_day = rate_per_day,
        this.company_id = company_id
        // this.rvAdapter = new RvsAdapter()
        // this.companyAdapter = new CompaniesAdapter()
        // this.companies = new Companies()
        this.rvFormDiv = document.getElementsByClassName("rv-form")
      
    }

    renderRvForm(event){
            let form = document.getElementsByClassName(`rv-form-${event.target.dataset.id}`)[0]
            let rvForm = document.createElement("form")
            rvForm.setAttribute("id", "rv-submit")
            rvForm.setAttribute("class", "hidden")
            let rvFormDiv = document.createElement("div")
            rvFormDiv.setAttribute("class","form-group")
           
            // RV NAME
            let rvNameLabel = document.createElement("label")
            rvNameLabel.setAttribute("for","rv-name")
            rvNameLabel.innerText = "Rv's Name: "
            let rvNameInput = document.createElement("input")
            rvNameInput.setAttribute("class","form-control")
            rvNameInput.setAttribute("id", `${event.target.dataset.id}`)
            rvNameInput.setAttribute("placeholder", "Enter an RV name")

            // RV CAPACITY
            let rvCapacityLabel = document.createElement("label")
            rvCapacityLabel.setAttribute("for","rv-capacity")
            rvCapacityLabel.innerText = "Maximum Capacity: "
            let rvCapacityInput = document.createElement("input")
            rvCapacityInput.setAttribute("class","form-control")
            rvCapacityInput.setAttribute("id", `${event.target.dataset.id}`)
            rvCapacityInput.setAttribute("placeholder", "Enter number of guests this vehicle can fit")

            // RV Price-per-dat
            let rvDailyPriceLabel = document.createElement("label")
            rvDailyPriceLabel.setAttribute("for","rv-daily-price")
            rvDailyPriceLabel.innerText = "Price/day: "
            let rvDailyPriceInput = document.createElement("input")
            rvDailyPriceInput.setAttribute("class","form-control")
            rvDailyPriceInput.setAttribute("id", `${event.target.dataset.id}`)
            rvDailyPriceInput.setAttribute("placeholder", "Enter daily rate")

            // SUBMIT
            let rvSubmitBtn = document.createElement("button")
            rvSubmitBtn.innerText = "Submit"
            rvSubmitBtn.setAttribute("id",`${event.target.dataset.id}`)
            rvSubmitBtn.setAttribute("class","submit-rv")
            // rvSubmitBtn.setAttribute("id",`${event.target.id}`)  
            rvSubmitBtn.setAttribute("type","submit")
            rvSubmitBtn.setAttribute("value","Add Rv")

            // CANCEL
            let rvCancelBtn = document.createElement("button")
            rvCancelBtn.innerText = "Cancel"
            rvCancelBtn.setAttribute("data-id",`${event.target.dataset.id}`)
            // rvSubmitBtn.setAttribute("id",`${event.target.id}`)  
            rvCancelBtn.setAttribute("type","cancel")
            rvCancelBtn.setAttribute("value","Cancel Form")

            rvForm.appendChild(rvNameLabel)
            rvForm.appendChild(rvNameInput)
            rvForm.appendChild(rvCapacityLabel)
            rvForm.appendChild(rvCapacityInput)
            rvForm.appendChild(rvDailyPriceLabel)
            rvForm.appendChild(rvDailyPriceInput)
            rvForm.appendChild(rvSubmitBtn)
            rvForm.appendChild(rvCancelBtn)
            rvFormDiv.appendChild(rvForm)
            form.appendChild(rvFormDiv)

           rvSubmitBtn.addEventListener("click", (e)=>{
               e.preventDefault();
               this.postRv(e)
           })
    }

    postRv(event){
        let rvAdapter = new RvsAdapter()
        const form = event.target.parentElement
        let eventId = parseInt(event.target.id)
    

        const configurationObject = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify({
              "name": form[0].value,
              "capacity": form[1].value,
              "rate_per_day": form[2].value,
              "company_id": eventId
            })
        };

        
        rvAdapter.postRvToApi(eventId,configurationObject)
    }

    renderRVsToDom(rvData, companyId){
        let rvArrays = rvData.data.rvs

        rvArrays.forEach((rv) => {
            if (rv.company_id === parseInt(companyId)){
                
                let compInfo = document.getElementById(`${companyId}`)
                
                let rvsDiv= document.createElement('div')
                rvsDiv.setAttribute("class" , "div-of-rvs")

                let rvLi = document.createElement("li")
                rvLi.setAttribute("id",`${rv.id}`)


        
                let rvDeleteAnchor = document.createElement("button")
                rvDeleteAnchor.setAttribute("id",`${rv.id}`)
                rvDeleteAnchor.innerText = "delete"


                compInfo.appendChild(rvsDiv)
                rvsDiv.appendChild(rvLi)
            
                rvLi.innerText = `name: ${rv.name} - capacity: ${rv.capacity} - price: ${rv.rate_per_day}`

                rvLi.appendChild(rvDeleteAnchor)
            }
        })
    }

    
}
