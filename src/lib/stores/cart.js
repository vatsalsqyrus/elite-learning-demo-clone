import { writable } from 'svelte/store';

export const cartItems = writable([]);

export const addToCart = (course) => {
    cartItems.update(items => [...items, course]);
};

export const removeFromCart = (courseTitle) => {
    cartItems.update(items => items.filter(item => item.title !== courseTitle));
}; 