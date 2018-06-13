/**
 * Created by bgd on 16/3/23.
 */
var subscriber = pubsub.subscribe("newDataAvailable", gridUpdate);
var getCurrentTime = function () {
    var date = new Date(), m = date.getMonth() + 1,
        d = data.getDate(),
        y = date.getFullYear(),
        t = data.toLocaleTimeString().toLowerCase();
    return (y + "年" + m + "月" + d + "日 " + t);
};
function addGridRow(data) {
    ui.grid.addRow(data);
    console.log("添加了行数据" + data);

}
function updateCounter(data) {
    ui.grid.updateLastChanged(getCurrentTime());
    console.log("上次在" + getCurrentTime() + "更新了数据" + data);
}
var gridUpdate = function (topic, data) {
    if (data != "undefined") {
        grid.addRow(data);
        grid.updateCounter(data);
    }
};
pubsub.publish("newDataAvailable",{
    summary:"苹果收入50亿美金",
    identifier:"APPL",
    stockPrice:570.91
});
pubsub.publish("newDataAvailable",{
    summary:"微软收入50亿美金",
    identifier:"MSFT",
    stockPrice:30.58
});