// Color Combination
var lev1 = "#eeeeee";
var lev2 = "#beb0cd";
var lev3 = "#cc7c8a";
var lev4 = "#584f7a";
var lev5 = "#2d2b4e";

// Declaration
var day = document.getElementsByClassName("day");
var legend = document.getElementsByClassName("legend")[0];

var highlight = document.getElementsByClassName("js-highlight-blob");
if (highlight[0]) {
  for (var i = 0, l = highlight.length; i < l; i++) {
    highlight[i].setAttribute("fill", lev5);
    highlight[i].setAttribute("stroke", lev5);
  }
}

var activity = document.getElementsByClassName("activity-overview-activity");
if (activity[0]) {
  for (var j = 0, m = activity.length; j < m; j++) {
    activity[j].style.stroke = lev4;
  }
}

var overviewPoint = document.getElementsByClassName("activity-overview-point");
if (overviewPoint[0]) {
  for (var k = 0, n = overviewPoint.length; k < n; k++) {
    overviewPoint[k].style.stroke = lev4;
  }
}

var contibution = document.getElementsByClassName(
  "activity-listing contribution-activity"
);
if (contibution[0]) {
  var progressbar = document.getElementsByClassName("progress-bar");
  for (var i = 0, l = progressbar.length; i < l; i++) {
    progressbar[i].style.backgroundColor = lev3;
  }
}

legend.getElementsByTagName("li")[0].style.background = lev1;
legend.getElementsByTagName("li")[1].style.background = lev2;
legend.getElementsByTagName("li")[2].style.background = lev3;
legend.getElementsByTagName("li")[3].style.background = lev4;
legend.getElementsByTagName("li")[4].style.background = lev5;

// Changing Colors
for (var i = 0; i < day.length; ++i) {
  var curr = day[i];
  var count = parseInt(curr.getAttribute("data-count"));
  if (count >= 18) {
    curr.style.fill = lev5;
  } else if (count >= 11) {
    curr.style.fill = lev4;
  } else if (count >= 5) {
    curr.style.fill = lev3;
  } else if (count >= 1) {
    curr.style.fill = lev2;
  } else {
    curr.style.fill = lev1;
  }
}
