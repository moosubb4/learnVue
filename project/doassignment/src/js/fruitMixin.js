export const fruitMixin = {
    data() {
        return {
          text: "Hello f*ck yeah",
          fruits: ["Apple", "Banana", "Mango", "Melon"],
          filterText: ""
        };
      },
      computed: {
        filterdFruits(element) {
          return this.fruits.filter(element => {
            return element.match(this.filterText);
          });
        }
      }
}