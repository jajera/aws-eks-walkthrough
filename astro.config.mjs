import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeVintage from 'starlight-theme-vintage';
import Icons from 'unplugin-icons/vite';

export default defineConfig({
  site: 'https://jajera.github.io',
  base: '/aws-eks-walkthrough',
  vite: {
    plugins: [Icons({ compiler: 'astro' })],
  },
  integrations: [
    starlight({
      title: 'AWS EKS Walkthrough',
      favicon: '/favicon.svg',
      description:
        'Build Amazon EKS from scratch: VPC, networking, cluster, and platform components.',
      plugins: [starlightThemeVintage()],
      customCss: ['./src/styles/splash-overrides.css'],
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/jajera/aws-eks-walkthrough',
        },
      ],
      editLink: {
        baseUrl:
          'https://github.com/jajera/aws-eks-walkthrough/edit/main/',
      },
      lastUpdated: true,
      pagination: true,
      sidebar: [
        { label: 'Introduction', link: '/' },
        {
          label: 'Foundations',
          collapsed: false,
          badge: { text: 'Start here', variant: 'tip' },
          items: [
            { slug: 'foundations' },
            {
              label: 'Prerequisites',
              collapsed: false,
              items: [
                { slug: 'foundations/prerequisites' },
                { slug: 'foundations/prerequisites/aws-account' },
                { slug: 'foundations/prerequisites/iam-identity-center' },
                { slug: 'foundations/prerequisites/aws-cli' },
                { slug: 'foundations/prerequisites/terraform' },
                { slug: 'foundations/prerequisites/kubectl' },
                { slug: 'foundations/prerequisites/git' },
                { slug: 'foundations/prerequisites/what-else' },
              ],
            },
          ],
        },
        {
          label: 'Networking',
          collapsed: true,
          items: [
            { slug: 'networking' },
            { slug: 'networking/concepts' },
            { slug: 'networking/vpc' },
          ],
        },
        // {
        //   label: 'Cluster',
        //   collapsed: true,
        //   items: [
        //     { slug: 'cluster' },
        //     { slug: 'cluster/eks-setup' },
        //   ],
        // },
        // {
        //   label: 'Platform',
        //   collapsed: true,
        //   items: [
        //     { slug: 'platform' },
        //     { slug: 'platform/addons' },
        //   ],
        // },
      ],
    }),
  ],
});
