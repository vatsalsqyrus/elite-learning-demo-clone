<script>
    import { goto } from '$app/navigation';
    
    let email = '';
    let password = '';
    let confirmPassword = '';
    let showPasswords = false;
    let errors = {};

    function validateForm() {
        errors = {};
        
        if (!email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Please enter a valid email';
        }

        if (!password) {
            errors.password = 'Password is required';
        }

        if (!confirmPassword) {
            errors.confirmPassword = 'Please confirm your password';
        } else if (password !== confirmPassword) {
            errors.confirmPassword = 'Passwords do not match';
        }
        console.log(errors, Object.keys(errors).length === 0);
        return Object.keys(errors).length === 0;
    }

    function handleContinue() {
        if (validateForm()) {
            // Store the data in a session or store if needed
            goto('/personal-info');
        }
    }
</script>

<div class="max-w-7xl mx-auto px-4 py-8">
    <div class="flex justify-between items-center">
        <h1 class="text-3xl font-semibold text-gray-700">Create an Account</h1>
        <span class="text-gray-600">Step 1 of 3</span>
    </div>

    <div class="mt-8 max-w-3xl">
        <!-- Contact Information Section -->
        <div class="mb-8">
            <h2 class="text-xl text-[#2B4C6F] font-semibold mb-2">Contact Information</h2>
            <p class="text-gray-600 text-sm mb-4">
                The information below will be used to send purchased course materials.
            </p>
            
            <div class="space-y-4">
                <div>
                    <label class="block mb-1">
                        EMAIL ADDRESS <span class="text-red-500">*</span>
                    </label>
                    <input 
                        id="email-input"
                        type="email"
                        bind:value={email}
                        class="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                            {errors.email ? 'border-red-500' : ''}"
                        required
                    />
                    {#if errors.email}
                        <p class="text-red-500 text-sm mt-1">{errors.email}</p>
                    {/if}
                </div>
                <a id="use-current-login-link" href="#" class="text-blue-600 hover:text-blue-800 text-sm">
                    Use my current login instead
                </a>
            </div>
        </div>

        <!-- Login Information Section -->
        <div class="mb-8">
            <h2 class="text-xl text-[#2B4C6F] font-semibold mb-2">Login Information</h2>
            <p class="text-gray-600 text-sm mb-4">
                The information below will be used to log into your secure student account.
            </p>
            
            <div class="space-y-4">
                <div>
                    <label class="block mb-1">
                        PASSWORD <span class="text-red-500">*</span>
                    </label>
                    <input 
                        id="password-input"
                        type={showPasswords ? "text" : "password"}
                        bind:value={password}
                        class="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                </div>

                <div>
                    <label class="block mb-1">
                        CONFIRM PASSWORD <span class="text-red-500">*</span>
                    </label>
                    <input 
                        id="confirm-password-input"
                        type={showPasswords ? "text" : "password"}
                        bind:value={confirmPassword}
                        class="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                </div>

                <div class="flex items-center">
                    <input 
                        id="show-passwords-checkbox"
                        type="checkbox"
                        bind:checked={showPasswords}
                        class="mr-2"
                    />
                    <label for="showPasswords" class="text-gray-700">
                        SHOW PASSWORDS
                    </label>
                </div>
            </div>
        </div>

        <!-- Footer Actions -->
        <div class="flex justify-between items-center mt-8">
            <a id="sign-in-link" href="/login" class="text-blue-600 hover:text-blue-800">
                Sign in instead
            </a>
            <button 
                id="continue-btn"
                on:click={handleContinue}
                class="bg-[#2B4C6F] text-white px-8 py-2 rounded hover:bg-blue-900 transition-colors"
            >
                CONTINUE
            </button>
        </div>
    </div>
</div>
