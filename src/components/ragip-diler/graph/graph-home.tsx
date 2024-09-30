'use client';

import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts';
import { CardContent } from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

export const description = 'Area Chart from an account';

const chartData = [
  { day: 'Sep 1', moneyin: 5000, moneyout: 800 },
  { day: 'Sep 3', moneyin: 18000, moneyout: 5000 },
  { day: 'Sep 5', moneyin: 25000, moneyout: 6000 },
  { day: 'Sep 7', moneyin: 12000, moneyout: 4000 },
  { day: 'Sep 9', moneyin: 15000, moneyout: 3000 },
  { day: 'Sep 11', moneyin: 13000, moneyout: 2500 },
  { day: 'Sep 13', moneyin: 10000, moneyout: 1500 },
  { day: 'Sep 14', moneyin: 21000, moneyout: 14000 },
  { day: 'Sep 16', moneyin: 32000, moneyout: 20000 },
  { day: 'Sep 18', moneyin: 22000, moneyout: 11000 },
  { day: 'Sep 20', moneyin: 28000, moneyout: 9000 },
  { day: 'Sep 22', moneyin: 32000, moneyout: 25000 },
  { day: 'Sep 24', moneyin: 37000, moneyout: 18000 },
  { day: 'Sep 26', moneyin: 40000, moneyout: 26000 },
  { day: 'Sep 28', moneyin: 42000, moneyout: 34000 },
  { day: 'Sep 30', moneyin: 47000, moneyout: 40000 },
];

const chartConfig = {
  Money_in: {
    label: 'Money in',
    color: '#3b82f6',
  },
  Money_out: {
    label: 'Money out',
    color: '#ef4444',
  },
} satisfies ChartConfig;

export function GraphHome() {
  return (
    <section className="">
      <CardContent className="border-none shadow-none">
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={true} />

            <XAxis
              dataKey="day"
              tickLine={true}
              axisLine={true}
              tickMargin={10}
              interval={6}
              tickFormatter={(value) => value}
            />

            <ChartTooltip cursor={true} content={<ChartTooltipContent />} />

            <defs>
              <linearGradient id="fillmoneyin" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="fillmoneyout" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#ef4444" stopOpacity={0.1} />
              </linearGradient>
            </defs>

            <Area
              dataKey="moneyout"
              type="linear"
              fill="url(#fillmoneyout)"
              fillOpacity={0.4}
              stroke="#ef4444"
              stackId="a"
            />
            <Area
              dataKey="moneyin"
              type="linear"
              fill="url(#fillmoneyin)"
              fillOpacity={0.4}
              stroke="#3b82f6"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </section>
  );
}
