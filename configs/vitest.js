import { defineConfig } from 'eslint/config';
import cheminfoVitest from 'eslint-config-cheminfo/vitest';

export default defineConfig(cheminfoVitest, {
  ...cheminfoVitest,
  name: 'cheminfo/typescript/vitest',
  files: ['**/*.test.{ts,tsx,cts,mts}'],
  settings: {
    vitest: {
      typecheck: true,
    },
  },
});
