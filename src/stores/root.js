import { defineStore } from 'pinia' 
import {getData,setData,deleteData} from '../stores/axiosRequest'
import { BASE_URL } from '../constants/api'
export const useRootStore = defineStore('root', {
  state: () => ({
    organization: [],
    params:{
      page: 1,
      page_size: 5,
      ordering: ''
    },
    page_count:0,
    data_count:0,
    is_submit:true
  }),
  actions: {
    async getOrganization(page = this.params.page,page_size=this.params.page_size,ordering=this.params.ordering) {

      this.is_submit = false

      this.params.page = page
      this.params.ordering = ordering      
      this.params.page_size = page_size
      if (this.data_count !=0) {
        const max_value = Math.ceil( this.data_count / this.params.page_size)
        if(max_value<this.params.page){
          this.params.page =  max_value
        }
      }
      let data = await getData(BASE_URL,{
        params:this.params
      })  
      this.data_count = await data?.count
      this.organization = data?.results     

      this.page_count = Math.ceil( this.data_count / this.params.page_size)
      
      this.is_submit = true

      return this.params
    },
    async addOrganization(addParams) {
      const data = await setData(BASE_URL,
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
      await deleteData(`${BASE_URL}${id}`)  
      this.getOrganization(this.params.page,this.params.page_size,this.params.ordering)
    },
  }
})
