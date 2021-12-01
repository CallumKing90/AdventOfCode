const data = `16
10
15
5
1
11
7
19
6
12
4`;

const data2 = `30
73
84
136
132
117
65
161
49
68
139
46
21
127
109
153
163
160
18
22
131
146
62
113
172
150
171
98
93
130
170
59
1
110
2
55
37
44
148
102
40
28
35
43
56
169
33
5
141
83
15
105
142
36
116
11
45
82
10
17
159
140
12
108
29
72
121
52
91
166
88
97
118
99
124
149
16
9
143
104
57
79
123
58
96
24
162
23
92
69
147
156
25
133
34
8
85
76
103
122`;

const tidyData = data2.split(/\n/g);

let currentJolt = 0;
let oneJoltDiff = 0;
let twoJoltDiff = 0;
let threeJoltDiff = 0;
const maxDiff = 3;

tidyData.sort((a, b) => {
  return a - b;
});

console.log(tidyData);

for (var i = 0; i < tidyData.length; i++) {
  const thisNumber = parseFloat(tidyData[i]);
  const thisDifference = difference(currentJolt, thisNumber);

  console.log(thisDifference);

  if (thisDifference > maxDiff) {
    return;
  }

  switch (thisDifference) {
    case 1:
      oneJoltDiff++;
      break;
    case 2:
      twoJoltDiff++;
      break;
    case 3:
      threeJoltDiff++;
      break;
    default:
      console.log(thisDifference);
  }

  currentJolt = thisNumber;
}

threeJoltDiff++;

function difference(a, b) {
  return Math.abs(a - b);
}

console.log(`oneJoltDiff`, oneJoltDiff);
console.log(`twoJoltDiff`, twoJoltDiff);
console.log(`threeJoltDiff`, threeJoltDiff);

console.log(`Answer:`, oneJoltDiff * threeJoltDiff);
