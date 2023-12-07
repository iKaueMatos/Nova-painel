import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Activities, Chart, Container, ContainerSigle, Details, Hr, List, Time, TopInfo, View } from "./style";

type Props = {
  id: number;
  img?: string;
  title: string;
  info: object;
  chart?: {
    dataKeys: { name: string; color: string }[];
    data: object[];
  };
  activities?: { time: string; text: string }[];
};

export function Single(props: Props) {
  return (
    <ContainerSigle>
      <View>
        <TopInfo>
            {props.img && <img src={props.img} alt="" />}
            <h1>{props.title}</h1>
            <button>Atualizações</button>
        </TopInfo>
          <Details>
            {Object.entries(props.info).map((item) => (
              <div className="item" key={item[0]}>
                <span className="itemTitle">{item[0]}</span>
                <span className="itemValue">{item[1]}</span>
              </div>
            ))}
          </Details>
        <Hr />
        {props.chart && (
          <Chart>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                width={500}
                height={300}
                data={props.chart.data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                {props.chart.dataKeys.map((dataKey) => (
                  <Line
                    type="monotone"
                    dataKey={dataKey.name}
                    stroke={dataKey.color}
                  />
                ))}
              </LineChart>
            </ResponsiveContainer>
          </Chart>
        )}
      </View>
      <Activities>
        <h2>Últimas atividades</h2>
        {props.activities && (
          <List>
            {props.activities.map((activity) => (
              <li key={activity.text}>
                <Container>
                  <p>{activity.text}</p>
                  <Time>{activity.time}</Time>
                </Container>
              </li>
            ))}
          </List>
        )}
        </Activities>
      </ContainerSigle>
  );
};
