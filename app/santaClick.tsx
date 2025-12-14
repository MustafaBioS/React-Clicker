"use client";

type SantaProps = {
  onClick: () => void;
};

export default function SantaClicker({ onClick }: SantaProps) {
  return (
    <button onClick={onClick} className="santaBtn">
      <img src="/santa.png" alt="Clicker" className="santa" />
    </button>
  );
}
