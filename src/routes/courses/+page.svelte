<script>
    import { page } from '$app/stores';
    import { goto } from '$app/navigation';
    import { addToCart } from '$lib/stores/cart';
    
    // Get query parameters
    $: state = $page.url.searchParams.get('state') || '';
    $: profession = $page.url.searchParams.get('profession') || '';

    const dummyCourses = [
        {
            title: `RN CE Requirements Package — 20 Contact Hours`,
            price: 32.95,
            type: 'Package',
            features: ['Meet all your state CE requirements'],
            buttonText: 'Add to Cart'
        },
        {
            title: 'Elite Nursing Passport Lite CE Membership',
            price: 44,
            period: '/year',
            type: 'Membership',
            features: ['Meet all your state requirements', 'All state CE requirements packages'],
            buttonText: 'Get Access Now'
        },
        {
            title: 'Elite Nursing Passport CE Membership',
            price: 99.99,
            period: '/year',
            type: 'Membership',
            features: ['Meet all your state requirements', 'All state CE requirements packages'],
            buttonText: 'Get Access Now'
        }
    ];

    function handleAddToCart(course) {
        addToCart(course);
        goto('/cart');
    }
</script>

<div class="max-w-7xl mx-auto px-4 py-8">
    <div class="mb-8">
        <nav class="flex items-center text-sm">
            <a id="home-link" href="/" class="text-blue-600">HOME</a>
            <span class="mx-2">›</span>
            <a id="nursing-link" href="/nursing" class="text-blue-600">NURSING</a>
            <span class="mx-2">›</span>
            <span class="uppercase">{state}</span>
        </nav>
    </div>

    <h1 class="text-4xl font-bold text-gray-800 mb-4">{state} Nursing Continuing Education</h1>
    <p class="text-gray-600 mb-8">Find convenient nursing continuing education courses that fulfill your license renewal requirements</p>
    
    <div class="text-sm text-gray-600 mb-12">
        <p>ANCC-accredited provider | Top-rated, evidence-based content | Focus on practical care</p>
    </div>

    <h2 class="text-3xl font-bold text-blue-800 mb-8">Never worry about your license renewal CE again</h2>
    <p class="text-gray-700 mb-12">Discover nursing CE designed to help you meet your {state} nursing license renewal requirements.</p>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        {#each dummyCourses as course, i}
            <div class="border rounded-lg p-6 bg-white shadow-sm">
                <h3 class="text-xl font-semibold mb-4">{course.title}</h3>
                <div class="flex items-baseline mb-6">
                    <span class="text-3xl font-bold">${course.price}</span>
                    {#if course.period}
                        <span class="text-gray-600 ml-1">{course.period}</span>
                    {/if}
                </div>
                <button 
                    id="course-btn-{i}"
                    on:click={() => handleAddToCart(course)}
                    class="w-full mb-6 py-2 px-4 rounded
                    {course.buttonText === 'Add to Cart' 
                        ? 'border border-blue-600 text-blue-600 hover:bg-blue-50' 
                        : 'bg-purple-600 text-white hover:bg-purple-700'}">
                    {course.buttonText}
                </button>
                <ul class="space-y-2">
                    {#each course.features as feature}
                        <li class="flex items-center">
                            <svg class="w-4 h-4 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                            </svg>
                            <span class="text-sm text-gray-600">{feature}</span>
                        </li>
                    {/each}
                </ul>
            </div>
        {/each}
    </div>
</div>
