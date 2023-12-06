import { BoxOne, BoxSecondary, BoxThree, Container } from ".";
import { BarChartBox } from "../../components/barChartBox/BarChartBox";
import { BigChartBox } from "../../components/bigChartBox/BigChartBox";
import { ChartBox } from "../../components/chartBox/ChartBox";
import { PieChartBox } from "../../components/pieCartBox/PieChartBox";
import { TopBox } from "../../components/topBox/TopBox";
import {
  barChartBoxRevenue,
  barChartBoxVisit,
  chartBoxConversion,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxUser,
} from "../../data";
import "./home.scss";

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
