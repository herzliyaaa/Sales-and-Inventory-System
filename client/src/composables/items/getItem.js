import { ref } from "vue";

const getItem = (id) => {
  const item = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      let data = await fetch("http://localhost:8080/api/items/" + id);
      if (!data.ok) {
        throw Error("That post does not exist");
      }
      item.value = await data.json();
    } catch (err) {
      error.value = err.message;
    }
  };

  return { item, error, load };
};

export default getItem;
