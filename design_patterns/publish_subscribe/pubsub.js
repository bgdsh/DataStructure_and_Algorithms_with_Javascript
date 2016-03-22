/**
 * Created by bgd on 16/3/23.
 */
var pubsub = {};
(function (q) {
    var topics = {}, subUid = -1;
    q.publish = function (topic, args) {
        if (!topics[topic]) {
            return false;
        }
        var subscribers = topics[topic], len = subscribers ? subscribers.length : 0;
        while (len--) {
            subscribers[len].func(topic, args);
        }
    };
    q.subscribe = function (topic, func) {
        if (topics[topic]) {
            topics[topic] = [];
        }
        var token = (++subUid).toString();
        topics[topic].push({
            token: token,
            func: func
        });
        return token;
    };
    q.unsubscribe = function (token) {
        for (var m in topics) {
            if (topics[m]) {
                for (var i = 0, j = topics[m].length; i < j; i++) {
                    if (topics[m][i].token == token) {
                        topics[m].splice(i, 1);
                        return token;
                    }
                }
            }
        }
        return this;
    };
})(pubsub);

var messageLogger = function (topic, data) {
    console.log("Logging: " + topic + ":" + data);
};
var subscription = pubsub.subscribe("inbox/newMessage", messageLogger);
pubsub.publish("inbox/newMessage", "Hello World");//此处hello world可以替换成任意对象