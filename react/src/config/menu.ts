const menu = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  {
    name: 'posts',
    children: [
      {
        name: 'posts-list',
        path: '/about',
      },
      {
        name: 'posts-create',
        path: '#',
      },
      {
        name: 'posts-categories',
        path: '#',
      },
    ],
  },
  {
    name: 'pages',

    children: [
      {
        name: 'pages-list',
        path: '#',
      },
      {
        name: 'pages-create',
        path: '#',
      },
    ],
  },
  {
    name: 'posts',
    children: [
      {
        name: 'posts-list',
        path: '#',
      },
      {
        name: 'posts-create',
        path: '#',
      },
      {
        name: 'posts-categories',
        path: '#',
      },
    ],
  },
  {
    name: 'pages',

    children: [
      {
        name: 'pages-list',
        path: '#',
      },
      {
        name: 'pages-create',
        path: '#',
      },
    ],
  },
  {
    name: 'posts',
    children: [
      {
        name: 'posts-list',
        path: '#',
      },
      {
        name: 'posts-create',
        path: '#',
      },
      {
        name: 'posts-categories',
        path: '#',
      },
    ],
  },
  {
    name: 'pages',

    children: [
      {
        name: 'pages-list',
        path: '#',
      },
      {
        name: 'pages-create',
        path: '#',
      },
    ],
  },
  { name: 'settings', path: '#' },
]

export default menu
