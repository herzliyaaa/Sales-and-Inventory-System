import { ref } from "vue";

const getSupplier = (id) => {
  const supplier = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      let data = await fetch("http://localhost:8080/api/suppliers/" + id);
      if (!data.ok) {
        throw Error("That post does not exist");
      }
      supplier.value = await data.json();
    } catch (err) {
      error.value = err.message;
    }
  };

  return { supplier, error, load };
};

export default getSupplier;
