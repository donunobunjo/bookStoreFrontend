<template>
    <div class="container">
        <div class="text-center" style="margin: 20px 0px 20px 0px;">
            <span class="text-secondary">Wellcome to the bookstore</span>
        </div>
        <table class="table table-responsive">
                    <thead>
                        <tr>
                            <th>Isbn</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Review</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="book in books" :key="book.id">
                            <td>{{book.isbn}}</td>
                            <td>{{book.title}}</td>
                            <td>{{book.description}}</td>
                            <td>{{book.review}}</td>
                            
                        </tr>
                        
                    </tbody>
                </table>
        
    </div>
</template>

<script>
    export default {
      data(){
          return{
              books:[],
          }
      },
      mounted(){
          this.axios
            .get('http://localhost:8000/api/books')
            .then((res)=>{
                this.books = res.data
            })
      } 
    }
</script>