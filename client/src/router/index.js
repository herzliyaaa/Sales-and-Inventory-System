import { createRouter, createWebHistory } from "vue-router";
import DashBoard from "../pages/dashboard/dashboard.vue";
import ItemsList from "../pages/items/items.vue";
import AddItems from "../pages/items/add-items.vue";
import EditItems from "../pages/items/edit-items.vue";
import CustomersList from "../pages/customers/customers.vue";
import EditCustomer from "../pages/customers/edit-customer.vue";
import SuppliersList from "../pages/suppliers/suppliers.vue";
import EditSupplier from "../pages/suppliers/edit-supplier.vue";

// const BASE_URL = "localhost:3000/";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: DashBoard,
  },
  {
    path: "/items",
    name: "Items",
    component: ItemsList,
  },
  {
    path: "/items/add",
    component: AddItems,
    name: "AddItems",
  },
  {
    path: "/items/:id/",
    component: EditItems,
    name: "EditItems",
    props: true,
  },
  {
    path: "/customers",
    component: CustomersList,
    name: " CustomersList",
  },
  {
    path: "/suppliers",
    component: SuppliersList,
    name: "SuppliersList ",
  },
  {
    path: "/customers/:id/",
    component: EditCustomer,
    name: "EditCustomer",
  },
  {
    path: "/suppliers/:id/",
    component: EditSupplier,
    name: "EditSupplier",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
