import { defineStore } from 'pinia' 
import axios from 'axios'
import { BASE_URL } from '../constants/api'
export const useRootStore = defineStore('root', {
  state: () => ({
    organization: [],
    params:{
      page: 1,
      page_size: 5,
      ordering: 'id'
    },
    page_count:[],
    filteredColumn1: false,
    filteredColumn2: false,
    filteredColumn3: false,
    filteredColumn4: false,
    filteredColumn5: false,
  }),
  actions: {
    async getOrganization(page = this.params.page,page_size=this.params.page_size,ordering=this.params.ordering) {

      this.params.page = page
      this.params.ordering = ordering      
      this.params.page_size = page_size
   
      console.log(this.params)
      const data = await axios.get(BASE_URL,{
        params:this.params
      })
      this.organization = data?.data?.results  
      let pc =Math.ceil( data?.data?.count / this.params.page_size)
      this.page_count = []
      while(pc !=0){
        this.page_count.unshift(pc)
        pc=pc-1 
      }
      console.log(this.page_count)
    },
    async addOrganization(addParams) {
      console.log(addParams.short_name)
      const data = await axios.post(BASE_URL,
        {
          description: addParams.description,
          is_active: addParams.is_active,
          name: addParams.name,
          short_name: addParams.shortName,
      })
      this.getOrganization(this.params.page,this.params.page_size,this.params.ordering)
      console.log(data)
    },
    async deleteOrganization(id) {
      await axios.delete(`${BASE_URL}${id}`)
      this.getOrganization(this.params.page,this.params.page_size,this.params.ordering)
    },
  }
})
