/**
 *
 * Other data
 *
 */

import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

import Column from 'app/components/Column';
import Row from 'app/components/Row';
import Text from 'app/components/Text';

import {  
  humidity, 
  pressure, 
  seaLevel, 
  windSpeed, 
  cloudiness, 
  visibility, 
  mainWeather, 
  groundLevel,
  tempFeelsLike, 
  windDirection,
  mainDescription, 
  probPrecipitation, 
} from 'lib';

interface Props {
    averageTempInfo: any,
}

export const AdditionalData = memo((props: Props) => {
  const { averageTempInfo } = props;
  const { t, i18n } = useTranslation();

  return (
    <Row width='100%' margin='20px 0' justifyContent='space-around'>
        <Column alignItems='flex-start' width='fit-content' margin='20px'>
            <Text fonstSize='2rem'>{mainWeather(averageTempInfo)}: {mainDescription(averageTempInfo)}</Text>
            <Text>Temp feel like: {tempFeelsLike(averageTempInfo)}</Text>
            <Text>Humidity: {humidity(averageTempInfo)}</Text>
            <Text>Cloudiness: {cloudiness(averageTempInfo)}</Text>
            <Text>Visibility: {visibility(averageTempInfo)} mts</Text>
        </Column>

        <Column alignItems='flex-start'  width='fit-content' margin='20px'>
            <Text>Pressure: {pressure(averageTempInfo)} hPa</Text>
            <Text>Sea level: {seaLevel(averageTempInfo)} hPa</Text>
            <Text>Wind speed: {windSpeed(averageTempInfo)} Dir: {windDirection(averageTempInfo)}</Text>
            <Text>Probability of precipitation: {probPrecipitation(averageTempInfo)}</Text> 
            <Text>Ground level: {groundLevel(averageTempInfo)} hPa</Text> 
        </Column>
    </Row>
  );
});