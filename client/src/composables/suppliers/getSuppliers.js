import { ref } from "vue";

const getSuppliers = () => {
  const suppliers = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      let data = await fetch("http://localhost:8080/api/suppliers");
      if (!data.ok) {
        throw Error("no available data");
      }
      suppliers.value = await data.json();
    } catch (err) {
      error.value = err.message;
    }
  };

  return { suppliers, error, load };
};

export default getSuppliers;
