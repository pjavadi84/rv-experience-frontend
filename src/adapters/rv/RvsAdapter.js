class RvsAdapter {
    constructor(){
        this.baseUrl = `http://localhost:3000/api/v1/companies`
    }


    postRvToApi(eventId, configObject){
      debugger
        this.rvsUrl = this.baseUrl + `/${eventId}/rvs`

        fetch(this.rvsUrl, configObject).then(
          response => console.log(`${response} RV posted to the database`)
        );
       
        // return fetch(rvsUrl, configObject)
        // .then(res => res.json())
        // .catch(error => alert("Cannot save this RV record into its associated company" + error))
    }


    fetchRvs(event) {
        let rvsUrl = this.baseUrl + `/${event}/rvs`
        

        try {
          let response = axios.get(rvsUrl);
          
          return response
          
        } catch {
          alert("Cannot load Rvs from database")
        }
    }

}