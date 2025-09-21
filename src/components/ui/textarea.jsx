export function Textarea(props) {
  return <textarea {...props} className={`border px-3 py-2 rounded-md w-full ${props.className}`} />
}