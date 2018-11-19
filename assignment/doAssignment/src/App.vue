<template>
    <div class="container">
        <form>
            <div class="row">
                <div v-if="!submitted" class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->
                    <div class="form-group " >
                        <label for="name">Name:</label>
                        <input type="text"
                                id="name"
                                class="form-control"
                                v-model="firstName">
                        <label for="surname">Surname:</label>
                        <input type="text"
                                id="surname"
                                class="form-control"
                                v-model="surName">
                    </div>                                       
                     <br>
                     <div class="form-group">
                        <label for="email">Mail:</label>
                        <input  type="text"
                                id="email"
                                class="form-control"
                                v-model="mail">
                    </div>
                     <br>
                    <div class="form-group">
                        <label for="password">Password:</label>
                        <input type="password"
                                id="password"
                                class="form-control"
                                v-model="password">
                    </div>
                    <div class="form-group">
                        <label>
                          Yes
                        <input type="radio"
                                id="yes"
                                value="true"
                                v-model="isSaved">
                        </label>
                       <label>
                          No
                        <input type="radio"
                                id="no"
                                value="false"
                                v-model="isSaved">
                        </label>
                        
                    </div>
                    <div class="form-group">
                      <button
                       class="btn btn-danger"
                       @click.prevent="onSubmit">submit</button>
                    </div>

                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
        </form>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div v-if="submitted"  class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{firstName}} {{surName}}</p>
                        <p>Mail:{{mail}} </p>
                        <p>Password: {{password}}</p>
                        <p>Store in Database?: {{isSaved}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: "",
      surName: "",
      mail: "",
      password: "",
      isSaved: false,
      submitted: false
    };
  },
  methods: {
    onSubmit() {
      this.submitted = true;
    }
  }
};
</script>

<style>
</style>
