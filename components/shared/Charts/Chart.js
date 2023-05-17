import React from 'react'
import { AreaChart, Path, XAxis, YAxis} from 'react-native-svg-charts'
import * as shape from 'd3-shape'

class GridMinMaxExample extends React.PureComponent {

    render() {

        const data = [ 50, 10, 40, 195 ]

        const Line = ({ line }) => (
            <Path
                key={ 'line ' }
                d={ line }
                stroke={ 'rgb(134, 65, 244)' }
                fill={ 'none' }
            />
        )

        return (
            <>
            <AreaChart
                style={{ height: 200 }}
                data={ data }
                svg={{ fill: 'rgba(134, 65, 244, 0.2)' }}
                curve={ shape.curveNatural }
                gridMax={ 300 }
                gridMin={ -200 }
            >
                <Line/>
               
            </AreaChart>
             <XAxis
             style={{ marginHorizontal: 10 }}
             data={data}
             formatLabel={(value, index) => index}
             contentInset={{ left: 10, right: 10 }}
             svg={{ fontSize: 10, fill: 'black' }}
         />
         
         </>
        )
    }

}

export default GridMinMaxExample