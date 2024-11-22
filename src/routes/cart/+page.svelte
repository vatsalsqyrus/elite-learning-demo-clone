<script>
    import { cartItems } from '$lib/stores/cart';
    import { goto } from '$app/navigation';

    let promoCode = '';

    $: subtotal = $cartItems.reduce((sum, item) => sum + item.price, 0).toFixed(2);
    $: discount = 0;
    $: grandTotal = (subtotal - discount).toFixed(2);

    function applyPromoCode() {
        // Implement promo code logic here
    }

    function handleCheckout() {
        goto('/checkout');
    }
</script>

<div class="max-w-7xl mx-auto px-4 py-8">
    <div class="flex justify-between items-center mb-8">
        <h1 class="text-4xl font-bold text-gray-700">My Cart</h1>
        <a id="continue-shopping-link" href="/courses" class="text-blue-600 hover:text-blue-800">CONTINUE SHOPPING</a>
    </div>

    <div class="flex flex-col lg:flex-row gap-8">
        <!-- Main cart section -->
        <div class="flex-grow">
            {#if $cartItems.length > 0}
                <div class="bg-white rounded-lg shadow">
                    <div class="flex justify-between bg-[#2B4C6F] text-white p-4 rounded-t-lg">
                        <h2>REVIEW CART</h2>
                        <h2>PRICE</h2>
                    </div>

                    {#each $cartItems as item}
                        <div class="p-6 border-b">
                            <div class="flex justify-between">
                                <div>
                                    <h3 class="font-semibold text-lg mb-2">{item.title}</h3>
                                    <p class="text-sm text-gray-600">Approved Hours: 20.00</p>
                                    
                                    <!-- Course details -->
                                    <div class="mt-4 space-y-4">
                                        <div>
                                            <h4 class="font-semibold uppercase text-sm">PREVENTING AND DEALING WITH SEXUAL HARASSMENT IN THE WORKPLACE</h4>
                                            <p class="text-sm">Certificate - IL - Nursing <span class="text-blue-600">Digital Certificate Included For Free. Click Here To Get A Printed Certificate Shipped For $4.95.</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div class="text-right">
                                    <p class="font-semibold">${item.price}</p>
                                    <button 
                                        id="remove-item-{item.title}"
                                        class="text-blue-600 hover:text-blue-800 text-sm mt-2"
                                        on:click={() => removeFromCart(item.title)}
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </div>
                    {/each}
                </div>
            {:else}
                <p class="text-center py-8">Your cart is empty</p>
            {/if}
        </div>

        <!-- Cart summary -->
        <div class="w-full lg:w-80">
            <div class="bg-white rounded-lg shadow">
                <div class="bg-[#2B4C6F] text-white p-4 rounded-t-lg">
                    <h2>CART SUMMARY</h2>
                </div>
                <div class="p-6 space-y-4">
                    <div class="flex justify-between">
                        <span>Subtotal:</span>
                        <span>${subtotal}</span>
                    </div>
                    <div class="flex justify-between">
                        <span>Discount:</span>
                        <span>${discount.toFixed(2)}</span>
                    </div>
                    <div class="flex gap-2">
                        <input
                            id="promo-code-input"
                            type="text"
                            bind:value={promoCode}
                            placeholder="Promo Code"
                            class="flex-grow border rounded px-3 py-2"
                        />
                        <button
                            id="apply-promo-btn"
                            on:click={applyPromoCode}
                            class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                        >
                            APPLY
                        </button>
                    </div>
                    <div class="pt-4 border-t">
                        <div class="flex justify-between font-bold mb-4">
                            <span>Grand Total:</span>
                            <span>${grandTotal}</span>
                        </div>
                        <button
                            id="checkout-btn"
                            on:click={handleCheckout}
                            class="w-full bg-blue-600 text-white py-3 rounded font-semibold hover:bg-blue-700"
                        >
                            CHECKOUT
                        </button>
                    </div>
                    <div class="flex justify-center gap-2 mt-4">
                        <span class="text-gray-600">Visa</span>
                        <span class="text-gray-600">Mastercard</span>
                        <span class="text-gray-600">Discover</span>
                        <span class="text-gray-600">American Express</span>
                    </div>
                </div>
            </div>
            <div class="mt-8 text-center">
                <div class="inline-block bg-yellow-100 rounded-full p-4">
                    <span class="text-yellow-600">🔒</span>
                </div>
                <h3 class="font-semibold mt-4">Buy with Confidence</h3>
                <p class="text-sm text-gray-600">Elite is Safe and Secured Guaranteed!</p>
            </div>
        </div>
    </div>
</div>
