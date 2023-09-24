const menuList = [
  {
    name: 'Home',
    tag: '主页',
    path: '/'
  },
  {
    name: 'PUBLIC',
    tag: '社区',
    path: '/questions',
    children: [
      {
        name: 'Questions',
        tag: '问题',
        path: '/qustions'
      },
      {
        name: 'Tags',
        tag: '标签',
        path: '/tags'
      },
      {
        name: 'Users',
        tag: '用户',
        path: '/users'
      },
      {
        name: 'Companies',
        tag: '企业',
        path: '/comp'
      }
    ]
  }
  
]

export default menuList