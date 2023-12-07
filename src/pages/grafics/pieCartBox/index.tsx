import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { ContainerNavigation } from "../../../components/navbar/components/menu/style";
import { Options, Title } from "./style";

const data = [
  { name: "Mobile", value: 400, color: "#0088FE" },
  { name: "Desktop", value: 300, color: "#00C49F" },
  { name: "Laptop", value: 300, color: "#FFBB28" },
  { name: "Tablet", value: 200, color: "#FF8042" },
];

export function PieChartBox() {
  return (
    <ContainerNavigation>
      <h1>Leads por fonte</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height={300}>
          <PieChart>
            <Tooltip
              contentStyle={{ background: "white", borderRadius: "5px" }}
            />
            <Pie
              data={data}
              innerRadius={"70%"}
              outerRadius={"90%"}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <Options>
        {data.map((item) => (
          <div className="option" key={item.name}>
            <Title>
              <div className="dot" style={{ backgroundColor: item.color }} />
              <span>{item.name}</span>
            </Title>
            <span>{item.value}</span>
          </div>
        ))}
        </Options>
      </ContainerNavigation>
  );
};
