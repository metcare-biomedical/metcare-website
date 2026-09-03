function Textarea({
  label,
  name,
  value,
  onChange,
  placeholder,
  rows = 6,
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block font-medium text-slate-700"
      >
        {label}
      </label>

      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        rows={rows}
        placeholder={placeholder}
        className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-200"
      />
    </div>
  );
}

export default Textarea;