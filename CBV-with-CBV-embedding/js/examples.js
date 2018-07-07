var max_ex = 
  'let max = λx.λy.if x <= y then y else x in\n'
+ '\n'
+ 'let x = {1} in\n'
+ 'let y = {2} in\n'
+ 'let m = max x y in\n'
+ 'let _ = step in\n'
+ 'let _ = link x to 3 in\n'
+ 'let _ = step in\n'
+ 'm';

var alt_ex =
  'let s = {true} in\n' 
+ 'let _ = link s to (~s) in\n' 
+ 'let _ = step in\n' 
+ 'let _ = step in\n' 
+ 'let _ = step in\n' 
+ 's'; 

var fir3_ex =
  'let fir3 = λf.λx. \n' 
+ '  let s0 = {0} in\n'
+ '  let s1 = {0} in\n'
+ '  let s2 = {0} in\n'
+ '  let _ = link s0 to x in\n'
+ '  let _ = link s1 to s0 in\n'
+ '  let _ = link s2 to s2 in\n'
+ '  ((f 0 s0) + (f 1 s1) + (f 2 s2))\n'
+ 'in\n'
+ '\n'
+ 'let avg3 = fir3 (λy.λx. x / 3) {1} in\n' 
+ '\n'
+ 'let _ = step in\n' 
+ 'let _ = step in\n' 
+ 'let _ = step in\n' 
+ 'avg3'; 

var rsum_ex =
  'let signal =  \n' 
+ '  let s = {1} in\n'
+ '  let _ = link s to (s + 1) in\n'
+ '  s\n'
+ 'in\n'
+ '\n'
+ 'let rsum = λi. \n' 
+ '  let s = {0} in\n'
+ '  let _ = link s to (s + i) in\n'
+ '  s\n'
+ 'in\n'
+ '\n'
+ 'let o = rsum signal in\n' 
+ 'let _ = step in\n' 
+ 'let _ = step in\n' 
+ 'let _ = step in\n' 
+ 'let _ = step in\n' 
+ 'let _ = step in\n' 
+ 'let _ = step in\n' 
+ 'o'; 