export function Input(props) {
  return <input {...props} className={`border px-3 py-2 rounded-md w-full ${props.className}`} />
}