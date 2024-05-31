import React from "react";

type Props = {
  tableData: {
    description: string;
    rows: string[][];
    heads: string[];
  };
};

export default function Table({ tableData }: Props) {
  const { description, rows, heads } = tableData;

  return (
    <>
      <p className="text-[var(--dark-charcoal)]">{description}</p>

      <table className="flex table-auto justify-between">
        <thead className="flex-1 text-[var(--dark-charcoal)]">
          <tr className="flex w-full flex-col items-start divide-y text-left  ">
            {heads.map((head: string) => (
              <th className="w-full py-2 pl-[25%]" key={head}>
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="flex-1">
          {rows.map((row, index) => (
            <tr
              key={index}
              className="flex w-full flex-col items-start divide-y font-bold"
            >
              {row.map((cell, index) => (
                <td className="w-full py-2 pl-[25%]" key={index}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
