<!-- Navbar goes here -->
<nav class="bg-black shadow-lg">
	<div class="max-w-6xl mx-auto px-4">
		<div class="flex justify-between">
			<div class="flex space-x-7">
				<div>
					<!-- Website Logo -->
					<a href="/" class="flex items-center py-4 px-2">
						<img src="/img/logo.png" alt="Logo" class="h-6 mr-2" />
						<span class="text-slate-300 text-md border-l-2 pl-2">Barrel Cocktail Co.</span>
					</a>
				</div>
			</div>

			<!-- Mobile menu button -->
			<div class="md:hidden flex items-center">
				<button class="outline-none mobile-menu-button" aria-label="Toggle menu">
					<svg
						class=" w-6 h-6 text-slate-300 hover:text-slate-500"
						x-show="!showMenu"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path d="M4 6h16M4 12h16M4 18h16" />
					</svg>
				</button>
			</div>
		</div>
	</div>

	<!-- mobile menu -->
	<div class="hidden mobile-menu">
		<ul class="">
			<li class="active">
				<a href="/" class="block text-sm px-2 py-4 text-white bg-slate-500 font-semibold">Home</a>
			</li>
			<li>
				<a
					href="/cocktails"
					class="block text-sm px-2 py-4 text-slate-200 hover:bg-slate-500 transition duration-300"
					>Cocktails</a
				>
			</li>
			<li>
				<a
					href="/#more"
					class="block text-sm px-2 py-4 text-slate-200 hover:bg-slate-500 transition duration-300"
					>About</a
				>
			</li>
		</ul>
	</div>
	<script>
		const btn = document.querySelector('button.mobile-menu-button');
		const menu = document.querySelector('.mobile-menu');

		btn.addEventListener('click', () => {
			menu.classList.toggle('hidden');
		});
	</script>
</nav>
