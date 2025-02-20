import { FaCheckCircle, FaCircle } from "react-icons/fa";

export default function GreenCheckmark() {
  return (
    <span className="me-1 position-relative">
      <FaCheckCircle style={{ top: "2px" }} className="text-success position-absolute fs-500" />
      <FaCircle className="text-white me-1 fs-6" />
    </span>);}