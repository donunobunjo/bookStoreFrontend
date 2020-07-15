<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card card-block">
                    <div class="card-header">
                        Login
                    </div>
                    <div class="card card-body">
                        <div v-if="spinner">
                             <b-spinner type="grow" label="Busy"></b-spinner>
                        </div>
                        <form>
                            <div class="row form-group">
                                <label for="email">Email:</label>
                                <input type="email" class="form-control" v-model="credentials.email" id="email" required>
                            </div>
                            <div class="row form-group">
                                <label for="password">Password:</label>
                                <input type="password" class="form-control" v-model="credentials.password" id="password" required>
                            </div>
                            <div class="row form-group">
                                <button class="btn btn-success" @click.prevent="login">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data(){
        return{
            credentials:{
                email:'',
                password:''
            },
            spinner:false
        }
    },
    methods:{
        login(){
            if(this.credentials.email!=""&&this.credentials.password!=""){
               this.axios
                    .post('http://localhost:8000/api/login', this.credentials)
                    .then(()=>(
                    this.$router.push({name: 'home'})
                        // console.log(response.data)
                    ))
                    .catch(err => {
                    console.log(err)
                    })
            }
            else{
                //$bvToast.show('example-toast')
            }
        }
    },
    //  beforeRouteEnter (to, from, next) { 
    //     if (localStorage.getItem('token')) {
    //         return next('/dashboard');
    //     }
    //     next();
    // }
}
</script>