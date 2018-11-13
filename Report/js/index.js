/**
 * legend {data: data} 标题
 * xAxis {data: data,type: category} x轴
 * yAxis {data: data,type} y轴
 * series[name: '",type: 'bar', data: data] 定义视图类型和内容
 * 2.项目情况 ：project_echart1，project_echart2， project_echart3,project_echart4,project_echart5
 * 3.评标情况：comment-echart
 */




var project_echart1 = echarts.init(document.getElementById("project-echart1"));
var text = '月发布标段数';
var names = '发布标段数';
var option = {
  title: {
    text: text,
    left: 'center',
	textStyle:{
		fontSize:16
	}
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#999'
      }
    }
  },
  color: ['#5ab1ef', '#ffb980'],
  
  xAxis: [
    {
      type: 'category',
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: names,
      min: 0,
      max: 250,
      interval: 50,
      axisLabel: {
        formatter: '{value}'
      }
    },
    {
      type: 'value',
      name: '增长率',
      min: -2,
      max: 4,
      interval: 1,
      axisLabel: {
        formatter: '{value}'
      }
    }
  ],
  series: [
    {
      name: '发布标段数量',
      type: 'bar',
      barWidth: 30,
      data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
      itemStyle: {
        normal: {
          barBorderRadius: [5, 5, 0, 0]
        }
      }
    },
    {
      name: '增长率',
      type: 'line',
      yAxisIndex: 1,
      data: [1, 2.2, 3.3, 2, 1, 2, 3, 3, 4, 0, -1, 0.2]
    }
  ]
};
project_echart1.setOption(option);

var project_echart2 = echarts.init(document.getElementById("project-echart2"));
text = '月成交标段数';
names = '成交标段数';
option = {
  title: {
    text: text,
    left: 'center',
	textStyle:{
		fontSize:16
	}
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#999'
      }
    }
  },
  color: ['#5ab1ef', '#ffb980'],
  xAxis: [
    {
      type: 'category',
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: names,
      min: 0,
      max: 250,
      interval: 50,
      axisLabel: {
        formatter: '{value}'
      }
    },
    {
      type: 'value',
      name: '增长率',
      min: -2,
      max: 4,
      interval: 1,
      axisLabel: {
        formatter: '{value}'
      }
    }
  ],
  series: [
    {
      name: '发布标段数量',
      type: 'bar',
      barWidth: 30,
      data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
      itemStyle: {
        normal: {
          barBorderRadius: [5, 5, 0, 0]
        }
      }
    },
    {
      name: '增长率',
      type: 'line',
      yAxisIndex: 1,
      data: [1, 2.2, 3.3, 2, 1, 2, 3, 3, 4, 0, -1, 0.2]
    }
  ]
};
project_echart2.setOption(option);

var project_echart3 = echarts.init(document.getElementById("project-echart3"));
text = "月成交额";
names = "成交额";
option = {
  title: {
    text: text,
    left: 'center',
	textStyle:{
		fontSize:16
	}
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#999'
      }
    }
  },
  color: ['#5ab1ef', '#ffb980'],
  xAxis: [
    {
      type: 'category',
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: names,
      min: 0,
      max: 250,
      interval: 50,
      axisLabel: {
        formatter: '{value}'
      }
    },
    {
      type: 'value',
      name: '增长率',
      min: -2,
      max: 4,
      interval: 1,
      axisLabel: {
        formatter: '{value}'
      }
    }
  ],
  series: [
    {
      name: '发布标段数量',
      type: 'bar',
      barWidth: 30,
      data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
      itemStyle: {
        normal: {
          barBorderRadius: [5, 5, 0, 0]
        }
      }
    },
    {
      name: '增长率',
      type: 'line',
      yAxisIndex: 1,
      data: [1, 2.2, 3.3, 2, 1, 2, 3, 3, 4, 0, -1, 0.2]
    }
  ]
};
project_echart3.setOption(option);

var project_echart4 = echarts.init(document.getElementById("project-echart4"));
text = "月招标项目类型";
option = {
  title: {
    text: text,
    left: 'center',
	textStyle:{
		fontSize:16
	}
  },
  tooltip: {
    trigger: 'item',
    formatter: "{a} <br/>{b} : {c} ({d}%)"
  },
  color: ['#2ec7ca', '#b6a2de', '#ffb980'],
  series: [
    {
      name: '项目类型',
      type: 'pie',
      radius: '70%',
      labelLine: {
        normal: {
          show: true,
          length: 15,
          smooth: true
        }
      },
      data: [
        {
          value: 68,
          name: '服务类'
        },
        {
          value: 32,
          name: '货物类'
        },
        {
          value: 64,
          name: '工程类'
        }
      ],
      label: {
        normal: {
          show: true,
          position: 'outside',
          formatter: "{b}\n{c}({d}%)"
        },
        emphasis: {
          show: true,
          textStyle: {
            fontSize: '20',
            fontWeight: 'bold'
          }
        }
      },
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
};
project_echart4.setOption(option);

var project_echart5 = echarts.init(document.getElementById("project-echart5"));
text = "依法招标各项目行业分布（TOP 10）";
option = {
  title: {
    text: text,
    left: 'center',
	textStyle:{
		fontSize:16
	}
  },
  grid: {
    left: '28%'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#999'
      }
    }
  },
  color: ['#5ab1ef', '#ffb980'],
  xAxis: [
    {
      type: 'value',
      interval: 20000
    }
  ],
  yAxis: [
    {
      type: 'category',
      data: ['租赁和商务服务业', '公共设施管理业', '交通运输业', '科学研究与技术服务业', '居民服务业', '批发和零售业', '建筑业', '制造业', '电力、热力、燃气及水生产和供应业', '信息传输、软件和信息技术服务业']
    }
  ],
  series: [
    {
      name: '项目行业分布',
      type: 'bar',
      barWidth: 16,
      data: [18203, 23489, 29037, 31000, 44970, 51744, 63023, 68180, 72134, 83245],
      itemStyle: {
        normal: {
          barBorderRadius: [0, 5, 5, 0]
        }
      },
      label: {
        normal: {
          show: true,
          position: 'right'
        }
      }
    }
  ]
};
project_echart5.setOption(option);


var comment_echart = echarts.init(document.getElementById("comment-echart"));
text = "专家评标次数排名（TOP 10）";
option = {
  title: {
    text: text,
    left: 'center',
	textStyle:{
		fontSize:16
	}
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#999'
      }
    }
  },
  color: ['#5ab1ef', '#ffb980'],
  xAxis: [
    {
      type: 'category',
      data: ['专家1', '专家2', '专家3', '专家4', '专家5', '专家6', '专家7', '专家8', '专家9', '专家10']
    }
  ],
  yAxis: [
    {
      type: 'value',
      interval: 3,
      axisLabel: {
        formatter: '{value}'
      }
    }
  ],
  series: [
    {
      name: '发布标段数量',
      type: 'bar',
      barWidth: 30,
      data: [13, 11, 10, 10, 7, 7, 6, 4, 3, 2],
      itemStyle: {
        normal: {
          barBorderRadius: [5, 5, 0, 0]
        }
      },
      markLine: {
        data: [
          {type: 'average', name: '平均值'}
        ]
      },
      markPoint: {
        data: [
          {type: 'max', name: '最大值'},
          {type: 'min', name: '最小值'}
        ]
      }
    }
  ]
};
comment_echart.setOption(option);

var twice_echart = echarts.init(document.getElementById("twice-echart"));
text = "二次招标项目类型分布";
option = {
  title: {
    text: text,
    left: 'center',
	textStyle:{
		fontSize:16
	}
  },

  tooltip: {
    trigger: 'item',
    formatter: "{a} <br/>{b} : {c} ({d}%)"
  },
  color: ['#2ec7ca', '#b6a2de', '#ffb980'],
  series: [
    {
      name: '项目类型',
      type: 'pie',
      radius: '70%',
      labelLine: {
        normal: {
          show: true,
          length: 15,
          smooth: true
        }
      },
      data: [
        {
          value: 68,
          name: '服务类'
        },
        {
          value: 32,
          name: '货物类'
        },
        {
          value: 64,
          name: '工程类'
        }
      ],
      label: {
        normal: {
          show: true,
          position: 'outside',
          formatter: "{b}\n{c}({d}%)"
        },
        emphasis: {
          show: true,
          textStyle: {
            fontSize: '20',
            fontWeight: 'bold'
          }
        }
      },
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
};
twice_echart.setOption(option);


var auto_echart1 = echarts.init(document.getElementById("auto-echart1"));
var text = '月发布项目数';
var names = '发布项目数';
var option = {
  title: {
    text: text,
    left: 'center',
	textStyle:{
		fontSize:16
	}
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#999'
      }
    }
  },
  color: ['#5ab1ef', '#ffb980'],
  xAxis: [
    {
      type: 'category',
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: names,
      min: 0,
      max: 250,
      interval: 50,
      axisLabel: {
        formatter: '{value}'
      }
    },
    {
      type: 'value',
      name: '增长率',
      min: -2,
      max: 4,
      interval: 1,
      axisLabel: {
        formatter: '{value}'
      }
    }
  ],
  series: [
    {
      name: '发布项目数',
      type: 'bar',
      barWidth: 30,
      data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
      itemStyle: {
        normal: {
          barBorderRadius: [5, 5, 0, 0]
        }
      }
    },
    {
      name: '增长率',
      type: 'line',
      yAxisIndex: 1,
      data: [1, 2.2, 3.3, 2, 1, 2, 3, 3, 4, 0, -1, 0.2]
    }
  ]
};
auto_echart1.setOption(option);

var auto_echart2 = echarts.init(document.getElementById("auto-echart2"));
text = '月成交项目数';
names = '成交项目数';
option = {
  title: {
    text: text,
    left: 'center',
	textStyle:{
		fontSize:16
	}
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#999'
      }
    }
  },
  color: ['#5ab1ef', '#ffb980'],
  xAxis: [
    {
      type: 'category',
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: names,
      min: 0,
      max: 250,
      interval: 50,
      axisLabel: {
        formatter: '{value}'
      }
    },
    {
      type: 'value',
      name: '增长率',
      min: -2,
      max: 4,
      interval: 1,
      axisLabel: {
        formatter: '{value}'
      }
    }
  ],
  series: [
    {
      name: '成交项目数',
      type: 'bar',
      barWidth: 30,
      data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
      itemStyle: {
        normal: {
          barBorderRadius: [5, 5, 0, 0]
        }
      }
    },
    {
      name: '增长率',
      type: 'line',
      yAxisIndex: 1,
      data: [1, 2.2, 3.3, 2, 1, 2, 3, 3, 4, 0, -1, 0.2]
    }
  ]
};
auto_echart2.setOption(option);

var auto_echart3 = echarts.init(document.getElementById("auto-echart3"));
text = "月成交额";
names = "成交额";
option = {
  title: {
    text: text,
    left: 'center',
	textStyle:{
		fontSize:16
	}
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#999'
      }
    }
  },
  color: ['#5ab1ef', '#ffb980'],
  xAxis: [
    {
      type: 'category',
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: names,
      min: 0,
      max: 250,
      interval: 50,
      axisLabel: {
        formatter: '{value}'
      }
    },
    {
      type: 'value',
      name: '增长率',
      min: -2,
      max: 4,
      interval: 1,
      axisLabel: {
        formatter: '{value}'
      }
    }
  ],
  series: [
    {
      name: '发布标段数量',
      type: 'bar',
      barWidth: 30,
      data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
      itemStyle: {
        normal: {
          barBorderRadius: [5, 5, 0, 0]
        }
      }
    },
    {
      name: '增长率',
      type: 'line',
      yAxisIndex: 1,
      data: [1, 2.2, 3.3, 2, 1, 2, 3, 3, 4, 0, -1, 0.2]
    }
  ]
};
auto_echart3.setOption(option);

var auto_echart4 = echarts.init(document.getElementById("auto-echart4"));
text = "月招标项目类型";
option = {
  title: {
    text: text,
    left: 'center',
	textStyle:{
		fontSize:16
	}
  },
  tooltip: {
    trigger: 'item',
    formatter: "{a} <br/>{b} : {c} ({d}%)"
  },
  color: ['#2ec7ca', '#b6a2de', '#ffb980'],
  series: [
    {
      name: '项目类型',
      type: 'pie',
      radius: '70%',
      labelLine: {
        normal: {
          show: true,
          length: 15,
          smooth: true
        }
      },
      data: [
        {
          value: 68,
          name: '服务类'
        },
        {
          value: 32,
          name: '货物类'
        },
        {
          value: 64,
          name: '工程类'
        }
      ],
      label: {
        normal: {
          show: true,
          position: 'outside',
          formatter: "{b}\n{c}({d}%)"
        },
        emphasis: {
          show: true,
          textStyle: {
            fontSize: '20',
            fontWeight: 'bold'
          }
        }
      },
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
};
auto_echart4.setOption(option);

var auto_echart5 = echarts.init(document.getElementById("auto-echart5"));
text = "企业招标各项目行业分布（TOP 10）";
option = {
  title: {
    text: text,
    left: 'center',
	textStyle:{
		fontSize:16
	}
  },
  grid: {
    left: '28%'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#999'
      }
    }
  },
  color: ['#5ab1ef', '#ffb980'],
  xAxis: [
    {
      type: 'value',
      interval: 20000
    }
  ],
  yAxis: [
    {
      type: 'category',
      data: ['租赁和商务服务业', '公共设施管理业', '交通运输业', '科学研究与技术服务业', '居民服务业', '批发和零售业', '建筑业', '制造业', '电力、热力、燃气及水生产和供应业', '信息传输、软件和信息技术服务业']
    }
  ],
  series: [
    {
      name: '项目行业分布',
      type: 'bar',
      barWidth: 16,
      data: [18203, 23489, 29037, 31000, 44970, 51744, 63023, 68180, 72134, 83245],
      itemStyle: {
        normal: {
          barBorderRadius: [0, 5, 5, 0]
        }
      },
      label: {
        normal: {
          show: true,
          position: 'right'
        }
      }
    }
  ]
};
auto_echart5.setOption(option);

var auto_echart6 = echarts.init(document.getElementById("auto-echart6"));
text = "企业招标中标金额排行榜（TOP 10）";
option = {
  title: {
    text: text,
    left: 'center',
	textStyle:{
		fontSize:16
	}
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#999'
      }
    }
  },
  color: ['#5ab1ef', '#ffb980'],
  xAxis: [
    {
      type: 'value',
      interval: 20000
    }
  ],
  yAxis: [
    {
      type: 'category',
      data: ['项目1', '项目2', '项目3', '项目4', '项目5', '项目6', '项目7', '项目8', '项目9', '项目10']
    }
  ],
  series: [
    {
      name: '项目行业分布',
      type: 'bar',
      barWidth: 16,
      data: [18203, 23489, 29037, 31000, 44970, 51744, 63023, 68180, 72134, 83245],
      itemStyle: {
        normal: {
          barBorderRadius: [0, 5, 5, 0]
        }
      },
      label: {
        normal: {
          show: true,
          position: 'right'
        }
      }
    }
  ]
};
auto_echart6.setOption(option);


var shopping_echart1 = echarts.init(document.getElementById("shopping-echart1"));
var text = '月采购项目数';
var names = '发布项目数';
var option = {
  title: {
    text: text,
    left: 'center',
	textStyle:{
		fontSize:16
	}
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#999'
      }
    }
  },
  color: ['#5ab1ef', '#ffb980'],
  xAxis: [
    {
      type: 'category',
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: names,
      min: 0,
      max: 250,
      interval: 50,
      axisLabel: {
        formatter: '{value}'
      }
    },
    {
      type: 'value',
      name: '增长率',
      min: -2,
      max: 4,
      interval: 1,
      axisLabel: {
        formatter: '{value}'
      }
    }
  ],
  series: [
    {
      name: '发布项目数',
      type: 'bar',
      barWidth: 30,
      data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
      itemStyle: {
        normal: {
          barBorderRadius: [5, 5, 0, 0]
        }
      }
    },
    {
      name: '增长率',
      type: 'line',
      yAxisIndex: 1,
      data: [1, 2.2, 3.3, 2, 1, 2, 3, 3, 4, 0, -1, 0.2]
    }
  ]
};
shopping_echart1.setOption(option);

var shopping_echart2 = echarts.init(document.getElementById("shopping-echart2"));
text = '月成交项目数';
names = '成交项目数';
option = {
  title: {
    text: text,
    left: 'center',
	textStyle:{
		fontSize:16
	}
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#999'
      }
    }
  },
  color: ['#5ab1ef', '#ffb980'],
  xAxis: [
    {
      type: 'category',
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: names,
      min: 0,
      max: 250,
      interval: 50,
      axisLabel: {
        formatter: '{value}'
      }
    },
    {
      type: 'value',
      name: '增长率',
      min: -2,
      max: 4,
      interval: 1,
      axisLabel: {
        formatter: '{value}'
      }
    }
  ],
  series: [
    {
      name: '成交项目数',
      type: 'bar',
      barWidth: 30,
      data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
      itemStyle: {
        normal: {
          barBorderRadius: [5, 5, 0, 0]
        }
      }
    },
    {
      name: '增长率',
      type: 'line',
      yAxisIndex: 1,
      data: [1, 2.2, 3.3, 2, 1, 2, 3, 3, 4, 0, -1, 0.2]
    }
  ]
};
shopping_echart2.setOption(option);

var shopping_echart3 = echarts.init(document.getElementById("shopping-echart3"));
text = "月成交额";
names = "成交额";
option = {
  title: {
    text: text,
    left: 'center',
	textStyle:{
		fontSize:16
	}
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#999'
      }
    }
  },
  color: ['#5ab1ef', '#ffb980'],
  xAxis: [
    {
      type: 'category',
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: names,
      min: 0,
      max: 250,
      interval: 50,
      axisLabel: {
        formatter: '{value}'
      }
    },
    {
      type: 'value',
      name: '增长率',
      min: -2,
      max: 4,
      interval: 1,
      axisLabel: {
        formatter: '{value}'
      }
    }
  ],
  series: [
    {
      name: '发布标段数量',
      type: 'bar',
      barWidth: 30,
      data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
      itemStyle: {
        normal: {
          barBorderRadius: [5, 5, 0, 0]
        }
      }
    },
    {
      name: '增长率',
      type: 'line',
      yAxisIndex: 1,
      data: [1, 2.2, 3.3, 2, 1, 2, 3, 3, 4, 0, -1, 0.2]
    }
  ]
};
shopping_echart3.setOption(option);

var shopping_echart4 = echarts.init(document.getElementById("shopping-echart4"));
text = "询价各项目行业分布（TOP 10）";
option = {
  title: {
    text: text,
    left: 'center',
	textStyle:{
		fontSize:16
	}
  },
  grid: {
    left: '28%'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#999'
      }
    }
  },
  color: ['#5ab1ef', '#ffb980'],
  xAxis: [
    {
      type: 'value',
      interval: 20000
    }
  ],
  yAxis: [
    {
      type: 'category',
      data: ['租赁和商务服务业', '公共设施管理业', '交通运输业', '科学研究与技术服务业', '居民服务业', '批发和零售业', '建筑业', '制造业', '电力、热力、燃气及水生产和供应业', '信息传输、软件和信息技术服务业']
    }
  ],
  series: [
    {
      name: '项目行业分布',
      type: 'bar',
      barWidth: 16,
      data: [18203, 23489, 29037, 31000, 44970, 51744, 63023, 68180, 72134, 83245],
      itemStyle: {
        normal: {
          barBorderRadius: [0, 5, 5, 0]
        }
      },
      label: {
        normal: {
          show: true,
          position: 'right'
        }
      }
    }
  ]
};
shopping_echart4.setOption(option);


var ranking_echart1 = echarts.init(document.getElementById("ranking-echart1"));
text = "询价采购金额排行榜（TOP 10）";
option = {
  title: {
    text: text,
    left: 'center',
	textStyle:{
		fontSize:16
	}
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#999'
      }
    }
  },
  color: ['#5ab1ef', '#ffb980'],
  xAxis: [
    {
      type: 'value',
      interval: 20000
    }
  ],
  yAxis: [
    {
      type: 'category',
      data: ['项目1', '项目2', '项目3', '项目4', '项目5', '项目6', '项目7', '项目8', '项目9', '项目10']
    }
  ],
  series: [
    {
      name: '项目金额',
      type: 'bar',
      barWidth: 16,
      data: [18203, 23489, 29037, 31000, 44970, 51744, 63023, 68180, 72134, 83245],
      itemStyle: {
        normal: {
          barBorderRadius: [0, 5, 5, 0]
        }
      },
      label: {
        normal: {
          show: true,
          position: 'right'
        }
      }
    }
  ]
};
ranking_echart1.setOption(option);

var ranking_echart2 = echarts.init(document.getElementById("ranking-echart2"));
text = "询价采购节省成本排行榜（TOP 10）";
option = {
  title: {
    text: text,
    left: 'center',
	textStyle:{
		fontSize:16
	}
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#999'
      }
    }
  },
  color: ['#5ab1ef', '#ffb980'],
  xAxis: [
    {
      type: 'value',
      interval: 20000
    }
  ],
  yAxis: [
    {
      type: 'category',
      data: ['项目1', '项目2', '项目3', '项目4', '项目5', '项目6', '项目7', '项目8', '项目9', '项目10']
    }
  ],
  series: [
    {
      name: '项目金额',
      type: 'bar',
      barWidth: 16,
      data: [18203, 23489, 29037, 31000, 44970, 51744, 63023, 68180, 72134, 83245],
      itemStyle: {
        normal: {
          barBorderRadius: [0, 5, 5, 0]
        }
      },
      label: {
        normal: {
          show: true,
          position: 'right'
        }
      }
    }
  ]
};
ranking_echart2.setOption(option);

var ranking_echart3 = echarts.init(document.getElementById("ranking-echart3"));
text = "询价采购物资排行榜（TOP 10）";
option = {
  title: {
    text: text,
    left: 'center',
	textStyle:{
		fontSize:16
	}
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#999'
      }
    }
  },
  color: ['#5ab1ef', '#ffb980'],
  xAxis: [
    {
      type: 'category',
      data: ['物资1', '物资2', '物资3', '物资4', '物资5', '物资6', '物资7', '物资8', '物资9', '物资10']
    }
  ],
  yAxis: [
    {
      type: 'value',
      interval: 20000
    }
  ],

  series: [
    {
      name: '项目金额',
      type: 'bar',
      barWidth: 26,
      data: [83245, 72134, 68180, 63023, 51744, 44900, 38444, 32111, 21100, 15000],
      itemStyle: {
        normal: {
          barBorderRadius: [5, 5, 0, 0]
        }
      },
      label: {
        normal: {
          show: true,
          position: 'top'
        }
      }
    }
  ]
};
ranking_echart3.setOption(option);

var ranking_echart4 = echarts.init(document.getElementById("ranking-echart4"));
text = "询价采购各行业金额排行榜（TOP 10）";
option = {
  title: {
    text: text,
    left: 'center',
	textStyle:{
		fontSize:16
	}
  },
  grid: {
    left: '28%'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#999'
      }
    }
  },
  color: ['#5ab1ef', '#ffb980'],
  xAxis: [
    {
      type: 'value',
      interval: 20000
    }
  ],
  yAxis: [
    {
      type: 'category',
      data: ['租赁和商务服务业', '公共设施管理业', '交通运输业', '科学研究与技术服务业', '居民服务业', '批发和零售业', '建筑业', '制造业', '电力、热力、燃气及水生产和供应业', '信息传输、软件和信息技术服务业']
    }
  ],
  series: [
    {
      name: '项目行业分布',
      type: 'bar',
      barWidth: 16,
      data: [18203, 23489, 29037, 31000, 44970, 51744, 63023, 68180, 72134, 83245],
      itemStyle: {
        normal: {
          barBorderRadius: [0, 5, 5, 0]
        }
      },
      label: {
        normal: {
          show: true,
          position: 'right'
        }
      }
    }
  ]
};
ranking_echart4.setOption(option);


var ranking_echart5 = echarts.init(document.getElementById("ranking-echart5"));
text = "物资价格走势图（TOP3）";
option = {
  title: {
    text: text,
    left: 'center',
	textStyle:{
		fontSize:16
	}
  },
   legend: {
        data:['TOP1价格','TOP2价格','TOP3价格'],
        x: 'right',
		y: '5%'
    },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#999'
      }
    }
  },
  color: ['#5ab1ef','#b7a3df', '#ffb980'],
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
    }
  ],
  yAxis: [
    {
      type: 'value',
      axisLabel: {
        formatter: '{value} '
      }
    }
  ],
  series: [
    {
      name: 'TOP1价格',
      type: 'line',
      data: [11, 11, 15, 13, 12, 13, 10, 1, 9, 10, 11, 12],
      markLine: {
        data: [
          {type: 'average', name: '平均值'}
        ]
      }
    },
	{
      name: 'TOP2价格',
      type: 'line',
      data: [61, 51, 55, 63, 42, 53, 60, 51, 59, 60, 51, 52],
      markLine: {
        data: [
          {type: 'average', name: '平均值'}
        ]
      }
    },
	{
      name: 'TOP3价格',
      type: 'line',
      data: [21, 41, 35, 23, 22, 33, 30, 21, 29, 30, 24, 28],
      markLine: {
        data: [
          {type: 'average', name: '平均值'}
        ]
      }
    }
  ]
};
ranking_echart5.setOption(option);

var purchases_echart1 = echarts.init(document.getElementById("purchases-echart1"));
text = "采购金额排行榜（TOP 10）";
option = {
  title: {
    text: text,
    left: 'center',
	textStyle:{
		fontSize:16
	}
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#999'
      }
    }
  },
  color: ['#5ab1ef', '#ffb980'],
  xAxis: [
    {
      type: 'category',
      data: ['采购员1', '采购员2', '采购员3', '采购员4', '采购员5', '采购员6', '采购员7', '采购员8', '采购员9', '采购员10']
    }
  ],
  yAxis: [
    {
      type: 'value',
      interval: 3,
      axisLabel: {
        formatter: '{value}'
      }
    }
  ],
  series: [
    {
      name: '采购金额排行',
      type: 'bar',
      barWidth: 30,
      data: [13, 8, 7, 7, 6, 6, 6, 5,3,2],
      itemStyle: {
        normal: {
          barBorderRadius: [5, 5, 0, 0]
        }
      },
	   label: {
        normal: {
          show: true,
          position: 'top'
        }
	  },
      markLine: {
        data: [
          {type: 'average', name: '平均值'}
        ]
      }
    }
  ]
};
purchases_echart1.setOption(option);

var purchases_echart2 = echarts.init(document.getElementById("purchases-echart2"));
text = "采购项目数排行榜（TOP 10）";
option = {
  title: {
    text: text,
    left: 'center',
	textStyle:{
		fontSize:16
	}
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#999'
      }
    }
  },
  color: ['#5ab1ef', '#ffb980'],
  xAxis: [
    {
      type: 'category',
      data: ['采购员1', '采购员2', '采购员3', '采购员4', '采购员5', '采购员6', '采购员7', '采购员8', '采购员9', '采购员10']
    }
  ],
  yAxis: [
    {
      type: 'value',
      interval: 3,
      axisLabel: {
        formatter: '{value}'
      }
    }
  ],
  series: [
    {
      name: '采购项目排行',
      type: 'bar',
      barWidth: 30,
      data: [13, 11, 10, 10, 9, 8, 6, 6,4,2],
      itemStyle: {
        normal: {
          barBorderRadius: [5, 5, 0, 0]
        }
      },
	   label: {
        normal: {
          show: true,
          position: 'top'
	   }
	   },
      markLine: {
        data: [
          {type: 'average', name: '平均值'}
        ]
      }
    }
  ]
};
purchases_echart2.setOption(option);


var toubiaoren_echart1 = echarts.init(document.getElementById("toubiaoren-echart1"));
text = "投标人行业分布（TOP10）";
option = {
  title: {
    text: text,
    left: 'center',
	textStyle:{
		fontSize:16
	}
  },
  grid: {
    left: '28%'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#999'
      }
    }
  },
  color: ['#5ab1ef', '#ffb980'],
  xAxis: [
    {
      type: 'value',
      interval: 20000
    }
  ],
  yAxis: [
    {
      type: 'category',
      data: ['租赁和商务服务业', '公共设施管理业', '交通运输业', '科学研究与技术服务业', '居民服务业', '批发和零售业', '建筑业', '制造业', '电力、热力、燃气及水生产和供应业', '信息传输、软件和信息技术服务业']
    }
  ],
  series: [
    {
      name: '投标人行业分布',
      type: 'bar',
      barWidth: 16,
      data: [18203, 23489, 29037, 31000, 44970, 51744, 63023, 68180, 72134, 83245],
      itemStyle: {
        normal: {
          barBorderRadius: [0, 5, 5, 0]
        }
      },
      label: {
        normal: {
          show: true,
          position: 'right'
        }
      }
    }
  ]
};
toubiaoren_echart1.setOption(option);

var toubiaoren_echart2 = echarts.init(document.getElementById("toubiaoren-echart2"));
text = "投标人地区分布";

function randomData() {
  return Math.round(Math.random() * 1000);
}

option = {
  title: {
    text: text,
    left: 'center',
	textStyle:{
		fontSize:16
	}
  },
  tooltip: {
    trigger: 'item'
  },
  visualMap: {
    min: 0,
    max: 2500,
    left: 'left',
    top: 'bottom',
    text: ['高', '低'],           // 文本，默认为数值文本
    calculable: true
  },
  series: [
    {
      name: '投标人地区分布',
      type: 'map',
      mapType: 'china',
      roam: false,
      label: {
        normal: {
          show: true
        },
        emphasis: {
          show: true
        }
      },
      data: [
        {name: '北京', value: randomData()},
        {name: '天津', value: randomData()},
        {name: '上海', value: randomData()},
        {name: '重庆', value: randomData()},
        {name: '河北', value: randomData()},
        {name: '河南', value: randomData()},
        {name: '云南', value: randomData()},
        {name: '辽宁', value: randomData()},
        {name: '黑龙江', value: randomData()},
        {name: '湖南', value: randomData()},
        {name: '安徽', value: randomData()},
        {name: '山东', value: randomData()},
        {name: '新疆', value: randomData()},
        {name: '江苏', value: randomData()},
        {name: '浙江', value: randomData()},
        {name: '江西', value: randomData()},
        {name: '湖北', value: randomData()},
        {name: '广西', value: randomData()},
        {name: '甘肃', value: randomData()},
        {name: '山西', value: randomData()},
        {name: '内蒙古', value: randomData()},
        {name: '陕西', value: randomData()},
        {name: '吉林', value: randomData()},
        {name: '福建', value: randomData()},
        {name: '贵州', value: randomData()},
        {name: '广东', value: randomData()},
        {name: '青海', value: randomData()},
        {name: '西藏', value: randomData()},
        {name: '四川', value: randomData()},
        {name: '宁夏', value: randomData()},
        {name: '海南', value: randomData()},
        {name: '台湾', value: randomData()},
        {name: '香港', value: randomData()},
        {name: '澳门', value: randomData()}
      ]
    }
  ]
};
toubiaoren_echart2.setOption(option);


var count_echart1 = echarts.init(document.getElementById("count-echart1"));
text = "投标人投标次数排行榜（TOP10）";
option = {
  title: {
    text: text,
    left: 'center',
	textStyle:{
		fontSize:16
	}
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#999'
      }
    }
  },
  color: ['#5ab1ef', '#ffb980'],
  xAxis: [
    {
      type: 'category',
      data: ['投标人1', '投标人2', '投标人3', '投标人4', '投标人5', '投标人6', '投标人7', '投标人8', '投标人9', '投标人10']
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],

  series: [
    {
      name: '投标人投标次数',
      type: 'bar',
      barWidth: 26,
      data: [180, 123, 100, 98, 86, 51, 43, 18, 13, 5],
      itemStyle: {
        normal: {
          barBorderRadius: [5, 5, 0, 0]
        }
      },
      label: {
        normal: {
          show: true,
          position: 'top'
        }
      }
    }
  ]
};
count_echart1.setOption(option);

var count_echart2 = echarts.init(document.getElementById("count-echart2"));
text = "投标人中标金额排行榜（TOP10）";
option =  {
  title: {
    text: text,
    left: 'center',
	textStyle:{
		fontSize:16
	}
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#999'
      }
    }
  },
  color: ['#5ab1ef', '#ffb980'],
  xAxis: [
    {
      type: 'value',
      interval: 20000
    }
  ],
  yAxis: [
    {
      type: 'category',
      data: ['投标人1', '投标人2', '投标人3', '投标人4', '投标人5', '投标人6', '投标人7', '投标人8', '投标人9', '投标人10']
    }
  ],
  series: [
    {
      name: '投标人中标金额',
      type: 'bar',
      barWidth: 16,
      data: [18203, 23489, 29037, 31000, 44970, 51744, 63023, 68180, 72134, 83245],
      itemStyle: {
        normal: {
          barBorderRadius: [0, 5, 5, 0]
        }
      },
      label: {
        normal: {
          show: true,
          position: 'right'
        }
      }
    }
  ]
};
count_echart2.setOption(option);

var count_echart3 = echarts.init(document.getElementById("count-echart3"));
text = "投标人中标次数排行榜（TOP10）";
option = {
  title: {
    text: text,
    left: 'center',
	textStyle:{
		fontSize:16
	}
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#999'
      }
    }
  },
  color: ['#5ab1ef', '#ffb980'],
  xAxis: [
    {
      type: 'category',
      data: ['中标人1', '中标人2', '中标人3', '中标人4', '中标人5', '中标人6', '中标人7', '中标人8', '中标人9', '中标人10']
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],

  series: [
    {
      name: '投标人中标次数',
      type: 'bar',
      barWidth: 26,
      data: [98, 96, 86, 76, 66, 60, 56, 53, 28, 17],
      itemStyle: {
        normal: {
          barBorderRadius: [5, 5,0, 0]
        }
      },
      label: {
        normal: {
          show: true,
          position: 'top'
        }
      }
    }
  ]
};
count_echart3.setOption(option);

var count_echart4 = echarts.init(document.getElementById("count-echart4"));
text = "投标人不良行为排行榜（TOP10）";
option = {
  title: {
    text: text,
    left: 'center',
	textStyle:{
		fontSize:16
	}
  },
  grid: {
    left: '28%'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#999'
      }
    }
  },
  color: ['#5ab1ef', '#ffb980'],
  xAxis: [
    {
      type: 'value',
      interval: 20000
    }
  ],
  yAxis: [
    {
      type: 'category',
      data: ['定远县亚安商贸', '新乡市中汇过滤技术', '淮南市宏灿贸易', '张家港市起重运输机械厂', '南京保海电气自动化系统', '合肥普洛斯电气自动化科技', '上海列伊机电设备', '深圳市纯水一号处理科技', '合肥佳丰风机', '江苏花航仪表']
    }
  ],
  series: [
    {
      name: '投标人不良行为',
      type: 'bar',
      barWidth: 16,
      data: [2, 3, 4, 5, 6, 7, 8, 9, 11, 12],
      itemStyle: {
        normal: {
          barBorderRadius: [0, 5, 5, 0]
        }
      },
      label: {
        normal: {
          show: true,
          position: 'right'
        }
      }
    }
  ]
};
count_echart4.setOption(option);

var supplier_echart1 = echarts.init(document.getElementById("supplier-echart1"));
text = "供应商行业分布（TOP10）";
option = {
  title: {
    text: text,
    left: 'center',
	textStyle:{
		fontSize:16
	}
  },
  grid: {
    left: '28%'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#999'
      }
    }
  },
  color: ['#5ab1ef', '#ffb980'],
  xAxis: [
    {
      type: 'value',
      interval: 20000
    }
  ],
  yAxis: [
    {
      type: 'category',
      data: ['租赁和商务服务业', '公共设施管理业', '交通运输业', '科学研究与技术服务业', '居民服务业', '批发和零售业', '建筑业', '制造业', '电力、热力、燃气及水生产和供应业', '信息传输、软件和信息技术服务业']
    }
  ],
  series: [
    {
      name: '供应商行业分布',
      type: 'bar',
      barWidth: 16,
      data: [18203, 23489, 29037, 31000, 44970, 51744, 63023, 68180, 72134, 83245],
      itemStyle: {
        normal: {
          barBorderRadius: [0, 5, 5, 0]
        }
      },
      label: {
        normal: {
          show: true,
          position: 'right'
        }
      }
    }
  ]
};
supplier_echart1.setOption(option);

var supplier_echart2 = echarts.init(document.getElementById("supplier-echart2"));
text = "供应商地区分布";

function randomData() {
  return Math.round(Math.random() * 1000);
}

option = {
  title: {
    text: text,
    left: 'center',
	textStyle:{
		fontSize:16
	}
  },
  tooltip: {
    trigger: 'item'
  },
  
  visualMap: {
    min: 0,
    max: 2500,
    left: 'left',
    top: 'bottom',
    text: ['高', '低'],           // 文本，默认为数值文本
    calculable: true,
   
  },
  series: [
    {
      name: '供应商地区分布',
      type: 'map',
      mapType: 'china',
      roam: false,
      label: {
        normal: {
          show: true
        },
        emphasis: {
          show: true
        }
      },
      // itemStyle: {
       
      //   emphasis: {// 也是选中样式
           
      //       areaColor: 'red',
            
      //    }    
      //   },

      data: [
        {name: '北京', value: randomData()},
        {name: '天津', value: randomData()},
        {name: '上海', value: randomData()},
        {name: '重庆', value: randomData()},
        {name: '河北', value: randomData()},
        {name: '河南', value: randomData()},
        {name: '云南', value: randomData()},
        {name: '辽宁', value: randomData()},
        {name: '黑龙江', value: randomData()},
        {name: '湖南', value: randomData()},
        {name: '安徽', value: randomData()},
        {name: '山东', value: randomData()},
        {name: '新疆', value: randomData()},
        {name: '江苏', value: randomData()},
        {name: '浙江', value: randomData()},
        {name: '江西', value: randomData()},
        {name: '湖北', value: randomData()},
        {name: '广西', value: randomData()},
        {name: '甘肃', value: randomData()},
        {name: '山西', value: randomData()},
        {name: '内蒙古', value: randomData()},
        {name: '陕西', value: randomData()},
        {name: '吉林', value: randomData()},
        {name: '福建', value: randomData()},
        {name: '贵州', value: randomData()},
        {name: '广东', value: randomData()},
        {name: '青海', value: randomData()},
        {name: '西藏', value: randomData()},
        {name: '四川', value: randomData()},
        {name: '宁夏', value: randomData()},
        {name: '海南', value: randomData()},
        {name: '台湾', value: randomData()},
        {name: '香港', value: randomData()},
        {name: '澳门', value: randomData()}
      ]
    }
  ]
};
supplier_echart2.setOption(option);

var supplierCount_echart1 = echarts.init(document.getElementById("supplierCount-echart1"));
text = "供应商报名次数排行榜（TOP10）";
option = {
  title: {
    text: text,
    left: 'center',
	textStyle:{
		fontSize:16
	}
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#999'
      }
    }
  },
  color: ['#5ab1ef', '#ffb980'],
  xAxis: [
    {
      type: 'category',
      data: ['供应商1', '供应商2', '供应商3', '供应商4', '供应商5', '供应商6', '供应商7', '供应商8', '供应商9', '供应商10']
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],

  series: [
    {
      name: '供应商报名次数',
      type: 'bar',
      barWidth: 26,
      data: [182, 123,97, 90, 80, 74, 63, 60, 58, 45],
      itemStyle: {
        normal: {
          barBorderRadius: [5, 5, 0, 0]
        }
      },
      label: {
        normal: {
          show: true,
          position: 'top'
        }
      }
    }
  ]
};
supplierCount_echart1.setOption(option);

var supplierCount_echart2 = echarts.init(document.getElementById("supplierCount-echart2"));
text = "供应商成交次数排行榜（TOP10）";
option = {
  title: {
    text: text,
    left: 'center',
	textStyle:{
		fontSize:16
	}
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#999'
      }
    }
  },
  color: ['#5ab1ef', '#ffb980'],
  xAxis: [
    {
      type: 'category',
      data: ['供应商1', '供应商2', '供应商3', '供应商4', '供应商5', '供应商6', '供应商7', '供应商8', '供应商9', '供应商10']
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],

  series: [
    {
      name: '供应商成交次数',
      type: 'bar',
      barWidth: 26,
      data: [201, 198, 126, 100, 87, 76, 75, 48, 43, 35],
      itemStyle: {
        normal: {
          barBorderRadius: [5, 5, 0, 0]
        }
      },
      label: {
        normal: {
          show: true,
          position: 'top'
        }
      }
    }
  ]
};
supplierCount_echart2.setOption(option);

var supplierCount_echart3 = echarts.init(document.getElementById("supplierCount-echart3"));
text = "供应商成交金额排行榜（TOP10）";
option = {
  title: {
    text: text,
    left: 'center',
	textStyle:{
		fontSize:16
	}
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#999'
      }
    }
  },
  color: ['#5ab1ef', '#ffb980'],
  xAxis: [
    {
      type: 'value',
      interval: 20000
    }
  ],
  yAxis: [
    {
      type: 'category',
      data: ['中标人1', '中标人2', '中标人3', '中标人4', '中标人5', '中标人6', '中标人7', '中标人8', '中标人9', '中标人10']
    }
  ],
  series: [
    {
      name: '供应商成交金额',
      type: 'bar',
      barWidth: 16,
      data: [18203, 23489, 29037, 31000, 44970, 51744, 63023, 68180, 72134, 83245],
      itemStyle: {
        normal: {
          barBorderRadius: [0, 5, 5, 0]
        }
      },
      label: {
        normal: {
          show: true,
          position: 'right'
        }
      }
    }
  ]
};
supplierCount_echart3.setOption(option);

var supplierCount_echart4 = echarts.init(document.getElementById("supplierCount-echart4"));
text = "供应商不良行为排行榜（TOP10）";
option = {
  title: {
    text: text,
    left: 'center',
	textStyle:{
		fontSize:16
	}
  },
  grid: {
    left: '28%'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#999'
      }
    }
  },
  color: ['#5ab1ef', '#ffb980'],
  xAxis: [
    {
      type: 'value',
      interval: 20000
    }
  ],
  yAxis: [
    {
      type: 'category',
      data: ['定远县亚安商贸', '新乡市中汇过滤技术', '淮南市宏灿贸易', '张家港市起重运输机械厂', '南京保海电气自动化系统', '合肥普洛斯电气自动化科技', '上海列伊机电设备', '深圳市纯水一号处理科技', '合肥佳丰风机', '江苏花航仪表']
    }
  ],
  series: [
    {
      name: '供应商不良行为',
      type: 'bar',
      barWidth: 16,
      data: [2, 3, 4, 5, 6, 7, 8, 9, 11, 12],
      itemStyle: {
        normal: {
          barBorderRadius: [0, 5, 5, 0]
        }
      },
      label: {
        normal: {
          show: true,
          position: 'right'
        }
      }
    }
  ]
};
supplierCount_echart4.setOption(option);
