import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
	webServer: {
		command: 'pnpm run build && pnpm run preview --host 127.0.0.1',
		port: 4173
	},
	use: {
		baseURL: 'http://127.0.0.1:4173',
		browserName: 'chromium'
	},
	testDir: 'tests',
	testMatch: /(.+\.)?(test|spec)\.[jt]s/
};

export default config;
