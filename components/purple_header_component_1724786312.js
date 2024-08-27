<!--
INSTRUCTION: Summary: HTML file that describes the header section including:
INSTRUCTION: 1. Site branding with a logo on the left.
INSTRUCTION: 2. Desktop navigation menu with links to different pages in the middle.
INSTRUCTION: 3. Desktop sign-in and sign-up links on the right.
-->

<template>
  <header class="w-full z-30 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-opacity-50 backdrop-filter backdrop-blur-lg" id="header-section-container">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="flex items-center justify-between h-16 md:h-20">
        <!-- Site Branding -->
        <div id="site-branding" class="flex-1">
          <a id="logo-link" class="inline-flex" href="index.html" aria-label="Cruip">
            <img id="logo-image" class="max-w-none" src="./images/logo.svg" width="38" height="38" alt="Stellar">
          </a>
        </div>

        <!-- Desktop Navigation -->
        <nav id="desktop-navigation" class="hidden md:flex md:grow">
          <ul id="desktop-menu-links" class="flex grow justify-center flex-wrap items-center">
            <li>
              <a
                id="Home-link"
                class="font-medium text-sm mx-4 lg:mx-5 transition duration-150 ease-in-out text-white hover:text-pink-200"
                href="Home.html"
              >
                Home
              </a>
            </li>
            <li>
              <a
                id="Shop-link"
                class="font-medium text-sm mx-4 lg:mx-5 transition duration-150 ease-in-out text-white hover:text-pink-200"
                href="Shop.html"
              >
                Shop
              </a>
            </li>
            <li>
              <a
                id="Collections-link"
                class="font-medium text-sm mx-4 lg:mx-5 transition duration-150 ease-in-out text-white hover:text-pink-200"
                href="Collections.html"
              >
                Collections
              </a>
            </li>
            <li>
              <a
                id="About Us-link"
                class="font-medium text-sm mx-4 lg:mx-5 transition duration-150 ease-in-out text-white hover:text-pink-200"
                href="About Us.html"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                id="Contact-link"
                class="font-medium text-sm mx-4 lg:mx-5 transition duration-150 ease-in-out text-white hover:text-pink-200"
                href="Contact.html"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <!-- Desktop Sign In & Sign Up Links -->
        <ul id="desktop-sign-in-links" class="flex-1 flex justify-end items-center">
          <li>
            <a
              id="sign-in-link"
              class="font-medium text-sm whitespace-nowrap transition duration-150 ease-in-out text-white hover:text-pink-200"
              href="signin.html"
            >
              Sign in
            </a>
          </li>
          <li class="ml-6">
            <a
              id="sign-up-link"
              class="btn-sm transition duration-150 ease-in-out w-full group relative text-white hover:text-pink-200 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 rounded-full px-4 py-2 shadow-lg"
              href="signup.html"
            >
              <span class="relative inline-flex items-center"> Sign up <span id="sign-up-arrow" class="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1 text-pink-200">-&gt;</span> </span>
            </a>
          </li>
        </ul>

        <!-- Hadoken Button -->
        <div class="flex-1 flex justify-end items-center mr-2">
          <button
            id="hadoken-button"
            class="btn-sm transition duration-150 ease-in-out text-white hover:text-yellow-300 bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-500 hover:to-blue-300 rounded-full px-4 py-2 shadow-lg flex items-center"
            @click="performHadoken"
          >
            <i class='bx bxs-hot mr-2'></i>
            Hadoken!
          </button>
        </div>

        <!-- Pour Coffee Button -->
        <div class="flex-1 flex justify-end items-center">
          <button
            id="pour-coffee-button"
            class="btn-sm transition duration-150 ease-in-out text-white hover:text-yellow-200 bg-gradient-to-r from-brown-600 to-brown-400 hover:from-brown-500 hover:to-brown-300 rounded-full px-4 py-2 shadow-lg flex items-center"
            @click="pourCoffee"
          >
            <i class='bx bxs-coffee-alt mr-2'></i>
            Pour Coffee
          </button>
        </div>

        <!-- Contact Santa Form -->
        <div class="flex-1 flex justify-end items-center ml-4">
          <button
            id="contact-santa-button"
            class="btn-sm transition duration-150 ease-in-out text-white hover:text-red-300 bg-gradient-to-r from-red-600 to-red-400 hover:from-red-500 hover:to-red-300 rounded-full px-4 py-2 shadow-lg flex items-center"
            @click="toggleSantaForm"
          >
            <i class='bx bxs-envelope mr-2'></i>
            Contact Santa
          </button>
        </div>

        <div v-if="showSantaForm" class="absolute top-full right-0 mt-2 w-64 bg-white rounded-lg shadow-lg p-4">
          <form @submit.prevent="submitSantaForm">
            <input v-model="santaForm.name" type="text" placeholder="Your Name" class="w-full mb-2 p-2 border rounded">
            <input v-model="santaForm.email" type="email" placeholder="Your Email" class="w-full mb-2 p-2 border rounded">
            <textarea v-model="santaForm.message" placeholder="Your Message to Santa" class="w-full mb-2 p-2 border rounded"></textarea>
            <button type="submit" class="w-full bg-red-500 text-white p-2 rounded hover:bg-red-600">Send to Santa</button>
          </form>
        </div>

        <!-- Mobile Menu -->
        <div class="md:hidden flex items-center ml-4">
          <button
            id="hamburger-button"
            class="hamburger"
            :class="{ active: expanded }"
            @click.stop="expanded = !expanded"
            aria-controls="mobile-nav"
            :aria-expanded="expanded"
          >
            <span class="sr-only">Menu</span>
            <svg id="hamburger-icon" class="w-5 h-5 fill-current transition duration-150 ease-in-out text-white hover:text-pink-200" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <rect y="2" width="20" height="2" rx="1" />
              <rect y="9" width="20" height="2" rx="1" />
              <rect y="16" width="20" height="2" rx="1" />
            </svg>
          </button>

          <nav
            id="mobile-nav"
            class="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out"
            x-ref="mobileNav"
            :style="expanded ? 'max-height: ' + $refs.mobileNav.scrollHeight + 'px; opacity: 1' : 'max-height: 0; opacity: .8'"
            @click.outside="expanded = false"
            @keydown.escape.window="expanded = false"
            x-cloak
          >
            <ul id="mobile-nav-list" class="rounded-lg px-4 py-1.5 bg-gradient-to-r from-purple-600 to-pink-500 bg-opacity-70 backdrop-filter backdrop-blur-lg shadow-lg">
              <li>
                <a id="mobile-Home-link" class="flex font-medium text-sm py-1.5 text-white hover:text-pink-200" href="Home.html">Home</a>
              </li>
              <li>
                <a id="mobile-Shop-link" class="flex font-medium text-sm py-1.5 text-white hover:text-pink-200" href="Shop.html">Shop</a>
              </li>
              <li>
                <a id="mobile-Collections-link" class="flex font-medium text-sm py-1.5 text-white hover:text-pink-200" href="Collections.html">Collections</a>
              </li>
              <li>
                <a id="mobile-About Us-link" class="flex font-medium text-sm py-1.5 text-white hover:text-pink-200" href="About Us.html">About Us</a>
              </li>
              <li>
                <a id="mobile-Contact-link" class="flex font-medium text-sm py-1.5 text-white hover:text-pink-200" href="Contact.html">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "PurpleHeaderComponent",
  data() {
    return {
      expanded: false,
      tab: null,
      showSantaForm: false,
      santaForm: {
        name: '',
        email: '',
        message: ''
      }
    };
  methods: {
    // Hadoken method
    performHadoken() {
      console.log("Hadoken!");
      // Add your Hadoken logic here
    },
    // End of Hadoken method

    // Pour Coffee method
    pourCoffee() {
      console.log("Pouring coffee...");
      // Add your coffee pouring logic here
    },
    // End of Pour Coffee method

    // Toggle Santa Form method
    toggleSantaForm() {
      this.showSantaForm = !this.showSantaForm;
    },
    // End of Toggle Santa Form method

    // Submit Santa Form method
    submitSantaForm() {
      console.log('Submitting Santa Form:', this.santaForm);
      // Add your form submission logic here
      // Reset form after submission
      this.santaForm = { name: '', email: '', message: '' };
      this.showSantaForm = false;
    }
    // End of Submit Santa Form method
  }
};
</script>