import * as shape from 'd3-shape';

export const config = {
    'lineChartView': undefined,
    'schemeType': 'linear',
    'lineChartShowXAxis': false,
    'lineChartShowYAxis': true,
    'lineChartGradient': true,
    'lineChartShowLegend': false,
    'showGridLines': false,
    'lineChartShowXAxisLabel': false,
    'lineChartShowYAxisLabel': false,
    'showRefLines': true,
    'showRefLabels': true,
    'tooltipDisabled': true,

    'lineChartColorScheme': {
        'domain': ['#3F8AFD',  '#3F8AFD',  '#3F8AFD', '#9C0D66', '#9C0D66', '#9C0D66']
    },

    'lineChartAutoScale': true,
    'lineChartLineInterpolation': shape.curveBasis,
};
