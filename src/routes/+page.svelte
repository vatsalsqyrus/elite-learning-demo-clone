<script>
    import { goto } from '$app/navigation';
    
    let selectedState = '';
    let selectedProfession = '';
    
    const states = [
        'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 
        'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia',
        // ... add all other states
    ];

    const professions = [
        'Registered Nurse', 'Licensed Practical Nurse', 'Nurse Practitioner', 
        'Clinical Nurse Specialist', 'Nurse Anesthetist',
        // ... add other relevant professions
    ];

    function findCourses() {
        if (selectedState && selectedProfession) {
            const searchParams = new URLSearchParams({
                state: selectedState,
                profession: selectedProfession
            });
            goto(`/courses?${searchParams.toString()}`);
        }
    }
</script>

<div class="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-100 to-white">
    <h1 class="text-3xl font-bold mb-4">The Leader in Healthcare Continuing Education</h1>
    <p class="text-center mb-6">Convenient healthcare learning solutions that prepare you for challenges and changes in the industry so you can deliver quality care.</p>
    
    <select 
        id="state-select"
        bind:value={selectedState} 
        class="border border-gray-300 rounded-md p-2 mb-4"
    >
        <option value="" disabled selected>Select State</option>
        {#each states as state}
            <option value={state}>{state}</option>
        {/each}
    </select>

    <select 
        id="profession-select"
        bind:value={selectedProfession} 
        class="border border-gray-300 rounded-md p-2 mb-4"
    >
        <option value="" disabled selected>Select Profession</option>
        {#each professions as profession}
            <option value={profession}>{profession}</option>
        {/each}
    </select>

    <button 
        id="find-courses-btn"
        on:click={findCourses} 
        class="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600"
    >
        Find Courses
    </button>
</div> 