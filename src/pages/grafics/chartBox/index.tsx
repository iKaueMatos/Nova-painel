import { Link } from "react-router-dom";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";
import { BoxInfo, Chart, ChartInfo, ContainerChartBox, Duration, Texts, Title } from "./style";

type Props = {
  color: string;
  icon: string;
  title: string;
  dataKey: string;
  number: number | string;
  percentage: number;
  chartData: object[];
};

export function ChartBox(props: Props) {
  return (
    <ContainerChartBox>
      <BoxInfo>
        <Title>
          <img src={props.icon} alt="" />
          <span>{props.title}</span>
        </Title>
        <h1>{props.number}</h1>
        <Link to="/" style={{ color: props.color }}>
          Visualizar Todos
        </Link>
      </BoxInfo>
      <ChartInfo>
        <Chart>
          <ResponsiveContainer width="99%" height="100%">
            <LineChart data={props.chartData}>
              <Tooltip
                contentStyle={{ background: "transparent", border: "none" }}
                labelStyle={{ display: "none" }}
                position={{ x: 10, y: 70 }}
              />
              <Line
                type="monotone"
                dataKey={props.dataKey}
                stroke={props.color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </Chart>
        <Texts>
          <span
            className="percentage"
            style={{ color: props.percentage < 0 ? "tomato" : "limegreen" }}
          >
            {props.percentage}%
          </span>
          <Duration>Mês Atual</Duration>
        </Texts>
      </ChartInfo>
    </ContainerChartBox>
  );
};
