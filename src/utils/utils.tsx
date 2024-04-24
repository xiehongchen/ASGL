export const flatRoutes = (routes: any, array: any = []) => {
  routes.forEach((item: any) => {
    array.push({
      path: item.path,
      title: item.title
    })
    if (item.children) {
      flatRoutes(item.children, array)
    }
  })
  return [...array]
}