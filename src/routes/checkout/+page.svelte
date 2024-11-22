<script>
    import { goto } from '$app/navigation';
    
    const steps = [
        { name: 'Sign In', active: true },
        { name: 'Payment Info', active: false },
        { name: 'Confirm Order', active: false },
        { name: 'Receipt', active: false }
    ];

    function handleRegister() {
        goto('/register');
    }
</script>

<div class="max-w-7xl mx-auto px-4 py-8">
    <h1 class="text-3xl font-semibold text-gray-700">My Cart</h1>
    
    <!-- Progress Bar -->
    <div class="flex justify-center items-center my-10 px-4">
        {#each steps as step, index}
            <div class="flex items-center">
                <div class="flex flex-col items-center">
                    <div class="w-8 h-8 rounded-full flex items-center justify-center 
                        {step.active ? 'bg-blue-800 text-white' : 'bg-gray-200 text-gray-600'}">
                        {index + 1}
                    </div>
                    <span class="text-sm mt-2 {step.active ? 'text-blue-800' : 'text-gray-500'}">
                        {step.name}
                    </span>
                </div>
                {#if index < steps.length - 1}
                    <div class="w-24 h-0.5 mx-2 bg-gray-200"></div>
                {/if}
            </div>
        {/each}
    </div>

    <!-- Main Content -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Left Column -->
        <div class="lg:col-span-2">
            <div class="bg-gray-100 rounded-lg p-6">
                <h2 class="bg-blue-800 text-white p-3 mb-6 font-semibold">
                    STUDENT SIGN IN
                </h2>
                <button 
                    id="sign-in-btn"
                    class="bg-blue-800 text-white px-8 py-2 rounded hover:bg-blue-900 transition-colors"
                >
                    SIGN IN
                </button>
                
                <div class="mt-12 text-center">
                    <h2 class="bg-blue-800 text-white p-3 mb-6 font-semibold">
                        New To Elite?
                    </h2>
                    <button 
                        id="register-btn"
                        class="bg-blue-800 text-white px-8 py-2 rounded hover:bg-blue-900 transition-colors"
                        on:click={handleRegister}
                    >
                        REGISTER NOW
                    </button>
                </div>
            </div>
        </div>

        <!-- Right Column -->
        <div class="lg:col-span-1">
            <div class="bg-gray-100 rounded-lg p-6">
                <h2 class="bg-blue-800 text-white p-3 mb-6 font-semibold">
                    CART SUMMARY
                </h2>
                <div class="space-y-4">
                    <div class="flex justify-between">
                        <span>Subtotal:</span>
                        <span>$32.95</span>
                    </div>
                    <div class="flex justify-between">
                        <span>Discount:</span>
                        <span>$0.00</span>
                    </div>
                    <div class="flex justify-between pt-4 border-t border-gray-300 font-bold">
                        <span>Grand Total:</span>
                        <span>$32.95</span>
                    </div>
                    <div class="flex gap-4 mt-6 text-gray-500">
                        <span>VISA</span>
                        <span>MC</span>
                        <span>DISC</span>
                        <span>AMEX</span>
                    </div>
                </div>
            </div>

            <!-- Security Badge Section -->
            <div class="mt-8 text-center">
                <div class="flex flex-col items-center space-y-4">
                    <div class="text-xl font-semibold text-olive-600">Buy with Confidence</div>
                    <div class="text-sm text-gray-600">Elite is Safe and Secured Guaranteed!</div>
                </div>
            </div>
        </div>
    </div>
</div>
