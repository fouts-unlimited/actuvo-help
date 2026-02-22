// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://help.actuvo.app',
  integrations: [
    starlight({
      title: 'Actuvo Help',
      description: 'Help documentation for Actuvo — nonprofit management platform.',
      sidebar: [
        {
          label: 'Guides',
          items: [
            { label: 'Membership Tier Setup', slug: 'guides/membership-tiers' },
            { label: 'Membership Certificates', slug: 'guides/membership-certificates' },
            { label: 'Certificate Type Setup', slug: 'guides/certificate-type-setup' },
            { label: 'Conference Certificates', slug: 'guides/conference-certificates' },
          ],
        },
        {
          label: 'Reference',
          autogenerate: { directory: 'reference' },
        },
        {
          label: 'Changelog',
          items: [
            { label: 'Changelog', slug: 'changelog' },
          ],
        },
      ],
    }),
  ],
});
