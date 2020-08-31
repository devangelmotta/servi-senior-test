/**
 *
 * WeatherShape
 *
 */

/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { Group } from '@vx/group';
import { Glyph as CustomGlyph } from '@vx/glyph';
import { LinePath } from '@vx/shape';
import { DateValue } from '@vx/mock-data/lib/generators/genDateValue';
import { scaleTime, scaleLinear } from '@vx/scale';

const defaultMargin = { top: 10, right: 60, bottom: 10, left: 60 };
const primaryColor = '#8921e0';
const secondaryColor = '#00f2ff';

export type ShapeProps = {
  feedData: any[],
  width: number;
  height: number;
  margin?: typeof defaultMargin;
};

export default function WeatherShape({ feedData = [], width, height, margin = defaultMargin }: ShapeProps) {

  if (width < 10) return null;

  // Label to render
  const data: DateValue[] = feedData;

  // accessors
  const date = (d: DateValue) => new Date(d.date).valueOf();
  const value = (d: DateValue) => d.value;

  // bounds
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  // scales
  const xScale = scaleTime<number>({
    domain: [Math.min(...data.map(date)), Math.max(...data.map(date))],
    range: [0, innerWidth],
  });

  const yScale = scaleLinear<number>({
    domain: [0, Math.max(...data.map(value))*2],
    range: [innerHeight, 0],
    nice: true
  });

  // positions
  const getX = (d: DateValue) => xScale(date(d));
  const getY = (d: DateValue) => yScale(value(d));

  return (
    <svg width={width} height={height}>
      <rect x={0} y={0} width={width} height={height} fill={secondaryColor} rx={14} />
      <Group left={margin.left} top={margin.top}>
        <LinePath
          data={data}
          x={getX}
          y={getY}
          stroke={primaryColor}
          strokeWidth={2}
        />
        {data.map((d, i) => {
          const left = getX(d);
          const top = getY(d);
          return (
            <g key={`line-glyph-${i}`}>
              <CustomGlyph left={left} top={top}>
                <circle r={15} fill={secondaryColor} />
                <text fontSize={10} textAnchor="middle" dy="0.5em" >
                  C° {value(d)}
                </text>
              </CustomGlyph>
            </g>
          );
        })}
      </Group>
    </svg>
  );
}