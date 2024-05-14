const reader = () => {
  const data = localStorage.getItem('key') || ''
  return <div>首页-{ data }</div>
}

export default reader