
 var echartsData =[];
 var echartsEat =[];
 var echartsFang =[];
 var echartslive =[];
 var echartsShore =[];

 $('table tbody tr').each(function(){
     echartsData.push($(this).find(".td-data").html());
     echartsEat.push($(this).find(".td-eat").html());
     echartsFang.push($(this).find(".td-fang").html());
     echartslive.push($(this).find(".td-live").html());
     echartsShore.push($(this).find(".td-shore").html());
 });
var echartsStyle=$('.style').text()
   



 console.log(echartsStyle);

class EchartsObj{
    //基础事例
    static basic(){
        //初始化echarts事例
        
        let myCharts = echarts.init($("#demo-02").get(0));
        //初始化阶段
        let day      = ["周一","周二" ,"周三","周四","周五","周六","周天"];
        // let style    = ["吃饭","生活用具","房租","穿的"];
        let series   =[];
        
       
        console.log(day);

        // console.log(series);
        //设置图例
        //请求数据
        //$.ajax()
        //通过延时函数模拟$ajax
        myCharts.setOption({
            //设置标题
            title:{
                //主标题
                text:"一周的消费记录",
                link:"https://github.com/lihongyao/",
                //子标题
                subtext:"数据仅供参考"
            },
            
             //设置图例
            legend:{
                bottom:0

            },
            //设置X轴
            xAxis:{
                data:echartsData
            },
            yAxis:{
                data:echartsStyle,
                type:"value"
            },
            //3.5提示
            tooltip: {
                //触发类型
                trigger:"axis",
                triggerOn:"mousemove",
                // formatter:"RIMI{b} 成绩情况:<br/>{a}:{c}"
            },
            //3.6工具栏
            toolbox:{

                //配置工具项
                feature:{
                    saveAsImage:{
                        type:"jpeg",
                        name:"rimi",
                        title:"下载"
                    },
                    //重置
                    restore:{},
                    //编辑 数据
                    dataView:{},
                    //缩放
                    dataZoom:{},
                    //动态类型切换
                    magicType:{
                        type:['line', 'bar', 'stack', 'tiled']
                    }
                }},
            //定义数据
            series:[
                {
                    name:"吃饭",
                    type:"line",
                    stack:"zong",
                    data:echartsEat,
                    
                        markPoint:{
                            data:[
                                {name:"最大值",type:"max"},
                                {name:"最小值",type:"min"},
        
                            ]
                        },
                        markLine:{
                            data:[
                                {name:"平均值",type:"average"}
                            ]
                        }
                    
                },
                {
                    name:"房租",
                    type:"line",
                    stack:"zong",
                    data:echartsFang,
                    
                        markPoint:{
                            data:[
                                {name:"最大值",type:"max"},
                                {name:"最小值",type:"min"},
        
                            ]
                        },
                        markLine:{
                            data:[
                                {name:"平均值",type:"average"}
                            ]
                        }
                    
                },
                {
                    name:"生活用具",
                    type:"line",
                    stack:"zong",
                    data:echartslive,
                    
                        markPoint:{
                            data:[
                                {name:"最大值",type:"max"},
                                {name:"最小值",type:"min"},
        
                            ]
                        },
                        markLine:{
                            data:[
                                {name:"平均值",type:"average"}
                            ]
                        }
                    
                },
                {
                    name:"穿的",
                    type:"line",
                    stack:"zong",
                    data:echartsShore,
                    
                        markPoint:{
                            data:[
                                {name:"最大值",type:"max"},
                                {name:"最小值",type:"min"},
        
                            ]
                        },
                        markLine:{
                            data:[
                                {name:"平均值",type:"average"}
                            ]
                        }
                    
                },
                
                
            ]
        });
       
           
            //更新图标
            myCharts.hideLoading();
            myCharts.setOption({
                series:series,
            });

            
       
        // $(".table thread tr th").html(<tr>${day}</tr>);
    }
    
};



