<script>
	import '../app.css';
	import Header from '../components/common/Header.svelte';
	import Footer from '../components/common/Footer.svelte';
</script>

<!-- This example requires Tailwind CSS v2.0+ -->
<div class="relative bg-white overflow-hidden h-max	 ">
	<Header />
	<slot />

	<Footer />
</div>
