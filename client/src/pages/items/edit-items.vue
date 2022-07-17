<!-- <template>
  <div v-if="error">{{ error }}</div>
  <div v-if="item" class="item">
    <h3>{{ item.description }}</h3>
  </div>
</template> -->

<script>
import getItem from "@/composables/getItem";

export default {
  props: ["id"],
  setup(props) {
    const { error, post, load } = getItem(props.id);
    load();
    return { error, post };
  },
};
</script>
