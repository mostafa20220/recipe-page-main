import React from "react";

type Item = {
  label?: string;
  value: string;
};

type Props = {
  items: Item[];
  listShape?: "disc" | "square" | "numbered";
  className?: string;
};

export default function List({ items, className, listShape = "disc" }: Props) {
  const listShapeStyle = `${listShape == "square" ? `list-[square]` : listShape == "numbered" ? "list-[number]" : "list-disc"}`;

  const listClass = `ml-6 flex flex-col space-y-2  ${listShapeStyle} ${className ? className : ""}`;

  if (listShape == "numbered") {
    return (
      <ol className={listClass}>
        {items.map((item, index) => (
          <li key={index} className="pl-4">
            <span className="text-[var(--dark-charcoal)]">
              {item.label && <strong>{item.label}: </strong>}
              {item.value}
            </span>
          </li>
        ))}
      </ol>
    );
  }

  return (
    <ul className={listClass}>
      {items.map((item, index) => (
        <li key={index} className="pl-4">
          <span className="text-[var(--dark-charcoal)]">
            {item.label && <strong>{item.label}: </strong>}
            {item.value}
          </span>
        </li>
      ))}
    </ul>
  );
}
