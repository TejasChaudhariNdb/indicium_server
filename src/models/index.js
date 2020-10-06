



let users = {
  1: {
    id: '1',
    username: 'robin',
    password: '1234',
  },
  2: {
    id: '2',
    username: 'Tejas38',
    password: 'Tejas',
  },
};

let messages = {
  1: {
    id: '1',
    text: 'Hello World',
    userId: '1',
  },
  2: {
    id: '2',
    text: 'By World',
    userId: '2',
  },
};

let riskReduction = {
1:{
  name:'Barry Allen',
  driver:[{name:'Driver Fatigue',per:'57%'},{name:'Speeding',per:'2%'},{name:'Safe Trailing Distance ',per:'9%'},{name:'Route Familiarity',per:'10%'},{name:'Vehicle Maintenance',per:'8%'},{name:'Cellphone ',per:'0%'}]
},
2:{
  driver:[{name:'Driver Fatigue',per:'57%'},{name:'Speeding',per:'2%'},{name:'Safe Trailing Distance ',per:'9%'},{name:'Route Familiarity',per:'10%'},{name:'Vehicle Maintenance',per:'8%'},{name:'Cellphone ',per:'0%'}]
},
3:{
  driver:[{name:'Driver Fatigue',per:'57%'},{name:'Speeding',per:'2%'},{name:'Safe Trailing Distance ',per:'9%'},{name:'Route Familiarity',per:'10%'},{name:'Vehicle Maintenance',per:'8%'},{name:'Cellphone ',per:'0%'}]
},
4:{
  driver:[{name:'Driver Fatigue',per:'57%'},{name:'Speeding',per:'2%'},{name:'Safe Trailing Distance ',per:'9%'},{name:'Route Familiarity',per:'10%'},{name:'Vehicle Maintenance',per:'8%'},{name:'Cellphone ',per:'0%'}]
},


}

let dashboard = { 
    1:{
     data:[{"name":"Safe Driving", "data": {"January": 2, "February": 2,"March": 2, "April": 2,"May": 2}},
    {"name":"Low Risk", "data": {"January": 3, "February": 3,"March": 3, "April": 3,"May": 3}},
    {"name":"High Risk", "data": {"January": 4, "February": 4,"March": 4, "April": 4,"May": 4}},
    {"name":"Collsion ", "data": {"January": 5, "February": 5,"March": 5, "April": 5,"May": 5}}]
    },
    2:{
      data:[["Safe Driving", 44], ["Low Risk",6],["High Risk", 30],["Collsionn", 20],]
    }
  
     };






export default {
  users,
  messages,
  dashboard,
  riskReduction
};
