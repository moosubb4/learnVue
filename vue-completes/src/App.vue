
<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <h1>File a Complaint</h1>
                    <hr>
                    <div class="form-group">
                        <label for="email">Mail</label>
                        <input
                                type="text"
                                id="email"
                                class="form-control"
                                v-model="dataForm.email"
                                >
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input
                                type="password"
                                id="password"
                                class="form-control"
                                v-model.lazy="dataForm.password"
                                >
                    </div>
                    <div class="form-group">
                        <label for="age">Age</label>
                        <input
                                type="number"
                                id="age"
                                class="form-control"
                                v-model="dataForm.age"
                                >
                    </div>

                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                    <label for="message">Message</label><br>
                    <!-- Interpolation between <textarea>{{ test }}</textarea> doesn't work!-->
                    <textarea
                            id="message"
                            rows="5"
                            class="form-control"
                            v-model="messages"
                            ></textarea>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <div class="form-group">
                        <label for="sendmail">
                            <input
                                    type="checkbox"
                                    id="sendmail"
                                    value="SendMail"
                                    v-model="sendMail"
                                    > Send Mail
                        </label>
                        <label for="sendInfomail">
                            <input
                                    type="checkbox"
                                    id="sendInfomail"
                                    value="SendInfoMail"
                                    v-model="sendMail"
                                    > Send Infomail
                        </label>
                    </div>

                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                    <label for="male">
                        <input
                                type="radio"
                                id="male"
                                value="Male"
                                v-model="gender"> Male
                    </label>
                    <label for="female">
                        <input
                                type="radio"
                                id="female"
                                value="Female"
                                v-model="gender"> Female
                    </label>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
                    <label for="priority">Priority</label>
                    <select
                            id="priority"
                            class="form-control"
                            v-model="selectedProps">
                          <option v-for="prop in priorities" >
                            {{prop}}
                          </option>
                    </select>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <button
                            class="btn btn-primary" 
                            @click.prevent="submitted">Submit!
                    </button>
                </div>
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <app-switch v-model="dataSwitch"></app-switch>
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="isSubmitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Mail:{{dataForm.email}}</p>
                        <p>Password:{{dataForm.password}}</p>
                        <p>Age:{{dataForm.age}}</p>
                        <p style="white-space:pre">Message:{{messages}} </p>
                        <p><strong>Send Mail?</strong></p>
                        <ul>
                            <li v-for="item in sendMail">{{item}}</li>
                        </ul>
                        <p>Gender:{{gender}}</p>
                        <p>Priority:{{selectedProps}}</p>
                        <p>Switched:{{dataSwitch}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Switch from "./Switch";
export default {
  data: function() {
    return {
      dataForm: {
        email: "",
        password: "",
        age: 23
      },
      messages: "",
      sendMail: [],
      gender: "Male",
      priorities: ["LOW", "MEDIUM", "HIGH"].reverse(),
      selectedProps: "HIGH",
      dataSwitch: true,
      isSubmitted: false
    };
  },
  methods: {
    submitted() {
      this.isSubmitted = true;
    }
  },
  components: {
    appSwitch: Switch
  }
};
</script>

<style>
</style>





<!--<template>
  <div class="container">
    <app-header :quoteCount="quotes.length" :maxQuotes="maxQuote"></app-header>
    <app-new-quote @quoteAdded="newQuote"></app-new-quote>
    <app-quote-grid @quoteDeleted="deleteQuote" :quotes="quotes"></app-quote-grid> 
    <div class="row">
      <div class="col-sm-12 text-center">
        <div class="alert alert-info">
          Info: Click on a Quote to Delete it!
        </div>
      </div>
    </div>
  </div>
</template>-->

<!--<script>-->
// import QuoteGrid from "./components/QuoteGrid";
// import NewQuote from "./components/NewQuote";
// import Header from "./components/Header";

// export default {
//   data: function() {
//     return {
//       quotes: ["Quotes Kuy rai laaaaaa oraoraoraoraoraoraora"],
//       maxQuote: 10
//     };
//   },
//   methods: {
//     newQuote(quote) {
//       if (this.quotes.length >= this.maxQuote) {
//         return alert('Remove sime Quote Now!!!');
//       }
//       this.quotes.push(quote);
//     },
//     deleteQuote(index) {
//       this.quotes.splice(index, 1);
//     }
//   },
//   components: {
//     appQuoteGrid: QuoteGrid,
//     appNewQuote: NewQuote,
//     appHeader: Header
//   }
// };
// </script>


