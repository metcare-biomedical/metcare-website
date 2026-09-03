function Input({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block font-medium text-slate-700"
      >
        {label}
      </label>

      <input
        id={name}
        type={type}
        name={name} 
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-200"
      />
    </div>
  );
}
  
export default Input;