import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value: number) {
  return `R$${value}`;
}

const minDistance = 100;
type callBackFunction = {getSliderValues : (value1 : number, value2 : number) => void}
export default function MinimumDistanceSlider({getSliderValues} : callBackFunction) {
  const [value1, setValue1] = React.useState<number[]>([0, 10000]);

  const handleChange1 = (
    event: Event,
    newValue: number | number[],
    activeThumb: number,
  ) => {
    event
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
      getSliderValues(value1[0], value1[1])
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
      getSliderValues(value1[0], value1[1])
    }
    console.log(newValue)
  };

  return (
    <Box sx={{ width: 200 }}>
      <Slider
        getAriaLabel={() => 'Minimum distance'}
        max={10000}
        min={0}
        value={value1}
        onChange={handleChange1}
        color = {"secondary"}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        disableSwap
      />
    </Box>
  );
}