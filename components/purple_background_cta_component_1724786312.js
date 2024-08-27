<!-- 
INSTRUCTION: Summary: The section has a blurred radial gradient background and a call-to-action (CTA) content block.
INSTRUCTION: It is centered on the page and includes a gradient-based title, a subtitle, a paragraph of text, and a button with a gradient background.
-->

<template>
  <section id="cta-section-container">
    <div id="section-container" class="max-w-6xl mx-auto px-4 sm:px-6 bg-white">
      <div id="content-container" class="relative px-8 py-12 md:py-20 rounded-[3rem] overflow-hidden">

        <!-- Radial gradient -->
        <div id="radial-gradient" class="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/3 aspect-square" aria-hidden="true">
          <div id="radial-gradient-outer" class="bg-purple-500 absolute inset-0 translate-z-0 rounded-full blur-[120px] opacity-70"></div>
          <div id="radial-gradient-inner" class="absolute w-1/4 h-1/4 translate-z-0 rounded-full blur-[40px] bg-purple-400"></div>
        </div>

        <!-- Blurred shape -->
        <div id="blurred-shape" class="absolute bottom-0 translate-y-1/2 left-0 blur-2xl opacity-50 pointer-events-none -z-10" aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
            <defs>
              <linearGradient id="bs5-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%">
                <stop offset="0%" class="#A855F7" />
                <stop offset="100%" class="6366F1" stop-opacity="0" />
              </linearGradient>
            </defs>
            <path fill="url(#bs5-a)" fill-rule="evenodd" d="m0 0 461 369-284 58z" transform="matrix(1 0 0 -1 0 427)" />
          </svg>
        </div>

        <!-- Content -->
        <div id="content" class="max-w-3xl mx-auto text-center">
          <div id="content-subtitle" class="flex">
            <div id="content-subtitle-text" class="flex-1 font-medium bg-clip-text pb-3 text-transparent bg-gradient-to-r from-purple-500 to-purple-200">
              Explore Our Extensive Carpet Collection
            </div>
          </div>
          <div class="flex" id="content-title-container">
            <h2 id="content-title" class="flex-1 h2 bg-clip-text pb-4 bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60">
              Discover Your Perfect Carpet
            </h2>
          </div>
          <div class="flex" id="content-body-container">
            <p id="content-body" class="flex-1 text-lg mb-8 text-slate-400">
              Browse, compare, and purchase from our vast selection of high-quality carpets for every style and budget.
            </p>
          </div>
          <a id="content-cta-button" href="#0" class="btn transition duration-150 ease-in-out group text-slate-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white">
            Get Started
            <span id="content-cta-arrow" class="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1 text-purple-500">-&gt;</span>
          </a>
        </div>

        <!-- Contact Santa Form -->
        <div id="contact-santa-form" class="mt-12 max-w-lg mx-auto">
          <h3 class="text-2xl font-bold text-white mb-6">Contact Santa</h3>
          <form @submit.prevent="submitSantaForm">
            <div class="mb-4">
              <label for="name" class="block text-sm font-medium text-white mb-2">Your Name</label>
              <input type="text" id="name" v-model="santaForm.name" class="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none" required>
            </div>
            <div class="mb-4">
              <label for="wishlist" class="block text-sm font-medium text-white mb-2">Your Wishlist</label>
              <textarea id="wishlist" v-model="santaForm.wishlist" rows="4" class="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none" required></textarea>
            </div>
            <div class="mb-4">
              <label for="naughty-nice" class="block text-sm font-medium text-white mb-2">Have you been naughty or nice?</label>
              <select id="naughty-nice" v-model="santaForm.status" class="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none" required>
                <option value="nice">Nice</option>
                <option value="naughty">Naughty</option>
                <option value="both">A bit of both</option>
              </select>
            </div>
            <button type="submit" class="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
              Send to Santa
            </button>
          </form>

        <!-- Contact Master Chief Form -->
        <div id="contact-master-chief-form" class="mt-12 max-w-lg mx-auto bg-gray-800 rounded-xl shadow-lg p-6">
          <h3 class="text-2xl font-bold text-white mb-6">Contact Master Chief</h3>
          <form @submit.prevent="submitMasterChiefForm">
            <div class="mb-4">
              <label for="spartan-name" class="block text-sm font-medium text-white mb-2">Spartan Name</label>
              <input type="text" id="spartan-name" v-model="masterChiefForm.spartanName" class="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none" required>
            </div>
            <div class="mb-4">
              <label for="mission-details" class="block text-sm font-medium text-white mb-2">Mission Details</label>
              <textarea id="mission-details" v-model="masterChiefForm.missionDetails" rows="4" class="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none" required></textarea>
            </div>
            <div class="mb-4">
              <label for="weapon-choice" class="block text-sm font-medium text-white mb-2">Preferred Weapon</label>
              <select id="weapon-choice" v-model="masterChiefForm.weaponChoice" class="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none" required>
                <option value="assault-rifle">Assault Rifle</option>
                <option value="battle-rifle">Battle Rifle</option>
                <option value="energy-sword">Energy Sword</option>
                <option value="gravity-hammer">Gravity Hammer</option>
              </select>
            </div>
            <button type="submit" class="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
              Send to Master Chief
            </button>
          </form>
        </div>


      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "PurpleBackgroundCtaComponent",
  data() {
    return {
      expanded: false,
      tab: null,
      santaForm: {
        name: '',
        wishlist: '',
        status: 'nice'
      },
      masterChiefForm: {
        spartanName: '',
        missionDetails: '',
        weaponChoice: 'assault-rifle'
      }
    };
  },
  methods: {
    // Submit Santa Form method
    submitSantaForm() {
      console.log('Form submitted:', this.santaForm);
      // Add your form submission logic here
      // Reset form after submission
      this.santaForm = {
        name: '',
        wishlist: '',
        status: 'nice'
      };
    },
    // Submit Master Chief Form method
    submitMasterChiefForm() {
      console.log('Master Chief Form submitted:', this.masterChiefForm);
      // Add your form submission logic here
      // Reset form after submission
      this.masterChiefForm = {
        spartanName: '',
        missionDetails: '',
        weaponChoice: 'assault-rifle'
      };
    }
    // End of Submit Master Chief Form method
  }
};
</script>

<style scoped>
/* Add any scoped styles if necessary */
</style>