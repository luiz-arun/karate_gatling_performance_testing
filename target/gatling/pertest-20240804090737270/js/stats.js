var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "320",
        "ok": "320",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "886",
        "ok": "886",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1827",
        "ok": "1827",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1371",
        "ok": "1371",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "183",
        "ok": "183",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1387",
        "ok": "1387",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1472",
        "ok": "1472",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1693",
        "ok": "1693",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1764",
        "ok": "1764",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 51,
    "percentage": 16
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 269,
    "percentage": 84
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "6.809",
        "ok": "6.809",
        "ko": "-"
    }
},
contents: {
"req_get--v1-account-68822": {
        type: "REQUEST",
        name: "GET /v1/accounts/62145cbeb782116e923e8379",
path: "GET /v1/accounts/62145cbeb782116e923e8379",
pathFormatted: "req_get--v1-account-68822",
stats: {
    "name": "GET /v1/accounts/62145cbeb782116e923e8379",
    "numberOfRequests": {
        "total": "320",
        "ok": "320",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "886",
        "ok": "886",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1827",
        "ok": "1827",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1371",
        "ok": "1371",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "183",
        "ok": "183",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1387",
        "ok": "1387",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1472",
        "ok": "1472",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1693",
        "ok": "1693",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1764",
        "ok": "1764",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 51,
    "percentage": 16
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 269,
    "percentage": 84
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "6.809",
        "ok": "6.809",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
