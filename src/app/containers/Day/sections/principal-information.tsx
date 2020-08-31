/**
 *
 * Day
 *
 */

import React, { memo, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import Column from 'app/components/Column';
import Row from 'app/components/Row';
import Text from 'app/components/Text';
import Image from 'app/components/Img';

import { kelvinToC  } from 'utils/weatherUtils';
import { 
  time, 
  temp, 
  weatherIcon,
} from 'lib';

interface Props {
    minTempInfo: any,
    averageTempInfo: any,
    maxTempInfo: any

}

export const PrincipalInfo = memo((props: Props) => {
    const { minTempInfo, averageTempInfo, maxTempInfo } = props;
  let { dayOfWeek } = useParams();

  const { t, i18n } = useTranslation();

  const useEffectOnMount = (effect: React.EffectCallback) => {
    useEffect(effect, []);
};

  return (
    <Row justifyContent='space-around' width='100%' margin='20px 0px'>
        <Column >
            <Text>Min temp.</Text>
            <Image src={weatherIcon(minTempInfo)} width='50px'/>
            <Text >{time(minTempInfo)}</Text>
            <Text >C° {kelvinToC(temp(minTempInfo))}</Text>
        </Column>
        <Column justifyContent='center'>
            <Text>Most nearby</Text>
            <Image src={weatherIcon(averageTempInfo)} width='70px'/>
            <Text >{time(averageTempInfo)}</Text>
            <Text margin='5px'>C° {kelvinToC(temp(averageTempInfo))}</Text>
        </Column>
        <Column justifyContent='center'>
            <Text>Max temp</Text>
            <Image src={weatherIcon(maxTempInfo)} width='50px'/>
            <Text>{time(maxTempInfo)}</Text>
            <Text>C° {kelvinToC(temp(maxTempInfo))}</Text>
        </Column>
    </Row>
  );
});
