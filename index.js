/**
 * やることリスト
 * title: やることのタイトル
 * isDone: 達成状況　trueになると、チェックが着く
 */
let tasks = [
    { title: "お洗濯", isDone: false },
]

/**
 * [学生1]
 * 引数で与えられるタイトルで「やること」が作成されるように修正してください。
 */
function addTask(title) {
    const task = { isDone: false }

    // 入力されたタイトルを設定
    task.title = title;

    tasks.push(task);
    drawTask(task, tasks.length - 1);
}

/**
 * [学生2]
 * チェックボックスをクリックしたとき
 */
function onUpdateIsDone(task) {
    console.log("チェックボックスがクリックされました。", task);

    // true⇔falseを切り替える
    const currentValue=task.isDone;
    task.isDone = !task.isDone;

    return task;
}

/**
 * [学生3]
 * タイトルをクリックしたとき
 */
function onTaskTitleClicked(task) {
    console.log("タイトルがクリックされました。", task);

    // true⇔falseを切り替える
    task.isDone = !task.isDone;
    //
    return task;
}