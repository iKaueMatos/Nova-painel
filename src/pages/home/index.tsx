import {
  barChartBoxRevenue,
  barChartBoxVisit,
  chartBoxConversion,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxUser,
} from "../../data";
import { BarChartBox } from "../grafics/barChartBox";
import { BigChartBox } from "../grafics/bigChartBox";
import { ChartBox } from "../grafics/chartBox";
import { PieChartBox } from "../grafics/pieCartBox";
import { TopBox } from "./components/topBox";
import { BoxOne, BoxSecondary, BoxThree, Container } from "./style";


export function Home() {
  return (
    <Container>
        <BoxOne>
          <TopBox />
        </BoxOne>
        <ChartBox {...chartBoxUser} />
        <BoxThree>
          <ChartBox {...chartBoxProduct} />
        </BoxThree>
        <BoxSecondary>
          <PieChartBox />
        </BoxSecondary>
        <ChartBox {...chartBoxConversion} />
        <ChartBox {...chartBoxRevenue} />
        <BoxThree>
          <BigChartBox />
        </BoxThree>
        <BarChartBox {...barChartBoxVisit} />
        <BarChartBox {...barChartBoxRevenue} />
    </Container>
  );
};
