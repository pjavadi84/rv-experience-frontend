class RvsAdapter {
    constructor(){
        this.baseUrl = `http://localhost:3000/api/v1/companies`
    }


    postRvToApi(id,configObject){
        let rvsUrl = this.baseUrl + `/${id}/rvs`
        return fetch(rvsUrl, configObject)
        .then(res => res.json())
        .catch(error => alert("Cannot save this RV record into its associated company" + error))
    }


    fetchRvs(event) {
      // OLDER VERSION
        // let rvsUrl = this.baseUrl + `/${event.target.dataset.id}/rvs`
        let rvsUrl = this.baseUrl + `/${event}/rvs`
        

        try {
          let response = axios.get(rvsUrl);
          
          return response
          
        } catch {
          alert("Cannot load Rvs from database")
        }
    }

}