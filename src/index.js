module.exports = {
  register() {
    this.routes = [
      {
        path: '/portfolio',
        name: 'portfolio',
        component: 'Portfolio'
      }
    ]

    this.menuItems = [
      {
        routeName: 'portfolio',
        title: 'Portfolio'
      }
    ]  
  },
  getComponentPaths() {
    return this.routes.reduce((all, route) => {
      return {
        ...all,
        [route.component]: `components/${route.component}.js`
      }
    }, {})
  },
  getRoutes () {
    return this.routes
  },

  getMenuItems () {
    return this.menuItems
  }
}