import { Link } from "react-router-dom"

export default function Header() {
  return (
    <>
      <h1 style={{ paddingLeft: "20px" }}>
        <Link
          to="/"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Kodutöö 2
        </Link>
      </h1>
    </>
  )
}
