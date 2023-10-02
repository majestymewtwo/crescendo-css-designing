export default function Logo({ name }) {
  return (
    <h1 className='font-black text-2xl'>
      <span>{name.slice(0, 6)}</span>
      <span className="text-purple-800">{name.slice(6)}.</span>
    </h1>
  );
}
