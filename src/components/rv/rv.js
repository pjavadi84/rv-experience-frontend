class Rv{
    constructor(name, capacity, rate_per_day, company_id){
        // this.id = id,
        this.name = name,
        this.capacity = capacity,
        this.rate_per_day = rate_per_day,
        this.company_id = company_id
        this.rvAdapter = new RvsAdapter()
        this.companyAdapter = new CompaniesAdapter()
        this.rvFormDiv = document.getElementsByClassName("rv-form")
      
    }

    renderRvForm(event){
            let form = document.getElementsByClassName(`rv-form-${event.target.dataset.id}`)[0]
            let rvForm = document.createElement("form")
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
            rvSubmitBtn.setAttribute("data-id",`${event.target.dataset.id}`)
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
        const form = event.target.parentElement
        let eventId = event.target.dataset.id
    

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

        this.rvAdapter.postRvToApi(eventId,configurationObject)
    }

    renderRVsToDom(item){
        let compInfo = document.querySelector("div.company-info")
           
            let rvsDiv= document.createElement('div')
            rvsDiv.setAttribute("class" , "div-of-rvs")

            let rvLi = document.createElement("li")
            rvLi.setAttribute("id",`${item.id}`)


    
            let rvDeleteAnchor = document.createElement("button")
            rvDeleteAnchor.setAttribute("id",`${item.id}`)
            rvDeleteAnchor.innerText = "delete"


            compInfo.appendChild(rvsDiv)
            rvsDiv.appendChild(rvLi)
            
            rvLi.innerText = `name: ${item.name} - capacity: ${item.capacity} - price: ${item.rate_per_day}`

            rvLi.appendChild(rvDeleteAnchor)
    }
    // createRvCard(event){
    //     // for(let arrayItem of event){
    //     //     console.log(arrayItem);
    //     // }
    //     event.forEach(function (arrayItem) {
    //         let compInfo = document.querySelector("div.company-info")
           
    //         let rvsDiv= document.createElement('div')
    //         rvsDiv.setAttribute("class" , "div-of-rvs")

    //         let rvLi = document.createElement("li")
    //         rvLi.setAttribute("id",`${arrayItem.id}`)


    
    //         let rvDeleteAnchor = document.createElement("button")
    //         rvDeleteAnchor.setAttribute("id",`${arrayItem.id}`)
    //         rvDeleteAnchor.innerText = "delete"


    //         compInfo.appendChild(rvsDiv)
    //         rvsDiv.appendChild(rvLi)
            
    //         rvLi.innerText = `name: ${arrayItem.name} - capacity: ${arrayItem.capacity} - price: ${arrayItem.rate_per_day}`

    //         rvLi.appendChild(rvDeleteAnchor)
            
    //     });
    // }
    
}
