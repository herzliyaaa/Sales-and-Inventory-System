import { createRouter, createWebHistory } from "vue-router";
import DashBoard from "../pages/dashboard/dashboard.vue";
import ItemsList from "../pages/items/items.vue";
import AddItems from "../pages/items/add-items.vue";
import EditItems from "../pages/items/edit-items.vue";
import CustomersList from "../pages/customers/customers.vue";
import SuppliersList from "../pages/suppliers/suppliers.vue";

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
    path: "/items/edit/:id/",
    component: EditItems,
    name: "EditItems ",
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
  // {
  //   path: "/customers/:id/edit",
  //   component: EditItems ,
  //   name: "EditItems ",
  // },
  // {
  //   path: "/suppliers/:id/edit",
  //   component: EditItems ,
  //   name: "EditItems ",
  // }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
