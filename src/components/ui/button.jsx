export function Button(props) {
  return <button {...props} className={`px-4 py-2 rounded-md border shadow-sm text-sm ${props.className}`}>{props.children}</button>
}