<script>
    import { goto } from '$app/navigation';

    let firstName = '';
    let middleInitial = '';
    let lastName = '';
    let phone = '';
    let errors = {};

    function validateForm() {
        errors = {};
        
        if (!firstName.trim()) {
            errors.firstName = 'First name is required';
        }
        
        if (!lastName.trim()) {
            errors.lastName = 'Last name is required';
        }
        
        if (!phone.trim()) {
            errors.phone = 'Phone number is required';
        } else if (!/^\d{10}$/.test(phone.replace(/\D/g, ''))) {
            errors.phone = 'Please enter a valid 10-digit phone number';
        }
        console.log(errors, Object.keys(errors).length === 0);
        return Object.keys(errors).length === 0;
    }

    function handleContinue() {
        if (validateForm()) {
            goto('/address');  // Updated navigation to address page
        }
    }
</script>

<div class="max-w-7xl mx-auto px-4 py-8">
    <div class="flex justify-between items-center">
        <h1 class="text-3xl font-semibold text-gray-700">Create an Account</h1>
        <span class="text-gray-600">Step 2 of 3</span>
    </div>

    <div class="mt-8 max-w-3xl">
        <p class="text-gray-600 mb-6">
            The information below will be used to create your certificates and provide personalized support.
        </p>

        <div class="space-y-6">
            <div>
                <label class="block mb-1">
                    FIRST NAME <span class="text-red-500">*</span>
                </label>
                <p class="text-gray-600 text-sm mb-2">Use the same name that was used to register with the state.</p>
                <input 
                    id="first-name-input"
                    type="text"
                    bind:value={firstName}
                    class="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                        {errors.firstName ? 'border-red-500' : ''}"
                />
                {#if errors.firstName}
                    <p class="text-red-500 text-sm mt-1">{errors.firstName}</p>
                {/if}
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label class="block mb-1">MIDDLE INITIAL</label>
                    <input 
                        id="middle-initial-input"
                        type="text"
                        bind:value={middleInitial}
                        placeholder="OPTIONAL"
                        maxlength="1"
                        class="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                <div>
                    <label class="block mb-1">
                        LAST NAME <span class="text-red-500">*</span>
                    </label>
                    <input 
                        id="last-name-input"
                        type="text"
                        bind:value={lastName}
                        class="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                            {errors.lastName ? 'border-red-500' : ''}"
                    />
                    {#if errors.lastName}
                        <p class="text-red-500 text-sm mt-1">{errors.lastName}</p>
                    {/if}
                </div>
            </div>

            <div>
                <label class="block mb-1">
                    DAYTIME PHONE <span class="text-red-500">*</span>
                </label>
                <input 
                    id="phone-input"
                    type="tel"
                    bind:value={phone}
                    class="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                        {errors.phone ? 'border-red-500' : ''}"
                />
                {#if errors.phone}
                    <p class="text-red-500 text-sm mt-1">{errors.phone}</p>
                {/if}
            </div>
        </div>

        <!-- Important Notices -->
        <div class="mt-8 bg-gray-100 p-4 rounded">
            <h3 class="font-semibold mb-2">Important Notices:</h3>
            <p class="text-sm text-gray-600">
                By providing my personal information, including phone number, I consent to receive email messages, 
                auto-dialed calls, texts, and prerecorded messages from Elite with information and offers, including 
                current and possible future services, customer service and billing and agree to the Terms of Service & 
                Privacy Policy. If, at any time, you wish to opt out of electronic or text communications, reply STOP 
                to cancel, HELP for help. Msg & data rates may apply. To opt out of email, follow the unsubscribe 
                process on the email communication. I understand that my consent is not required to purchase, and that 
                cancellation of purchase does not automatically revoke this consent.
            </p>
        </div>

        <!-- Footer Actions -->
        <div class="flex justify-end mt-8">
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
