<script>
    import { goto } from '$app/navigation';
    
    let birthDate = '';
    let address = '';
    let city = '';
    let country = 'USA';
    let state = '';
    let zipCode = '';
    let errors = {};
    let showSuccessPopup = false;

    const states = [
        "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA",
        "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD",
        "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ",
        "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC",
        "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"
    ];

    function validateForm() {
        errors = {};
        
        if (!birthDate) {
            errors.birthDate = 'Birth date is required';
        } else if (!/^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/\d{4}$/.test(birthDate)) {
            errors.birthDate = 'Please enter a valid date in MM/DD/YYYY format';
        }
        
        if (!address) {
            errors.address = 'Address is required';
        }
        
        if (!city) {
            errors.city = 'City is required';
        }
        
        if (!state) {
            errors.state = 'State is required';
        }
        
        if (!zipCode) {
            errors.zipCode = 'ZIP code is required';
        } else if (!/^\d{5}(-\d{4})?$/.test(zipCode)) {
            errors.zipCode = 'Please enter a valid ZIP code';
        }

        return Object.keys(errors).length === 0;
    }

    function handleCreateAccount() {
        if (validateForm()) {
            // Here you would typically make an API call to create the account
            showSuccessPopup = true;
            // setTimeout(() => {
            //     showSuccessPopup = false;
            //     // goto('/login');  // Redirect to login page after success
            // }, 2000);
        }
    }
</script>

<div class="max-w-7xl mx-auto px-4 py-8">
    <div class="flex justify-between items-center">
        <h1 class="text-3xl font-semibold text-gray-700">Complete Registration</h1>
        <span class="text-gray-600">Step 3 of 3</span>
    </div>

    <div class="mt-8 max-w-3xl">
        <!-- Birth Date Section -->
        <div class="mb-8">
            <label class="block mb-1">
                Birth Date <span class="text-red-500">*</span>
            </label>
            <p class="text-gray-600 text-sm mb-2">
                The information below will be used to create your certificates.
            </p>
            <input 
                id="birth-date-input"
                type="text"
                bind:value={birthDate}
                placeholder="MM/DD/YYYY"
                class="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                    {errors.birthDate ? 'border-red-500' : ''}"
            />
            {#if errors.birthDate}
                <p class="text-red-500 text-sm mt-1">{errors.birthDate}</p>
            {/if}
        </div>

        <!-- Contact Information Section -->
        <div class="space-y-6">
            <h2 class="text-xl text-[#2B4C6F] font-semibold">Contact Information</h2>
            <p class="text-gray-600 text-sm">
                The information below will be used to send purchased course materials.
            </p>

            <div>
                <label class="block mb-1">
                    ADDRESS <span class="text-red-500">*</span>
                </label>
                <input 
                    id="address-input"
                    type="text"
                    bind:value={address}
                    class="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                        {errors.address ? 'border-red-500' : ''}"
                />
                {#if errors.address}
                    <p class="text-red-500 text-sm mt-1">{errors.address}</p>
                {/if}
            </div>

            <div>
                <label class="block mb-1">
                    CITY <span class="text-red-500">*</span>
                </label>
                <input 
                    id="city-input"
                    type="text"
                    bind:value={city}
                    class="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                        {errors.city ? 'border-red-500' : ''}"
                />
                {#if errors.city}
                    <p class="text-red-500 text-sm mt-1">{errors.city}</p>
                {/if}
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                    <label class="block mb-1">
                        COUNTRY <span class="text-red-500">*</span>
                    </label>
                    <select 
                        id="country-select"
                        bind:value={country}
                        class="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                        <option value="USA">USA</option>
                    </select>
                </div>

                <div>
                    <label class="block mb-1">
                        STATE <span class="text-red-500">*</span>
                    </label>
                    <select 
                        id="state-select"
                        bind:value={state}
                        class="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                            {errors.state ? 'border-red-500' : ''}"
                    >
                        <option value="">--</option>
                        {#each states as st}
                            <option value={st}>{st}</option>
                        {/each}
                    </select>
                    {#if errors.state}
                        <p class="text-red-500 text-sm mt-1">{errors.state}</p>
                    {/if}
                </div>

                <div>
                    <label class="block mb-1">
                        ZIP CODE <span class="text-red-500">*</span>
                    </label>
                    <input 
                        id="zip-code-input"
                        type="text"
                        bind:value={zipCode}
                        class="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                            {errors.zipCode ? 'border-red-500' : ''}"
                    />
                    {#if errors.zipCode}
                        <p class="text-red-500 text-sm mt-1">{errors.zipCode}</p>
                    {/if}
                </div>
            </div>
        </div>

        <!-- Footer Actions -->
        <div class="flex justify-end mt-8">
            <button 
                id="create-account-btn"
                on:click={handleCreateAccount}
                class="bg-[#2B4C6F] text-white px-8 py-2 rounded hover:bg-blue-900 transition-colors"
            >
                CREATE ACCOUNT
            </button>
        </div>
    </div>
</div>

<!-- Success Popup -->
{#if showSuccessPopup}
    <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div class="bg-white p-6 rounded-lg shadow-xl">
            <div class="text-center">
                <div class="text-green-500 text-5xl mb-4">✓</div>
                <h3 class="text-xl font-semibold mb-2">Registration Successful!</h3>
                <p class="text-gray-600">Your account has been created successfully.</p>
            </div>
        </div>
    </div>
{/if}
