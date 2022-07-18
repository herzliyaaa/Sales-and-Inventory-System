import { ref } from "vue";

const getCustomer = (id) => {
  const customer = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      let data = await fetch("http://localhost:8080/api/customers/" + id);
      if (!data.ok) {
        throw Error("That post does not exist");
      }
      customer.value = await data.json();
    } catch (err) {
      error.value = err.message;
    }
  };

  return { customer, error, load };
};

export default getCustomer;
