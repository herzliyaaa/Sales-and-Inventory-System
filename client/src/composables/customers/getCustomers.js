import { ref } from "vue";

const getCustomers = () => {
  const customers = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      let data = await fetch("http://localhost:8080/api/customers");
      if (!data.ok) {
        throw Error("no available data");
      }
      customers.value = await data.json();
    } catch (err) {
      error.value = err.message;
    }
  };

  return { customers, error, load };
};

export default getCustomers;
