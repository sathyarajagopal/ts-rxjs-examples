"use strict";
exports.__esModule = true;
console.clear();
var rxjs_1 = require("rxjs");
console.log("BehaviorSubject output");
var bSub = new rxjs_1.BehaviorSubject(3);
bSub.next(1);
bSub.next(2);
bSub.subscribe(console.log); // OUTPUT => 2
bSub.next(3); // OUTPUT => 3
bSub.next(4); // OUTPUT => 4
bSub.subscribe(console.log); // OUTPUT => 4
bSub.next(5); // OUTPUT => 5,5 (log of last emitted value from both subscribers)
console.log("ReplaySubject output");
var rSub = new rxjs_1.ReplaySubject(3);
rSub.next(1);
rSub.next(2);
rSub.subscribe(console.log); // OUTPUT => 1,2
rSub.next(3); // OUTPUT => 3
rSub.next(4); // OUTPUT => 4
rSub.subscribe(console.log); // OUTPUT => 2,3,4 (log of last 3 emitted values from new subscriber)
rSub.next(5); // OUTPUT => 5,5 (log of last emitted value from both subscribers)
console.log("Subject output");
var sub = new rxjs_1.Subject();
sub.next(1);
sub.next(2);
var obsA = sub.subscribe(console.log);
var obsB = sub.subscribe(console.log);
sub.next(3); // OUTPUT => 3, 3
sub.next(4); // OUTPUT => 4, 4
