// About.tsx
export default function About() {
  const numbers = Array.from({ length: 100 }, (_, i) => i + 1)

  return (
    <>
      <div className="about flex flex-col items-center p-5">
        <h1 className="mb-2 text-2xl">About Us</h1>
        <p className="max-w-[600px] text-center text-base">
          Welcome to our website. We are committed to providing the best service for our customers.
        </p>
      </div>

      <ul>
        {numbers.map((value) => (
          <li key={value} className="my-2">
            {value}
          </li>
        ))}
      </ul>
    </>
  )
}
