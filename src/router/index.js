import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/forgot-password',
		name: 'ForgotPassword',
		component: () => import('../views/ForgotPassword.vue'),
	},
	{
		path: '/orders',
		component: () => import('../views/Orders.vue'),
		children: [
			{
				path: '',
				name: 'OrdersMain',
				component: () => import('../views/MainOrders.vue'),
			},
			{
				path: 'table/:status',
				name: 'OrdersTables',
				component: () => import('../views/OrdersTable.vue'),
			},
			{
				path: 'status/:id',
				name: 'OrderStatus',
				component: () => import('../views/Status.vue'),
			},
		],
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
