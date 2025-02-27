"use client";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useTheme } from "next-themes";
import { useConfig } from "@/hooks/use-config";
import {
  getGridConfig,
  getXAxisConfig,
  getYAxisConfig,
} from "@/lib/appex-chart-options";
import { colors } from "@/lib/colors";
import { useTranslations } from "next-intl";

interface HistoryChartProps {
  height?: number;
  series?: {
    name: string;
    data: number[]
  }[];
}

const HistoryChart = ({
  height = 360,
  series
}: HistoryChartProps

) => {
  const [config] = useConfig();
  const { theme: mode } = useTheme();
  const t = useTranslations("BankingDashboard");

  // Usar series proporcionadas o las predeterminadas con traducciones
  const chartSeries = series || [
    {
      name: t("history_chart_earnings"),
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: t("history_chart_expenses"),
      data: [11, 32, 45, 32, 34, 52, 41],
    }
  ];

  const options: any = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
      width: 2,
    },
    colors: [colors.primary, colors.warning],
    tooltip: {
      theme: mode === "dark" ? "dark" : "light",
    },
    grid: getGridConfig(),

    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 0.3,
        opacityFrom: 0.4,
        opacityTo: 0.5,
        stops: [0, 30, 0],
      }
    },
    yaxis: getYAxisConfig(mode === 'light' ? colors["default-600"] : colors["default-300"]),
    xaxis: getXAxisConfig(
      mode === 'light' ? colors["default-600"] : colors["default-300"]
    ),
    legend: {
      offsetY: 4,
      show: true,
      fontSize: "12px",
      fontFamily: "Inter",
      labels: {
        colors: mode === 'light' ? colors["default-600"] : colors["default-300"],
      },
      markers: {
        width: 6,
        height: 6,
        offsetY: 0,
        offsetX: -5,
        radius: 12,
      },
      itemMargin: {
        horizontal: 18,
        vertical: 0,
      },
    },
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  };
  return (
    <Chart
      options={options}
      series={chartSeries}
      type="area"
      height={height}
      width={"100%"}
    />
  );
};

export default HistoryChart;
